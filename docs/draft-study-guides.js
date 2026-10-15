// Study guides aligned with tutorial numbering.
const draftStudyGuides = {
  "3.15": {
    "outcome": "Make a safe working copy of the service-report CSV, describe what one row represents, and record the first quality questions before changing a value.",
    "context": "TAN7 students often meet tables as traces of organisational work: a monthly service report is a representation made for a purpose. In this synthetic dataset, one row is one city, service category and reporting month; it is not one person or one interview. An audit keeps the analyst from silently turning an administrative record into a stronger claim than the source supports.",
    "vocabulary": [
      "raw file",
      "working copy",
      "unit of observation",
      "missing value",
      "duplicate",
      "data audit",
      "provenance"
    ],
    "setup": "Open a notebook from the L06_L07_offline folder. Keep the raw CSV unchanged and run this complete cell before experimenting. The Path object makes the file location visible instead of hiding it in a long string.",
    "code": "from pathlib import Path\nimport pandas as pd\n\n# Point to the supplied data folder inside the offline draft.\nDATA = Path(\"data\")\n\n# Read the received file and immediately make a separate working copy.\nraw = pd.read_csv(DATA / \"E26_TAN7_service_experience_raw.csv\")\nwork = raw.copy(deep=True)\n\n# Keep a link to the original row number; this is provenance, not a person ID.\nwork.insert(0, \"source_row\", range(1, len(work) + 1))\n\n# Start an empty list so later decisions can be recorded as they are made.\ncleaning_log = []\n\nprint(\"Rows and columns:\", raw.shape)\nprint(\"One row means: one city/service/month report\")\nprint(\"Missing cells by column:\")\nprint(raw.isna().sum().loc[lambda values: values.gt(0)])\nprint(\"Exact duplicate rows:\", int(raw.duplicated().sum()))",
    "output": "You should see 121 rows and 14 original columns, a short list of columns containing missing cells, and one exact duplicate row. The extra source_row column belongs only to work.",
    "modify": "Add a print statement that shows the first three record_id values and the first three source_row values. Then explain in a comment why source_row cannot identify a person.",
    "repair": "Break the code by replacing raw.copy(deep=True) with work = raw, run it, and then change one harmless value in work. Restore the copy and explain why the raw table should remain unchanged. If a NameError appears after a kernel restart, run the full cell again.",
    "activities": [
      {
        "title": "Audit card",
        "task": "Write four lines: observed problem, evidence in the CSV, possible action, and uncertainty that remains. Use one missing satisfaction score or feedback value."
      },
      {
        "title": "Unit-of-observation sketch",
        "task": "Draw or describe a small chain from city + service_type + report_month to one row. Explain why the row count cannot be called a count of residents."
      },
      {
        "title": "Reproducibility check",
        "task": "Run the cell twice after restarting the runtime. Record which output is stable and which state, such as cleaning_log, must be recreated."
      }
    ],
    "checkpoint": {
      "reflection": "What decision would become difficult to audit if you edited the only copy of the raw file?",
      "check": "You can state the row unit, preserve raw and working tables, and separate an observed value from an explanation."
    }
  },
  "3.16": {
    "outcome": "Inspect category labels and apply a small, explicit mapping while keeping unknown labels visible for review.",
    "context": "Names used by institutions are often inconsistent across forms and reporting teams. For a TAN7 analysis of public-service categories, combining Copenhagen and Koebenhavn may be a reasonable teaching rule, but it is still a rule that should be shown. A mapping makes that interpretive step inspectable instead of presenting the result as if the categories were naturally given.",
    "vocabulary": [
      "category",
      "label",
      "mapping",
      "alias",
      "normalisation",
      "unknown label",
      "assertion"
    ],
    "setup": "Run from the L06_L07_offline folder. This cell starts from the raw file so it is independent of the previous page. First inspect the stored spellings; only then apply the agreed teaching mappings.",
    "code": "from pathlib import Path\nimport pandas as pd\n\nDATA = Path(\"data\")\nwork = pd.read_csv(DATA / \"E26_TAN7_service_experience_raw.csv\")\n\n# Look at the stored labels before deciding which spellings mean the same thing.\nprint(\"Stored city labels:\", sorted(work[\"city\"].dropna().unique()))\nprint(\"Stored service labels:\", sorted(work[\"service_type\"].dropna().unique()))\n\n# These are explicit teaching mappings, not proof about the original records.\ncity_map = {\n    \"copenhagen\": \"Copenhagen\", \"koebenhavn\": \"Copenhagen\",\n    \"aarhus\": \"Aarhus\", \"odense\": \"Odense\", \"aalborg\": \"Aalborg\",\n}\nservice_map = {\n    \"housing\": \"Housing\", \"transport\": \"Transport\",\n    \"employment\": \"Employment\", \"employment services\": \"Employment\",\n    \"waste\": \"Waste\", \"citizen services\": \"Citizen Services\",\n}\n\nfor column, mapping in [(\"city\", city_map), (\"service_type\", service_map)]:\n    # Strip spaces and lower the lookup key; keep the mapped display label.\n    keys = work[column].astype(\"string\").str.strip().str.lower()\n    mapped = keys.map(mapping).astype(\"string\")\n    unknown = keys.notna() & mapped.isna()\n    if unknown.any():\n        raise ValueError(f\"Review labels in {column}: {sorted(keys[unknown].unique())}\")\n    work[column] = mapped\n\nprint(\"Mapped cities:\", sorted(work[\"city\"].dropna().unique()))\nprint(\"Mapped services:\", sorted(work[\"service_type\"].dropna().unique()))",
    "output": "The output should show the messy stored spellings first and then four city categories and five service categories after the explicit mapping.",
    "modify": "Add a new mapping for a label only after printing the rows that contain it. Keep a before column, such as city_original, so a reader can compare the received and mapped values.",
    "repair": "Change one mapping key to a misspelling and rerun. The ValueError should stop the workflow rather than silently creating a missing category. Restore the key and rerun from the top.",
    "activities": [
      {
        "title": "Category decision",
        "task": "Choose one pair of labels that could be aliases. Give one reason to combine them and one piece of evidence you would request before doing so in a real project."
      },
      {
        "title": "Unknown-label test",
        "task": "Create a three-item Series containing Aarhus, AARHUS and a made-up label. Apply the mapping and describe which value needs human review."
      },
      {
        "title": "Representation reflection",
        "task": "Write a short note on how a category label can reflect an administrative system rather than a natural or neutral boundary."
      }
    ],
    "checkpoint": {
      "reflection": "When does standardising a label clarify a table, and when might it erase a meaningful distinction?",
      "check": "You can inspect labels first, map them with an explicit dictionary, and stop when an unmapped value appears."
    }
  },
  "3.17": {
    "outcome": "Convert numeric and date columns transparently, identify failed conversions, and retain the original strings for investigation.",
    "context": "A spreadsheet can display a number-looking value that is actually text. In service reporting, the distinction matters because a calculation may otherwise omit values or compare strings. Dates also carry institutional assumptions about reporting periods; an impossible month should become visible missing data, not a guessed month.",
    "vocabulary": [
      "data type",
      "coercion",
      "conversion failure",
      "numeric",
      "datetime",
      "invalid value",
      "original field"
    ],
    "setup": "Run this complete cell from the offline draft folder. It deliberately creates new typed columns and leaves the source columns available for checking.",
    "code": "from pathlib import Path\nimport pandas as pd\n\nDATA = Path(\"data\")\nwork = pd.read_csv(DATA / \"E26_TAN7_service_experience_raw.csv\")\n\n# Keep the text received from the source and create typed analysis columns.\nwork[\"resolution_days_number\"] = pd.to_numeric(work[\"resolution_days\"], errors=\"coerce\")\nwork[\"satisfaction_score_number\"] = pd.to_numeric(work[\"satisfaction_score\"], errors=\"coerce\")\nwork[\"report_month_date\"] = pd.to_datetime(work[\"report_month\"], errors=\"coerce\")\n\n# Locate rows where a non-empty source value could not be converted.\nfailed_days = work[\"resolution_days\"].notna() & work[\"resolution_days_number\"].isna()\nfailed_dates = work[\"report_month\"].notna() & work[\"report_month_date\"].isna()\n\nprint(\"Failed resolution conversions:\", int(failed_days.sum()))\nprint(work.loc[failed_days, [\"source_row\", \"resolution_days\"]] if \"source_row\" in work else work.loc[failed_days, [\"resolution_days\"]])\nprint(\"Failed date conversions:\", int(failed_dates.sum()))\nprint(work.loc[failed_dates, [\"report_month\"]])\nprint(work[[\"resolution_days_number\", \"satisfaction_score_number\", \"report_month_date\"]].dtypes)",
    "output": "The typed columns should have numeric or datetime dtypes. Any failed rows remain available in the original columns; errors=coerce represents the failed conversion as missing in the new analysis column.",
    "modify": "Add cases_received and cases_resolved to the numeric conversion list. Print the original value beside its converted value for the first five rows.",
    "repair": "Replace errors=coerce with an invalid errors argument and read the traceback. Restore coerce, then check whether a failed conversion is a genuine missing value, a spelling problem, or an invalid source entry.",
    "activities": [
      {
        "title": "Type detective",
        "task": "Inspect the dtypes before and after conversion. Explain why a display that looks numeric does not prove that arithmetic is possible."
      },
      {
        "title": "Date decision",
        "task": "Find an invalid report month and write two possible explanations without choosing one from the neighbouring rows."
      },
      {
        "title": "Conversion audit",
        "task": "Make a two-column table with source value and converted value for every failed case. Decide which values require a data steward rather than an analyst guess."
      }
    ],
    "checkpoint": {
      "reflection": "What evidence would justify repairing a failed conversion, and what evidence would only justify flagging it?",
      "check": "You can create typed analysis columns, count failures, and preserve source values alongside converted values."
    }
  },
  "3.18": {
    "outcome": "Compare missing-data policies and choose a policy that matches a specific question rather than treating every blank as zero.",
    "context": "A blank satisfaction score might mean a survey was not returned, while a blank feedback field means no text was attached. Treating both as zero would invent observations and bias a TAN7 discussion about service experiences. The policy should be tied to the question and stated with the denominator.",
    "vocabulary": [
      "missingness",
      "complete case",
      "imputation",
      "zero",
      "denominator",
      "policy",
      "sensitivity"
    ],
    "setup": "This cell reads the clean L6 output and compares three descriptions: how many values are observed, what happens when rows with missing outcome values are excluded, and why filling a blank with zero is a separate assumption.",
    "code": "from pathlib import Path\nimport pandas as pd\n\nDATA = Path(\"data\")\ndf = pd.read_csv(DATA / \"E26_TAN7_service_experience_clean.csv\", parse_dates=[\"report_month\"])\n\n# Describe missingness before selecting an outcome for analysis.\nfor column in [\"satisfaction_score\", \"resolution_days\", \"feedback\", \"cases_received\"]:\n    print(column, \"missing:\", int(df[column].isna().sum()), \"of\", len(df))\n\n# A complete-case summary uses only rows with an observed satisfaction score.\nscore_rows = df.dropna(subset=[\"satisfaction_score\"]).copy()\nprint(\"Observed score rows:\", len(score_rows))\nprint(\"Score mean:\", round(score_rows[\"satisfaction_score\"].mean(), 2))\n\n# Filling with zero is shown only as a contrasting assumption, not as a repair.\nzero_filled = df[\"satisfaction_score\"].fillna(0)\nprint(\"Mean after treating blank as zero:\", round(zero_filled.mean(), 2))\nprint(\"Missing scores remain missing in the source:\", int(df[\"satisfaction_score\"].isna().sum()))",
    "output": "The complete-case mean and the zero-filled mean differ because they answer different questions. The source still contains the same missing score count after the comparison.",
    "modify": "Repeat the comparison for resolution_days and label each denominator explicitly. Do not call an absent resolution value zero unless the data dictionary states that rule.",
    "repair": "Delete the `subset` argument from dropna and inspect how the denominator changes. Restore it and explain which other columns would then influence row eligibility.",
    "activities": [
      {
        "title": "Policy table",
        "task": "For satisfaction_score, feedback and cases_received, write one plausible meaning of missingness and one analysis question for which you would keep it missing."
      },
      {
        "title": "Denominator practice",
        "task": "Report the number of rows, observed scores and missing scores in one sentence. Use the word denominator in your explanation."
      },
      {
        "title": "Sensitivity comparison",
        "task": "Calculate a service-level score mean with complete cases and compare it with a policy that reports only the observed count. Explain why neither policy proves why values are missing."
      }
    ],
    "checkpoint": {
      "reflection": "What social or organisational process could have produced a blank, and how could that process affect interpretation?",
      "check": "You can distinguish missing from zero, state an inclusion policy, and report the denominator used by a summary."
    }
  },
  "3.19": {
    "outcome": "Distinguish exact duplicate rows, repeated identifiers and repeated observation keys, then decide which issue matters for a chosen calculation.",
    "context": "Two records can be identical copies, share a record_id, or describe the same city/service/month while differing in another field. These cases have different implications for an STS reading of administrative data: repeated reporting may be an error, a revision, or evidence that the supposed unit of observation was not enforced.",
    "vocabulary": [
      "exact duplicate",
      "identifier",
      "observation key",
      "repeated observation",
      "deduplication",
      "revision",
      "unit of analysis"
    ],
    "setup": "Run independently from the offline draft folder. Do not drop rows in this first pass; count and inspect the three meanings of repeated record.",
    "code": "from pathlib import Path\nimport pandas as pd\n\nDATA = Path(\"data\")\ndf = pd.read_csv(DATA / \"E26_TAN7_service_experience_raw.csv\", parse_dates=[\"report_month\"])\n\n# Exact copies match every stored field.\nexact = df.duplicated(keep=False)\nprint(\"Rows in exact-copy groups:\", int(exact.sum()))\nprint(df.loc[exact, [\"source_row\", \"record_id\", \"city\", \"service_type\", \"report_month\"]])\n\n# An identifier should normally name one record, but repeated values need review.\nid_repeat = df[\"record_id\"].duplicated(keep=False)\nprint(\"Rows with repeated record_id:\", int(id_repeat.sum()))\n\n# A proposed observation key represents one city/service/month report.\nkey = [\"city\", \"service_type\", \"report_month\"]\nobservation_repeat = df.duplicated(subset=key, keep=False)\nprint(\"Rows with repeated city/service/month key:\", int(observation_repeat.sum()))\n\n# Show an example group without deciding which row is correct.\nprint(df.loc[observation_repeat].sort_values(key).head(10)[key + [\"record_id\", \"satisfaction_score\"]])",
    "output": "The counts for exact copies, repeated IDs and repeated observation keys may be different. The final table is an inspection aid; it is not a verdict about which row should be removed.",
    "modify": "Change keep=False to keep='first' for exact duplicates and compare the number of rows marked. Explain why this parameter changes the question from identifying groups to identifying later copies.",
    "repair": "Use a misspelled key column and read the KeyError. Restore the exact column name and print df[key].head() before running duplicate checks.",
    "activities": [
      {
        "title": "Three-case classification",
        "task": "For one repeated group, decide whether it looks like a copy, a revision, or a unit-of-observation problem. State what evidence is missing."
      },
      {
        "title": "Safe deletion plan",
        "task": "Write a rule for removing only exact copies while preserving an audit count. Explain why a repeated identifier cannot be deleted automatically."
      },
      {
        "title": "Key design",
        "task": "Propose a different observation key for a question about service type only. Explain what information that key would deliberately ignore."
      }
    ],
    "checkpoint": {
      "reflection": "What does a duplicate mean only after you have stated the unit of observation?",
      "check": "You can identify three repetition patterns and explain why a repeated row needs evidence before deletion."
    }
  },
  "3.20": {
    "outcome": "Validate ranges and cross-field relationships, then create review flags that preserve unusual records for inspection.",
    "context": "Validation asks whether values fit a stated rule; it does not prove that an apparently valid value is true. For TAN7 work, a resolved count greater than received or a channel total that does not match the total may show a reporting mismatch, but the analyst should flag it before making a story about service performance.",
    "vocabulary": [
      "range check",
      "cross-field rule",
      "flag",
      "contradiction",
      "validity",
      "plausibility",
      "review queue"
    ],
    "setup": "Run this complete cell against the raw CSV. Every rule is visible and produces a Boolean column so that unusual rows are retained rather than silently removed.",
    "code": "from pathlib import Path\nimport pandas as pd\n\nDATA = Path(\"data\")\ndf = pd.read_csv(DATA / \"E26_TAN7_service_experience_raw.csv\")\n\n# Convert fields used in rules without overwriting the received values.\nfor column in [\"cases_received\", \"cases_resolved\", \"resolution_days\", \"satisfaction_score\", \"digital_cases\", \"in_person_cases\", \"repeat_contacts\"]:\n    df[column + \"_number\"] = pd.to_numeric(df[column], errors=\"coerce\")\n\n# Each flag states the rule that was tested; True means review is needed.\ndf[\"review_score_range\"] = ~df[\"satisfaction_score_number\"].between(1, 5, inclusive=\"both\")\ndf[\"review_resolved_exceeds_received\"] = df[\"cases_resolved_number\"] > df[\"cases_received_number\"]\ndf[\"review_channel_total\"] = (df[\"digital_cases_number\"] + df[\"in_person_cases_number\"]).ne(df[\"cases_received_number\"])\ndf[\"review_repeat_exceeds_received\"] = df[\"repeat_contacts_number\"] > df[\"cases_received_number\"]\n\nflag_columns = [column for column in df if column.startswith(\"review_\")]\nprint(df[flag_columns].sum().sort_values(ascending=False))\nprint(df.loc[df[flag_columns].any(axis=1), [\"record_id\", \"city\", \"service_type\"] + flag_columns].head(12))",
    "output": "The first print shows how many rows trigger each rule. The second prints a review queue with the rule columns. Missing numeric values may need a separate missing-data policy rather than being counted as contradictions.",
    "modify": "Add a rule that staff_hours must be greater than or equal to zero. Name it review_staff_hours_range and count it with the other flags.",
    "repair": "Reverse the resolved and received columns and inspect how the flags change. Restore the correct direction and state the rule in plain language before trusting the result.",
    "activities": [
      {
        "title": "Rule dictionary",
        "task": "Write a mini data dictionary for three flags: field names, rule in plain language, and what a True value means."
      },
      {
        "title": "Contradiction interview",
        "task": "Choose one channel-total mismatch and list two questions you would ask the reporting team before correcting it."
      },
      {
        "title": "Validity versus truth",
        "task": "Give an example of a value that passes a range check but still might be inaccurate. Explain why the flag system cannot prove truth."
      }
    ],
    "checkpoint": {
      "reflection": "How does a Boolean review flag make uncertainty more visible than deleting the row?",
      "check": "You can state a rule, calculate a flag, inspect affected rows, and avoid treating a flag as an automatic correction."
    }
  },
  "3.21": {
    "outcome": "Combine documented transformations, remove only justified exact copies, export a working table, and write a transformation log.",
    "context": "A cleaned dataset is a new representation, not the original social record. In a TAN7 project, another student should be able to see which labels changed, how many rows were affected, and what uncertainty remains. The log is part of the analysis because it describes how the evidence became computable.",
    "vocabulary": [
      "transformation",
      "export",
      "audit trail",
      "working dataset",
      "reproducible",
      "affected rows",
      "decision log"
    ],
    "setup": "Run from L06_L07_offline. This is a compact, reproducible pipeline for teaching; it intentionally keeps the raw file and records each action in a list before exporting.",
    "code": "from pathlib import Path\nimport pandas as pd\n\nDATA = Path(\"data\")\nraw = pd.read_csv(DATA / \"E26_TAN7_service_experience_raw.csv\")\nwork = raw.copy(deep=True)\nlog = []\n\n# Standardise only the labels covered by the agreed teaching mapping.\ncity_map = {\"copenhagen\": \"Copenhagen\", \"koebenhavn\": \"Copenhagen\", \"aarhus\": \"Aarhus\", \"odense\": \"Odense\", \"aalborg\": \"Aalborg\"}\nservice_map = {\"housing\": \"Housing\", \"transport\": \"Transport\", \"employment\": \"Employment\", \"employment services\": \"Employment\", \"waste\": \"Waste\", \"citizen services\": \"Citizen Services\"}\nfor column, mapping in [(\"city\", city_map), (\"service_type\", service_map)]:\n    before = work[column].astype(\"string\")\n    work[column] = before.str.strip().str.lower().map(mapping).astype(\"string\")\n    log.append({\"action\": \"standardise category\", \"field\": column, \"affected_rows\": int(before.ne(work[column]).fillna(False).sum()), \"reason\": \"explicit teaching mapping\"})\n\n# Convert selected numeric fields into stable analysis columns.\nfor column in [\"cases_received\", \"cases_resolved\", \"resolution_days\", \"satisfaction_score\"]:\n    work[column] = pd.to_numeric(work[column], errors=\"coerce\")\nlog.append({\"action\": \"convert numeric fields\", \"field\": \"four selected measures\", \"affected_rows\": \"conversion failures reviewed\", \"reason\": \"enable calculations without guessing\"})\n\n# Remove only exact copies, retaining the first copy and recording the count.\nbefore_rows = len(work)\nwork = work.drop_duplicates(keep=\"first\").copy()\nlog.append({\"action\": \"remove exact copies\", \"field\": \"all original fields\", \"affected_rows\": before_rows - len(work), \"reason\": \"identical rows do not add a new observation\"})\n\noutput = Path(\"student_clean_preview.csv\")\nwork.to_csv(output, index=False)\npd.DataFrame(log).to_csv(\"student_transformation_log.csv\", index=False)\nprint(\"Rows exported:\", len(work))\nprint(\"Files written:\", output, \"and student_transformation_log.csv\")\nprint(pd.DataFrame(log).to_string(index=False))",
    "output": "The pipeline writes a student_clean_preview.csv and a student_transformation_log.csv beside the notebook or script. The row count should decrease only by the exact copies removed in this run.",
    "modify": "Add a `source_row` column before transformations and include it in the exported table. Explain how it helps connect a cleaned row back to the received file.",
    "repair": "Run the export twice and inspect whether the input path still points to the raw file. If you accidentally read the preview as input, restore the raw path and rerun from a fresh kernel.",
    "activities": [
      {
        "title": "Log writing",
        "task": "Add a log entry for one decision you chose not to automate. Include the uncertainty and the person or team who should review it."
      },
      {
        "title": "Before/after comparison",
        "task": "Compare row counts, labels and dtypes before and after the pipeline. Identify one helpful change and one possible loss of information."
      },
      {
        "title": "Reproduction test",
        "task": "Delete the two generated student files, rerun the cell, and check that the same counts and log actions return."
      }
    ],
    "checkpoint": {
      "reflection": "Which parts of a cleaning workflow belong in code, and which parts need a documented human decision?",
      "check": "You can export a separate working file and explain every logged transformation and its affected rows."
    }
  },
  "3.22": {
    "outcome": "Create a prepared feedback text column while preserving the original wording for contextual interpretation.",
    "context": "Text cleaning can make a column easier to count while changing what a reader sees. In STS and digital anthropology, wording, qualifiers and punctuation can carry meaning. Keep feedback as received, and create a clearly named analytical version rather than overwriting the original comment.",
    "vocabulary": [
      "raw text",
      "normalisation",
      "case folding",
      "whitespace",
      "punctuation",
      "context",
      "derived field"
    ],
    "setup": "Run independently from the offline draft folder. The code performs modest preparation: lowercasing, whitespace cleanup and punctuation replacement. It does not claim to understand sentiment or theme.",
    "code": "from pathlib import Path\nimport re\nimport pandas as pd\n\nDATA = Path(\"data\")\ndf = pd.read_csv(DATA / \"E26_TAN7_service_experience_raw.csv\")\n\n# Preserve the feedback exactly as it was received in the source column.\ndf[\"feedback_original\"] = df[\"feedback\"]\n\n# Build a separate text field for transparent keyword or token operations.\ndef prepare_text(value):\n    if pd.isna(value):\n        return pd.NA\n    text = str(value).lower().strip()\n    text = re.sub(r\"[^a-z0-9\\s]\", \" \", text)\n    return re.sub(r\"\\s+\", \" \", text).strip()\n\ndf[\"feedback_prepared\"] = df[\"feedback\"].apply(prepare_text)\nsample = df[[\"feedback_original\", \"feedback_prepared\"]].dropna().head(5)\nprint(sample.to_string(index=False))\nprint(\"Original non-missing:\", int(df[\"feedback_original\"].notna().sum()))\nprint(\"Prepared non-missing:\", int(df[\"feedback_prepared\"].notna().sum()))",
    "output": "The sample shows original wording beside a lowercase, punctuation-light field. Missing feedback remains missing rather than becoming a misleading sentence.",
    "modify": "Create a third field that replaces repeated whitespace but keeps punctuation. Compare its use for reading quotations with the punctuation-light field for counting.",
    "repair": "Remove the `pd.isna` branch and inspect how a missing value behaves when converted to text. Restore the branch and explain why the string nan is not the same as missing feedback.",
    "activities": [
      {
        "title": "Meaning check",
        "task": "Choose one comment with a qualifier such as but or although. Explain what could be lost if you only count its prepared words."
      },
      {
        "title": "Two representations",
        "task": "Print the original and prepared version of three comments. Mark changes that help computation and changes that might affect interpretation."
      },
      {
        "title": "Rule boundary",
        "task": "Write a keyword rule for waiting and test it against the original comments. Record one false positive or context problem."
      }
    ],
    "checkpoint": {
      "reflection": "Why is a prepared text field an analytical representation rather than a neutral copy?",
      "check": "You can retain original feedback, create a named derived field, and describe what the preparation does not establish."
    }
  },
  "3.23": {
    "outcome": "Tokenise prepared feedback with NLTK and apply an explicit stopword policy without downloading a language model.",
    "context": "Counting words can help locate recurring concerns in short service comments, but a frequency is not automatically a theme. The token list is a measurement choice: lowercasing, punctuation rules and stopwords determine what becomes visible. Keeping the rule in code lets TAN7 students discuss representation instead of treating a word cloud as a finding.",
    "vocabulary": [
      "token",
      "tokeniser",
      "stopword",
      "frequency",
      "document",
      "content word",
      "rule"
    ],
    "setup": "Run from the offline draft folder with NLTK installed. The RegexpTokenizer works without downloading corpora. Use an explicit small stopword set so the choice remains inspectable.",
    "code": "from pathlib import Path\nfrom collections import Counter\nimport pandas as pd\nfrom nltk.tokenize import RegexpTokenizer\n\nDATA = Path(\"data\")\ndf = pd.read_csv(DATA / \"E26_TAN7_service_experience_clean.csv\")\ntokenizer = RegexpTokenizer(r\"[A-Za-z]+\")\n\n# Keep the stopword policy visible; it is a choice, not a universal truth.\nstopwords = {\"the\", \"a\", \"an\", \"and\", \"but\", \"or\", \"was\", \"were\", \"for\", \"to\", \"of\", \"in\", \"with\", \"some\"}\n\ndef content_tokens(value):\n    if pd.isna(value):\n        return []\n    tokens = [token.lower() for token in tokenizer.tokenize(str(value))]\n    return [token for token in tokens if token not in stopwords]\n\ntoken_lists = df[\"feedback\"].apply(content_tokens)\nfrequencies = Counter(token for tokens in token_lists for token in tokens)\nprint(\"Non-empty feedback rows:\", int(token_lists.str.len().gt(0).sum()))\nprint(\"Total content tokens:\", sum(frequencies.values()))\nprint(\"Most common tokens:\", frequencies.most_common(12))",
    "output": "The code reports the number of rows with at least one retained token, the total retained tokens, and a ranked list of token counts. Exact counts depend on the explicit stopword set.",
    "modify": "Add one course-relevant stopword only after checking its context in the original comments. Recalculate the frequencies and record how many tokens changed.",
    "repair": "Temporarily use a tokenizer pattern that matches nothing. The token count should become zero. Restore the letter pattern and test it on one known comment before running the full table.",
    "activities": [
      {
        "title": "Frequency versus theme",
        "task": "Pick one frequent token and read every comment containing it. Write why the token alone cannot establish a theme or sentiment."
      },
      {
        "title": "Policy sensitivity",
        "task": "Run the count with and without the word service in the stopword set. Explain how the ranking changes and which version is more useful for your question."
      },
      {
        "title": "Document frequency",
        "task": "Count how many separate comments contain staff, not only how many times it occurs. Explain why the two counts answer different questions."
      }
    ],
    "checkpoint": {
      "reflection": "Who or what becomes less visible when you remove a word as a stopword?",
      "check": "You can explain tokenisation, state a stopword rule, and distinguish frequency from interpretation."
    }
  },
  "3.24": {
    "outcome": "Complete a traceable L6 cleaning case that produces a working dataset, quality flags, prepared text, and a concise handover note.",
    "context": "This case models a small TAN7 research handover: one student receives an administrative-style table and another must understand what changed before using it. The result is useful only when the raw source, transformations, unresolved flags and unit of observation travel together.",
    "vocabulary": [
      "case activity",
      "handover",
      "provenance",
      "quality flag",
      "working dataset",
      "unresolved issue",
      "reproducibility"
    ],
    "setup": "Run from L06_L07_offline. The pipeline is intentionally explicit and modest. It removes exact copies only, normalises agreed labels, converts selected measures, flags key relationships, and prepares text without deleting the original feedback.",
    "code": "from pathlib import Path\nimport re\nimport pandas as pd\n\nDATA = Path(\"data\")\nraw = pd.read_csv(DATA / \"E26_TAN7_service_experience_raw.csv\")\nwork = raw.copy(deep=True)\nwork.insert(0, \"source_row\", range(1, len(work) + 1))\nlog = []\n\n# Preserve the received text and create a documented prepared version.\nwork[\"feedback_original\"] = work[\"feedback\"]\nwork[\"feedback_prepared\"] = work[\"feedback\"].apply(lambda value: re.sub(r\"\\s+\", \" \", str(value).lower()).strip() if pd.notna(value) else pd.NA)\n\n# Apply only the agreed category mappings and retain a log entry.\ncity_map = {\"copenhagen\": \"Copenhagen\", \"koebenhavn\": \"Copenhagen\", \"aarhus\": \"Aarhus\", \"odense\": \"Odense\", \"aalborg\": \"Aalborg\"}\nservice_map = {\"housing\": \"Housing\", \"transport\": \"Transport\", \"employment\": \"Employment\", \"employment services\": \"Employment\", \"waste\": \"Waste\", \"citizen services\": \"Citizen Services\"}\nfor column, mapping in [(\"city\", city_map), (\"service_type\", service_map)]:\n    before = work[column].astype(\"string\")\n    work[column] = before.str.strip().str.lower().map(mapping).astype(\"string\")\n    log.append({\"action\": \"standardise category\", \"field\": column, \"affected_rows\": int(before.ne(work[column]).fillna(False).sum())})\n\n# Convert measures while retaining rows that fail conversion as missing.\nfor column in [\"cases_received\", \"cases_resolved\", \"resolution_days\", \"satisfaction_score\"]:\n    work[column] = pd.to_numeric(work[column], errors=\"coerce\")\n\n# Add review flags rather than silently deleting unusual records.\nwork[\"review_resolved_exceeds_received\"] = work[\"cases_resolved\"] > work[\"cases_received\"]\nwork[\"review_channel_total\"] = (work[\"digital_cases\"] + work[\"in_person_cases\"]).ne(work[\"cases_received\"])\n\nbefore_rows = len(work)\nwork = work.drop_duplicates(keep=\"first\").copy()\nlog.append({\"action\": \"remove exact copies\", \"field\": \"all received fields\", \"affected_rows\": before_rows - len(work)})\n\nprint(\"Raw rows:\", len(raw), \"Working rows:\", len(work))\nprint(\"Review flags:\", int(work[[\"review_resolved_exceeds_received\", \"review_channel_total\"]].any(axis=1).sum()))\nprint(\"Log:\")\nprint(pd.DataFrame(log).to_string(index=False))\nprint(\"Handover: one row is one city/service/month report; unresolved flags require review.\")",
    "output": "The output gives before and after row counts, a count of rows with review flags, and a small transformation log. The original raw table remains in memory as raw.",
    "modify": "Add one sentence to the handover that names the question your cleaned table can support and one question it cannot support because the rows are aggregate reports.",
    "repair": "Comment out the mapping loop and inspect how duplicate keys and group counts change. Restore it and explain why a clean-looking category list is not enough evidence that the mapping was correct.",
    "activities": [
      {
        "title": "Handover note",
        "task": "Write 120 words for the next analyst covering source, unit, transformations, flags and one limitation. Use observations and interpretations as separate sentences."
      },
      {
        "title": "Quality review",
        "task": "Inspect five flagged rows and classify each as possible data error, possible reporting definition, or unresolved. Give evidence for the classification."
      },
      {
        "title": "Re-run challenge",
        "task": "Rerun the case after a kernel restart and compare the row count and log. Explain which objects had to be recreated."
      }
    ],
    "checkpoint": {
      "reflection": "What would another analyst need to know before treating this working file as evidence?",
      "check": "You can describe the full transformation path and name both what the case supports and what remains uncertain."
    }
  },
  "3.25": {
    "outcome": "Turn a broad interest into an exploratory question, expectation, and explicit analysis population.",
    "context": "TAN7 analysis begins with a question about a social or organisational process, not with a chart. Here the synthetic service reports let us ask how reported resolution days differ by service type. The records are aggregate city/service/month reports, so the question cannot become a claim about individual residents.",
    "vocabulary": [
      "exploratory question",
      "expectation",
      "analysis population",
      "inclusion rule",
      "exclusion rule",
      "outcome",
      "comparison"
    ],
    "setup": "Use the clean L6 output from the offline draft folder. This complete cell recreates the conservative population used in later L7 examples.",
    "code": "from pathlib import Path\nimport pandas as pd\n\nDATA = Path(\"data\")\ndf = pd.read_csv(DATA / \"E26_TAN7_service_experience_clean.csv\", parse_dates=[\"report_month\"])\n\n# Define the key needed for a monthly city/service report.\nkey = [\"city\", \"service_type\", \"report_month\"]\ncomplete_key = df[key].notna().all(axis=1)\nreview_repeat = df[\"flag_duplicate_id\"] | df[\"flag_duplicate_observation\"]\n\n# Keep the population rule visible and preserve the original df for comparison.\nanalysis = df.loc[complete_key & ~review_repeat].copy()\nquestion = \"How do reported resolution days differ across service categories?\"\nexpectation = \"I expect Housing to have a higher median than Transport.\"\n\nprint(\"Question:\", question)\nprint(\"Expectation:\", expectation)\nprint(\"Rows in clean file:\", len(df))\nprint(\"Rows included:\", len(analysis))\nprint(\"Excluded for incomplete key:\", int((~complete_key).sum()))\nprint(\"Excluded for repeated key or ID:\", int((complete_key & review_repeat).sum()))",
    "output": "The cell prints the question, expectation, and a breakdown of included and excluded report rows. Read the exclusions as an analysis choice, not as proof that excluded records are unusable for every question.",
    "modify": "Replace resolution days with satisfaction score and write a new expectation before running the summary. Keep the population rule unchanged so the outcome is the only change.",
    "repair": "Remove the parentheses around complete_key & ~review_repeat and inspect the Boolean operation carefully. Restore the expression and print its dtype to confirm it is a row-wise Boolean mask.",
    "activities": [
      {
        "title": "Analysis card",
        "task": "Write question, expectation, unit, outcome, comparison variable and inclusion rule in six plain-language lines."
      },
      {
        "title": "Alternative population",
        "task": "Define a service-only population that permits an unknown month. Explain what question it supports and what it cannot support."
      },
      {
        "title": "Claim boundary",
        "task": "Write one supported descriptive statement and one unsupported claim about residents. Explain the difference."
      }
    ],
    "checkpoint": {
      "reflection": "How does the inclusion rule change what the rows are allowed to stand for?",
      "check": "You can state a question before calculating, define the population, and explain the limits of the aggregate unit."
    }
  },
  "3.26": {
    "outcome": "Calculate counts, totals, means and medians while keeping the contributing observation count and denominator visible.",
    "context": "A service report can contain a number of cases, a number of report rows, and an average reported value. These are different quantities. For a critical data practice, every headline number should say what was counted and which rows contributed to it.",
    "vocabulary": [
      "count",
      "total",
      "mean",
      "median",
      "denominator",
      "observed value",
      "weighted",
      "unweighted"
    ],
    "setup": "Run from L06_L07_offline. The cell rebuilds the L7 analysis population so it remains a complete runnable example.",
    "code": "from pathlib import Path\nimport pandas as pd\n\nDATA = Path(\"data\")\ndf = pd.read_csv(DATA / \"E26_TAN7_service_experience_clean.csv\", parse_dates=[\"report_month\"])\nkey = [\"city\", \"service_type\", \"report_month\"]\ncomplete_key = df[key].notna().all(axis=1)\nreview_repeat = df[\"flag_duplicate_id\"] | df[\"flag_duplicate_observation\"]\nanalysis = df.loc[complete_key & ~review_repeat].copy()\n\n# Select one outcome and state exactly which rows contribute to each measure.\ndays = analysis[\"resolution_days\"]\nprint(\"Report rows:\", len(analysis))\nprint(\"Observed resolution-day values:\", int(days.count()))\nprint(\"Missing resolution-day values:\", int(days.isna().sum()))\nprint(\"Total reported days:\", float(days.sum()))\nprint(\"Unweighted mean per observed report:\", round(days.mean(), 2))\nprint(\"Median observed report:\", round(days.median(), 2))\n\n# A small example shows why mean and median can tell different stories.\nexample = pd.Series([2, 3, 3, 4, 30])\nprint(\"Example mean:\", example.mean(), \"Example median:\", example.median())",
    "output": "The summary gives report-row count, observed outcome count, missing outcome count, total, mean and median. The final example shows how one high value affects the mean more strongly than the median.",
    "modify": "Add min and max, then add a line that prints the phrase `reports, not people` beside the total. Use the output to write a careful result sentence.",
    "repair": "Replace days.count() with len(days) and explain why the value changes when missing resolution days exist. Restore count for the observed-value denominator.",
    "activities": [
      {
        "title": "Denominator sentence",
        "task": "Write a sentence that includes mean, median, observed report count and the fact that a report is not a person."
      },
      {
        "title": "Mean or median",
        "task": "Use the small example to recommend a summary for a situation with one unusually long delay. Explain the trade-off."
      },
      {
        "title": "Weighting question",
        "task": "Explain why an unweighted mean across reports is different from a mean waiting time across individual cases, which this dataset cannot calculate."
      }
    ],
    "checkpoint": {
      "reflection": "What would a reader misunderstand if a table showed a mean without its denominator?",
      "check": "You can distinguish row count, observed-value count, total, mean and median, and name the unit behind each."
    }
  },
  "3.27": {
    "outcome": "Compare service groups with pandas groupby while retaining group sizes, missing-value counts, and the limits of an aggregate comparison.",
    "context": "Group comparisons can make organisational differences visible, but they can also hide unequal group sizes or different missingness. The service categories in this synthetic case are useful for practising comparison, not for ranking real municipal services or explaining why a category differs.",
    "vocabulary": [
      "groupby",
      "group size",
      "aggregate",
      "comparison",
      "missingness",
      "median",
      "composition"
    ],
    "setup": "Run from the offline draft folder. The complete code creates a service summary with both outcome measures and counts.",
    "code": "from pathlib import Path\nimport pandas as pd\n\nDATA = Path(\"data\")\ndf = pd.read_csv(DATA / \"E26_TAN7_service_experience_clean.csv\", parse_dates=[\"report_month\"])\nkey = [\"city\", \"service_type\", \"report_month\"]\ncomplete_key = df[key].notna().all(axis=1)\nreview_repeat = df[\"flag_duplicate_id\"] | df[\"flag_duplicate_observation\"]\nanalysis = df.loc[complete_key & ~review_repeat].copy()\n\n# Build a table that keeps group size beside each summary.\nservice_summary = analysis.groupby(\"service_type\", dropna=False).agg(\n    report_rows=(\"source_row\", \"size\"),\n    observed_days=(\"resolution_days\", \"count\"),\n    mean_days=(\"resolution_days\", \"mean\"),\n    median_days=(\"resolution_days\", \"median\"),\n    observed_scores=(\"satisfaction_score\", \"count\"),\n    mean_score=(\"satisfaction_score\", \"mean\"),\n).sort_values(\"median_days\")\n\nprint(service_summary.round(2).to_string())\nprint(\"Smallest group:\", int(service_summary[\"report_rows\"].min()))\nprint(\"Largest group:\", int(service_summary[\"report_rows\"].max()))",
    "output": "The table has one row per service category and columns for report rows, observed outcomes, means and medians. Group sizes and missing outcome counts should be read before comparing the medians.",
    "modify": "Group by city instead of service_type and compare the resulting table. Then explain whether the new grouping answers the original service question.",
    "repair": "Remove observed_days from the aggregation and try to infer its value from report_rows. Restore it and explain why missing outcomes make that inference unsafe.",
    "activities": [
      {
        "title": "Comparison paragraph",
        "task": "Choose two service groups and write a four-sentence comparison including their sizes and one limitation."
      },
      {
        "title": "Composition check",
        "task": "Cross-tabulate city and service_type with groupby.size(). Identify an uneven combination and explain why it matters for interpretation."
      },
      {
        "title": "Question redesign",
        "task": "Write a new question that city grouping could answer better than service grouping. State the outcome and unit."
      }
    ],
    "checkpoint": {
      "reflection": "What can a group median describe, and what explanation does it leave open?",
      "check": "You can produce grouped summaries, keep group sizes visible, and avoid treating a descriptive difference as a cause."
    }
  },
  "3.28": {
    "outcome": "Choose a chart type by matching the visual form to the question, variable type, comparison, and unit of observation.",
    "context": "Visualisation is a design decision about what an audience will notice. In a TAN7 setting, a chart should make the data representation and its limits easier to discuss, not hide them behind decoration. A bar chart can compare categories, a histogram can show a distribution, and a scatter plot can show paired numeric values without proving causation.",
    "vocabulary": [
      "visual encoding",
      "categorical",
      "numeric",
      "distribution",
      "bar chart",
      "histogram",
      "scatter plot",
      "denominator"
    ],
    "setup": "Run this planning cell before drawing. It uses the clean file to show how each proposed visual is linked to a question and an observation unit.",
    "code": "from pathlib import Path\nimport pandas as pd\nimport matplotlib.pyplot as plt\n\nDATA = Path(\"data\")\ndf = pd.read_csv(DATA / \"E26_TAN7_service_experience_clean.csv\", parse_dates=[\"report_month\"])\nkey = [\"city\", \"service_type\", \"report_month\"]\ncomplete_key = df[key].notna().all(axis=1)\nreview_repeat = df[\"flag_duplicate_id\"] | df[\"flag_duplicate_observation\"]\nanalysis = df.loc[complete_key & ~review_repeat].copy()\n\n# A chart plan makes the intended comparison explicit before styling begins.\nchart_plan = [\n    (\"Category counts\", \"service_type\", \"report rows\", \"bar chart\"),\n    (\"Reported-day spread\", \"resolution_days\", \"report rows\", \"histogram\"),\n    (\"Two numeric measures\", \"resolution_days and satisfaction_score\", \"one report\", \"scatter plot\"),\n]\nfor question, variable, unit, chart in chart_plan:\n    print(f\"{chart}: {question} | variable: {variable} | unit: {unit}\")\n\n# Prepare the category counts that the first chart would display.\ncounts = analysis[\"service_type\"].value_counts().sort_values()\nprint(\"Category counts:\")\nprint(counts.to_string())",
    "output": "The output is a short chart plan followed by service-category counts. The plan links chart form to the question and unit before any visual styling is added.",
    "modify": "Add a chart-plan row for a city by service table and decide whether a grouped bar chart or a heatmap would be clearer for beginners. State what the audience might miss.",
    "repair": "Swap the chart labels for category counts and distributions, then correct them. Explain why a histogram is not a replacement for a category comparison.",
    "activities": [
      {
        "title": "Chart matching",
        "task": "For three questions, choose bar chart, histogram or scatter plot and justify the choice in one sentence each."
      },
      {
        "title": "Audience reading",
        "task": "Sketch a chart for service counts and add a subtitle stating that rows are aggregate reports. Explain why the subtitle matters."
      },
      {
        "title": "Misleading design",
        "task": "Describe one way a truncated axis, missing denominator or decorative 3D effect could change the apparent message."
      }
    ],
    "checkpoint": {
      "reflection": "What relationship between variables should the audience see, and which relationships should the chart avoid implying?",
      "check": "You can connect chart type to variable/question and state the unit and denominator in the plan."
    }
  },
  "3.29": {
    "outcome": "Create a labelled horizontal bar chart with readable categories, values, units, and a note about the synthetic report population.",
    "context": "A chart of service counts is a chart of records in an administrative-style table. It is not a chart of demand by residents unless the data-generating process supports that claim. Labels and notes make the representation visible to a reader who did not write the code.",
    "vocabulary": [
      "bar chart",
      "axis",
      "label",
      "title",
      "caption",
      "annotation",
      "category",
      "report row"
    ],
    "setup": "Run from L06_L07_offline. Matplotlib may display the chart in a notebook or save it to a local PNG. The complete code includes imports and rebuilds the analysis population.",
    "code": "from pathlib import Path\nimport pandas as pd\nimport matplotlib.pyplot as plt\n\nDATA = Path(\"data\")\ndf = pd.read_csv(DATA / \"E26_TAN7_service_experience_clean.csv\", parse_dates=[\"report_month\"])\nkey = [\"city\", \"service_type\", \"report_month\"]\ncomplete_key = df[key].notna().all(axis=1)\nreview_repeat = df[\"flag_duplicate_id\"] | df[\"flag_duplicate_observation\"]\nanalysis = df.loc[complete_key & ~review_repeat].copy()\n\n# Sort bars so that the category order is easy to scan.\ncounts = analysis[\"service_type\"].value_counts().sort_values()\nfig, ax = plt.subplots(figsize=(8, 4.8))\nbars = ax.barh(counts.index, counts.values, color=\"#176AA2\")\n\n# Add the values directly so the reader does not estimate from the axis.\nax.bar_label(bars, padding=5)\nax.set_xlabel(\"Included report rows\")\nax.set_ylabel(\"Service category\")\nax.set_title(\"Synthetic report rows by service category\")\nax.text(0, -0.18, \"One row = one city/service/month report; rows are not people.\", transform=ax.transAxes, fontsize=9)\nax.set_xlim(0, counts.max() * 1.18)\nfig.tight_layout()\nfig.savefig(\"service_counts_student.png\", dpi=160, bbox_inches=\"tight\")\nplt.show()",
    "output": "The figure shows one horizontal bar per service category, with an axis label, values, a title and a note that the rows are synthetic reports. The PNG is saved as service_counts_student.png.",
    "modify": "Change the colour only after checking contrast. Add the number of included rows to the title or subtitle, and explain why a legend is unnecessary for one series.",
    "repair": "Remove the `sort_values()` call and compare the category order. Restore it and explain how order can support or distort a comparison.",
    "activities": [
      {
        "title": "Caption writing",
        "task": "Write a two-sentence caption that states the unit, population, exclusion rule and the descriptive purpose of the chart."
      },
      {
        "title": "Label audit",
        "task": "Temporarily remove the y-axis label and note, then ask a classmate what the bars represent. Restore the labels that prevent the ambiguity."
      },
      {
        "title": "Alternative comparison",
        "task": "Create the same chart for city counts and explain what a reader might infer incorrectly if the chart had no title."
      }
    ],
    "checkpoint": {
      "reflection": "Which small label prevents the largest possible misunderstanding in this figure?",
      "check": "You can produce a readable chart and identify its unit, population, values and interpretation limit."
    }
  },
  "3.31": {
    "outcome": "Inspect a numeric distribution and a relationship between two measures while distinguishing visible association from causal explanation.",
    "context": "Distributions show the spread of report values; scatter plots show paired values. For TAN7 students, these views are opportunities to ask what a measure represents and whose experience is absent. A pattern between resolution days and satisfaction in aggregate reports does not establish that one causes the other.",
    "vocabulary": [
      "distribution",
      "histogram",
      "bin",
      "scatter plot",
      "association",
      "outlier",
      "correlation",
      "causation"
    ],
    "setup": "Run from the offline draft folder. The figure uses only rows with the relevant numeric values and labels the observation unit in the titles.",
    "code": "from pathlib import Path\nimport pandas as pd\nimport matplotlib.pyplot as plt\n\nDATA = Path(\"data\")\ndf = pd.read_csv(DATA / \"E26_TAN7_service_experience_clean.csv\", parse_dates=[\"report_month\"])\nkey = [\"city\", \"service_type\", \"report_month\"]\ncomplete_key = df[key].notna().all(axis=1)\nreview_repeat = df[\"flag_duplicate_id\"] | df[\"flag_duplicate_observation\"]\nanalysis = df.loc[complete_key & ~review_repeat].copy()\n\n# A histogram uses non-missing resolution days and shows the distribution.\ndays = analysis[\"resolution_days\"].dropna()\npaired = analysis.dropna(subset=[\"resolution_days\", \"satisfaction_score\"])\nfig, axes = plt.subplots(1, 2, figsize=(11, 4.5))\naxes[0].hist(days, bins=[0, 5, 10, 15, 20, 25, 30], edgecolor=\"white\", color=\"#176AA2\")\naxes[0].set_title(\"Distribution of reported resolution days\")\naxes[0].set_xlabel(\"Reported days\")\naxes[0].set_ylabel(\"Report rows\")\n\n# A scatter plot keeps each complete report pair visible.\naxes[1].scatter(paired[\"resolution_days\"], paired[\"satisfaction_score\"], alpha=0.65, color=\"#C46C32\")\naxes[1].set_title(\"Resolution days and reported satisfaction\")\naxes[1].set_xlabel(\"Reported resolution days\")\naxes[1].set_ylabel(\"Satisfaction score\")\nfig.suptitle(\"Synthetic aggregate reports; association is not causation\")\nfig.tight_layout()\nplt.show()\nprint(\"Histogram values:\", len(days), \"paired points:\", len(paired))",
    "output": "The left panel shows how reported days are distributed; the right panel shows complete report pairs. The final counts state how many observations each view uses.",
    "modify": "Colour the scatter points by service_type and add a legend. Before doing so, explain how a categorical colour might help and what extra comparisons it might invite.",
    "repair": "Change the histogram bins to [0, 10, 20, 30] and explain how bin width changes the visual story without changing the data.",
    "activities": [
      {
        "title": "Distribution reading",
        "task": "Describe the centre, spread and any unusual values without explaining why they occurred."
      },
      {
        "title": "Association sentence",
        "task": "Write one cautious sentence about the scatter plot using association language. Write a second sentence naming a causal claim the chart cannot support."
      },
      {
        "title": "Missing pairs",
        "task": "Compare len(analysis) with len(paired). Explain why a scatter plot needs a shared complete pair and how excluding rows can affect interpretation."
      }
    ],
    "checkpoint": {
      "reflection": "What does the chart show about recorded reports, and what would you need to know before speaking about individual experiences?",
      "check": "You can interpret a distribution and paired plot while reporting the plotted n and avoiding causal overclaiming."
    }
  },
  "3.32": {
    "outcome": "Count prepared feedback tokens with NLTK, compare occurrence and document frequency, and read the source comments before naming a pattern.",
    "context": "Word counts can help a researcher return to a corpus, but they do not replace close reading. In a TAN7 setting, a frequent word such as staff or information may occur in different institutional contexts. The code supports a transparent first pass; interpretation still requires the original comments.",
    "vocabulary": [
      "corpus",
      "token",
      "occurrence frequency",
      "document frequency",
      "content token",
      "close reading",
      "context"
    ],
    "setup": "Use the clean CSV and NLTK's RegexpTokenizer. No corpus download is needed. The code keeps token lists per row so you can return from a word to the comments that contain it.",
    "code": "from pathlib import Path\nfrom collections import Counter\nimport pandas as pd\nfrom nltk.tokenize import RegexpTokenizer\n\nDATA = Path(\"data\")\ndf = pd.read_csv(DATA / \"E26_TAN7_service_experience_clean.csv\")\ntokenizer = RegexpTokenizer(r\"[A-Za-z]+\")\nstopwords = {\"the\", \"a\", \"an\", \"and\", \"but\", \"or\", \"was\", \"were\", \"for\", \"to\", \"of\", \"in\", \"with\", \"some\"}\n\n# Tokenise each comment separately so document frequency remains possible.\ndef tokens_for(value):\n    if pd.isna(value):\n        return []\n    tokens = [token.lower() for token in tokenizer.tokenize(str(value))]\n    return [token for token in tokens if token not in stopwords]\n\ntoken_lists = df[\"feedback\"].apply(tokens_for)\noccurrences = Counter(token for tokens in token_lists for token in tokens)\ndocuments = Counter(token for tokens in token_lists for token in set(tokens))\nprint(\"Top occurrences:\", occurrences.most_common(10))\nprint(\"staff occurrences:\", occurrences[\"staff\"])\nprint(\"staff documents:\", documents[\"staff\"])\nstaff_rows = df.loc[token_lists.apply(lambda tokens: \"staff\" in tokens), [\"service_type\", \"feedback\"]]\nprint(staff_rows.to_string(index=False))",
    "output": "The output includes token occurrence counts, document counts for staff, and the original comments containing staff. Reading the source rows is the step that reconnects the count to context.",
    "modify": "Repeat the source-row lookup for information or waiting and compare service categories. State whether the keyword appears in one context or several.",
    "repair": "Use a single global list of tokens for document frequency and observe the wrong result. Restore per-row token lists and explain why set(tokens) is applied within each document.",
    "activities": [
      {
        "title": "Return to context",
        "task": "Choose one top token and read all source comments containing it. Write two distinct meanings or uses if they exist."
      },
      {
        "title": "Occurrence versus documents",
        "task": "Create a small example with one comment repeating a word and two comments using it once. Compare the two frequency measures."
      },
      {
        "title": "Coding boundary",
        "task": "Design a transparent rule for a concern such as waiting, test it on the comments, and list one case that needs manual review."
      }
    ],
    "checkpoint": {
      "reflection": "How can a frequency count be useful without being a theme, sentiment score or voice of a population?",
      "check": "You can calculate both frequency types, retrieve source comments, and keep interpretation tied to context."
    }
  },
  "3.33": {
    "outcome": "Count adjacent word pairs within each comment and explain how preserving comment boundaries changes the result.",
    "context": "Bigrams are a simple way to notice recurring phrases such as clear information. If all comments are joined into one long string, the last word of one person's comment can be paired with the first word of another. Preserving boundaries is therefore a small but important ethical and technical choice.",
    "vocabulary": [
      "bigram",
      "adjacent pair",
      "document boundary",
      "token sequence",
      "frequency",
      "context",
      "preparation rule"
    ],
    "setup": "Run with pandas and NLTK installed. RegexpTokenizer needs no downloaded model. The complete cell constructs pairs separately inside each feedback comment.",
    "code": "from pathlib import Path\nfrom collections import Counter\nimport pandas as pd\nfrom nltk.tokenize import RegexpTokenizer\n\nDATA = Path(\"data\")\ndf = pd.read_csv(DATA / \"E26_TAN7_service_experience_clean.csv\")\ntokenizer = RegexpTokenizer(r\"[A-Za-z]+\")\n\ndef normal_tokens(value):\n    if pd.isna(value):\n        return []\n    return [token.lower() for token in tokenizer.tokenize(str(value))]\n\n# Make pairs within each row; never connect the end of one comment to another.\ntoken_lists = df[\"feedback\"].apply(normal_tokens)\npairs = Counter()\nfor tokens in token_lists:\n    pairs.update(zip(tokens, tokens[1:]))\n\nranked = sorted(pairs.items(), key=lambda item: (-item[1], item[0]))\nprint(\"Top adjacent pairs:\")\nfor (left, right), count in ranked[:12]:\n    print(f\"{left} {right}: {count}\")\n\n# Show the effect of an explicitly chosen stopword policy as a comparison.\nstopwords = {\"the\", \"a\", \"an\", \"and\", \"but\", \"or\", \"was\", \"were\", \"for\", \"to\", \"of\", \"in\", \"with\", \"some\"}\ncontent_pairs = Counter()\nfor tokens in token_lists:\n    kept = [token for token in tokens if token not in stopwords]\n    content_pairs.update(zip(kept, kept[1:]))\nprint(\"Top pairs after stopword removal:\", content_pairs.most_common(8))",
    "output": "The first list counts adjacent words inside each original comment. The second list shows that stopword removal changes adjacency and therefore changes the question being measured.",
    "modify": "Print the original comments containing the top pair. Then compare a pair created before stopword removal with a pair created after removal and describe the difference.",
    "repair": "Replace the loop with one pair count over a concatenated token list and identify a cross-comment pair. Restore row-wise processing and explain the boundary rule.",
    "activities": [
      {
        "title": "Phrase interpretation",
        "task": "Read every comment containing one frequent pair. Decide whether the pair has a stable meaning or several contexts."
      },
      {
        "title": "Boundary experiment",
        "task": "Create two short comments, calculate pairs with and without boundaries, and mark the pair that should not be treated as a phrase."
      },
      {
        "title": "Preparation comparison",
        "task": "Compare pair rankings before and after stopword removal. Explain why a changed ranking is a changed measurement, not a coding failure."
      }
    ],
    "checkpoint": {
      "reflection": "Why is a document boundary part of the meaning of a text analysis?",
      "check": "You can build bigrams within comments, identify the effect of stopwords, and inspect source context before interpreting a phrase."
    }
  },
  "3.34": {
    "outcome": "Separate observations from explanations and test how an analysis choice, such as excluding repeated keys, changes a result.",
    "context": "A difference in a table invites a story, but the story may exceed the data. This tutorial treats interpretation as a documented choice: compare the same summary under two inclusion rules, then state what is stable and what is sensitive. That practice is useful when TAN7 projects connect computational outputs to institutions and lived experience.",
    "vocabulary": [
      "observation",
      "interpretation",
      "overclaim",
      "sensitivity analysis",
      "robustness",
      "inclusion rule",
      "causal claim"
    ],
    "setup": "Run from L06_L07_offline. The code changes one decision at a time: whether unresolved repeated IDs/keys are excluded. It does not change the cleaning file itself.",
    "code": "from pathlib import Path\nimport pandas as pd\n\nDATA = Path(\"data\")\ndf = pd.read_csv(DATA / \"E26_TAN7_service_experience_clean.csv\", parse_dates=[\"report_month\"])\nkey = [\"city\", \"service_type\", \"report_month\"]\ncomplete_key = df[key].notna().all(axis=1)\nreview_repeat = df[\"flag_duplicate_id\"] | df[\"flag_duplicate_observation\"]\n\n# Keep the date/key rule fixed and vary only the repeated-record decision.\ninclude_repeats = df.loc[complete_key].copy()\nexclude_repeats = df.loc[complete_key & ~review_repeat].copy()\n\ncomparison = pd.DataFrame({\n    \"include_repeats_median\": include_repeats.groupby(\"service_type\")[\"resolution_days\"].median(),\n    \"exclude_repeats_median\": exclude_repeats.groupby(\"service_type\")[\"resolution_days\"].median(),\n    \"include_n\": include_repeats.groupby(\"service_type\").size(),\n    \"exclude_n\": exclude_repeats.groupby(\"service_type\").size(),\n})\ncomparison[\"change_in_days\"] = comparison[\"exclude_repeats_median\"] - comparison[\"include_repeats_median\"]\nprint(comparison.round(2).to_string())\n\nprint(\"Observation: the displayed medians change by service category.\")\nprint(\"Interpretation to test: the change may reflect repeated administrative records, not a change in service experience.\")\nprint(\"Limit: this descriptive comparison does not establish a cause or a resident-level effect.\")",
    "output": "The comparison table shows medians, group sizes and the change caused by one inclusion decision. The final three lines model the difference between an observation, an interpretation to investigate, and a limit.",
    "modify": "Change the outcome to satisfaction_score while holding both populations fixed. Write which conclusions remain stable and which are sensitive to the outcome choice.",
    "repair": "Accidentally change both the population and the outcome at once, then explain why the result is no longer a one-decision sensitivity test. Restore the code and rerun.",
    "activities": [
      {
        "title": "Claim repair",
        "task": "Rewrite an overclaim such as service X causes lower satisfaction into an evidence-supported descriptive sentence."
      },
      {
        "title": "Sensitivity note",
        "task": "Choose one category with a changed median and write three lines describing the change, the rule that caused it, and what remains unknown."
      },
      {
        "title": "Alternative explanation",
        "task": "List two institutional explanations for repeated records and one extra data source that could help distinguish them."
      }
    ],
    "checkpoint": {
      "reflection": "Which part of your result is stable across choices, and which part depends on a defensible but revisable rule?",
      "check": "You can run a one-choice sensitivity comparison and label observation, interpretation, and unsupported causal claim separately."
    }
  },
  "3.35": {
    "outcome": "Produce a small evidence brief that connects a question, population, summary, visual or text result, limitations, and next step.",
    "context": "The evidence brief is a TAN7-style handover from computation to discussion. It does not turn synthetic aggregate reports into evidence about real residents. Its purpose is to show a traceable route from a question through code and representation to a cautious statement another person can inspect.",
    "vocabulary": [
      "evidence brief",
      "finding",
      "limitation",
      "provenance",
      "visual evidence",
      "text evidence",
      "next step"
    ],
    "setup": "Run from the L06_L07_offline folder. This integrated cell rebuilds the analysis population, calculates a service summary and a text frequency table, and prints a compact brief skeleton.",
    "code": "from pathlib import Path\nfrom collections import Counter\nimport pandas as pd\nfrom nltk.tokenize import RegexpTokenizer\n\nDATA = Path(\"data\")\ndf = pd.read_csv(DATA / \"E26_TAN7_service_experience_clean.csv\", parse_dates=[\"report_month\"])\nkey = [\"city\", \"service_type\", \"report_month\"]\ncomplete_key = df[key].notna().all(axis=1)\nreview_repeat = df[\"flag_duplicate_id\"] | df[\"flag_duplicate_observation\"]\nanalysis = df.loc[complete_key & ~review_repeat].copy()\n\n# Calculate a grouped numeric result with its counts visible.\nservice_summary = analysis.groupby(\"service_type\").agg(\n    report_rows=(\"source_row\", \"size\"),\n    observed_days=(\"resolution_days\", \"count\"),\n    median_days=(\"resolution_days\", \"median\"),\n).sort_values(\"median_days\")\n\n# Calculate a small, reproducible text result without an external corpus.\ntokenizer = RegexpTokenizer(r\"[A-Za-z]+\")\nstopwords = {\"the\", \"a\", \"an\", \"and\", \"but\", \"or\", \"was\", \"were\", \"for\", \"to\", \"of\", \"in\", \"with\", \"some\"}\ntokens = []\nfor value in analysis[\"feedback\"]:\n    if pd.notna(value):\n        tokens.extend(token for token in tokenizer.tokenize(str(value).lower()) if token not in stopwords)\nword_counts = Counter(tokens)\n\nprint(\"QUESTION: How do reported resolution days differ by service category?\")\nprint(\"POPULATION:\", len(analysis), \"complete-key reports with unresolved repeats excluded\")\nprint(\"NUMERIC RESULT:\")\nprint(service_summary.round(2).to_string())\nprint(\"TEXT RESULT: top prepared tokens\", word_counts.most_common(8))\nprint(\"LIMITATION: rows are synthetic city/service/month reports, not people or individual cases.\")\nprint(\"NEXT STEP: inspect flagged records and compare the result under a documented alternative population.\")",
    "output": "The printed brief contains a question, population, grouped numeric evidence, a text-frequency result, a limitation, and a next step. Turn these labelled lines into prose only after checking the tables and source comments.",
    "modify": "Add one labelled chart and one sentence describing its unit. Then add a second limitation about missing resolution days or the stopword policy.",
    "repair": "Remove the population rule and compare the brief with all clean rows. Restore the rule and state which part of the result changed and why.",
    "activities": [
      {
        "title": "Evidence brief",
        "task": "Write 250-400 words with headings for question, method, finding, limitation and next step. Include at least one number with its denominator."
      },
      {
        "title": "Peer audit",
        "task": "Give the brief to a partner. Ask them to identify the unit, population, source, transformation and unsupported claim without opening the code."
      },
      {
        "title": "Alternative reading",
        "task": "Choose one text token and read its source comments. Add a sentence explaining why the frequency is an entry point for qualitative interpretation, not a conclusion."
      }
    ],
    "checkpoint": {
      "reflection": "Can another reader reproduce the route from your question to your claim, and can they see where uncertainty enters?",
      "check": "You can deliver a concise evidence brief that joins code, numbers, text, visual choices, limitations and a next analytical step."
    }
  },
  "3.30": {
    "outcome": "Load a CSV from your computer, understand file locations, and inspect the table before adapting the course code to a new dataset.",
    "context": "Use the upload and path examples to transfer the course workflow to another CSV. First establish where Python runs and what one row means.",
    "vocabulary": [
      "CSV",
      "upload",
      "runtime",
      "absolute path",
      "relative path",
      "separator",
      "encoding"
    ],
    "setup": "Choose one complete block from Tutorial 3.30. Upload cells require Google Colab and wait for your file choice.",
    "code": "import pandas as pd  # Read a CSV into a table called a DataFrame.\nimport io  # Let pandas read the uploaded file's bytes.\nfrom google.colab import files  # Colab's upload dialogue; run this in Colab.\n\nprint(\"Choose ONE CSV file from your computer.\")\nuploaded = files.upload()  # Opens the file chooser and waits for your selection.\n\nif len(uploaded) != 1:\n    print(\"Please run this block again and choose exactly one CSV file.\")\nelse:\n    filename = next(iter(uploaded))  # Use the actual uploaded filename.\n    source_df = pd.read_csv(io.BytesIO(uploaded[filename]), encoding=\"utf-8-sig\")\n    df = source_df.copy(deep=True)  # Work on a copy; preserve the loaded table.\n\n    print(\"Loaded file:\", filename)\n    print(\"Rows:\", df.shape[0], \"| Columns:\", df.shape[1])\n    print(\"Column names:\", df.columns.tolist())\n    print(\"\\nFirst five rows:\")\n    print(df.head(5).to_string(index=False))\n"
  }
};
window.draftStudyGuides = draftStudyGuides;
