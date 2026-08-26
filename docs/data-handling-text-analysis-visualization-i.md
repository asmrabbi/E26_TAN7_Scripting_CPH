---
title: "Data Handling, Text Analysis and Visualization I"
description: "A complete beginner tutorial for loading, inspecting, calculating from, exploring and critically assessing the supplied Lecture 5 CSV data with pandas"
course: "AAU Introduction to Scripting, Data Mining and Machine Learning"
part: "Part III — Data Handling, Text Analysis and Visualization"
lecture: "Lecture 5"
tutorial_range: "3.1–3.14"
language: "en-GB"
estimated_time: "10 to 12 hours for the core pathway, plus 3 to 5 hours for exercises and the integrated case activity"
prerequisites:
  - "Python Foundations I"
  - "Python Foundations II"
  - "Ability to run cells in Google Colab"
  - "Basic familiarity with variables, strings, numbers, Booleans, lists, conditions, loops and functions"
primary_library: "pandas"
primary_dataset: "data/E26_TAN7_service_experience_raw.csv"
last_reviewed: "2026-08-26"
---

# Data Handling, Text Analysis and Visualization I

> **Core message:** A CSV file is not automatically analysis-ready evidence. Before you make claims from data, you need to understand what one row represents, inspect the variables, calculate carefully, find possible quality problems, and distinguish what the data shows from what you are merely assuming.

This is the first tutorial section in **Part III — Data Handling, Text Analysis and Visualization**. It follows **Python Foundations I** and **Python Foundations II** and moves from small values and lists to a complete tabular dataset.

This tutorial is written for programming beginners. You should be able to use it as the main learning resource for Lecture 5 without needing a separate textbook. Optional references are provided at the end for students who want to read further.

Lecture 5 does **not** try to turn you into an advanced pandas user. The goal is more practical:

> **You should be able to receive an unfamiliar CSV dataset, load it into Python, understand its structure, select relevant records, perform basic calculations and comparisons, explore a text column, identify quality concerns, and write cautious preliminary findings before cleaning the data.**

The next two sections will continue the same workflow:

```text
Lecture 5 / Section I
LOAD → UNDERSTAND → INSPECT → CALCULATE → COMPARE → EXPLORE
                       ↓
Lecture 6 / Section II
ASSESS → CLEAN → WRANGLE → VALIDATE → PREPARE TEXT
                       ↓
Lecture 7 / Section III
ANALYSE → VISUALISE → INTERPRET → REPORT
```



---

# Before you start: course files and coding options

## The three Lecture 5 notebooks

Lecture 5 should have exactly **three canonical GitHub/Colab notebooks**.

| Website label | Canonical file | What it contains | When to use it |
|---|---|---|---|
| **Tutorial Examples** | `notebooks/lecture_05/L05_Tutorial_3_1_to_3_14_Examples.ipynb` | Every runnable worked example from Tutorials 3.1–3.13, in website order, plus setup cells needed for the examples | During teaching and when reviewing explanations |
| **Exercises** | `notebooks/lecture_05/L05_Tutorial_3_1_to_3_14_Exercises.ipynb` | Every numbered exercise from Tutorials 3.1–3.13. Student tasks come first; full commented solutions appear in a clearly separated solutions section at the end | Attempt exercises before reading the solutions |
| **Case Activities** | `notebooks/lecture_05/L05_Tutorial_3_1_to_3_14_Case_Activities.ipynb` | All numbered Case Activities in Tutorial 3.14, followed by a clearly separated model walkthrough/solution section | Complete after the core tutorials |

Target Colab links follow this pattern:

```text
https://colab.research.google.com/github/asmrabbi/E26_TAN7_Scripting_CPH/blob/main/notebooks/lecture_05/L05_Tutorial_3_1_to_3_14_Examples.ipynb

https://colab.research.google.com/github/asmrabbi/E26_TAN7_Scripting_CPH/blob/main/notebooks/lecture_05/L05_Tutorial_3_1_to_3_14_Exercises.ipynb

https://colab.research.google.com/github/asmrabbi/E26_TAN7_Scripting_CPH/blob/main/notebooks/lecture_05/L05_Tutorial_3_1_to_3_14_Case_Activities.ipynb
```

If a notebook has not yet been generated when the website page is built, show the button as **Coming soon** rather than linking to a missing file.

## Primary teaching dataset

The recurring dataset is:

```text
data/E26_TAN7_service_experience_raw.csv
```

Canonical repository location:

```text
https://github.com/asmrabbi/E26_TAN7_Scripting_CPH/blob/main/data/E26_TAN7_service_experience_raw.csv
```

Canonical raw CSV location for `pd.read_csv()`:

```text
https://raw.githubusercontent.com/asmrabbi/E26_TAN7_Scripting_CPH/main/data/E26_TAN7_service_experience_raw.csv
```

The dataset is **synthetic teaching data**. It does not contain real people, real organisations or real service-performance results. It deliberately contains several data-quality problems so that students can practise inspection and, in Lecture 6, cleaning.

### Intended unit of observation

One row is intended to represent:

> **one service category in one city during one reporting month**

Keep this sentence visible throughout the website. A row is **not** automatically one person, one complaint, one organisation or one event.

## Expected teaching schema

| Column | Intended meaning | Conceptual type | Initial expectation |
|---|---|---|---|
| `record_id` | service-report identifier | identifier | expected to distinguish records |
| `report_month` | reporting month | date-like | expected to represent a valid reporting month |
| `city` | city label | categorical text | expected to use consistent city labels |
| `service_type` | service category | categorical text | Housing, Transport, Employment, Waste or Citizen Services |
| `cases_received` | number of cases received | numeric count | expected to be zero or positive |
| `cases_resolved` | number of cases resolved | numeric count | expected to be zero or positive |
| `resolution_days` | average/typical resolution time used for teaching | numeric measure | expected to be zero or positive |
| `satisfaction_score` | satisfaction score | numeric rating | expected teaching range: 1–5 |
| `digital_cases` | cases handled through a digital channel | numeric count | expected to be zero or positive |
| `in_person_cases` | cases handled in person | numeric count | expected to be zero or positive |
| `repeat_contacts` | repeated contacts associated with a record | numeric count | expected to be zero or positive and contextually bounded |
| `complaints_received` | complaints received | numeric count | expected to be zero or positive |
| `staff_hours` | staff time associated with the record | numeric measure | expected to be greater than zero |
| `feedback` | short textual feedback | free text | may be missing |

The schema describes what the data are **intended** to represent. The actual stored values must still be inspected.

---

# What you will learn

By the end of Tutorials 3.1–3.14, you should be able to:

1. explain the difference between individual Python values and a tabular dataset;
2. explain rows, columns, observations, variables, cells and units of observation;
3. explain what a CSV file is and what a CSV file does **not** contain;
4. import pandas using `import pandas as pd`;
5. explain the basic difference between a pandas `DataFrame` and `Series`;
6. load a CSV file from Colab, a file path or a raw web URL;
7. inspect a dataset using `head()`, `tail()`, `sample()`, `shape`, `columns`, `dtypes` and `info()`;
8. select one or several columns;
9. select rows using `.loc[]` and `.iloc[]`;
10. filter rows using Boolean conditions;
11. distinguish technical pandas dtypes from the conceptual meaning of a variable;
12. calculate counts, totals, means, medians, minimums, maximums, standard deviations and summary statistics;
13. create simple derived measures such as differences, percentages and rates;
14. explain why a correct formula can still produce a misleading result when the underlying data are problematic;
15. calculate categorical frequencies and proportions;
16. perform introductory grouped calculations with `groupby()` and `.agg()`;
17. create a basic cross-tabulation;
18. locate missing values, duplicates, inconsistent categories, suspicious ranges and logical contradictions;
19. inspect a text column and search for simple textual patterns with pandas string methods;
20. turn a simple qualitative idea into a transparent computational indicator while recognising the limitations of keyword coding;
21. describe dataset provenance, unit of observation and variable definitions in a basic data dictionary;
22. distinguish **observation**, **interpretation** and **unsupported claim**;
23. write a short initial data-exploration note that documents preliminary findings and limitations.

You are **not** expected to memorise every pandas command. You should be able to recognise the structure, use the examples as reference, adapt them to a new column or question, and explain the output.

---

# What Lecture 5 deliberately does not finish

Lecture 5 will expose data problems, but it will usually **not permanently repair them**. That belongs mainly to Lecture 6.

In Lecture 5 the default instruction is:

> **Detect it → inspect it → describe it → decide what evidence would be needed before changing it.**

Lecture 6 will then introduce justified cleaning operations such as:

- standardising text categories;
- converting malformed numeric columns;
- handling invalid dates;
- deciding what to do with missing values;
- deciding whether a repeated row is a genuine duplicate;
- preserving raw data and creating a working copy;
- documenting transformations;
- preparing text with NLTK.

This separation matters. If you change a dataset before you understand the problem, you may destroy information or introduce a new error.

---

# Suggested study pathway

| Tutorial | Topic | Approximate core time |
|---|---|---:|
| **3.1** | From Python Values to Datasets | 35–45 min |
| **3.2** | CSV Files and Tabular Data | 35–45 min |
| **3.3** | pandas, DataFrames and Loading Data | 60–75 min |
| **3.4** | Inspecting and Understanding a Dataset | 55–70 min |
| **3.5** | Selecting and Filtering Data | 70–90 min |
| **3.6** | Understanding Variables and Data Types | 45–60 min |
| **3.7** | Basic Calculations and Descriptive Summaries | 70–90 min |
| **3.8** | Creating New Measures from Existing Columns | 60–80 min |
| **3.9** | Categories, Frequencies and Group Comparisons | 70–90 min |
| **3.10** | Finding Data-Quality Problems | 75–95 min |
| **3.11** | Exploring Text and Qualitative Data | 60–80 min |
| **3.12** | From Qualitative Ideas to Simple Computational Codes | 60–80 min |
| **3.13** | Provenance, Data Dictionaries and Responsible Interpretation | 50–70 min |
| **3.14** | Case Activity: First Exploration of a CSV Dataset | 90–120 min |

The times are deliberately generous. Beginners should pause, predict outputs, rerun cells and make mistakes.

---

# How to work with every example

Use the same cycle as Python Foundations I and II:

```text
PREDICT
  ↓
RUN
  ↓
INSPECT
  ↓
EXPLAIN
  ↓
MODIFY
  ↓
BREAK
  ↓
REPAIR
  ↓
TEST
  ↓
REFLECT
```

For data work, always add four questions:

1. **What does one row represent?**
2. **What does this variable represent?**
3. **What assumptions does this calculation make?**
4. **What does this output not establish?**

---

# Tutorial 3.1 — From Python Values to Datasets

## Tutorial 3.1 overview

In Python Foundations I and II, most examples used individual variables, small lists and short scripts. Data analysis often starts when those individual values become many repeated observations organised into a table. This tutorial introduces the vocabulary needed to reason about a dataset before pandas is used.

**Core vocabulary:** dataset, observation, record, row, variable, column, cell, unit of observation, tabular data, structured data.

## Why move beyond individual variables?

Suppose one monthly service report contains:

```python
city = "Copenhagen"
service_type = "Housing"
cases_received = 120
cases_resolved = 112
```

This is manageable. But imagine 5 cities, 8 service types and 24 months. Creating separate variable names for every combination would become difficult to maintain and analyse.

A table gives repeated observations a common structure:

| city | service_type | cases_received | cases_resolved |
|---|---|---:|---:|
| Copenhagen | Housing | 120 | 112 |
| Copenhagen | Transport | 85 | 90 |
| Aalborg | Housing | 95 | 89 |

Each row follows the same schema. That lets us ask questions across many observations rather than writing a separate calculation for each one.

## Rows are observations, but you must define the observation

The phrase **one row = one observation** is useful but incomplete. You still need to know what is being observed.

Possible units of observation include:

- one person;
- one organisation;
- one transaction;
- one social-media post;
- one interview response;
- one country-year;
- one service-category-city-month.

For the course dataset, the intended unit is:

> **one service category in one city during one reporting month**

This means that summing `cases_received` is summing monthly service-category counts, not counting individual people directly.

### Example 3.1.1 — Identify the unit of observation

Consider:

| student_id | lecture | attendance |
|---|---|---|
| S01 | L1 | Present |
| S01 | L2 | Present |
| S02 | L1 | Absent |

What does one row represent?

**Suggested answer:** one student's attendance status for one lecture.

It would be wrong to say that the table has three students merely because it has three rows. Student `S01` appears twice.

### Example 3.1.2 — Variable versus value

In this row:

```text
Copenhagen,Housing,120,112
```

- `city` is a **variable**;
- `Copenhagen` is one **value** of that variable;
- `cases_received` is a **variable**;
- `120` is one **value** of that variable.

A variable describes what kind of information a column contains. A value is one stored observation for that variable.

## Cells are not automatically facts

A cell contains a stored value. That value may be:

- accurate;
- inaccurate;
- incomplete;
- outdated;
- miscoded;
- derived from another measure;
- produced by a classification rule;
- entered manually;
- generated by another system.

This is why a dataset should not be treated as a neutral mirror of reality.

### Example 3.1.3 — A category is a modelling decision

Suppose a column called `service_type` contains:

```text
Housing
Transport
Employment
```

These categories may be useful, but the dataset itself does not tell us:

- who designed the categories;
- whether all cases fit neatly into one category;
- whether another organisation would classify cases differently;
- whether categories changed over time.

The computational task begins with the stored categories, but critical interpretation asks how those categories came to exist.

## Structured versus unstructured data

The course will mainly use two forms of data in Part III.

### Structured/tabular data

Information is organised into repeated rows and named columns.

```text
record_id | city | service_type | cases_received
```

### Free text

A column may contain open-ended text:

```text
"Helpful staff and clear answer"
```

The text is still stored in a table, but its internal meaning is less structured. Lecture 5 will perform simple text exploration. Lecture 6 will prepare text more systematically with NLTK.

## Common mistakes

- **Mistake:** assuming every row represents a person.  
  **Repair:** write the unit of observation in one complete sentence.

- **Mistake:** assuming every column is an independent fact.  
  **Repair:** ask whether a column is recorded, derived or classified.

- **Mistake:** confusing variable names with values.  
  **Repair:** identify the column name and then identify one value from that column.

- **Mistake:** counting rows without checking repeated units.  
  **Repair:** inspect identifiers and the unit of observation first.

## Exercise 3.1.1 — Describe a dataset before coding

A fictional dataset contains these columns:

```text
organisation_id, year, sector, employees, energy_use_kwh, sustainability_comment
```

Answer without writing Python:

1. What might one row represent?
2. Which columns look numeric?
3. Which column looks like an identifier?
4. Which column contains free text?
5. What information would you need before interpreting `energy_use_kwh`?
6. Why would the number of rows not necessarily equal the number of organisations?

<details>
<summary>Suggested answer</summary>

A plausible unit is one organisation in one year. `employees` and `energy_use_kwh` look numeric, `organisation_id` looks like an identifier, and `sustainability_comment` is free text. Before interpreting energy use we would want the measurement period, unit definition, collection method and whether the value is measured or estimated. If the same organisation appears in several years, the number of rows will exceed the number of unique organisations.

</details>

## Tutorial 3.1 summary

You should now be able to explain:

- why repeated observations are organised into datasets;
- the difference between rows, columns, variables and values;
- why the unit of observation must be identified before calculations;
- why stored values still require contextual interpretation.

---

# Tutorial 3.2 — CSV Files and Tabular Data

## Tutorial 3.2 overview

A CSV file is one of the simplest ways to store a table. Understanding its raw structure helps you recognise what pandas is doing when it later creates a DataFrame.

**Core vocabulary:** CSV, delimiter, header, field, record, plain text, encoding, quoted field, missing field.

## What does CSV mean?

CSV usually means **comma-separated values**. A simple file might contain:

```csv
city,service_type,cases_received
Copenhagen,Housing,120
Aalborg,Transport,92
```

The first line is usually the **header row**. It gives names to the columns.

The following lines are data records.

The commas separate fields.

## A CSV file is plain text

A CSV file does not inherently contain:

- spreadsheet colours;
- formulas displayed as formulas;
- multiple worksheet tabs;
- charts;
- bold formatting;
- merged cells;
- a guaranteed data type for each column.

Spreadsheet software can open a CSV and display it in rows and columns, but the underlying file is still text.

This matters because what looks like a date or number in a spreadsheet may have been stored as text.

## CSV versus Excel workbook

| CSV | Excel workbook (`.xlsx`) |
|---|---|
| Plain-text tabular format | Structured spreadsheet file format |
| Usually one table per file | Can contain multiple sheets |
| No built-in chart/formula formatting | Can store formulas, styles and charts |
| Widely supported across tools | Requires software/library support for Excel format |
| Easy to inspect in a text editor | Not meaningfully readable as plain text |

Neither format guarantees good data quality.

## Delimiters are not always commas

Some files use semicolons:

```text
city;service_type;cases_received
Copenhagen;Housing;120
```

Others may use tabs.

When pandas does not know the correct delimiter, the entire row may appear as one column.

Later you can specify a separator:

```python
pd.read_csv("file.csv", sep=";")
```

Do not memorise `sep=";"` as a universal fix. First inspect what delimiter the file actually uses.

## Quoted fields

What happens if text itself contains a comma?

```csv
record_id,feedback
1,"Helpful staff, but the wait was long"
```

The quotation marks allow the comma to remain inside one field rather than being interpreted as a new column separator.

## Blank field versus zero

These two records are different:

```csv
record_id,satisfaction_score
1,0
2,
```

`0` is an explicit stored value.

The blank field indicates that no value is present in that position. pandas will often represent that absence as a missing value.

Do not automatically replace missing data with zero. Zero may have a substantive meaning that is completely different from “unknown” or “not recorded”.

### Example 3.2.1 — Read a CSV mentally

```csv
id,city,cases
1,Copenhagen,12
2,Aalborg,9
3,,7
```

Answer before coding:

1. How many columns are shown?
2. How many data rows are shown?
3. Which field is missing?

**Answer:** three columns, three data rows, and the `city` field is missing in row 3.

### Example 3.2.2 — Detect a delimiter problem

Suppose pandas displays one column named:

```text
city;service_type;cases_received
```

and each row also looks like one long text string.

A likely explanation is that the source file uses `;` but was read using the default comma separator.

This is a file-reading problem, not evidence that the dataset genuinely has one variable.

## Encoding in beginner terms

Computers store characters as numeric codes. An **encoding** specifies how bytes should be interpreted as characters. UTF-8 is extremely common and supports a wide range of languages and symbols.

An encoding problem may produce:

- strange replacement symbols;
- corrupted accented characters;
- an error while reading the file.

For this course dataset, normal UTF-8 handling is sufficient. You only need to recognise that text corruption can be a file-reading issue rather than a spelling mistake in the source.

## CSV files do not define meaning

This row:

```text
1001,2026-01-01,Copenhagen,Housing,120
```

contains values, but without the header and data documentation we do not know what `120` means. It could be cases, euros, minutes or something else.

A usable dataset therefore needs both:

1. **stored data**, and
2. **documentation/context**.

## Exercise 3.2.1 — Find the structural problem

Consider:

```csv
id;city;score
1;Copenhagen;4.2
2;Aalborg;3.9
```

A student runs:

```python
df = pd.read_csv("scores.csv")
```

and gets one column instead of three.

1. What is the likely problem?
2. What argument should the student investigate?
3. Why should they inspect the file before changing the code?

<details>
<summary>Suggested answer</summary>

The file uses semicolons instead of commas. The student should investigate the `sep` argument, for example `sep=";"`. They should inspect the source first because guessing a delimiter can hide a different problem.

</details>

## Exercise 3.2.2 — Missing does not mean zero

Explain why these two values should not automatically be treated as equivalent:

```text
cases_received = 0
cases_received = blank
```

<details>
<summary>Suggested answer</summary>

Zero can mean that the organisation explicitly recorded no cases. A blank value can mean unknown, not collected, not applicable or accidentally missing. Replacing blank values with zero would introduce an assumption.

</details>

## Tutorial 3.2 summary

You should now be able to explain:

- what a CSV file is;
- what a delimiter does;
- why quoted fields may be necessary;
- why a blank value differs from zero;
- why a CSV does not itself provide full semantic meaning.

---

# Tutorial 3.3 — pandas, DataFrames and Loading Data

## Tutorial 3.3 overview

pandas is the main Python library used in this course for tabular data. It lets us read CSV files into a `DataFrame`, inspect columns, select rows, calculate summaries and prepare data for later analysis.

**Core vocabulary:** library, import, alias, pandas, DataFrame, Series, `read_csv()`, file path, URL, runtime.

## Import pandas

```python
import pandas as pd
```

### Line-by-line explanation

- `import` asks Python to load a library/module.
- `pandas` is the library name.
- `as pd` creates the conventional short alias `pd`.

We then write:

```python
pd.read_csv(...)
```

instead of:

```python
pandas.read_csv(...)
```

The alias is a convention, not a requirement of the library.

### Example 3.3.1 — Confirm pandas is available

```python
import pandas as pd

print(pd.__version__)
```

**Expected output**

A pandas version number, for example:

```text
3.0.5
```

Your exact version may differ. The course examples are designed around standard pandas functionality and should not depend on one exact minor version.

## What is a DataFrame?

A pandas `DataFrame` is a two-dimensional tabular object with labelled rows and columns.

You can create one manually:

```python
import pandas as pd

data = {
    "city": ["Copenhagen", "Aalborg"],
    "cases_received": [120, 92]
}

df_small = pd.DataFrame(data)
df_small
```

**Expected display**

```text
          city  cases_received
0   Copenhagen             120
1      Aalborg              92
```

The leftmost `0` and `1` are the DataFrame's **index labels**. They are not part of the original dictionary values.

### Example 3.3.2 — DataFrame versus Series

```python
print(type(df_small))
print(type(df_small["city"]))
print(type(df_small[["city"]]))
```

**Expected idea**

- `df_small` is a `DataFrame`;
- `df_small["city"]` is a `Series`;
- `df_small[["city"]]` is a one-column `DataFrame`.

A `Series` is one-dimensional. A DataFrame is two-dimensional.

## The main course loading method: raw GitHub URL

```python
import pandas as pd

url = "https://raw.githubusercontent.com/asmrabbi/E26_TAN7_Scripting_CPH/main/data/E26_TAN7_service_experience_raw.csv"
df = pd.read_csv(url)

df.head()
```

This is convenient in Colab because the dataset can be loaded directly without manually uploading it every session.

### What `pd.read_csv()` does

Conceptually:

```text
CSV FILE / URL
      ↓
pd.read_csv(...)
      ↓
DataFrame stored in Python memory
```

The original file and the DataFrame are not the same object. Changing the DataFrame does not automatically rewrite the original CSV.

### Example 3.3.3 — Load from a local path

If the file is already available at the relative path:

```text
data/E26_TAN7_service_experience_raw.csv
```

use:

```python
df = pd.read_csv("data/E26_TAN7_service_experience_raw.csv")
```

The path must be correct relative to the notebook's current working directory.

## Uploading a CSV in Google Colab

You can also use the Colab file panel:

1. Open the **Files** panel on the left.
2. Choose **Upload**.
3. Select the CSV file.
4. Confirm the uploaded filename.
5. Run:

```python
df = pd.read_csv("E26_TAN7_service_experience_raw.csv")
```

A temporary Colab runtime may lose uploaded files when the runtime ends. This is one reason the direct repository URL is useful for course examples.

### Upload through Python

```python
from google.colab import files

uploaded = files.upload()
```

After selecting the file:

```python
df = pd.read_csv("E26_TAN7_service_experience_raw.csv")
```

This `files` helper is specific to Google Colab. It is not required in ordinary Python or Jupyter environments.

## GitHub page URL versus raw URL

This is a common beginner problem.

A normal GitHub page URL looks like:

```text
https://github.com/asmrabbi/E26_TAN7_Scripting_CPH/blob/main/data/E26_TAN7_service_experience_raw.csv
```

That address points to an HTML webpage containing GitHub controls around the file.

For `pd.read_csv()`, use the **raw file URL**:

```text
https://raw.githubusercontent.com/asmrabbi/E26_TAN7_Scripting_CPH/main/data/E26_TAN7_service_experience_raw.csv
```

### Common symptom

If the downloaded content begins with HTML or pandas reports an unexpected parsing problem, check whether you supplied a webpage address rather than the raw CSV resource.

## Common loading errors

### `FileNotFoundError`

```text
FileNotFoundError: ...
```

Usually means Python cannot find the path you supplied.

Check:

- spelling;
- uppercase/lowercase characters;
- file extension;
- current folder;
- whether the Colab runtime still contains the uploaded file.

### Wrong delimiter

If everything appears in one column, inspect the source delimiter.

```python
df = pd.read_csv("file.csv", sep=";")
```

Use this only when `;` is genuinely the delimiter.

### Encoding error

An encoding error may require specifying an encoding, for example:

```python
df = pd.read_csv("file.csv", encoding="utf-8")
```

Do not randomly try encodings until something runs. First identify the source's documented encoding if possible.

## Methods versus attributes

This distinction will appear repeatedly.

A **method** performs an operation and uses parentheses:

```python
df.head()
```

An **attribute** provides information and does not normally use parentheses:

```python
df.shape
```

Writing `df.shape()` is a common beginner error because `shape` is not a method.

## Break it, observe it, repair it

### Broken code

```python
import pandas as pd

df = pd.read_csv("E26_TAN7_service_experiences_raw.csv")
```

The filename is deliberately wrong: `experiences` should be `experience`.

1. Run the code.
2. Read the final line of the error message.
3. Identify the filename Python tried to open.
4. Repair the filename.
5. Rerun the cell.

This is ordinary debugging, not evidence that pandas is broken.

## Exercise 3.3.1 — Load and verify

1. Import pandas as `pd`.
2. Load the course CSV from the raw GitHub URL.
3. Display the first five rows.
4. Store the DataFrame in a variable called `df`.
5. Use `type(df)` and explain the result.

<details>
<summary>Suggested solution</summary>

```python
import pandas as pd

url = "https://raw.githubusercontent.com/asmrabbi/E26_TAN7_Scripting_CPH/main/data/E26_TAN7_service_experience_raw.csv"
df = pd.read_csv(url)

display(df.head())
print(type(df))
```

`df` is a pandas DataFrame: an in-memory tabular object created by reading the CSV.

</details>

## Exercise 3.3.2 — Explain the file/DataFrame distinction

A student says:

> “I changed a value in `df`, so I have permanently changed the original CSV on GitHub.”

Explain why this is normally false.

<details>
<summary>Suggested answer</summary>

`pd.read_csv()` reads the file into a DataFrame in the current Python runtime. Modifying that DataFrame changes the in-memory object. It does not automatically write changes back to the source file or GitHub repository.

</details>

## Tutorial 3.3 summary

You should now be able to:

- import pandas;
- explain a DataFrame and a Series;
- load CSV data from a raw URL or file path;
- recognise common file-loading errors;
- explain why the source file and DataFrame are different objects.

---

# Tutorial 3.4 — Inspecting and Understanding a Dataset

## Tutorial 3.4 overview

After a dataset loads successfully, do not immediately calculate an average or make a chart. First inspect what was actually loaded. This tutorial introduces a repeatable first-inspection routine.

**Core vocabulary:** preview, shape, index, column name, dtype, non-null count, random sample, schema, inspection.

## Start from a fresh load

```python
import pandas as pd

url = "https://raw.githubusercontent.com/asmrabbi/E26_TAN7_Scripting_CPH/main/data/E26_TAN7_service_experience_raw.csv"
df = pd.read_csv(url)
```

## `head()` — inspect the first rows

```python
df.head()
```

By default, `head()` shows the first five rows.

```python
df.head(10)
```

shows ten.

### What `head()` can tell you

- whether the expected columns appear;
- whether the values roughly resemble the expected data;
- whether column names loaded correctly;
- whether an obvious parsing problem occurred.

### What `head()` cannot tell you

It cannot prove that the first five rows are representative of the entire dataset.

## `tail()` — inspect the final rows

```python
df.tail()
```

This can reveal problems that do not appear at the beginning of a file.

## `sample()` — inspect rows from different positions

```python
df.sample(5, random_state=42)
```

`sample(5)` chooses five rows. `random_state=42` makes the teaching example reproducible so that students running the same pandas version and data can usually see the same sampled row positions.

Do not use a random sample as proof that the dataset has no errors. It is an inspection aid.

## `shape` — how many rows and columns?

```python
df.shape
```

**Expected output for the course dataset**

```text
(121, 14)
```

The first number is the row count. The second is the column count.

You can unpack the pair:

```python
rows, columns = df.shape

print("Rows:", rows)
print("Columns:", columns)
```

**Expected output**

```text
Rows: 121
Columns: 14
```

## `len(df)` — another way to count rows

```python
len(df)
```

**Expected output**

```text
121
```

`len(df)` counts rows in this context. It does not report the number of columns.

## `columns` — inspect column names

```python
df.columns
```

You should see the fourteen column labels.

For a simple Python list:

```python
print(df.columns.tolist())
```

Expected labels:

```text
['record_id', 'report_month', 'city', 'service_type', 'cases_received', 'cases_resolved', 'resolution_days', 'satisfaction_score', 'digital_cases', 'in_person_cases', 'repeat_contacts', 'complaints_received', 'staff_hours', 'feedback']
```

Column names matter because later code must match them exactly.

## `index` — inspect row labels

```python
df.index
```

For this freshly loaded dataset, pandas creates a default integer-like index starting at 0.

The index is not the same as `record_id`.

This distinction matters:

```text
DataFrame index: 0, 1, 2, 3, ...
record_id values: SR2026-0001, SR2026-0002, SR2026-0003, ...
```

## `dtypes` — how pandas currently represents each column

```python
df.dtypes
```

Numeric columns such as `cases_received` should be recognised as numeric. Text-like columns may appear as `object`, `str`, or a pandas string dtype depending on the pandas version and configuration.

Do not memorise one exact printed dtype name for text. Focus on the conceptual question:

> Did pandas recognise a column in a way that is usable for the operation we want to perform?

A particularly important column is `resolution_days`. It contains the word `unknown` in three records, so pandas cannot safely treat every value in that column as an ordinary number during a basic import.

## `info()` — compact structural inspection

```python
df.info()
```

`info()` reports:

- number of rows;
- column names;
- number of non-missing values in each column;
- technical dtypes;
- approximate memory usage.

You do not need to memorise the full display. Learn to read it.

For the course dataset, pay particular attention to:

- `satisfaction_score`, which has four missing values;
- `feedback`, which has three missing values;
- `resolution_days`, which is not straightforwardly numeric because of a non-numeric entry.

## A repeatable first-inspection routine

Use this block whenever you meet an unfamiliar DataFrame:

```python
print("Shape:", df.shape)
print("\nColumns:")
print(df.columns.tolist())

print("\nFirst rows:")
display(df.head())

print("\nData types:")
print(df.dtypes)

print("\nInfo:")
df.info()
```

This does not complete a data-quality assessment, but it prevents many careless mistakes.

### Example 3.4.1 — Interpret shape correctly

```python
print(df.shape)
```

Output:

```text
(121, 14)
```

Correct statement:

> The DataFrame currently contains 121 rows and 14 columns.

Incorrect statement:

> The dataset contains 121 citizens.

Why? Because the unit of observation is a service-category-city-month record, not a citizen.

### Example 3.4.2 — Compare `head()` and `sample()`

```python
print("First five rows")
display(df.head())

print("Random sample")
display(df.sample(5, random_state=42))
```

The purpose is not to calculate anything. It is to inspect more than one part of the table.

## Break it, observe it, repair it

### Broken code

```python
print(df.shape())
```

You may receive an error because `shape` is an attribute, not a callable method.

### Repair

```python
print(df.shape)
```

Use parentheses for methods such as `head()`, but not for `shape`.

## Exercise 3.4.1 — Produce an inspection note

Using the course DataFrame, write code that reports:

1. number of rows;
2. number of columns;
3. all column names;
4. first three rows;
5. last three rows;
6. technical dtypes;
7. `df.info()`.

Then write three sentences describing what you learned **without making claims about real service performance**.

<details>
<summary>Suggested technical solution</summary>

```python
print("Rows:", df.shape[0])
print("Columns:", df.shape[1])
print("Column names:", df.columns.tolist())

display(df.head(3))
display(df.tail(3))

print(df.dtypes)
df.info()
```

A suitable interpretation would mention the 121 × 14 structure, the mix of numeric/text-like columns, and the visible missing/non-numeric issues. It should also note that the dataset is synthetic teaching data.

</details>

## Exercise 3.4.2 — Why inspect beyond the first five rows?

Explain two reasons why `df.head()` alone is not enough for data-quality assessment.

<details>
<summary>Suggested answer</summary>

Problems may occur later in the file, and the first rows may not represent the distribution of categories or values across the dataset. `head()` is a preview, not a quality guarantee.

</details>

## Tutorial 3.4 summary

You should now have a standard first-inspection routine using:

```python
df.head()
df.tail()
df.sample()
df.shape
df.columns
df.dtypes
df.info()
```

More importantly, you should be able to explain what these outputs mean and what they do **not** prove.

---
# Tutorial 3.5 — Selecting and Filtering Data

## Tutorial 3.5 overview

A DataFrame may contain many rows and columns, but most analytical questions use only a subset. Selection answers questions such as:

- Which columns do I need?
- Which rows meet a condition?
- Which records belong to one category?
- Which records have values above or below a threshold?

This tutorial introduces column selection, `.loc[]`, `.iloc[]` and Boolean filtering. The goal is not to memorise syntax but to understand how a question becomes a transparent selection rule.

**Core vocabulary:** selection, subset, label, position, Boolean mask, filter, condition, `loc`, `iloc`, `isin`.

## Select one column

```python
city = df["city"]
city.head()
```

`df["city"]` returns a pandas `Series`.

You can verify:

```python
print(type(df["city"]))
```

### Why the column name uses quotation marks

```python
df["city"]
```

uses the string `"city"` as a column label.

This is different from:

```python
df[city]
```

which asks Python to find a variable called `city` and use its value as the key.

Unless you deliberately created such a variable, that code will fail.

### Example 3.5.1 — Select a numeric column

```python
cases = df["cases_received"]
print(cases.head())
```

You now have a one-dimensional Series containing the values from that column.

A Series supports calculations such as:

```python
print(cases.sum())
```

We will study calculations systematically in Tutorial 3.7.

## Select several columns

Use a list of column names inside the selection brackets:

```python
subset = df[["city", "service_type", "cases_received"]]
subset.head()
```

Notice the **double square brackets**:

```text
outer [ ... ]  → select from the DataFrame
inner [ ... ]  → Python list of column names
```

### Example 3.5.2 — Build a readable preview table

```python
columns_to_show = [
    "record_id",
    "city",
    "service_type",
    "cases_received",
    "cases_resolved"
]

preview = df[columns_to_show]
preview.head()
```

Separating the list from the selection can make longer code easier to read.

## Selecting by label with `.loc[]`

`.loc[]` is primarily **label-based**.

For the default index:

```python
df.loc[0]
```

returns the row labelled `0`.

You can select rows and columns together:

```python
df.loc[0:4, ["city", "service_type", "cases_received"]]
```

### Important slicing detail

For label-based `.loc[]` slicing, the endpoint is normally included.

```python
df.loc[0:4]
```

therefore includes labels `0`, `1`, `2`, `3` and `4` when those labels exist.

## Selecting by position with `.iloc[]`

`.iloc[]` is **position-based**.

```python
df.iloc[0]
```

returns the first row.

```python
df.iloc[0:5]
```

returns the first five positions: 0 through 4.

You can select row and column positions together:

```python
df.iloc[0:5, 0:4]
```

This means:

- first five row positions;
- first four column positions.

### `.loc[]` versus `.iloc[]`

| Tool | Think in terms of | Example |
|---|---|---|
| `.loc[]` | labels/names | `df.loc[0:4, ["city", "cases_received"]]` |
| `.iloc[]` | integer positions | `df.iloc[0:5, 0:3]` |

A useful rule:

> Use `.loc[]` when your reasoning is about named labels or conditions. Use `.iloc[]` when your reasoning is explicitly about positions.

## Boolean filtering

Suppose the analytical question is:

> Which rows report more than 100 cases received?

First create the comparison:

```python
df["cases_received"] > 100
```

This produces a Series of `True` and `False` values.

Then use that Boolean Series to keep the matching rows:

```python
high_case_rows = df[df["cases_received"] > 100]
high_case_rows
```

### Example 3.5.3 — Filter by category

```python
housing = df[df["service_type"] == "Housing"]
housing
```

This keeps rows where the stored value exactly matches `"Housing"`.

String matching is case-sensitive.

```python
df[df["service_type"] == "housing"]
```

will not match `"Housing"`.

Do not immediately lowercase the source data just to make a filter work. In Lecture 5, first inspect the stored categories. Category standardisation belongs mainly to Lecture 6.

## Combine conditions with `&`

Question:

> Which Copenhagen rows have more than 100 cases received?

```python
result = df[
    (df["city"] == "Copenhagen") &
    (df["cases_received"] > 100)
]

result
```

### Why the parentheses matter

With pandas Boolean conditions, write each comparison inside parentheses:

```python
(df["city"] == "Copenhagen")
```

and combine them with `&`.

Do not write:

```python
(df["city"] == "Copenhagen") and (df["cases_received"] > 100)
```

Python's ordinary `and` operator does not work element-by-element across a pandas Series in the way required here.

## Combine alternatives with `|`

Question:

> Which rows are Housing or Transport?

```python
result = df[
    (df["service_type"] == "Housing") |
    (df["service_type"] == "Transport")
]
```

`|` is the element-wise OR operator in this pandas context.

## Use `.isin()` for several allowed categories

The previous filter can also be written more compactly:

```python
result = df[
    df["service_type"].isin(["Housing", "Transport"])
]
```

Read it as:

> Keep rows where `service_type` is in this list of allowed values.

This often becomes easier to read when the list contains several categories.

### Example 3.5.4 — Filter and then choose columns

```python
result = df.loc[
    df["cases_received"] > 100,
    ["record_id", "city", "service_type", "cases_received"]
]

result
```

This combines a row condition with named column selection.

The structure is:

```text
df.loc[row_condition, columns_to_return]
```

## Filtering is an analytical decision

When you create:

```python
copenhagen = df[df["city"] == "Copenhagen"]
```

you are not merely using syntax. You are deciding that only rows exactly labelled `Copenhagen` belong to this subset.

But the raw course data also contains:

```text
 copenhagen 
Koebenhavn
```

Should those count as Copenhagen?

That is a cleaning/classification question. Lecture 5 should reveal the problem; Lecture 6 will make and document the transformation decision.

## Break it, observe it, repair it

### Broken code 1

```python
df["City"]
```

The actual column is `city` with a lowercase `c`.

Likely result:

```text
KeyError: 'City'
```

### Repair

```python
df["city"]
```

### Broken code 2

```python
df[(df["city"] == "Copenhagen") and (df["cases_received"] > 100)]
```

### Repair

```python
df[
    (df["city"] == "Copenhagen") &
    (df["cases_received"] > 100)
]
```

## Exercise 3.5.1 — Column selection

Write code to display only:

- `record_id`;
- `service_type`;
- `satisfaction_score`;
- `feedback`.

Then explain whether the result is a Series or DataFrame.

<details>
<summary>Suggested solution</summary>

```python
selected = df[[
    "record_id",
    "service_type",
    "satisfaction_score",
    "feedback"
]]

display(selected)
```

The result is a DataFrame because several columns are selected using a list.

</details>

## Exercise 3.5.2 — Filter a numeric condition

Find rows where `cases_received` is at least 100.

<details>
<summary>Suggested solution</summary>

```python
result = df[df["cases_received"] >= 100]
display(result)
```

</details>

## Exercise 3.5.3 — Combine a category and numeric condition

Find Transport records with more than 90 cases received. Display only:

- `record_id`;
- `city`;
- `cases_received`.

<details>
<summary>Suggested solution</summary>

```python
result = df.loc[
    (df["service_type"] == "Transport") &
    (df["cases_received"] > 90),
    ["record_id", "city", "cases_received"]
]

display(result)
```

</details>

## Tutorial 3.5 summary

You should now be able to use:

```python
df["column"]
df[["column_a", "column_b"]]
df.loc[...]
df.iloc[...]
df[condition]
df[column].isin([...])
```

More importantly, you should recognise that a filter encodes an inclusion rule that may itself require justification.

---

# Tutorial 3.6 — Understanding Variables and Data Types

## Tutorial 3.6 overview

Python and pandas have technical data types, but data analysis also requires **conceptual data types**. A column can be stored as an integer while functioning conceptually as an identifier. A date may be stored as text. A number may represent a category rather than a measurable quantity.

This tutorial separates the **technical representation** from the **meaning of the variable**.

**Core vocabulary:** dtype, identifier, categorical variable, nominal variable, numeric count, numeric measure, free text, date-like value, missing value, valid range, unit.

## Technical dtype versus conceptual role

Consider:

```text
record_id = 1001
```

pandas may store `record_id` as an integer.

But conceptually, `record_id` is an identifier. Adding two record IDs is not a meaningful analytical operation.

This is why:

> **Numeric storage does not automatically mean numeric measurement.**

## Six useful conceptual variable roles for this course

### 1. Identifier

Examples:

```text
record_id
student_id
organisation_id
```

Identifiers distinguish entities or records. Their digits often function like labels rather than quantities.

### 2. Categorical variable

Examples:

```text
city
service_type
```

Categories describe groups or labels.

A categorical variable may use words or numeric codes. The important issue is the substantive meaning, not the visual appearance of the stored value.

### 3. Numeric count

Examples:

```text
cases_received
cases_resolved
```

Counts usually represent a number of occurrences/items. Zero can be meaningful.

### 4. Numeric measure/rating

Examples:

```text
resolution_days
satisfaction_score
```

These support arithmetic when validly recorded, but their scale and units must be known.

### 5. Free text

Example:

```text
feedback
```

Text can be searched, coded and later tokenised, but its meaning cannot be reduced automatically to one numeric variable without analytical choices.

### 6. Date/time-like variable

Example:

```text
report_month
```

A date may initially be stored as text. Its conceptual role is still temporal.

## Inspect pandas dtypes

```python
print(df.dtypes)
```

Do not read this as a complete data dictionary. It reports pandas' technical representation.

A robust interpretation might say:

> `cases_received` and `cases_resolved` are technically numeric and conceptually counts; `record_id` is technically integer-like but conceptually an identifier; `resolution_days` is conceptually numeric but its raw stored values include non-numeric text; `report_month` is conceptually date-like but may initially be loaded as text.

That is much more informative than simply copying the dtype list.

## Why `resolution_days` matters

Three raw values use the same textual placeholder:

```text
unknown
```

A column that otherwise looks numeric therefore contains mixed content.

Do **not** silently replace `unknown` with zero.

Possible meanings include:

- not measured;
- not known yet;
- not applicable;
- data-entry placeholder.

Lecture 6 will decide how to represent this consistently after inspecting the context.

## Missing, zero and textual placeholders are different

Consider:

```text
0
blank
unknown
not applicable
```

These should not automatically be collapsed into one value.

| Stored form | Possible interpretation |
|---|---|
| `0` | explicit numerical zero |
| blank / `NaN` | no stored value recognised by pandas |
| `unknown` | explicit textual statement that the value is unknown |
| `not applicable` | concept may not apply to that record |

Analytical consequences differ.

## Expected ranges and units

A variable becomes easier to validate when you know its expected domain.

For example:

```text
satisfaction_score
```

has an expected teaching range of **1 to 5**.

Values of `0.0` and `6.2` are therefore suspicious.

But a suspicious value is not the same as a proven explanation. It might reflect:

- an entry error;
- a different scale used in one source system;
- a transformation mistake;
- incorrect documentation.

The next step is investigation, not automatic clipping to `5`.

## Example 3.6.1 — Build a conceptual type table

```python
conceptual_types = {
    "record_id": "identifier",
    "report_month": "date-like",
    "city": "categorical",
    "service_type": "categorical",
    "cases_received": "numeric count",
    "cases_resolved": "numeric count",
    "resolution_days": "numeric measure",
    "satisfaction_score": "numeric rating",
    "digital_cases": "numeric count",
    "in_person_cases": "numeric count",
    "repeat_contacts": "numeric count",
    "complaints_received": "numeric count",
    "staff_hours": "numeric measure",
    "feedback": "free text"
}

for column, role in conceptual_types.items():
    print(column, "->", role)
```

The dictionary does not change the DataFrame. It documents your interpretation of each variable's role.

## Example 3.6.2 — Compare technical and conceptual types

```python
for column in df.columns:
    print(column, "| pandas dtype:", df[column].dtype)
```

Then compare the printed dtype with the conceptual role table.

Question:

> Which columns are most likely to require conversion before later analysis?

A strong answer should mention at least `report_month` and `resolution_days`, while explaining why.

## Draft a variable expectation

For each important variable, document:

```text
Variable name:
Meaning:
Conceptual type:
Unit/scale:
Expected valid values:
Can zero be meaningful?
Can missing be meaningful?
Known concerns:
```

### Example

```text
Variable name: satisfaction_score
Meaning: satisfaction rating for the service record
Conceptual type: numeric rating
Unit/scale: teaching scale 1–5
Expected valid values: 1 through 5
Can zero be meaningful? not according to current teaching schema
Can missing be meaningful? yes, if no score was recorded
Known concerns: four missing values; inspect the two out-of-range values
```

## Exercise 3.6.1 — Classify the course variables

Create a table with these columns:

```text
variable | conceptual_type | expected_values_or_unit | possible_quality_question
```

Complete it for all fourteen variables.

Do not copy `df.dtypes` as the conceptual type.

## Exercise 3.6.2 — Explain why this statement is wrong

> “`record_id` is an integer, so calculating its average is useful.”

<details>
<summary>Suggested answer</summary>

The technical dtype may be integer, but the values function as identifiers. Arithmetic on the identifiers has no meaningful interpretation unless the ID system itself encodes a substantive quantity, which is not the case here.

</details>

## Tutorial 3.6 summary

You should now distinguish:

```text
HOW PANDAS STORES A COLUMN
            ≠
WHAT THE VARIABLE MEANS
```

This distinction is essential before selecting statistical operations, cleaning rules or visualisations.

---

# Tutorial 3.7 — Basic Calculations and Descriptive Summaries

## Tutorial 3.7 overview

Once a numeric column has been loaded, pandas can perform calculations across all its rows. These operations make the transition from simply **looking at data** to beginning **quantitative exploration**.

Lecture 5 calculations are preliminary because the raw dataset still contains known quality concerns. The purpose is to learn both the calculation and the question:

> **Can I trust the values being summarised?**

**Core vocabulary:** count, sum, mean, median, minimum, maximum, standard deviation, quartile, descriptive statistics, denominator, missing value.

## `count()` — count non-missing values

```python
df["cases_received"].count()
```

**Expected output**

```text
121
```

For `feedback`:

```python
df["feedback"].count()
```

**Expected output**

```text
118
```

Why 118 instead of 121? Three feedback values are missing.

### `count()` versus `len()`

```python
print("Rows:", len(df))
print("Non-missing feedback values:", df["feedback"].count())
```

Expected:

```text
Rows: 121
Non-missing feedback values: 118
```

This distinction becomes important when calculating percentages.

## `sum()` — total a numeric column

```python
total_cases_received = df["cases_received"].sum()
print(total_cases_received)
```

**Expected output on the raw teaching dataset**

```text
12653
```

Do not immediately interpret this as a trustworthy real-world total. The raw column contains a negative value that will be investigated later.

That gives us an important lesson:

> pandas can calculate correctly from values that are substantively wrong.

## `mean()` — arithmetic average

```python
mean_cases = df["cases_received"].mean()
print(mean_cases)
```

**Expected output**

```text
104.570248
```

The mean is:

```text
sum of values / number of included values
```

A mean can be sensitive to extreme or invalid observations.

## `median()` — middle value

```python
median_cases = df["cases_received"].median()
print(median_cases)
```

**Expected output**

```text
102.0
```

The median is the middle value after sorting the observations. With an even number of observations, pandas uses the average of the two middle values.

### Mean versus median

The raw course data gives:

```text
Mean:   104.570248
Median: 102.0
```

They are not identical because they answer different questions and respond differently to the distribution of values.

Do not automatically choose one. Ask what summary is appropriate and whether the underlying values are valid.

## `min()` and `max()`

```python
print("Minimum:", df["cases_received"].min())
print("Maximum:", df["cases_received"].max())
```

**Expected output**

```text
Minimum: -4
Maximum: 185
```

The minimum immediately raises a quality question:

> Can a number of received cases legitimately be negative?

A descriptive calculation has therefore helped us discover a potential data problem.

## `std()` — standard deviation

```python
std_cases = df["cases_received"].std()
print(round(std_cases, 2))
```

**Expected output**

```text
27.26
```

At this level, interpret standard deviation as an indicator of spread around the mean. A larger standard deviation generally indicates that values are more dispersed.

You are **not** required to calculate the standard-deviation formula by hand in this course.

## `describe()` — several summaries together

```python
df["cases_received"].describe()
```

Expected values are approximately:

```text
count    121.000000
mean     104.570248
std       27.256750
min       -4.000000
25%       86.000000
50%      102.000000
75%      122.000000
max      185.000000
```

### How to read the output

- `count`: non-missing observations included;
- `mean`: arithmetic average;
- `std`: standard deviation;
- `min`: smallest observed value;
- `25%`: first quartile;
- `50%`: median;
- `75%`: third quartile;
- `max`: largest observed value.

The quartiles divide the ordered observations into parts. You do not need advanced distribution theory here; you should simply recognise that they provide more information than one average.

## `round()` for readable output

```python
mean_cases = df["cases_received"].mean()
print("Mean cases:", round(mean_cases, 2))
```

Output:

```text
Mean cases: 104.57
```

Rounding changes how a value is displayed or stored after rounding. It does not improve the quality of the underlying data.

## Calculate several totals

### Example 3.7.1 — Received and resolved totals

```python
total_received = df["cases_received"].sum()
total_resolved = df["cases_resolved"].sum()

print("Cases received:", total_received)
print("Cases resolved:", total_resolved)
```

**Expected output**

```text
Cases received: 12653
Cases resolved: 11958
```

This immediately invites a derived calculation, which we will formalise in Tutorial 3.8.

## Find the row associated with an extreme value

Knowing that the maximum is 185 is useful, but you may want to inspect the record.

```python
max_index = df["cases_received"].idxmax()
df.loc[max_index]
```

`idxmax()` returns the index label of the first maximum value.

Likewise:

```python
min_index = df["cases_received"].idxmin()
df.loc[min_index]
```

This is especially useful when a minimum or maximum looks suspicious.

### Example 3.7.2 — Inspect the negative minimum

```python
min_index = df["cases_received"].idxmin()

print("Minimum row index:", min_index)
display(df.loc[[min_index]])
```

The point is not to delete the record. The point is to connect a statistical signal to the underlying row.

## Missing values and numerical calculations

Many pandas summary methods skip missing values by default.

For example:

```python
df["satisfaction_score"].mean()
```

uses the available non-missing scores.

This is convenient, but it creates an interpretive responsibility:

> When you report an average, know how many observations actually contributed to it.

Check:

```python
print("Rows:", len(df))
print("Available satisfaction scores:", df["satisfaction_score"].count())
```

Expected:

```text
Rows: 121
Available satisfaction scores: 117
```

## Preliminary satisfaction mean

```python
mean_satisfaction = df["satisfaction_score"].mean()
print(round(mean_satisfaction, 2))
```

**Expected raw-data result**

```text
4.11
```

But the teaching schema says the expected range is 1–5, and the raw data contains two out-of-range values. Therefore:

> **4.11 is a technically correct mean of the currently stored non-missing values, but it should not yet be treated as a validated analytical result.**

This distinction is central to the course.

## Exercise 3.7.1 — Produce a numeric summary

For `cases_resolved`, calculate:

1. count;
2. sum;
3. mean;
4. median;
5. minimum;
6. maximum;
7. standard deviation;
8. `describe()`.

Then write two observations and one quality question.

## Exercise 3.7.2 — Mean or median?

Calculate the mean and median of `cases_received`. Explain:

1. why they differ;
2. why the negative raw value matters;
3. why neither statistic alone tells you whether the dataset is reliable.

<details>
<summary>Suggested answer</summary>

The raw mean is approximately `104.57` and the median is `102.0`. They differ because they summarise the distribution differently. The negative count lowers the mean and is conceptually suspicious. Both statistics are mathematically valid calculations on the stored values, but data quality and measurement meaning must be assessed separately.

</details>

## Exercise 3.7.3 — Count the denominator explicitly

Calculate the mean satisfaction score and also print how many non-missing satisfaction scores contributed to the calculation.

<details>
<summary>Suggested solution</summary>

```python
mean_score = df["satisfaction_score"].mean()
valid_scores = df["satisfaction_score"].count()

print("Mean satisfaction:", round(mean_score, 2))
print("Scores included:", valid_scores)
```

Expected preliminary output:

```text
Mean satisfaction: 4.11
Scores included: 117
```

The output is still preliminary because the raw data contains an out-of-range score.

</details>

## Tutorial 3.7 summary

You should now be able to calculate and interpret:

```python
count()
sum()
mean()
median()
min()
max()
std()
describe()
idxmin()
idxmax()
```

The deeper lesson is that a calculation can be computationally correct while the input data remain questionable.

---

# Tutorial 3.8 — Creating New Measures from Existing Columns

## Tutorial 3.8 overview

A dataset often does not contain every quantity you want to analyse directly. You may derive a new variable from existing columns. This is one of the most useful reasons to work in pandas: arithmetic can be applied to an entire column at once.

Derived measures also introduce methodological responsibility. The formula, denominator, unit and assumptions should be visible.

**Core vocabulary:** derived variable, vectorised calculation, difference, rate, percentage, denominator, numerator, zero division, overall rate, row-level rate.

## Column arithmetic

In ordinary Python you might write:

```python
cases_received = 120
cases_resolved = 112
unresolved_cases = cases_received - cases_resolved
```

With pandas, the same logic can be applied to every row:

```python
df["unresolved_cases"] = (
    df["cases_received"] - df["cases_resolved"]
)
```

The new column is calculated row by row.

### Example 3.8.1 — Inspect the derived column

```python
df["unresolved_cases"] = (
    df["cases_received"] - df["cases_resolved"]
)

display(
    df[[
        "record_id",
        "cases_received",
        "cases_resolved",
        "unresolved_cases"
    ]].head(8)
)
```

A negative derived value should immediately trigger inspection.

For example, if `cases_resolved` is greater than `cases_received`, `unresolved_cases` becomes negative.

The formula is behaving correctly. The relationship between the source values may be questionable.

## Create a row-level resolution rate

A percentage can be calculated as:

```text
resolved / received × 100
```

In pandas:

```python
df["resolution_rate"] = (
    df["cases_resolved"] /
    df["cases_received"] * 100
)
```

### Example 3.8.2 — Inspect the rate

```python
display(
    df[[
        "record_id",
        "cases_received",
        "cases_resolved",
        "resolution_rate"
    ]]
)
```

You should notice at least three conceptual problems:

1. three rows exceed 100% because resolved cases exceed received cases;
2. one row has a negative `cases_received` value, so its calculated rate is not substantively meaningful;
3. a future or revised file could contain a zero denominator, so the rule for zero received cases must still be documented.

pandas may represent `0 / 0` as `NaN` rather than raising the same error you might see with ordinary scalar Python division. The supplied raw file does not currently contain a zero `cases_received` value, but code should still anticipate that boundary.

The important question is not merely “How do I suppress an unusual output?” It is:

> **What should the rate mean for invalid or zero received counts, and what does the data documentation say?**

## Do not confuse a row-level average rate with an overall rate

There are at least two different calculations someone might call “average resolution rate”.

### Method A — calculate each row's percentage, then average the percentages

```python
mean_row_rate = df["resolution_rate"].mean()
print(round(mean_row_rate, 2))
```

On the raw teaching data this produces a preliminary value around:

```text
93.66
```

### Method B — divide total resolved by total received

```python
overall_rate = (
    df["cases_resolved"].sum() /
    df["cases_received"].sum() * 100
)

print(round(overall_rate, 2))
```

On the raw teaching data:

```text
94.51
```

These are **not the same measure**.

Why?

Method A gives every row equal weight, regardless of whether it contains 5 cases or 500 cases. Method B effectively weights rows by the number of cases received.

This is a crucial analytical lesson:

> **Two reasonable-looking formulas can answer different questions. Always define the measure before reporting it.**

The raw dataset also contains quality problems, so neither result should yet be treated as final evidence.

## Percentage of rows with missing feedback

Start with a Boolean Series:

```python
df["feedback"].isna()
```

`True` behaves like 1 and `False` like 0 in many pandas aggregations, so:

```python
missing_feedback = df["feedback"].isna().sum()
total_rows = len(df)

missing_feedback_pct = missing_feedback / total_rows * 100

print("Missing feedback rows:", missing_feedback)
print("Missing feedback percentage:", round(missing_feedback_pct, 2))
```

**Expected output**

```text
Missing feedback rows: 1
Missing feedback percentage: 6.25
```

This percentage uses **all rows** as the denominator.

If you used another denominator, you would be answering another question.

## Percentage of rows belonging to a category

```python
housing_rows = (df["service_type"] == "Housing").sum()
housing_pct = housing_rows / len(df) * 100

print("Housing rows:", housing_rows)
print("Housing percentage:", round(housing_pct, 2))
```

Expected:

```text
Housing rows: 21
Housing percentage: 17.36
```

This means 17.36% of **rows in this raw teaching table** are labelled exactly `Housing`. It does not mean that 17.36% of citizens use Housing services.

The unit of observation determines the meaning of the percentage.

## Keep source values and derived values separate

A useful naming pattern is:

```text
source columns:
cases_received
cases_resolved

derived columns:
unresolved_cases
resolution_rate
```

Do not overwrite `cases_received` with the result of a percentage calculation. Keeping source and derived variables distinguishable improves traceability.

## Recalculate after cleaning

If Lecture 6 changes invalid source values, any derived column based on those values may need to be recalculated.

For example:

```text
raw source values
      ↓
derived raw rate
      ↓
clean source values
      ↓
RECALCULATE rate
```

Otherwise your DataFrame may contain a cleaned source column beside an outdated derived measure.

## Example 3.8.3 — Create a clearly named percentage

```python
df["resolved_pct_of_received"] = (
    df["cases_resolved"] /
    df["cases_received"] * 100
)
```

The longer name is more informative than simply `rate` because it states the numerator and denominator relationship.

## Exercise 3.8.1 — Derive a difference

Create:

```text
case_gap = cases_received - cases_resolved
```

Then:

1. show the five smallest values;
2. identify any negative results;
3. explain why a negative result requires investigation.

<details>
<summary>Suggested solution</summary>

```python
df["case_gap"] = df["cases_received"] - df["cases_resolved"]

print(df["case_gap"].nsmallest(5))

display(
    df.loc[
        df["case_gap"] < 0,
        ["record_id", "cases_received", "cases_resolved", "case_gap"]
    ]
)
```

A negative gap means the stored `cases_resolved` value exceeds `cases_received` for that row, or another source value is invalid. The code identifies the inconsistency but does not explain its cause.

</details>

## Exercise 3.8.2 — Explain two rate formulas

Write code for:

1. the mean of row-level resolution percentages;
2. total resolved divided by total received.

Then explain in ordinary language why they differ.

## Exercise 3.8.3 — Calculate a missing percentage

Calculate the percentage of missing values in `satisfaction_score` using:

```text
missing count / total rows × 100
```

Expected raw-data result:

```text
3.31
```

## Tutorial 3.8 summary

You should now be able to:

- create new columns from existing columns;
- calculate differences and percentages;
- state the numerator and denominator;
- identify zero-denominator and >100% problems;
- explain why an average row rate and an aggregate rate can differ;
- recognise that derived measures must often be recalculated after cleaning.

---

# Tutorial 3.9 — Categories, Frequencies and Group Comparisons

## Tutorial 3.9 overview

Many social and organisational datasets contain categories: cities, organisations, sectors, service types, response options or coded themes. pandas can count categories and calculate summaries for each group.

This is the first point where Lecture 5 becomes a genuine **introductory exploratory analysis** rather than only file handling.

**Core vocabulary:** unique value, frequency, proportion, mode, group, aggregation, `groupby`, `agg`, cross-tabulation, denominator.

## Inspect unique values before counting them

```python
print(df["service_type"].unique())
```

Expected raw labels:

```text
['Housing' 'Transport' 'Employment' 'Waste' 'Citizen Services'
 'Transport ' 'Citizen services' 'WASTE' 'Employment Services']
```

For `city`:

```python
print(df["city"].unique())
```

The raw values include several inconsistent forms, for example:

```text
Copenhagen
 copenhagen 
AALBORG
Koebenhavn
Aalborg
```

This is why `unique()` is useful before group analysis.

If categories that should be equivalent are split across spellings, the group results will also be split.

## Count distinct values with `nunique()`

```python
df["service_type"].nunique()
```

**Expected output**

```text
9
```

The value is nine because four inconsistent one-row labels are stored separately from the five intended service categories. For the raw `city` column, `nunique()` counts the stored strings as distinct. That number therefore reflects data consistency as well as conceptual categories.

## Frequency table with `value_counts()`

```python
df["service_type"].value_counts()
```

**Expected raw counts**

```text
Citizen Services    24
Employment          24
Transport           24
Waste               24
Housing             21

Additional inconsistent raw labels occur once each: `Citizen services`, `Employment Services`, `Transport ` and `WASTE`.
```

A frequency table answers:

> How many rows currently carry each stored category label?

It does not automatically answer:

> How many people belong to each category?

Again, the unit of observation matters.

## Percentages with `normalize=True`

```python
service_pct = (
    df["service_type"]
    .value_counts(normalize=True) * 100
)

print(service_pct.round(2))
```

Expected percentages:

```text
Citizen Services    19.83
Employment          19.83
Transport           19.83
Waste               19.83
Housing             17.36

Each inconsistent one-row label accounts for 0.83%.
```

The denominator is the set of non-missing `service_type` values used by `value_counts()`.

## Include missing values when relevant

By default, `value_counts()` often drops missing values.

For a column where missingness matters, use:

```python
df["feedback"].value_counts(dropna=False)
```

For free text this table may be too detailed to be analytically useful, but the `dropna=False` principle is important.

## Mode

The mode is the most frequently occurring value.

```python
df["service_type"].mode()
```

Expected:

```text
Citizen Services
Employment
Transport
Waste
```

The four values tie at 24 rows each. A dataset can have more than one mode when several values tie for highest frequency.

## Introductory `groupby()`

Suppose the question is:

> What is the mean number of cases received for each service type?

```python
mean_by_service = (
    df.groupby("service_type")["cases_received"]
      .mean()
)

print(mean_by_service.round(2))
```

Expected raw-data result (trailing spaces in a label are visually subtle):

```text
Citizen Services       129.92
Citizen services        99.00
Employment              88.04
Employment Services     97.00
Housing                115.86
Transport              102.54
Transport               107.00
WASTE                   90.00
Waste                   88.96
```

These are **preliminary** because the Waste group includes a negative raw value and inconsistent service labels form separate groups.

### Conceptual model of `groupby()`

Think:

```text
SPLIT rows into groups
        ↓
APPLY a calculation to each group
        ↓
COMBINE the group results
```

This is often described as **split–apply–combine**.

## Group totals

```python
total_by_service = (
    df.groupby("service_type")["cases_received"]
      .sum()
)

print(total_by_service)
```

Expected:

```text
Citizen Services       3118
Citizen services         99
Employment             2113
Employment Services      97
Housing                2433
Transport              2461
Transport               107
WASTE                    90
Waste                  2135
```

The raw duplicate record and invalid negative value can affect these totals.

## Several calculations at once with `.agg()`

```python
summary = (
    df.groupby("service_type")["cases_received"]
      .agg(["count", "sum", "mean", "median", "min", "max"])
)

print(summary.round(2))
```

Expected structure:

```text
                     count   sum    mean  median  min  max
service_type
Citizen Services        24  3118  129.92   122.0   94  185
Citizen services         1    99   99.00    99.0   99   99
Employment              24  2113   88.04    86.5   62  129
Employment Services      1    97   97.00    97.0   97   97
Housing                 21  2433  115.86   113.0   86  157
Transport               24  2461  102.54    98.5   75  144
Transport                1   107  107.00   107.0  107  107
WASTE                    1    90   90.00    90.0   90   90
Waste                   24  2135   88.96    89.5   -4  138
```

The `min = -4` in Waste is a visible warning. The split labels are a second warning not to interpret the group summaries uncritically.

## Grouping by a dirty category can mislead

Try:

```python
city_summary = (
    df.groupby("city")["cases_received"]
      .agg(["count", "sum", "mean"])
)

print(city_summary.round(2))
```

The raw city spellings produce separate groups such as:

```text
Copenhagen
 copenhagen 
Koebenhavn
Aalborg
AALBORG
```

This is a powerful demonstration of why **cleaning decisions affect analytical results**.

Do not merge them yet in Lecture 5. Document the problem.

## Cross-tabulation with `pd.crosstab()`

A crosstab counts combinations of two categorical variables.

```python
service_by_city = pd.crosstab(
    df["city"],
    df["service_type"]
)

service_by_city
```

Conceptually, rows are city labels and columns are service types.

The raw crosstab will again reveal split city spellings.

### Percentage crosstab — optional extension

```python
service_by_city_pct = pd.crosstab(
    df["city"],
    df["service_type"],
    normalize="index"
) * 100

service_by_city_pct.round(1)
```

`normalize="index"` makes each row sum to approximately 100%.

Always state what has been normalised. Row percentages and column percentages answer different questions.

## Example 3.9.1 — Compare satisfaction by service type

```python
satisfaction_by_service = (
    df.groupby("service_type")["satisfaction_score"]
      .agg(["count", "mean", "median", "min", "max"])
)

print(satisfaction_by_service.round(2))
```

Before interpreting the output, ask:

1. Are there missing scores?
2. Are all scores within the expected 1–5 range?
3. Does each group contain enough observations to support a broad claim?
4. Is the dataset real or synthetic?

This checklist is more important than the code itself.

## Observation versus conclusion

A defensible preliminary observation:

> In the raw teaching dataset, Transport has a higher calculated mean `cases_received` than Employment.

An unjustified conclusion:

> Transport services are objectively busier than Employment services in Denmark.

The second statement leaps beyond the synthetic dataset, ignores quality issues and generalises to a population the data do not represent.

## Exercise 3.9.1 — Frequencies and percentages

For `service_type`:

1. print unique values;
2. count unique values;
3. create a frequency table;
4. create a percentage table;
5. identify the most frequent stored category.

## Exercise 3.9.2 — Grouped summary

Calculate `count`, `mean`, `median`, `min` and `max` of `cases_received` for each `service_type`.

Then answer:

1. Which group contains the suspicious negative minimum?
2. Why might that affect the mean?
3. Why should the output still be labelled preliminary?

## Exercise 3.9.3 — Discover category fragmentation

Group `cases_received` by raw `city` and inspect the output.

Write a short note explaining why the current city groups should probably be reviewed before final analysis.

## Exercise 3.9.4 — Create a crosstab

Create a cross-tabulation of `city` by `service_type`.

Then explain:

- what one cell counts;
- why the raw city inconsistencies matter;
- what a row-normalised percentage would mean.

## Tutorial 3.9 summary

You should now be able to use:

```python
unique()
nunique()
value_counts()
mode()
groupby()
agg()
pd.crosstab()
```

You should also understand that group analysis is only as coherent as the categories and values used to define the groups.

---
# Tutorial 3.10 — Finding Data-Quality Problems

## Tutorial 3.10 overview

Data quality is not one single property. A dataset can be complete but inconsistent, internally consistent but invalid, or technically clean but poorly documented. This tutorial turns the observations from earlier tutorials into a structured first data-quality audit.

The goal is still **detection and documentation**, not permanent cleaning.

**Core vocabulary:** completeness, uniqueness, validity, consistency, plausibility, logical consistency, missingness, duplicate, range check, cross-field check, temporary conversion.

## A practical beginner data-quality framework

Use these questions:

| Dimension | Beginner question |
|---|---|
| **Completeness** | Are expected values missing? |
| **Uniqueness** | Are records or identifiers unexpectedly repeated? |
| **Validity** | Do values fit the documented format/range? |
| **Consistency** | Are equivalent categories written consistently? |
| **Plausibility** | Does a value make sense in context? |
| **Logical consistency** | Do related columns contradict one another? |
| **Provenance** | Do we know where the data came from and how it was produced? |

These dimensions overlap. They are a thinking aid, not a universal scoring system.

## Missing values with `isna()`

```python
df.isna()
```

returns a Boolean DataFrame indicating whether each cell is missing.

That is useful computationally but difficult to read as a complete table. Summarise by column:

```python
missing_by_column = df.isna().sum()
print(missing_by_column)
```

For the supplied course dataset, pandas should recognise:

```text
satisfaction_score    4
feedback              3
```

with zero missing values in the other columns on the basic import.

### Total recognised missing cells

```python
total_missing = df.isna().sum().sum()
print(total_missing)
```

Expected:

```text
7
```

This does **not** mean the dataset contains only seven problematic cells. Text such as `unknown` is a stored string, not a pandas missing value on basic import.

## Missing percentages

```python
missing_pct = df.isna().mean() * 100
print(missing_pct.round(2))
```

Because `True` is treated like 1 and `False` like 0, the mean of the Boolean missingness indicator becomes a proportion.

The raw missing percentages are approximately `2.48%` for `feedback` (3 of 121 rows) and `3.31%` for `satisfaction_score` (4 of 121 rows).

## Inspect the rows with missing values

### Missing satisfaction score

```python
missing_satisfaction = df[df["satisfaction_score"].isna()]
display(missing_satisfaction)
```

### Missing feedback

```python
missing_feedback = df[df["feedback"].isna()]
display(missing_feedback)
```

Do not immediately drop these rows. First ask whether the missing value affects the analysis you want to perform.

## Exact duplicate rows

```python
duplicate_mask = df.duplicated()
print(duplicate_mask)
```

Count them:

```python
print("Exact duplicate rows:", df.duplicated().sum())
```

Expected:

```text
Exact duplicate rows: 1
```

Display the duplicate occurrence:

```python
display(df[df.duplicated()])
```

### Why only one duplicate is counted

If two rows are identical, pandas normally treats the first occurrence as the original and flags the later occurrence as the duplicate when using the default settings.

To show **all members of duplicate groups**:

```python
display(df[df.duplicated(keep=False)])
```

This makes it easier to compare the repeated rows.

## Duplicate identifiers are not the same as duplicate rows

Check `record_id`:

```python
id_duplicates = df["record_id"].duplicated(keep=False)

display(
    df.loc[
        id_duplicates,
        ["record_id", "report_month", "city", "service_type"]
    ]
)
```

The repeated identifiers are `SR2026-0027` and `SR2026-0079`. The first belongs to an exact duplicate row; the second appears on two different service records.

A repeated identifier may indicate:

- a duplicated row;
- two legitimate records sharing an ID because the ID is not actually unique;
- an export problem;
- a version/history record;
- a data-entry error.

Therefore:

> **Repeated identifier ≠ automatically delete the row.**

## Category consistency

```python
print(df["city"].value_counts(dropna=False))
```

The raw column contains labels such as:

```text
Copenhagen
 copenhagen 
AALBORG
Aalborg
Koebenhavn
```

Potential consistency issues include:

- leading/trailing whitespace;
- uppercase/lowercase differences;
- alternative spellings/transliterations;
- abbreviations;
- old/new category names.

Lecture 6 will standardise categories only after the intended equivalences are justified.

## Numeric range checks

### Negative case counts

```python
negative_received = df[df["cases_received"] < 0]
display(negative_received)
```

If counts should be zero or positive, this row violates the documented expectation.

### Out-of-range satisfaction

```python
out_of_range_satisfaction = df[
    (df["satisfaction_score"] < 1) |
    (df["satisfaction_score"] > 5)
]

display(out_of_range_satisfaction)
```

The raw file contains scores of `0.0` and `6.2`, which conflicts with the intended 1–5 teaching scale.

### Why not simply force 0.0 and 6.2 into the 1–5 range?

Because we do not know the cause. Clipping the value to the nearest allowed boundary invents a correction.

A defensible Lecture 5 note is:

> One non-missing satisfaction value falls outside the documented 1–5 range and should be investigated before final analysis.

## Cross-field logical checks

Some problems are visible only when two columns are compared.

### Resolved greater than received

```python
resolved_gt_received = df[
    df["cases_resolved"] > df["cases_received"]
]

display(
    resolved_gt_received[[
        "record_id",
        "cases_received",
        "cases_resolved"
    ]]
)
```

This may be logically impossible under one definition of the variables, but there are possible alternative explanations:

- cases resolved this month may include cases received in earlier months;
- the columns may use different time windows;
- one value may be erroneous.

This is why documentation matters.

Do not infer an error solely from intuition if the variable definitions are ambiguous.

## Detect a numeric-looking column containing text

`resolution_days` is intended to be numeric, but three values are `unknown`.

Inspect the unique raw values:

```python
print(df["resolution_days"].unique())
```

A temporary conversion can help identify values that cannot be parsed numerically **without modifying the original column**:

```python
resolution_numeric_preview = pd.to_numeric(
    df["resolution_days"],
    errors="coerce"
)
```

Then find rows where the raw value was present but the temporary numeric preview became missing:

```python
conversion_problem = (
    df["resolution_days"].notna() &
    resolution_numeric_preview.isna()
)

display(
    df.loc[
        conversion_problem,
        ["record_id", "resolution_days"]
    ]
)
```

### Important

We have **not** changed:

```python
df["resolution_days"]
```

We created a temporary diagnostic Series. Permanent conversion belongs to Lecture 6.

## Detect invalid date-like values without overwriting the raw column

Create another temporary preview:

```python
report_month_preview = pd.to_datetime(
    df["report_month"],
    errors="coerce"
)
```

Rows that fail conversion become missing in the preview:

```python
invalid_date_mask = report_month_preview.isna()

display(
    df.loc[
        invalid_date_mask,
        ["record_id", "report_month"]
    ]
)
```

The raw course file contains an invalid month-like value:

```text
2026-13-01
```

Month 13 is not a valid calendar month.

Again, detect and document. Do not silently invent the intended month.

## Plausibility versus validity

These are different.

### Clearly outside documented rule

```text
satisfaction_score = 0.0 or 6.2
expected range = 1–5
```

This violates the current schema.

### Unusual but potentially possible

```text
resolution_days = 25
```

If the rule only says non-negative, 25 may be unusual but valid.

An outlier is not automatically an error.

## Build a first data-quality summary

You can create a simple diagnostic dictionary:

```python
quality_summary = {
    "rows": len(df),
    "columns": df.shape[1],
    "missing_cells": int(df.isna().sum().sum()),
    "exact_duplicate_rows": int(df.duplicated().sum()),
    "negative_cases_received": int((df["cases_received"] < 0).sum()),
    "out_of_range_satisfaction": int(
        ((df["satisfaction_score"] < 1) |
         (df["satisfaction_score"] > 5)).sum()
    )
}

for check, value in quality_summary.items():
    print(check, ":", value)
```

This is a technical summary. It still needs human interpretation.

## Example 3.10.1 — Separate observation from action

**Observation:** `record_id SR2026-0027` appears in two identical rows, while `SR2026-0079` labels two different rows.

**Premature action:** delete one row immediately.

**Better next step:** verify whether `record_id` is expected to be unique and whether repeated exports or legitimate repeated observations are possible.

## Example 3.10.2 — Quality problem changes a calculation

The raw mean satisfaction score includes a value outside the documented range.

Therefore a good report should say:

> A preliminary mean was calculated for exploration, but the result requires re-evaluation after the out-of-range values are investigated and the cleaning rule is documented.

That is stronger than either ignoring the problem or secretly editing the value.

## Exercise 3.10.1 — Build a quality audit

Write code that reports:

1. missing values by column;
2. missing percentages;
3. exact duplicate count;
4. all rows involved in exact duplication;
5. repeated `record_id` values;
6. unique raw city labels;
7. negative `cases_received` rows;
8. out-of-range satisfaction rows;
9. rows where resolved exceeds received;
10. non-numeric `resolution_days` values;
11. invalid `report_month` values.

For each detected issue, write **one sentence describing the issue without fixing it**.

## Exercise 3.10.2 — Classify the quality issue

For each item below, classify it mainly as completeness, uniqueness, validity, consistency, plausibility or logical consistency. More than one answer may sometimes be defensible.

1. `feedback` is blank.
2. `record_id SR2026-0027` is repeated in identical rows, while `SR2026-0079` is reused for two different rows.
3. `city = " copenhagen "` appears beside `city = "Copenhagen"`.
4. `satisfaction_score = 0.0` or `6.2` when the documented scale is 1–5.
5. `cases_resolved = 90` and `cases_received = 85` under an assumption that resolved cases must be a subset of received cases.
6. `report_month = 2026-13-01`.

<details>
<summary>Suggested classification</summary>

1. completeness;
2. uniqueness;
3. consistency;
4. validity;
5. logical consistency, depending on definitions;
6. validity.

</details>

## Tutorial 3.10 summary

A first data-quality audit should check more than missing values. You should now be able to inspect:

```text
COMPLETENESS
UNIQUENESS
VALIDITY
CONSISTENCY
PLAUSIBILITY
CROSS-FIELD LOGIC
PROVENANCE
```

and preserve the distinction between **detecting a problem** and **deciding how to repair it**.

---

# Tutorial 3.11 — Exploring Text and Qualitative Data

## Tutorial 3.11 overview

The course dataset contains a `feedback` column with short open-ended comments. These are qualitative/textual data. Before NLTK is introduced in Lecture 6, pandas can already help us inspect, search and summarise simple textual patterns.

This is **introductory text exploration**, not a complete qualitative-analysis methodology. Computational searching can help you find material; it does not replace reading, interpretation or context.

**Core vocabulary:** free text, text length, keyword, pattern, case sensitivity, literal search, regular-expression OR, context, false positive, false negative.

## Start by reading the text

```python
display(df[["record_id", "feedback"]].head(10))
```

Do not begin by counting words you have never read.

A good first step is to inspect several non-missing comments:

```python
feedback_non_missing = df["feedback"].dropna()

display(
    feedback_non_missing.sample(
        min(8, len(feedback_non_missing)),
        random_state=42
    )
)
```

The code helps you select comments. The interpretation still requires reading them.

## Count available text responses

```python
print("Rows:", len(df))
print("Non-missing feedback:", df["feedback"].count())
```

Expected:

```text
Rows: 121
Non-missing feedback: 118
```

Any text analysis using `feedback` therefore has at most 118 non-missing comments in the raw file.

## Character length

```python
feedback_length = df["feedback"].str.len()
print(feedback_length)
```

Missing feedback remains missing.

Average character length:

```python
print(round(feedback_length.mean(), 2))
```

Expected raw result:

```text
63.78
```

Character length does not measure quality or importance. It only measures stored text length.

## Approximate word count with pandas string methods

A simple beginner approximation is:

```python
word_count = df["feedback"].str.split().str.len()
print(word_count)
```

This splits on whitespace. It is **not** the NLTK tokenisation process we will study later.

Use it as a basic descriptive measure, not a definitive linguistic analysis.

## Search for a literal word with `.str.contains()`

```python
helpful_mask = df["feedback"].str.contains(
    "helpful",
    case=False,
    na=False
)
```

### Explain each argument

- `"helpful"` is the search pattern;
- `case=False` ignores upper/lowercase differences;
- `na=False` treats missing feedback as not matching rather than returning a missing Boolean.

Count matches:

```python
print(helpful_mask.sum())
```

Expected raw result:

```text
36
```

Display the matching comments:

```python
display(
    df.loc[
        helpful_mask,
        ["record_id", "service_type", "satisfaction_score", "feedback"]
    ]
)
```

The four comments include different contexts. Some are positive overall; some combine helpfulness with a complaint about waiting.

## Search for alternatives with a simple pattern

```python
wait_mask = df["feedback"].str.contains(
    "wait|long",
    case=False,
    na=False,
    regex=True
)
```

Here `|` means **OR** inside the regular-expression pattern.

Count:

```python
print(wait_mask.sum())
```

Expected raw result:

```text
11
```

Display:

```python
display(
    df.loc[
        wait_mask,
        ["record_id", "feedback", "satisfaction_score"]
    ]
)
```

All three matching comments are Housing records in the teaching dataset. That is an observation worth noting, but the sample is tiny and synthetic.

## Search for clarity-related wording

```python
clear_mask = df["feedback"].str.contains(
    "clear",
    case=False,
    na=False
)

print(clear_mask.sum())
```

Expected raw count:

```text
40
```

However, one of those comments is duplicated because the entire record is duplicated. A raw keyword count can therefore be affected by duplicate data.

This connects text analysis back to data quality.

## Search for speed-related wording

```python
speed_mask = df["feedback"].str.contains(
    "quick|fast",
    case=False,
    na=False,
    regex=True
)

print(speed_mask.sum())
```

Expected raw count:

```text
32
```

Again, do not treat `quick|fast` as a complete linguistic definition of “speed”. It is a transparent rule that finds some phrases and misses others.

## Literal versus regex search

By default, `.str.contains()` interprets its pattern as a regular expression.

If you want to search for exact literal characters that might otherwise have regex meaning, use:

```python
df["feedback"].str.contains(
    "some literal text",
    case=False,
    na=False,
    regex=False
)
```

For this lecture, you only need to recognise the distinction. Advanced regular expressions are not part of the core course.

## Why keyword matching is not the same as meaning

Consider:

```text
"The wait was not long."
```

A search for:

```text
wait|long
```

would match the sentence, even though the meaning is positive about waiting time.

This is a **false positive** for a simplistic “long wait complaint” rule.

Now consider:

```text
"The process took forever."
```

A search for `wait|long` would miss it, even though a human reader may interpret it as a delay complaint.

This is a possible **false negative**.

Therefore:

> **Keyword matching is a transparent retrieval/coding rule, not automatic understanding.**

## Search, then read the matched context

A good beginner workflow is:

```text
DEFINE a simple search rule
        ↓
COUNT matches
        ↓
DISPLAY matching comments
        ↓
READ them
        ↓
CHECK whether the rule actually represents the intended idea
```

Do not stop at the count.

## Compare text presence with a numeric variable

For example:

```python
display(
    df.loc[
        wait_mask,
        ["feedback", "satisfaction_score"]
    ]
)
```

You can inspect whether waiting-related comments coincide with lower scores.

But do not claim causation. The data are observational, tiny, imperfect and synthetic.

## Example 3.11.1 — Text length by service type

Create a temporary word-count Series:

```python
df["feedback_word_count_preview"] = (
    df["feedback"].str.split().str.len()
)
```

Then:

```python
print(
    df.groupby("service_type")["feedback_word_count_preview"]
      .mean()
      .round(2)
)
```

This asks whether feedback length differs across service categories in the raw teaching data.

It does **not** tell you that longer comments are more thoughtful or more negative.

Because this preview column is derived from raw text, it may be recreated later after cleaning rather than treated as a final analytical variable.

## Example 3.11.2 — Identify potentially difficult experiences

```python
difficulty_mask = df["feedback"].str.contains(
    "difficult|confusing",
    case=False,
    na=False,
    regex=True
)

print("Matches:", difficulty_mask.sum())

display(
    df.loc[
        difficulty_mask,
        ["record_id", "service_type", "feedback", "satisfaction_score"]
    ]
)
```

Expected raw match count:

```text
19
```

Now read the two comments. Are both expressing the same kind of difficulty? A computational match begins the interpretation; it does not finish it.

## Exercise 3.11.1 — Explore text before coding themes

1. Display all non-missing feedback comments.
2. Read them manually.
3. Write down at least three recurring ideas you notice.
4. For each idea, identify possible words that could help retrieve relevant comments.
5. Explain at least one way that your keyword rule could miss relevant wording.

## Exercise 3.11.2 — Search and validate a keyword rule

Create a case-insensitive search for comments containing either `quick` or `fast`.

Then:

1. count matches;
2. display the matching full comments;
3. read each match;
4. decide whether each one genuinely concerns speed;
5. identify one possible synonym your search rule would miss.

<details>
<summary>Suggested code</summary>

```python
speed_mask = df["feedback"].str.contains(
    "quick|fast",
    case=False,
    na=False,
    regex=True
)

print("Matches:", speed_mask.sum())
display(df.loc[speed_mask, ["record_id", "feedback"]])
```

The raw match count is 32. Possible missed synonyms include `rapid`, `slow` as an inverse formulation, `immediate`, or phrases such as `didn't take long`.

</details>

## Exercise 3.11.3 — Compare quantitative and qualitative evidence

Inspect the comments that match `wait|long` together with `satisfaction_score`.

Write:

- one observation directly supported by the rows;
- one cautious interpretation;
- one claim that would be too strong.

## Tutorial 3.11 summary

You should now be able to:

- inspect a text column;
- count available text responses;
- calculate simple text lengths;
- search text with `.str.contains()`;
- combine alternatives using a simple regex OR pattern;
- count and display matches;
- explain false positives and false negatives;
- distinguish text retrieval from qualitative interpretation.

---

# Tutorial 3.12 — From Qualitative Ideas to Simple Computational Codes

## Tutorial 3.12 overview

Qualitative analysis often involves identifying concepts, concerns or patterns in textual material. Computational analysis can represent a carefully defined idea as a rule or indicator. This tutorial demonstrates the connection without pretending that a keyword automatically becomes a valid qualitative theme.

**Core vocabulary:** code, coding rule, operationalisation, Boolean indicator, coding frame, transparency, false positive, false negative, mixed-data exploration.

## From an idea to an operational rule

Suppose manual reading suggests that **waiting/delay** is a recurring issue.

The conceptual idea is:

```text
waiting/delay experience
```

A simple computational rule might be:

```text
feedback contains "wait" OR "long"
```

In code:

```python
df["mentions_wait"] = df["feedback"].str.contains(
    "wait|long",
    case=False,
    na=False,
    regex=True
)
```

The new column contains Boolean values:

```text
True
False
```

### Important terminology

The Boolean column is a **computational indicator based on a rule**.

It is safer to call it:

```text
mentions_wait
```

than:

```text
bad_service
```

because `mentions_wait` transparently states what was detected, whereas `bad_service` imposes a much broader interpretation.

## Count the indicator

```python
print(df["mentions_wait"].value_counts())
```

Or count `True` directly:

```python
print(df["mentions_wait"].sum())
```

Expected raw count:

```text
11
```

## Create several transparent indicators

```python
df["mentions_helpful"] = df["feedback"].str.contains(
    "helpful",
    case=False,
    na=False
)

df["mentions_clarity"] = df["feedback"].str.contains(
    "clear",
    case=False,
    na=False
)

df["mentions_difficulty"] = df["feedback"].str.contains(
    "difficult|confusing",
    case=False,
    na=False,
    regex=True
)
```

These are not final qualitative themes. They are explicit retrieval/coding rules that can be audited.

## Inspect the rule against the original text

Always preserve the source text beside the indicator:

```python
display(
    df[[
        "feedback",
        "mentions_wait",
        "mentions_helpful",
        "mentions_clarity",
        "mentions_difficulty"
    ]]
)
```

Read the table and ask:

- Does every `True` match the intended concept?
- Are relevant comments marked `False` because they use different wording?
- Does one comment contain several ideas?
- Does negation change the meaning?

This is a basic validation step.

## A comment can contain more than one code

Consider:

```text
"Helpful but the wait was long"
```

This comment can reasonably produce:

```text
mentions_helpful = True
mentions_wait = True
```

Qualitative categories are not always mutually exclusive.

Do not force one comment into exactly one category unless the analytical design requires it and you can justify the rule.

## Build a small coding frame

A coding frame documents the concept and operational rule.

| Code/indicator | Intended idea | Simple rule | Known limitation |
|---|---|---|---|
| `mentions_wait` | waiting/delay | contains `wait` or `long` | misses synonyms; may misread negation |
| `mentions_helpful` | explicit helpfulness | contains `helpful` | misses phrases such as `useful support` |
| `mentions_clarity` | explicit clarity | contains `clear` | may miss `easy to understand`; duplicated comments affect count |
| `mentions_difficulty` | explicit difficulty/confusion | contains `difficult` or `confusing` | may miss other forms of frustration |

This table makes the operationalisation visible.

## Manual coding can be richer than keyword coding

A human reader may code:

```text
"Several steps were difficult to understand"
```

as:

```text
process complexity
```

and:

```text
"Quick answer but the form was confusing"
```

as both:

```text
speed-positive
form-usability-negative
```

The current keyword rules do not capture all that nuance.

Lecture 5 introduces the connection between qualitative concepts and computational representation. It does not replace qualitative methodology with substring searching.

## Compare a text indicator with a numeric measure

Once we have a Boolean indicator, pandas can group by it.

### Example 3.12.1 — Satisfaction by waiting mention

```python
wait_satisfaction = (
    df.groupby("mentions_wait")["satisfaction_score"]
      .agg(["count", "mean", "median", "min", "max"])
)

print(wait_satisfaction.round(2))
```

This compares available satisfaction scores for comments that do and do not match the rule.

A cautious interpretation could say:

> In this raw synthetic dataset, comments matching the simple waiting rule can be compared descriptively with other comments, but the small number of matches, missing score, dirty data and simplistic coding rule prevent strong conclusions.

Do **not** say:

> Waiting causes low satisfaction.

The code does not establish causation.

## Compare indicator counts across service types

```python
wait_by_service = (
    df.groupby("service_type")["mentions_wait"]
      .sum()
)

print(wait_by_service)
```

If all `True` values occur in Housing, that is an observation in this particular teaching dataset.

It is not evidence about Housing services in real cities because the dataset is synthetic.

## Cross-tabulate a code and category

```python
pd.crosstab(
    df["service_type"],
    df["mentions_wait"]
)
```

This gives counts of matching/non-matching comments by service type.

A later visualisation could display such a table, but Lecture 7 will cover chart selection systematically.

## Rule design is a modelling choice

Suppose you change:

```text
wait|long
```

to:

```text
wait|long|slow|delay
```

You may find more comments, but you have changed the operational definition.

Therefore a reproducible analysis should record:

- the concept;
- the exact search rule;
- case-sensitivity choice;
- missing-value handling;
- known limitations;
- any revisions made after reading matched/unmatched comments.

## Do not call counts “themes” automatically

A frequent keyword is not necessarily the most important qualitative theme.

Importance may depend on:

- context;
- severity;
- relationship to the research question;
- who is speaking;
- what is absent;
- contradictory experiences;
- institutional categories;
- the way the data were elicited.

Computational frequency and qualitative significance are different concepts.

## Example 3.12.2 — A transparent code is better than a vague label

Less transparent:

```python
df["negative"] = ...
```

Questions immediately arise:

- What counts as negative?
- Who defined it?
- How are mixed comments handled?
- Is “long” always negative?

More transparent:

```python
df["mentions_wait_or_long"] = df["feedback"].str.contains(
    "wait|long",
    case=False,
    na=False,
    regex=True
)
```

The second name does not solve the validity problem, but it exposes the actual rule.

## Exercise 3.12.1 — Design a coding rule

Choose one idea from the feedback, for example:

- clarity;
- usefulness/helpfulness;
- speed;
- difficulty.

Then:

1. define the idea in one sentence;
2. choose one or more search terms;
3. create a Boolean indicator;
4. count `True` values;
5. display all matching comments;
6. manually inspect at least three non-matching comments;
7. identify one possible false positive and one possible false negative;
8. revise the rule if justified;
9. document the final rule.

## Exercise 3.12.2 — Compare code and score

Using your Boolean indicator:

```python
df.groupby("your_indicator")["satisfaction_score"].agg(
    ["count", "mean", "median"]
)
```

Write:

- one direct observation;
- one cautious interpretation;
- one causal claim that the result does **not** justify.

## Exercise 3.12.3 — Multiple codes per comment

Create at least two indicators and find comments where both are `True`.

Example structure:

```python
both = df[
    df["mentions_helpful"] &
    df["mentions_wait"]
]

display(both[["feedback"]])
```

Explain why allowing several codes can be more faithful to mixed comments than assigning only one category.

## Tutorial 3.12 summary

You should now understand the pathway:

```text
QUALITATIVE IDEA
      ↓
OPERATIONAL RULE
      ↓
BOOLEAN INDICATOR
      ↓
COUNT / FILTER / COMPARE
      ↓
RETURN TO THE ORIGINAL TEXT
      ↓
VALIDATE AND INTERPRET CAUTIOUSLY
```

This prepares you for more systematic text preparation with NLTK in Lecture 6.

---

# Tutorial 3.13 — Provenance, Data Dictionaries and Responsible Interpretation

## Tutorial 3.13 overview

A technically correct DataFrame is not self-explanatory. Responsible analysis requires information about where the data came from, what the variables mean, how the data were produced and what limitations follow from that process.

This tutorial brings together the technical and critical parts of Lecture 5.

**Core vocabulary:** provenance, metadata, data dictionary, source, unit of observation, measurement, transformation, reliability, generalisability, observation, interpretation, claim, reproducibility.

## What is data provenance?

Data provenance describes the history and origin of data.

A useful provenance chain might include:

```text
real-world activity
      ↓
collection / measurement / classification
      ↓
source system
      ↓
export
      ↓
CSV file
      ↓
pandas DataFrame
      ↓
cleaning / transformation
      ↓
analysis
      ↓
visualisation
      ↓
claim
```

At every step, choices can influence what becomes visible.

## Questions to ask about a dataset

### Source

- Who created or published the dataset?
- Is it first-party, third-party, scraped, survey-based, administrative or synthetic?
- Is there a stable source URL or repository?

### Collection

- How were values collected?
- Was participation voluntary?
- Were records generated automatically?
- Were categories assigned by staff, respondents or an algorithm?

### Time

- What period does the dataset cover?
- When was it exported?
- Are rows snapshots, events or recurring periods?

### Unit of observation

- What exactly does one row represent?
- Can the same person/organisation appear in several rows?

### Variables

- What does each column mean?
- What is the unit or scale?
- What values are valid?
- Are variables raw or derived?

### Transformations

- Was anything cleaned before you received the file?
- Were records filtered out?
- Were categories merged?
- Were missing values imputed?

### Limitations

- Who or what is absent?
- What cannot be inferred?
- Are there known quality problems?
- Is the dataset representative of a wider population?

## Provenance for the course dataset

The course dataset should be described explicitly as:

> `E26_TAN7_service_experience_raw.csv` is synthetic teaching data created for the Copenhagen E26 Introduction to Scripting, Data Mining and Machine Learning course. It contains 121 raw service-category-city-month records and deliberate quality problems for beginner exercises. It does not describe actual Copenhagen, Aarhus, Odense and Aalborg, Aalborg University or municipal service performance.

This statement prevents the teaching exercise from being misrepresented as empirical evidence.

## What is a data dictionary?

A data dictionary documents variables.

A useful beginner structure is:

| Variable | Meaning | Conceptual type | Unit/scale | Expected values | Known concern |
|---|---|---|---|---|---|
| `record_id` | service-report identifier | identifier | none | expected unique-like ID | two identifiers are repeated |
| `report_month` | reporting month | date-like | month | valid date/month | one invalid month-like value |
| `city` | city label | categorical | category | documented city labels | whitespace, case and spelling variants |
| `service_type` | service category | categorical | category | five documented service labels | four inconsistent one-row variants |
| `cases_received` | cases received | numeric count | cases | zero or positive | one negative value |
| `cases_resolved` | cases resolved | numeric count | cases | zero or positive | three rows exceed received cases |
| `resolution_days` | resolution time measure | numeric measure | days | zero or positive | three raw `unknown` values |
| `satisfaction_score` | satisfaction rating | numeric rating | 1–5 | 1 to 5 or missing | four missing + two out-of-range values |
| `digital_cases` | digitally handled cases | numeric count | cases | zero or positive | check against total received |
| `in_person_cases` | in-person cases | numeric count | cases | zero or positive | check against total received |
| `repeat_contacts` | repeated contacts | numeric count | contacts | zero or positive | two rows exceed received cases |
| `complaints_received` | complaints received | numeric count | complaints | zero or positive | one negative value |
| `staff_hours` | staff time | numeric measure | hours | greater than zero | one zero value |
| `feedback` | short feedback comment | free text | text | comment or missing | three missing values |

A data dictionary does not prove the data obey the rules. It provides the expectations against which the values can be assessed.

## Observation, interpretation and unsupported claim

This distinction should appear in every later analysis.

### Observation

Directly supported by a calculation or inspection.

> The raw DataFrame contains 121 rows and 14 columns.

> Twenty-one raw rows are labelled exactly `Housing`.

> Four `satisfaction_score` values are missing.

### Interpretation

A reasoned explanation or possible meaning.

> The inconsistent city labels may represent formatting/spelling variants that should be harmonised before city-level analysis.

This is plausible, but still requires a decision about intended equivalence.

### Unsupported/overstated claim

Goes beyond the evidence.

> Copenhagen residents are more satisfied with services than Aalborg residents.

The teaching data cannot support this. It is synthetic, small, dirty and not person-level survey data.

## Reliability and validity in beginner terms

### Reliability question

Would the measurement/process produce sufficiently consistent information for the intended purpose?

### Validity question

Does the stored measure actually represent the concept we want to discuss?

For example, `satisfaction_score` may be consistently recorded, but we still need to know:

- who provided the score;
- what question was asked;
- whether 1–5 is the full scale;
- whether rows aggregate several respondents;
- whether missing scores are systematic.

A clean column is not automatically a valid measure of a complex concept.

## Generalisability

Generalisability asks whether findings can reasonably extend beyond the observed data.

For this synthetic dataset:

```text
Generalisability to real cities = none
```

Its purpose is educational.

In a real project, generalisability would depend on sampling, coverage, collection process, context and the population to which the claim refers.

## Reproducibility

A reproducible analysis should allow another person to understand and rerun the steps.

At minimum keep:

- source/location of the data;
- date/version if relevant;
- code used to load it;
- variable definitions;
- quality checks;
- transformations;
- calculation formulas;
- filtering criteria;
- text-coding rules;
- chart code later in Lecture 7;
- limitations.

This is why the course uses notebooks and transformation logs instead of only copying final numbers into a document.

## An Initial Data Exploration Note

At the end of Lecture 5, a concise note can use this structure:

### 1. Dataset identity

```text
Dataset name:
Source:
Access method:
Synthetic/real:
```

### 2. Unit of observation

```text
One row represents:
```

### 3. Structure

```text
Rows:
Columns:
Key variables:
```

### 4. Data types and variable expectations

Summarise conceptual types and major technical mismatches.

### 5. Initial quality concerns

```text
Missingness:
Duplicates:
Category inconsistencies:
Range/format problems:
Cross-field concerns:
```

### 6. Preliminary calculations

Report selected totals, averages or group summaries **with a clear warning if raw quality issues affect them**.

### 7. Text exploration

Describe simple keyword/coding rules and their limitations.

### 8. Preliminary findings

Write observations that are actually supported by the raw teaching data.

### 9. Limitations and next steps

State what needs cleaning/validation in Lecture 6 before final analysis.

## Example 3.13.1 — Good provenance statement

> The analysis uses the synthetic `E26_TAN7_service_experience_raw.csv` course dataset loaded from the E26 GitHub repository. One row is intended to represent one service category in one city during one reporting month. The dataset contains deliberate quality problems and should be used only for teaching, not as evidence about real municipal services.

This is much stronger than:

> I downloaded a CSV from GitHub.

## Example 3.13.2 — Good preliminary finding

> In the raw teaching data, the exact `Housing` label accounts for 21 of 121 rows (17.36%). This is a proportion of service-category-city-month records, not a proportion of citizens. The dataset also contains duplicate and category-consistency issues, so the result is preliminary.

Notice that the statement includes:

- numerator;
- denominator;
- unit meaning;
- limitation.

## Exercise 3.13.1 — Create a data dictionary

Create a Markdown table for all fourteen variables with:

```text
variable
meaning
conceptual type
unit/scale
expected values
known/raw concern
```

## Exercise 3.13.2 — Rewrite an overclaim

Rewrite this statement so it becomes defensible:

> “Transport has the highest cases, so public transport is the biggest problem in Danish cities.”

<details>
<summary>Suggested rewrite</summary>

> In the raw synthetic teaching dataset, Transport has a higher mean `cases_received` than Employment and a similar preliminary mean to Housing. These values refer only to the teaching records and are affected by known data-quality issues; they do not establish the relative importance of real public services in Danish cities.

</details>

## Exercise 3.13.3 — Separate three levels of statement

For one calculation from Tutorial 3.9, write:

1. one direct observation;
2. one cautious interpretation;
3. one claim that the dataset cannot support.

## Tutorial 3.13 summary

Responsible data work requires more than code. You should now be able to document:

```text
WHERE THE DATA CAME FROM
WHAT ONE ROW REPRESENTS
WHAT EACH VARIABLE MEANS
WHAT QUALITY PROBLEMS EXIST
WHAT CALCULATIONS WERE MADE
WHAT TEXT RULES WERE USED
WHAT THE RESULTS SHOW
WHAT THEY DO NOT SHOW
```

---
# Tutorial 3.14 — Case Activity: First Exploration of a CSV Dataset

## Tutorial 3.14 overview

This case combines the entire Lecture 5 workflow. You will work with the same synthetic `E26_TAN7_service_experience_raw.csv` file, but you should now approach it as if it were an unfamiliar dataset handed to you for an initial assessment.

The purpose is **not** to clean the file completely. Your task is to produce a defensible **Initial Data Exploration Report** that answers:

> **What is in this dataset, what preliminary patterns can I find, what qualitative/textual signals appear, and what problems must be resolved before stronger analysis?**

The case deliberately requires technical code and critical explanation. A complete answer is not only a notebook that runs. You should also explain what each result means and what it does not establish.

**Case vocabulary:** inspection report, preliminary finding, audit trail, exploratory calculation, quality flag, operational rule, limitation, next step.

## Case setup

Start from a fresh runtime and run only the code you need.

```python
import pandas as pd

url = "https://raw.githubusercontent.com/asmrabbi/E26_TAN7_Scripting_CPH/main/data/E26_TAN7_service_experience_raw.csv"
df = pd.read_csv(url)
```

Before continuing, confirm:

```python
print(df.shape)
display(df.head())
```

Expected shape:

```text
(121, 14)
```

If you see a different shape, stop and check whether you loaded the correct file/version.

---

## Case Activity 3.14.1 — Identify and describe the dataset

### Your task

Write a short dataset identity section that states:

1. dataset name;
2. source/location;
3. whether the data are real or synthetic;
4. intended unit of observation;
5. number of rows and columns;
6. all column names;
7. which columns appear to be identifiers, categorical, numeric, date-like and free text.

### Required code

At minimum use:

```python
df.shape
df.columns
df.dtypes
df.info()
```

### Required written output

Write 4–6 sentences. Do not simply paste the code output.

<details>
<summary>Model response</summary>

The dataset is `E26_TAN7_service_experience_raw.csv`, a synthetic teaching file stored in the E26 course GitHub repository. One row is intended to represent one service category in one city during one reporting month. The raw DataFrame contains 121 rows and 14 columns. `record_id` functions conceptually as an identifier; `city` and `service_type` are categorical; seven columns are intended as counts or measures; `report_month` is date-like; and `feedback` is free text. The pandas dtypes do not perfectly match the conceptual schema because date/numeric-like values are initially stored as text-like data and recognised missingness occurs in two columns. The file is designed for teaching and must not be interpreted as evidence about actual municipal service performance.

</details>

---

## Case Activity 3.14.2 — Inspect the structure and sample records

### Your task

Inspect:

- first five rows;
- final five rows;
- five sampled rows;
- shape;
- non-missing counts;
- dtypes.

Use a reproducible sample:

```python
df.sample(5, random_state=42)
```

Then answer:

1. Which columns look straightforwardly numeric?
2. Which columns need closer inspection before numeric/date analysis?
3. Why is inspecting only `head()` insufficient?

### Suggested code

```python
print("Shape:", df.shape)

display(df.head())
display(df.tail())
display(df.sample(5, random_state=42))

print(df.dtypes)
df.info()
```

---

## Case Activity 3.14.3 — Calculate preliminary numerical summaries

### Your task

For `cases_received`, calculate:

- count;
- sum;
- mean;
- median;
- standard deviation;
- minimum;
- maximum;
- `describe()`.

For `cases_resolved`, calculate:

- sum;
- mean;
- median.

For `satisfaction_score`, calculate:

- non-missing count;
- mean;
- median;
- minimum;
- maximum.

### Starter code

```python
print("Cases received")
print("Count:", df["cases_received"].count())
print("Sum:", df["cases_received"].sum())
print("Mean:", df["cases_received"].mean())
print("Median:", df["cases_received"].median())
print("Std:", df["cases_received"].std())
print("Min:", df["cases_received"].min())
print("Max:", df["cases_received"].max())

print("\nFull summary")
print(df["cases_received"].describe())
```

### Interpretation questions

1. Which result immediately suggests a possible validity problem?
2. Why should the raw mean not yet be described as a final result?
3. How many satisfaction scores contribute to the raw mean?
4. Does the raw satisfaction maximum fit the documented 1–5 scale?

<details>
<summary>Model technical checkpoints</summary>

For raw `cases_received`:

```text
count = 121
sum = 12653
mean ≈ 104.57
median = 102.0
std ≈ 27.26
min = -4
max = 185
```

The negative minimum is a clear quality flag under the current schema.

For raw satisfaction:

```text
non-missing count = 117
mean ≈ 4.11
min = 0.0
max = 6.2
```

The maximum conflicts with the documented 1–5 range, so the mean should remain preliminary.

</details>

---

## Case Activity 3.14.4 — Create and inspect derived measures

### Your task

Create:

```text
unresolved_cases = cases_received - cases_resolved
```

and:

```text
resolution_rate = cases_resolved / cases_received × 100
```

Then inspect:

- negative unresolved values;
- rates above 100%;
- missing/undefined rates caused by a zero denominator.

### Starter code

```python
df["unresolved_cases"] = (
    df["cases_received"] - df["cases_resolved"]
)

df["resolution_rate"] = (
    df["cases_resolved"] /
    df["cases_received"] * 100
)

columns = [
    "record_id",
    "cases_received",
    "cases_resolved",
    "unresolved_cases",
    "resolution_rate"
]

display(df[columns])
```

### Additional calculations

Calculate both:

```python
mean_row_rate = df["resolution_rate"].mean()
```

and:

```python
overall_rate = (
    df["cases_resolved"].sum() /
    df["cases_received"].sum() * 100
)
```

### Questions

1. Why do these two results differ?
2. Which denominator does each method use conceptually?
3. Why should neither raw result yet be treated as final?

<details>
<summary>Model explanation</summary>

The mean row rate gives each row equal weight, while the aggregate rate divides the total number resolved by the total number received and therefore weights records through their case volumes. In the supplied raw teaching data they are approximately `93.66%` and `94.51%`, respectively. The calculations are affected by problematic raw values, including three rows with resolved cases greater than received cases and one negative received count. The current file has no zero denominator, but the method still requires a documented zero-case rule. The correct analytical measure must therefore be defined and the source data validated before reporting a final rate.

</details>

---

## Case Activity 3.14.5 — Explore categories and group differences

### Your task

For `service_type`:

1. print unique values;
2. calculate counts;
3. calculate percentages;
4. calculate mean and median `cases_received` by service type;
5. calculate count, mean, median, minimum and maximum `satisfaction_score` by service type.

For `city`:

1. print unique raw labels;
2. calculate raw frequencies;
3. calculate grouped mean `cases_received` by raw city label;
4. explain why the result should not yet be interpreted as a clean city comparison.

Create a crosstab of:

```text
city × service_type
```

### Suggested code

```python
print(df["service_type"].value_counts())
print(df["service_type"].value_counts(normalize=True).mul(100).round(2))

service_cases = (
    df.groupby("service_type")["cases_received"]
      .agg(["count", "sum", "mean", "median", "min", "max"])
)

display(service_cases.round(2))

service_satisfaction = (
    df.groupby("service_type")["satisfaction_score"]
      .agg(["count", "mean", "median", "min", "max"])
)

display(service_satisfaction.round(2))

print(df["city"].unique())
print(df["city"].value_counts())

city_service = pd.crosstab(
    df["city"],
    df["service_type"]
)

display(city_service)
```

### Required interpretation

Write at least two preliminary observations and then explicitly state which raw-data problems could distort them.

<details>
<summary>Model checkpoints</summary>

The five most frequent exact raw service labels are:

```text
Citizen Services    24
Employment          24
Transport           24
Waste               24
Housing             21
```

Their raw proportions are approximately 19.83% for each 24-row label and 17.36% for Housing. Four inconsistent one-row service labels each account for 0.83%.

Raw mean `cases_received` for the five main exact labels is approximately:

```text
Citizen Services    129.92
Employment           88.04
Housing              115.86
Transport            102.54
Waste                 88.96
```

However, Waste includes the negative raw count, the dataset contains an exact duplicate record, and four inconsistent service labels are split into separate groups. City-level grouping is also problematic because several raw strings appear to represent inconsistent versions of city names.

</details>

---

## Case Activity 3.14.6 — Complete a structured data-quality audit

### Your task

Create checks for:

1. missing values by column;
2. missing percentages;
3. exact duplicate rows;
4. repeated `record_id` values;
5. raw city-category inconsistencies;
6. negative `cases_received`;
7. satisfaction outside 1–5;
8. `cases_resolved > cases_received`;
9. non-numeric `resolution_days`;
10. invalid `report_month` values.

### Suggested audit code

```python
print("Missing values")
print(df.isna().sum())

print("\nMissing percentages")
print((df.isna().mean() * 100).round(2))

print("\nExact duplicates")
print(df.duplicated().sum())
display(df[df.duplicated(keep=False)])

print("\nRepeated IDs")
id_duplicate_mask = df["record_id"].duplicated(keep=False)
display(df[id_duplicate_mask])

print("\nRaw city labels")
print(df["city"].value_counts(dropna=False))

print("\nNegative received cases")
display(df[df["cases_received"] < 0])

print("\nOut-of-range satisfaction")
sat_problem = (
    (df["satisfaction_score"] < 1) |
    (df["satisfaction_score"] > 5)
)
display(df[sat_problem])

print("\nResolved greater than received")
display(df[df["cases_resolved"] > df["cases_received"]])

resolution_preview = pd.to_numeric(
    df["resolution_days"],
    errors="coerce"
)
resolution_problem = (
    df["resolution_days"].notna() &
    resolution_preview.isna()
)
print("\nNon-numeric resolution values")
display(df.loc[resolution_problem, ["record_id", "resolution_days"]])

month_preview = pd.to_datetime(
    df["report_month"],
    errors="coerce"
)
print("\nInvalid report months")
display(df.loc[month_preview.isna(), ["record_id", "report_month"]])
```

### Required output: quality log

Create a Markdown table with at least these columns:

| Issue | How detected | Affected variable/record | Why it matters | What should happen next? |
|---|---|---|---|---|

Do not put “delete” or “replace” as an automatic next step unless you first explain the evidence required to justify that action.

---

## Case Activity 3.14.7 — Explore the feedback qualitatively and computationally

### Your task

1. Display all non-missing feedback.
2. Read the comments manually.
3. Identify at least three recurring ideas.
4. Create at least two transparent Boolean keyword indicators.
5. Count each indicator.
6. Display the matching comments.
7. Compare one indicator with `service_type` or `satisfaction_score`.
8. Describe at least one false-positive/false-negative risk.

### Example indicator setup

```python
df["mentions_wait"] = df["feedback"].str.contains(
    "wait|long",
    case=False,
    na=False,
    regex=True
)

df["mentions_helpful"] = df["feedback"].str.contains(
    "helpful",
    case=False,
    na=False
)
```

### Count the rules

```python
print("Waiting matches:", df["mentions_wait"].sum())
print("Helpful matches:", df["mentions_helpful"].sum())
```

Expected raw counts:

```text
Waiting matches: 11
Helpful matches: 36
```

### Compare waiting indicator and service type

```python
wait_by_service = pd.crosstab(
    df["service_type"],
    df["mentions_wait"]
)

display(wait_by_service)
```

### Compare waiting indicator and satisfaction

```python
wait_score = (
    df.groupby("mentions_wait")["satisfaction_score"]
      .agg(["count", "mean", "median"])
)

display(wait_score.round(2))
```

### Required written interpretation

Explain why this is a **descriptive association based on a simple coding rule**, not evidence that waiting causes satisfaction outcomes.

Also check how many waiting-related comments have a non-missing satisfaction score, so the number of comments matching the text rule and the number contributing to the score average are different.

---

## Case Activity 3.14.8 — Write the Initial Data Exploration Report

Create a short report with these headings.

### A. Dataset and provenance

Include:

- dataset name;
- source;
- synthetic status;
- unit of observation.

### B. Structure

Include:

- number of rows/columns;
- key variables;
- conceptual types.

### C. Preliminary quantitative exploration

Include at least:

- one total;
- one mean;
- one median;
- one category percentage;
- one grouped comparison;
- one derived measure.

Every result must state what it counts/measures.

### D. Data-quality concerns

Include at least five identified issues and explain why they matter.

### E. Text/qualitative exploration

Include:

- manually observed ideas;
- at least one computational coding rule;
- match count;
- limitation of the rule.

### F. Three preliminary findings

Each finding should contain:

```text
WHAT WAS OBSERVED
+
HOW IT WAS CALCULATED/FOUND
+
WHAT LIMITS THE INTERPRETATION
```

### G. Next steps for Lecture 6

Identify which issues require:

- category standardisation;
- type conversion;
- date handling;
- missing-data decisions;
- duplicate verification;
- range validation;
- text preparation.

---

<details>
<summary>Open the Tutorial 3.14 model walkthrough</summary>

## Model walkthrough for Tutorial 3.14

> **Do not read this section before attempting the case.** The Case Activities notebook should place the model walkthrough after all student tasks, separated clearly from the activity section.

## Model finding 1 — Dataset structure

> The raw DataFrame contains 121 rows and 14 columns. One row is intended to represent a service-category-city-month record. The dataset includes numeric counts, a numeric rating, a numeric-intended time measure, categorical labels, a date-like field, an identifier and a free-text feedback field.

## Model finding 2 — Preliminary cases calculation

> The raw `cases_received` values sum to 12,653 and have a mean of approximately 104.57 and median of 102.0. However, the minimum value is -4, which violates the current expectation that a case count should be non-negative. The summary is therefore useful for exploration but should be recalculated after the invalid value is investigated and a cleaning decision is documented.

## Model finding 3 — Service categories

> The exact raw labels Citizen Services, Employment, Transport and Waste each account for 24 of 121 rows (19.83%), while Housing accounts for 21 rows (17.36%). Four inconsistent one-row service labels remain separate until cleaning. These percentages describe the distribution of records in this teaching table, not a distribution of citizens or service users.

## Model finding 4 — Group comparison

> The raw mean `cases_received` is approximately 129.92 for Citizen Services, 88.04 for Employment, 115.86 for Housing, 102.54 for Transport and 88.96 for Waste. The Waste result includes a negative count and the overall dataset contains an exact duplicate row, so these group means should not be treated as final analytical findings before cleaning.

## Model finding 5 — Satisfaction

> One hundred and seventeen of the 121 rows contain a non-missing `satisfaction_score`, and their raw mean is approximately 4.11. Two stored scores, 0.0 and 6.2, fall outside despite the documented teaching range of 1–5, so the raw mean is not yet validated.

## Model finding 6 — Text exploration

> A simple case-insensitive search for `wait|long` matches 11 feedback comments in the raw dataset. This rule is transparent but incomplete: it could miss delay-related language that uses different words and could incorrectly match negated phrases such as “the wait was not long”. The count should therefore be interpreted as matches to a rule rather than a definitive count of a qualitative theme.

## Model finding 7 — Key quality concerns

A strong audit should identify at least:

- four missing satisfaction scores;
- three missing feedback values;
- one exact duplicate row involving `SR2026-0027` and a separate reused identifier `SR2026-0079`;
- inconsistent raw city labels;
- a negative `cases_received` value;
- `cases_resolved > cases_received` in three rows;
- `resolution_days = "unknown"` in a numeric-intended field;
- `satisfaction_score = 0.0` or `6.2` outside the documented 1–5 range;
- `report_month = 2026-13-01` as an invalid date-like value.

## Model conclusion

> The dataset is suitable for learning the workflow from CSV to DataFrame and for practising exploratory calculations, but it should not yet be treated as analysis-ready. The preliminary calculations reveal useful patterns and simultaneously expose problems in missingness, duplication, category consistency, numeric validity, date validity and cross-field logic. The next step is not to hide these problems but to preserve the raw file, define justified cleaning rules, transform a working copy and then rerun the analyses on the cleaned data.

---

</details>

---

# Lecture 5 completion checklist

By the end of this section, check that you can do each item without copying a full solution blindly.

## Dataset concepts

- [ ] I can explain what one row represents.
- [ ] I can distinguish observation, variable and value.
- [ ] I understand that a numeric-looking identifier is not automatically a numeric measure.
- [ ] I can explain why a CSV file does not provide complete meaning by itself.

## pandas and loading

- [ ] I can import pandas as `pd`.
- [ ] I can explain DataFrame versus Series.
- [ ] I can load a CSV with `pd.read_csv()`.
- [ ] I know the difference between a GitHub webpage URL and a raw CSV URL.
- [ ] I can interpret a basic `FileNotFoundError` or delimiter problem.

## Inspection and selection

- [ ] I can use `head()`, `tail()`, `sample()`, `shape`, `columns`, `dtypes` and `info()`.
- [ ] I can select one or several columns.
- [ ] I can use `.loc[]` and `.iloc[]` at a beginner level.
- [ ] I can filter rows using one or more conditions.

## Calculations

- [ ] I can calculate count, sum, mean, median, minimum, maximum and standard deviation.
- [ ] I can read the main parts of `describe()`.
- [ ] I can create a derived difference or percentage column.
- [ ] I can explain numerator and denominator.
- [ ] I understand why row-average and aggregate rates can differ.
- [ ] I check whether source values make sense before trusting a calculation.

## Categories and groups

- [ ] I can use `unique()`, `nunique()` and `value_counts()`.
- [ ] I can calculate category percentages.
- [ ] I can perform a basic `groupby()` calculation.
- [ ] I can use `.agg()` for several summaries.
- [ ] I can create a basic `pd.crosstab()`.

## Data quality

- [ ] I can count missing values and missing percentages.
- [ ] I can detect exact duplicates and repeated identifiers.
- [ ] I can inspect inconsistent categories.
- [ ] I can check numeric ranges.
- [ ] I can compare related columns for logical contradictions.
- [ ] I can use temporary conversion to detect numeric/date parsing problems without overwriting the raw column.
- [ ] I understand that detection is not the same as correction.

## Text exploration

- [ ] I can inspect non-missing feedback comments.
- [ ] I can calculate simple text length measures.
- [ ] I can search text with `.str.contains()`.
- [ ] I can count and display matches.
- [ ] I can create a transparent Boolean text indicator.
- [ ] I can explain false positives and false negatives.
- [ ] I understand that keyword matches are not automatically qualitative themes.

## Critical interpretation

- [ ] I can document provenance and a data dictionary.
- [ ] I can separate observation, interpretation and unsupported claim.
- [ ] I can state a limitation beside a preliminary finding.
- [ ] I can explain why this synthetic dataset cannot be generalised to real cities.

---

# Quick reference — Lecture 5 commands

## Load

```python
import pandas as pd

df = pd.read_csv("file_or_raw_url.csv")
```

## Inspect

```python
df.head()
df.tail()
df.sample(5, random_state=42)
df.shape
df.columns
df.index
df.dtypes
df.info()
```

## Select

```python
df["city"]
df[["city", "service_type"]]
df.loc[0:4, ["city", "cases_received"]]
df.iloc[0:5, 0:3]
```

## Filter

```python
df[df["cases_received"] > 100]

df[
    (df["service_type"] == "Transport") &
    (df["cases_received"] > 90)
]

df[df["service_type"].isin(["Housing", "Transport"])]
```

## Calculate

```python
df["cases_received"].count()
df["cases_received"].sum()
df["cases_received"].mean()
df["cases_received"].median()
df["cases_received"].std()
df["cases_received"].min()
df["cases_received"].max()
df["cases_received"].describe()
```

## Derive

```python
df["unresolved_cases"] = (
    df["cases_received"] - df["cases_resolved"]
)

df["resolution_rate"] = (
    df["cases_resolved"] / df["cases_received"] * 100
)
```

## Categories

```python
df["service_type"].unique()
df["service_type"].nunique()
df["service_type"].value_counts()
df["service_type"].value_counts(normalize=True) * 100
```

## Groups

```python
df.groupby("service_type")["cases_received"].mean()

df.groupby("service_type")["cases_received"].agg(
    ["count", "sum", "mean", "median", "min", "max"]
)

pd.crosstab(df["city"], df["service_type"])
```

## Quality

```python
df.isna().sum()
df.isna().mean() * 100

df.duplicated().sum()
df[df.duplicated(keep=False)]

df[df["cases_received"] < 0]

df[
    (df["satisfaction_score"] < 1) |
    (df["satisfaction_score"] > 5)
]

df[df["cases_resolved"] > df["cases_received"]]
```

## Temporary conversion checks

```python
numeric_preview = pd.to_numeric(
    df["resolution_days"],
    errors="coerce"
)

date_preview = pd.to_datetime(
    df["report_month"],
    errors="coerce"
)
```

## Text exploration

```python
df["feedback"].dropna()
df["feedback"].str.len()
df["feedback"].str.split().str.len()

mask = df["feedback"].str.contains(
    "wait|long",
    case=False,
    na=False,
    regex=True
)

mask.sum()
df.loc[mask, ["record_id", "feedback"]]
```

---

# Suggested references and optional further reading

Students should not need these sources to understand the tutorial; the explanations above are intentionally self-contained. The links are provided for verification and deeper reading.

## Core course companion

- van Atteveldt, W., Trilling, D., & Calderón, C. A. *Computational Analysis of Communication*. Chapter 5, **From file to data frame and back**: https://v2.cssbook.net/content/chapter05
- The same book's later chapters on data wrangling and exploratory analysis become especially relevant in Lectures 6 and 7: https://cssbook.net/

## pandas documentation

- pandas documentation: https://pandas.pydata.org/docs/
- Getting started — What kind of data does pandas handle?: https://pandas.pydata.org/docs/getting_started/intro_tutorials/01_table_oriented.html
- pandas User Guide: https://pandas.pydata.org/docs/user_guide/
- Indexing and selecting data: https://pandas.pydata.org/docs/user_guide/indexing.html
- Essential basic functionality / descriptive operations: https://pandas.pydata.org/docs/user_guide/basics.html
- Group by: split–apply–combine: https://pandas.pydata.org/docs/user_guide/groupby.html
- Working with missing data: https://pandas.pydata.org/docs/user_guide/missing_data.html

## Course repository

- E26 course repository: https://github.com/asmrabbi/E26_TAN7_Scripting_CPH
- Teaching data folder: https://github.com/asmrabbi/E26_TAN7_Scripting_CPH/tree/main/data

---

# Bridge to Data Handling, Text Analysis and Visualization II

At the end of Lecture 5 you have deliberately stopped at **preliminary exploration**.

You can now:

```text
LOAD A CSV
UNDERSTAND THE TABLE
SELECT AND FILTER
CALCULATE
CREATE DERIVED MEASURES
COMPARE CATEGORIES
FIND QUALITY PROBLEMS
EXPLORE SHORT TEXT
WRITE PRELIMINARY FINDINGS
```

But the dataset is still not analysis-ready.

The next tutorial section, **Data Handling, Text Analysis and Visualization II**, continues the same Part III numbering from **Tutorial 3.15** and will answer:

> **How do we preserve the raw data, make justified cleaning decisions, wrangle the structured data, validate transformations, and prepare textual data systematically for analysis?**

That is the transition from **exploration** to **data preparation**.
