"""Generate the six deterministic synthetic datasets used in Tutorials 3.29 and 3.45.

No row describes a real person, employee, service request or organisation.
Run from anywhere with: python data/applied/generate_applied_datasets.py
"""

from __future__ import annotations

import random
import re
from pathlib import Path

import pandas as pd


SEED = 20260917
OUT = Path(__file__).resolve().parent
CITIES = ["Copenhagen", "Aalborg", "Odense", "Aarhus"]
MONTHS = pd.date_range("2026-01-01", periods=6, freq="MS")
STOP_WORDS = {
    "a", "an", "and", "are", "as", "at", "be", "but", "by", "for", "from",
    "had", "has", "have", "in", "is", "it", "of", "on", "or", "the", "to",
    "was", "were", "with",
}


def clean_text(value: object) -> str:
    if pd.isna(value):
        return ""
    tokens = re.findall(r"[A-Za-z]+", str(value).lower())
    return " ".join(token for token in tokens if token not in STOP_WORDS)


def yes_no(values: pd.Series) -> pd.Series:
    mapping = {
        "yes": "Yes", "y": "Yes", "1": "Yes", "true": "Yes", "resolved": "Yes", "needed": "Yes",
        "no": "No", "n": "No", "0": "No", "false": "No", "not resolved": "No", "not needed": "No",
    }
    return values.astype("string").str.strip().str.lower().map(mapping)


def flag(value: pd.Series) -> pd.Series:
    return value.fillna(False).map({True: "Yes", False: "No"})


def make_service_requests(rng: random.Random) -> tuple[pd.DataFrame, pd.DataFrame]:
    services = ["Housing Advice", "Waste Collection", "Citizen ID", "Parking", "Family Support"]
    channels = ["Digital", "Phone", "In Person"]
    feedback = [
        "The guidance was clear and helpful.", "The wait was not long.",
        "The form was difficult but staff were helpful.", "Quick response and clear information.",
        "I could not understand the online instructions.", "Friendly service but the process was slow.",
        "No problem after the staff explained the next step.", "The issue was resolved quickly.",
    ]
    rows = []
    for i in range(556):
        city = CITIES[i % len(CITIES)]
        service = services[(i // 4) % len(services)]
        channel = channels[(i + i // 7) % len(channels)]
        month = MONTHS[(i // 20) % len(MONTHS)]
        opened = month + pd.Timedelta(days=(i * 7) % 27)
        hours = max(1.0, rng.gauss({"Digital": 19, "Phone": 27, "In Person": 35}[channel], 10))
        status = "Closed" if i % 9 else "Open"
        closed = opened + pd.Timedelta(hours=round(hours)) if status == "Closed" else pd.NaT
        satisfaction = max(1.0, min(5.0, round(5.1 - hours / 18 + rng.gauss(0, .45), 1)))
        repeat = "Yes" if rng.random() < min(.65, hours / 95) else "No"
        rows.append({
            "request_id": f"REQ-{i + 1:04d}", "city": city, "service_type": service,
            "channel": channel, "opened_date": opened.date().isoformat(),
            "closed_date": "" if pd.isna(closed) else closed.date().isoformat(),
            "status": status, "priority": ["Low", "Normal", "High"][i % 3],
            "resolution_hours": round(hours, 1), "satisfaction_score": satisfaction,
            "repeat_contact": repeat, "feedback": feedback[i % len(feedback)],
        })
    base = pd.DataFrame(rows)
    # Keep these columns as objects because the raw teaching data deliberately
    # mixes numbers with malformed text values such as "unknown".
    base["resolution_hours"] = base["resolution_hours"].astype(object)
    base.loc[17, "request_id"] = base.loc[16, "request_id"]
    base.loc[6, "city"] = " copenhagen "
    base.loc[19, "city"] = "CPH"
    base.loc[31, "city"] = "Ålborg"
    base.loc[9, "service_type"] = "citizen-id"
    base.loc[21, "channel"] = "in-person"
    base.loc[28, "opened_date"] = "2026-02-30"
    base.loc[29, "closed_date"] = "2025-12-31"
    base.loc[30, "status"] = "Closed"
    base.loc[30, "closed_date"] = ""
    base.loc[41, "resolution_hours"] = "unknown"
    base.loc[42, "resolution_hours"] = -8
    base.loc[43, "satisfaction_score"] = 7
    base.loc[44, "repeat_contact"] = "Y"
    base.loc[[10, 110, 310], "feedback"] = pd.NA
    raw = pd.concat([base, base.iloc[[3, 75, 201, 420]]], ignore_index=True)

    df = raw.drop_duplicates().copy()
    city_map = {"copenhagen": "Copenhagen", "cph": "Copenhagen", "aalborg": "Aalborg", "ålborg": "Aalborg", "odense": "Odense", "aarhus": "Aarhus", "århus": "Aarhus"}
    service_map = {x.lower(): x for x in services} | {"citizen-id": "Citizen ID"}
    channel_map = {"digital": "Digital", "phone": "Phone", "in person": "In Person", "in-person": "In Person"}
    df["city"] = df["city"].astype("string").str.strip().str.lower().map(city_map)
    df["service_type"] = df["service_type"].astype("string").str.strip().str.lower().map(service_map)
    df["channel"] = df["channel"].astype("string").str.strip().str.lower().map(channel_map)
    df["opened_date_clean"] = pd.to_datetime(df["opened_date"], errors="coerce")
    df["closed_date_clean"] = pd.to_datetime(df["closed_date"], errors="coerce")
    df["resolution_hours_clean"] = pd.to_numeric(df["resolution_hours"], errors="coerce")
    df["satisfaction_score_clean"] = pd.to_numeric(df["satisfaction_score"], errors="coerce")
    df["repeat_contact_clean"] = yes_no(df["repeat_contact"])
    df["report_month"] = df["opened_date_clean"].dt.to_period("M").astype("string")
    invalid_resolution = df["resolution_hours_clean"].isna() | df["resolution_hours_clean"].lt(0)
    invalid_satisfaction = df["satisfaction_score_clean"].notna() & ~df["satisfaction_score_clean"].between(1, 5)
    df["flag_invalid_resolution"] = flag(invalid_resolution)
    df["flag_invalid_satisfaction"] = flag(invalid_satisfaction)
    df["flag_invalid_open_date"] = flag(df["opened_date_clean"].isna())
    df["flag_closed_before_open"] = flag(df["closed_date_clean"].notna() & (df["closed_date_clean"] < df["opened_date_clean"]))
    df["flag_closed_missing_date"] = flag(df["status"].eq("Closed") & df["closed_date_clean"].isna())
    df["flag_repeated_id"] = flag(df["request_id"].duplicated(keep=False))
    df.loc[invalid_resolution, "resolution_hours_clean"] = pd.NA
    df.loc[invalid_satisfaction, "satisfaction_score_clean"] = pd.NA
    df["feedback_raw"] = df["feedback"]
    df["feedback_clean"] = df["feedback_raw"].apply(clean_text)
    cleaned = df.drop(columns=["feedback"])
    return raw, cleaned


def make_support_sessions(rng: random.Random) -> tuple[pd.DataFrame, pd.DataFrame]:
    centres = ["Library Hub", "Citizen Centre", "Community Lab", "Mobile Desk"]
    topics = ["Digital ID", "Online Benefits", "Job Portal", "Health Booking", "Email & Documents"]
    ages = ["18–29", "30–44", "45–59", "60+"]
    modes = ["Own device", "Centre device", "Phone support"]
    notes = [
        "User needed clear steps for digital login.", "Issue resolved after password guidance.",
        "The form was not easy to find.", "No follow-up needed after the session.",
        "Staff explained email attachments and document upload.", "Connection failed and another visit was needed.",
    ]
    rows = []
    for i in range(537):
        city = CITIES[i % 4]
        topic = topics[(i // 5) % 5]
        mode = modes[(i + i // 11) % 3]
        date = MONTHS[(i // 18) % 6] + pd.Timedelta(days=(i * 5) % 27)
        wait = max(0, round(rng.gauss({"Own device": 9, "Centre device": 16, "Phone support": 12}[mode], 7), 1))
        duration = max(8, round(rng.gauss(42, 15), 1))
        resolved = "Yes" if rng.random() < .78 else "No"
        followup = "Yes" if resolved == "No" and rng.random() < .72 else "No"
        satisfaction = max(1.0, min(5.0, round(4.8 - wait / 18 + rng.gauss(0, .5), 1)))
        rows.append({
            "session_id": f"SES-{i + 1:04d}", "session_date": date.date().isoformat(), "city": city,
            "centre": centres[(i // 4) % 4], "support_topic": topic, "age_band": ages[i % 4],
            "access_mode": mode, "wait_minutes": wait, "session_minutes": duration,
            "resolved": resolved, "follow_up_needed": followup, "satisfaction_score": satisfaction,
            "staff_role": ["Volunteer", "Advisor", "Librarian"][i % 3], "notes": notes[i % len(notes)],
        })
    base = pd.DataFrame(rows)
    base["wait_minutes"] = base["wait_minutes"].astype(object)
    base.loc[16, "session_id"] = base.loc[15, "session_id"]
    base.loc[5, "city"] = " århus "
    base.loc[11, "centre"] = "library hub "
    base.loc[22, "support_topic"] = "e-mail & documents"
    base.loc[33, "age_band"] = "30-44"
    base.loc[44, "access_mode"] = "centre-device"
    base.loc[55, "resolved"] = "resolved"
    base.loc[66, "follow_up_needed"] = "needed"
    base.loc[70, "session_date"] = "2026-13-01"
    base.loc[71, "wait_minutes"] = "unknown"
    base.loc[72, "wait_minutes"] = -4
    base.loc[73, "session_minutes"] = 300
    base.loc[74, "satisfaction_score"] = 0
    base.loc[75, ["resolved", "follow_up_needed"]] = ["Yes", "Yes"]
    base.loc[[14, 214], "notes"] = pd.NA
    raw = pd.concat([base, base.iloc[[8, 180, 400]]], ignore_index=True)

    df = raw.drop_duplicates().copy()
    city_map = {"copenhagen": "Copenhagen", "aalborg": "Aalborg", "ålborg": "Aalborg", "odense": "Odense", "aarhus": "Aarhus", "århus": "Aarhus"}
    centre_map = {x.lower(): x for x in centres}
    topic_map = {x.lower(): x for x in topics} | {"e-mail & documents": "Email & Documents"}
    age_map = {"18–29": "18–29", "30–44": "30–44", "30-44": "30–44", "45–59": "45–59", "60+": "60+", "60 plus": "60+"}
    access_map = {x.lower(): x for x in modes} | {"centre-device": "Centre device"}
    df["city"] = df["city"].astype("string").str.strip().str.lower().map(city_map)
    df["centre"] = df["centre"].astype("string").str.strip().str.lower().map(centre_map)
    df["support_topic"] = df["support_topic"].astype("string").str.strip().str.lower().map(topic_map)
    df["age_band"] = df["age_band"].astype("string").str.strip().map(age_map)
    df["access_mode"] = df["access_mode"].astype("string").str.strip().str.lower().map(access_map)
    df["resolved_clean"] = yes_no(df["resolved"])
    df["follow_up_needed_clean"] = yes_no(df["follow_up_needed"])
    df["session_date_clean"] = pd.to_datetime(df["session_date"], errors="coerce")
    df["report_month"] = df["session_date_clean"].dt.to_period("M").astype("string")
    df["wait_minutes_clean"] = pd.to_numeric(df["wait_minutes"], errors="coerce")
    df["session_minutes_clean"] = pd.to_numeric(df["session_minutes"], errors="coerce")
    df["satisfaction_score_clean"] = pd.to_numeric(df["satisfaction_score"], errors="coerce")
    invalid_wait = df["wait_minutes_clean"].isna() | df["wait_minutes_clean"].lt(0)
    invalid_duration = df["session_minutes_clean"].isna() | df["session_minutes_clean"].le(0) | df["session_minutes_clean"].gt(240)
    invalid_satisfaction = df["satisfaction_score_clean"].notna() & ~df["satisfaction_score_clean"].between(1, 5)
    df["flag_invalid_wait"] = flag(invalid_wait)
    df["flag_invalid_duration"] = flag(invalid_duration)
    df["flag_invalid_satisfaction"] = flag(invalid_satisfaction)
    df["flag_invalid_date"] = flag(df["session_date_clean"].isna())
    df["flag_followup_contradiction"] = flag(df["resolved_clean"].eq("Yes") & df["follow_up_needed_clean"].eq("Yes"))
    df["flag_repeated_id"] = flag(df["session_id"].duplicated(keep=False))
    df.loc[invalid_wait, "wait_minutes_clean"] = pd.NA
    df.loc[invalid_duration, "session_minutes_clean"] = pd.NA
    df.loc[invalid_satisfaction, "satisfaction_score_clean"] = pd.NA
    df["notes_raw"] = df["notes"]
    df["notes_clean"] = df["notes_raw"].apply(clean_text)
    cleaned = df.drop(columns=["notes"])
    return raw, cleaned


def make_automation_pilot(rng: random.Random) -> tuple[pd.DataFrame, pd.DataFrame]:
    units = ["Finance", "Citizen Services", "HR", "Procurement", "Communications"]
    tasks = ["Data Entry", "Document Check", "Scheduling", "Status Update", "Email Triage"]
    modes = ["Manual", "Automated", "AI-assisted"]
    comments = [
        "The task was faster but still needed human review.", "Staff did not trust the first suggestion.",
        "No error was found after review.", "The automated step failed and required manual work.",
        "The result was clear and useful.", "Human review caught an important error.",
        "The process was faster and staff felt positive.", "The tool was not suitable for this exception.",
    ]
    rows = []
    for i in range(576):
        mode = modes[(i + i // 9) % 3]
        task = tasks[(i // 4) % 5]
        date = MONTHS[(i // 20) % 6] + pd.Timedelta(days=(i * 3) % 27)
        minutes = max(2, rng.gauss({"Manual": 48, "Automated": 18, "AI-assisted": 27}[mode], 10))
        errors = max(0, int(round(rng.gauss({"Manual": 1.5, "Automated": 2.2, "AI-assisted": 1.7}[mode], 1.4))))
        review = "Yes" if mode != "Manual" and rng.random() < .68 else "No"
        outcome = "Completed" if errors < 4 else "Needs correction"
        confidence = max(1.0, min(5.0, round(4.4 - errors / 2 + rng.gauss(0, .4), 1)))
        sentiment = "Positive" if confidence >= 4 else "Neutral" if confidence >= 3 else "Concerned"
        rows.append({
            "task_id": f"TASK-{i + 1:04d}", "task_date": date.date().isoformat(), "city": CITIES[i % 4],
            "organisation_unit": units[(i // 5) % 5], "task_type": task, "execution_mode": mode,
            "minutes_spent": round(minutes, 1), "errors_found": errors, "human_review": review,
            "outcome": outcome, "confidence_rating": confidence, "staff_sentiment": sentiment,
            "comment": comments[i % len(comments)], "tool_version": ["v1.0", "v1.1", "v1.2"][i % 3],
        })
    base = pd.DataFrame(rows)
    base["minutes_spent"] = base["minutes_spent"].astype(object)
    base.loc[20, "task_id"] = base.loc[19, "task_id"]
    base.loc[6, "city"] = " aalborg "
    base.loc[12, "organisation_unit"] = "finance "
    base.loc[18, "task_type"] = "data entry"
    base.loc[24, "execution_mode"] = "auto"
    base.loc[30, "execution_mode"] = "AI assisted"
    base.loc[36, "human_review"] = "Y"
    base.loc[42, "staff_sentiment"] = "concerned"
    base.loc[48, "task_date"] = "2026-02-30"
    base.loc[49, "minutes_spent"] = "unknown"
    base.loc[50, "minutes_spent"] = -5
    base.loc[51, "errors_found"] = -1
    base.loc[52, "confidence_rating"] = 7
    base.loc[53, ["errors_found", "human_review", "outcome"]] = [7, "No", "Needs correction"]
    base.loc[[13, 313], "comment"] = pd.NA
    raw = pd.concat([base, base.iloc[[7, 140, 320, 500]]], ignore_index=True)

    df = raw.drop_duplicates().copy()
    city_map = {"copenhagen": "Copenhagen", "aalborg": "Aalborg", "ålborg": "Aalborg", "odense": "Odense", "aarhus": "Aarhus", "århus": "Aarhus"}
    unit_map = {x.lower(): x for x in units}
    task_map = {x.lower(): x for x in tasks}
    mode_map = {"manual": "Manual", "automated": "Automated", "auto": "Automated", "ai-assisted": "AI-assisted", "ai assisted": "AI-assisted"}
    sentiment_map = {"positive": "Positive", "neutral": "Neutral", "concerned": "Concerned"}
    df["city"] = df["city"].astype("string").str.strip().str.lower().map(city_map)
    df["organisation_unit"] = df["organisation_unit"].astype("string").str.strip().str.lower().map(unit_map)
    df["task_type"] = df["task_type"].astype("string").str.strip().str.lower().map(task_map)
    df["execution_mode"] = df["execution_mode"].astype("string").str.strip().str.lower().map(mode_map)
    df["staff_sentiment"] = df["staff_sentiment"].astype("string").str.strip().str.lower().map(sentiment_map)
    df["human_review_clean"] = yes_no(df["human_review"])
    df["task_date_clean"] = pd.to_datetime(df["task_date"], errors="coerce")
    df["report_month"] = df["task_date_clean"].dt.to_period("M").astype("string")
    df["minutes_spent_clean"] = pd.to_numeric(df["minutes_spent"], errors="coerce")
    df["errors_found_clean"] = pd.to_numeric(df["errors_found"], errors="coerce")
    df["confidence_rating_clean"] = pd.to_numeric(df["confidence_rating"], errors="coerce")
    invalid_minutes = df["minutes_spent_clean"].isna() | df["minutes_spent_clean"].lt(0)
    invalid_errors = df["errors_found_clean"].isna() | df["errors_found_clean"].lt(0)
    invalid_confidence = df["confidence_rating_clean"].notna() & ~df["confidence_rating_clean"].between(1, 5)
    df["flag_invalid_minutes"] = flag(invalid_minutes)
    df["flag_invalid_errors"] = flag(invalid_errors)
    df["flag_invalid_confidence"] = flag(invalid_confidence)
    df["flag_invalid_date"] = flag(df["task_date_clean"].isna())
    df["flag_high_error_no_review"] = flag(df["errors_found_clean"].ge(5) & df["human_review_clean"].eq("No"))
    df["flag_repeated_id"] = flag(df["task_id"].duplicated(keep=False))
    df.loc[invalid_minutes, "minutes_spent_clean"] = pd.NA
    df.loc[invalid_errors, "errors_found_clean"] = pd.NA
    df.loc[invalid_confidence, "confidence_rating_clean"] = pd.NA
    df["comment_raw"] = df["comment"]
    df["comment_clean"] = df["comment_raw"].apply(clean_text)
    cleaned = df.drop(columns=["comment"])
    return raw, cleaned


def main() -> None:
    rng = random.Random(SEED)
    datasets = {
        "service_requests": make_service_requests(rng),
        "digital_support_sessions": make_support_sessions(rng),
        "automation_pilot": make_automation_pilot(rng),
    }
    expected = {
        "service_requests": (560, 556),
        "digital_support_sessions": (540, 537),
        "automation_pilot": (580, 576),
    }
    for name, (raw, cleaned) in datasets.items():
        raw_expected, cleaned_expected = expected[name]
        assert len(raw) == raw_expected
        assert len(cleaned) == cleaned_expected
        assert raw.duplicated().sum() == raw_expected - cleaned_expected
        raw.to_csv(OUT / f"{name}_raw.csv", index=False)
        cleaned.to_csv(OUT / f"{name}_cleaned.csv", index=False, date_format="%Y-%m-%d")
        print(f"{name}: raw={raw.shape}, cleaned={cleaned.shape}")


if __name__ == "__main__":
    main()
