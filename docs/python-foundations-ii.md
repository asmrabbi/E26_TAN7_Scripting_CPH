# Part II Tutorial: Python Foundations II

**Course:** Introduction to Scripting, Data Mining and Machine Learning  
**Audience:** Programming beginners in Techno-Anthropology and related social-science programmes  
**Estimated study time:** 10 to 12 hours for the core pathway, 16 to 20 hours with guided practice, or 24 to 30 hours with all exercises and the self-test<br>
**Primary environment:** Google Colab  
**Prerequisite:** Python Foundations I, including variables, values, data types, expressions, `print()`, type conversion, user input and comments  

> **Central idea:** In Python Foundations I, you learned how Python stores values and evaluates expressions. In this tutorial, you will learn how a program makes decisions, repeats work, organises reusable code and responds to errors.

---

## Tutorial links

- **Run every example from Tutorials 2.8–2.14:** [Open the Lecture 4 Examples notebook in Colab](https://colab.research.google.com/github/asmrabbi/E26_TAN7_Scripting_CPH/blob/main/notebooks/lecture_04/L04_Tutorial_2_8_to_2_14_Examples.ipynb)
- **Practise Tutorials 2.8–2.14:** [Open the Exercises notebook in Colab](https://colab.research.google.com/github/asmrabbi/E26_TAN7_Scripting_CPH/blob/main/notebooks/lecture_04/L04_Tutorial_2_8_to_2_14_Exercises.ipynb)
- **Review the numbered answers for Tutorials 2.8–2.14:** [Open the Solutions notebook in Colab](https://colab.research.google.com/github/asmrabbi/E26_TAN7_Scripting_CPH/blob/main/notebooks/lecture_04/L04_Tutorial_2_8_to_2_14_Solutions.ipynb)
- **Complete the situational exercises in Tutorial 2.15:** [Open the Applied Exercises notebook in Colab](https://colab.research.google.com/github/asmrabbi/E26_TAN7_Scripting_CPH/blob/main/notebooks/lecture_04/L04_Tutorial_2_15_Applied_Exercises.ipynb)
- **Review the Tutorial 2.15 worked examples and answers:** [Open the Applied Solutions notebook in Colab](https://colab.research.google.com/github/asmrabbi/E26_TAN7_Scripting_CPH/blob/main/notebooks/lecture_04/L04_Tutorial_2_15_Applied_Solutions.ipynb)
- **Check the cumulative self-test after attempting every question:** [Open the Self-test Answers notebook in Colab](https://colab.research.google.com/github/asmrabbi/E26_TAN7_Scripting_CPH/blob/main/notebooks/lecture_04/L04_Python_Foundations_II_Self_Test_Answers.ipynb)
- **Browse all Lecture 4 files on GitHub:** [Open the Lecture 4 folder](https://github.com/asmrabbi/E26_TAN7_Scripting_CPH/tree/main/notebooks/lecture_04)
- **Report a problem:** [Open a GitHub issue](https://github.com/asmrabbi/E26_TAN7_Scripting_CPH/issues)

---

# Before you start: course files and coding options

Lecture 4 uses only the Python standard library. No third-party package, dataset, virtual environment or `requirements.txt` installation is required for Tutorials 2.8–2.15. The supplied notebooks run in Google Colab and can also be opened locally in Jupyter or PyCharm with Python 3.

Use the tutorial number in each notebook heading to match it with the website. Start with the Examples notebook during teaching, use the Exercises notebook before consulting the numbered Solutions notebook, and keep Tutorial 2.15 for the longer situational problems that combine learning from both Python foundation sections.

In Colab, choose **File > Save a copy in Drive** before editing. Run individual cells with the play button or **Shift+Enter**. The Examples notebook pauses at clearly labelled interactive cells so that you can enter a value; the other notebooks can be checked with **Runtime > Run all** from a fresh state. On a local computer, clone or download the repository, open the `notebooks/lecture_04` folder and run the notebooks with Python 3; the import examples use built-in modules such as `math`, `random` and `statistics`.

Use this cycle for every example: **predict → run → inspect → explain → modify → break → repair → test → reflect**. When code asks for keyboard input, test ordinary values, boundary values, unsuitable text and logically impossible values separately.

---

## What you will learn

By the end of this tutorial, you should be able to:

1. explain what a Boolean value is;
2. use comparison operators to create conditions;
3. write one-way, two-way and multi-way decisions using `if`, `else` and `elif`;
4. combine conditions using `and`, `or` and `not`;
5. explain why indentation is part of Python syntax;
6. use `try` and `except` to respond to common input errors;
7. use a `for` loop to repeat an action for a known collection or range;
8. use a `while` loop when repetition depends on a condition;
9. recognise and repair an infinite loop;
10. create and call a simple function;
11. use parameters and return values;
12. import and use a Python module;
13. read common error messages and identify where a program failed;
14. combine conditions, loops and functions in a short, meaningful script;
15. explain the limits of a program and the assumptions built into its rules.

You are **not** expected to memorise every line. You should be able to:

- read the code;
- explain its important parts;
- run it;
- change it;
- test it;
- repair basic errors;
- apply the same structure to a new but bounded problem.

---

## Before you begin

## Required knowledge from Python Foundations I

You should already recognise the following ideas:

```python
records = 250
missing_records = 18
complete_records = records - missing_records

print(complete_records)
```

You should be able to explain that:

- `records`, `missing_records` and `complete_records` are variables;
- `250` and `18` are integer values;
- `=` assigns a value to a variable;
- `-` performs subtraction;
- `print()` displays a result;
- the code is executed from top to bottom.

## Quick readiness check

Predict the output before running the code:

```python
total_rows = 120
duplicate_rows = 8
usable_rows = total_rows - duplicate_rows

print("Usable rows:", usable_rows)
```

**Expected output:**

```text
Usable rows: 112
```

### Check your understanding

1. Which variable stores the value `8`?
2. Which line performs a calculation?
3. What will happen if `duplicate_rows` changes to `20`?
4. Is `"Usable rows:"` a number or a string?

<details>
<summary>Suggested answers</summary>

1. `duplicate_rows`
2. `usable_rows = total_rows - duplicate_rows`
3. The output will become `Usable rows: 100`
4. It is a string because it is written inside quotation marks.

</details>

---

## The recurring situation used in this tutorial

Many early examples use a fictional **Green Mobility Consultation** so one situation can be followed across several Python ideas. The later worked exercises deliberately use other fictional TAN7-related situations so students can transfer the same syntax to different contexts.

A municipality has collected public consultation records about:

- cycling infrastructure;
- public transport;
- car restrictions;
- accessibility;
- business concerns;
- environmental effects.

Later in the course, you may work with a CSV dataset. In this tutorial, we will not load a CSV file yet. Instead, we will use individual values and small lists so that you can focus on Python logic.

Examples will involve questions such as:

- Does a record have missing information?
- Is engagement high, medium or low?
- Should a record be reviewed?
- How many records meet a condition?
- Can repeated checks be organised into a function?

These are simplified teaching examples. Real data-quality decisions require context, documentation and human judgement.

---

# Tutorial 2.8 — Booleans, comparisons and decisions

## Tutorial 2.8 overview

A Boolean is a Python value that is either `True` or `False`, and comparisons are expressions that produce those values. Operators such as `==`, `!=`, `<`, `<=`, `>` and `>=` ask precise questions about numbers, text or other comparable values. An `if` statement runs its indented block only when its condition is true. An `elif` branch asks another question only after earlier branches were false, while `else` provides a fallback that has no condition of its own. Python executes only the first matching branch in an `if`–`elif`–`else` chain, so threshold order and boundary symbols matter. Indentation defines which statements belong to each branch and is part of Python syntax rather than optional formatting.

**Core Python vocabulary:** Boolean, `True`, `False`, comparison, condition, `if`, `elif`, `else`, branch, equality, boundary and indentation.

### Why this matters in this course

Many social-science classifications begin as questions with two possible answers: does a record meet a criterion, is consent documented or is a value outside an expected range? Python represents these answers as `True` or `False` and uses them to choose an action. The difficult part is usually not the syntax but deciding and justifying the thresholds and boundaries.

## Boolean values and comparison operators

## What is a Boolean value?

A Boolean value represents one of two logical states:

`True` or `False`

The capital letters matter. Python recognises `True` and `False` as reserved Boolean values.

<a id="example-2-8-1"></a>

#### Example 2.8.1 — What is a Boolean value?

```python
record_complete = True
needs_review = False

print(record_complete)
print(needs_review)
```

**Expected output:**

```text
True
False
```

### Line-by-line explanation

`record_complete = True`

- `record_complete` is a variable.
- `=` assigns a value.
- `True` is a Boolean value.
- The line records the decision that the record is complete.

`needs_review = False`

- `needs_review` is another variable.
- Its value is `False`.

`print(record_complete)`

- `print()` displays the current value stored in `record_complete`.

---

## Comparison operators

Comparison operators compare two values. The result is normally `True` or `False`.

| Operator | Meaning | Example |
|---|---|---|
| `==` | equal to | `score == 5` |
| `!=` | not equal to | `score != 5` |
| `>` | greater than | `score > 5` |
| `<` | less than | `score < 5` |
| `>=` | greater than or equal to | `score >= 5` |
| `<=` | less than or equal to | `score <= 5` |

### Comparing a number

<a id="example-2-8-2"></a>

#### Example 2.8.2 — Comparing a number

```python
engagement = 125

print(engagement > 100)
print(engagement == 125)
print(engagement < 50)
```

**Expected output:**

```text
True
True
False
```

### Explanation

- `engagement > 100` asks whether `125` is greater than `100`.
- `engagement == 125` asks whether the two values are equal.
- `engagement < 50` asks whether `125` is less than `50`.

The expressions do not merely describe a comparison. Python evaluates them and produces Boolean results.

---

## Assignment and equality are different

This distinction is essential:

`engagement = 125`

means:

> Assign the value `125` to the variable `engagement`.

By contrast:

`engagement == 125`

means:

> Ask whether the current value of `engagement` is equal to `125`.

### Assignment inside a condition causes a syntax error

Run this code:

<a id="example-2-8-3"></a>

#### Example 2.8.3 — Use comparison syntax instead of assignment syntax

```python
engagement = 125

if engagement = 125:
    print("The value is 125")
```

You should receive a syntax error because `=` cannot be used as the equality comparison inside the condition.

### Repair

<a id="example-2-8-4"></a>

#### Example 2.8.4 — Repair assignment with equality comparison

```python
engagement = 125

if engagement == 125:
    print("The value is 125")
```

**Expected output:**

```text
The value is 125
```

---

## Comparing strings

Python can also compare strings.

<a id="example-2-8-5"></a>

#### Example 2.8.5 — Compare two matching strings

```python
actor_type = "Municipality"

print(actor_type == "Municipality")
print(actor_type == "Business")
print(actor_type != "Citizen")
```

**Expected output:**

```text
True
False
True
```

String comparisons are case-sensitive:

<a id="example-2-8-6"></a>

#### Example 2.8.6 — Compare two different strings

```python
topic = "Cycling"

print(topic == "Cycling")
print(topic == "cycling")
```

**Expected output:**

```text
True
False
```

The words look similar to a human reader, but Python treats uppercase and lowercase letters as different.

### Modification task

Change the value of `topic` to `"Public Transport"` and create three comparisons:

1. Is the topic `"Public Transport"`?
2. Is the topic `"Cycling"`?
3. Is the topic not equal to `"Accessibility"`?

---

## Storing the result of a comparison

A comparison can be stored in a variable.

<a id="example-2-8-7"></a>

#### Example 2.8.7 — Storing the result of a comparison

```python
missing_values = 14
too_many_missing = missing_values > 10

print(missing_values > 10)
print(too_many_missing)

if missing_values > 10:
    print("Review the data")

if too_many_missing:
    print("Review the data")
```

**Expected output:**

```text
True
True
Review the data
Review the data
```

### Explanation

Python first evaluates `missing_values > 10`. The result is `True`, which is
assigned to `too_many_missing`. The two decisions produce the same output, but
the second gives the condition a meaningful name that can be reused.

---

## Practice checkpoint — Predict a Boolean boundary

Predict the output:

<a id="example-2-8-8"></a>

#### Example 2.8.8 — Test a one-way decision

```python
records = 75
minimum_required = 100
enough_records = records >= minimum_required

print(enough_records)
```

Then answer:

1. What type of value is stored in `enough_records`?
2. What change would make the result `True`?
3. What is the difference between `>` and `>=`?

<details>
<summary>Suggested answer</summary>

The output is:

```text
False
```

1. A Boolean value.
2. Set `records` to `100` or more.
3. `>` means strictly greater than. `>=` includes equality.

</details>

---

## Conditional execution with `if`

Programs often need to make decisions. A condition allows Python to execute code only when a logical test is true.

## A one-way decision

<a id="example-2-8-9"></a>

#### Example 2.8.9 — A one-way decision

```python
missing_values = 14

if missing_values > 10:
    print("Review the missing data")
```

**Expected output:**

```text
Review the missing data
```

### The structure of a complete one-way decision

<a id="example-2-8-10"></a>

#### Example 2.8.10 — Write a complete one-way decision

```python
condition = True

if condition:
    print("The condition is true")
```

Important parts:

- `if` is a reserved word.
- The condition comes after `if`.
- A colon `:` ends the condition line.
- The action is indented.
- The indented code runs only when the condition is `True`.

---

## When the condition is false

<a id="example-2-8-11"></a>

#### Example 2.8.11 — When the condition is false

```python
missing_values = 4

if missing_values > 10:
    print("Review the missing data")

print("Check complete")
```

**Expected output:**

```text
Check complete
```

The review message is not printed because the condition is false. The final line is outside the `if` block, so it runs regardless.

---

## Indentation is part of Python syntax

Python uses indentation to show which lines belong together.

Correct:

<a id="example-2-8-12"></a>

#### Example 2.8.12 — A correctly indented decision

```python
engagement = 150

if engagement > 100:
    print("High engagement")
    print("Include this record in the high-engagement review")

print("Finished")
```

**Expected output:**

```text
High engagement
Include this record in the high-engagement review
Finished
```

Incorrect:

<a id="example-2-8-13"></a>

#### Example 2.8.13 — Broken indentation

```python
engagement = 150

if engagement > 100:
print("High engagement")
```

This produces an `IndentationError`.

### Repair

Add four spaces before the action:

<a id="example-2-8-14"></a>

#### Example 2.8.14 — Repair the indentation

```python
engagement = 150

if engagement > 100:
    print("High engagement")
```

---

## Multiple lines inside one `if` block

<a id="example-2-8-15"></a>

#### Example 2.8.15 — Multiple lines inside one `if` block

```python
engagement = 220
actor_type = "Citizen Group"

if engagement > 200:
    print("Priority record")
    print("Actor type:", actor_type)
    print("Engagement:", engagement)

print("Assessment complete")
```

**Expected output:**

```text
Priority record
Actor type: Citizen Group
Engagement: 220
Assessment complete
```

All three indented lines belong to the same decision.

---

## A condition using a string

<a id="example-2-8-16"></a>

#### Example 2.8.16 — A condition using a string

```python
position = "Support"

if position == "Support":
    print("This record supports the proposal")
```

**Expected output:**

```text
This record supports the proposal
```

### Common mistake

<a id="example-2-8-17"></a>

#### Example 2.8.17 — A case-sensitive comparison

```python
position = "Support"

if position == "support":
    print("This record supports the proposal")
```

This prints nothing because string comparison is case-sensitive.

One possible repair is:

<a id="example-2-8-18"></a>

#### Example 2.8.18 — Normalise text before comparing

```python
position = "Support"

if position.lower() == "support":
    print("This record supports the proposal")
```

Here, `.lower()` creates a lowercase version for the comparison.

You do not need to memorise every string method yet. The important idea is that data may need to be standardised before reliable comparisons can be made.

---

## Practice checkpoint — Complete a one-way duplicate decision

Complete the missing condition:

<a id="example-2-8-19"></a>

#### Example 2.8.19 — Starter for a duplicate-review decision

```python
duplicate_rows = 7

if __________________:
    print("Duplicates must be reviewed")
```

The message should be printed when there is at least one duplicate row.

<details>
<summary>Suggested answer</summary>

<a id="example-2-8-20"></a>

#### Example 2.8.20 — Completed duplicate-review decision

```python
duplicate_rows = 7

if duplicate_rows > 0:
    print("Duplicates must be reviewed")
```

</details>

---

## Two-way decisions with `if` and `else`

An `else` block provides an alternative action when the condition is false.

## Choose between two outcomes with `else`

<a id="example-2-8-21"></a>

#### Example 2.8.21 — Choose between two outcomes with else

```python
missing_values = 14

if missing_values > 10:
    print("Review the dataset")
else:
    print("Continue to initial analysis")
```

**Expected output:**

```text
Review the dataset
```

If you change `missing_values` to `4`, the output becomes:

```text
Continue to initial analysis
```

Exactly one branch runs.

---

## Understanding the flow

<a id="example-2-8-22"></a>

#### Example 2.8.22 — Understanding the flow

```python
condition = False

if condition:
    print("Action when true")
else:
    print("Action when false")
```

Python:

1. evaluates the condition;
2. runs the `if` block when the result is `True`;
3. otherwise runs the `else` block;
4. continues with the code after the decision.

---

## Example with user input

<a id="example-2-8-23"></a>

#### Example 2.8.23 — Example with user input

```python
answer = input("Is the source verified? Type yes or no: ")

if answer == "yes":
    print("The record may continue to analysis")
else:
    print("The source must be reviewed")
```

### Possible interaction

```text
Is the source verified? Type yes or no: yes
The record may continue to analysis
```

### Problem with this version

A user might enter:

```text
Yes
YES
 yes
yes 
```

These values are not exactly equal to `"yes"`.

A more robust version is:

<a id="example-2-8-24"></a>

#### Example 2.8.24 — Clean the input before comparing

```python
answer = input("Is the source verified? Type yes or no: ")
answer = answer.strip().lower()

if answer == "yes":
    print("The record may continue to analysis")
else:
    print("The source must be reviewed")
```

### Explanation

- `.strip()` removes spaces at the beginning and end.
- `.lower()` converts letters to lowercase.
- The cleaned value is assigned back to `answer`.

This is an early example of data cleaning.

### Possible interaction

```text
Is the source verified? Type yes or no:   YES  
The record may continue to analysis
```

The learner entered capital letters with extra spaces. `.strip()` removes the outer spaces, `.lower()` changes `YES` to `yes`, and the cleaned answer selects the first branch.

---

## Deliberate break-and-repair activity

Broken code:

<a id="example-2-8-25"></a>

#### Example 2.8.25 — Broken code with missing colons

```python
engagement = 80

if engagement >= 100
    print("High engagement")
else
    print("Normal engagement")
```

There are two missing colons.

Repaired code:

<a id="example-2-8-26"></a>

#### Example 2.8.26 — Repair the missing colons

```python
engagement = 80

if engagement >= 100:
    print("High engagement")
else:
    print("Normal engagement")
```

**Expected output:**

```text
Normal engagement
```

---

## Multi-way decisions with `elif`

Sometimes there are more than two meaningful outcomes.

## Classifying engagement

<a id="example-2-8-27"></a>

#### Example 2.8.27 — Classifying engagement

```python
engagement = 125

if engagement >= 200:
    print("High engagement")
elif engagement >= 100:
    print("Medium engagement")
else:
    print("Low engagement")
```

**Expected output:**

```text
Medium engagement
```

### How Python evaluates the code

Python checks conditions from top to bottom:

1. Is `125 >= 200`? No.
2. Is `125 >= 100`? Yes.
3. Print `"Medium engagement"`.
4. Skip the remaining branch.

Only the first matching branch is executed.

---

## Order matters

Consider this incorrect order:

<a id="example-2-8-28"></a>

#### Example 2.8.28 — Incorrect threshold order

```python
engagement = 250

if engagement >= 100:
    print("Medium or high engagement")
elif engagement >= 200:
    print("High engagement")
else:
    print("Low engagement")
```

**Output:**

```text
Medium or high engagement
```

The second condition is never reached because `250 >= 100` is already true.

A better order is:

<a id="example-2-8-29"></a>

#### Example 2.8.29 — Correct threshold order

```python
engagement = 250

if engagement >= 200:
    print("High engagement")
elif engagement >= 100:
    print("Medium engagement")
else:
    print("Low engagement")
```

Check the most restrictive or highest threshold first.

---

## A more detailed classification

<a id="example-2-8-30"></a>

#### Example 2.8.30 — A more detailed classification

```python
missing_percentage = 18

if missing_percentage == 0:
    status = "No missing values"
elif missing_percentage <= 5:
    status = "Minor missingness"
elif missing_percentage <= 15:
    status = "Moderate missingness"
else:
    status = "Substantial missingness"

print(status)
```

**Expected output:**

```text
Substantial missingness
```

### Why assign the result to a variable?

Instead of printing inside every branch, we store the classification in `status`. This makes it easier to reuse the result later. The next two examples repeat the complete classification so that each code block can be copied and run on its own.

<a id="example-2-8-31"></a>

#### Example 2.8.31 — Reuse a stored status in a report

```python
missing_percentage = 18

if missing_percentage == 0:
    status = "No missing values"
elif missing_percentage <= 5:
    status = "Minor missingness"
elif missing_percentage <= 15:
    status = "Moderate missingness"
else:
    status = "Substantial missingness"

print("Data-quality status:", status)
```

**Expected output:**

```text
Data-quality status: Substantial missingness
```

The complete code makes the origin of `status` visible.

<a id="example-2-8-32"></a>

#### Example 2.8.32 — Use a stored status in a second decision

```python
missing_percentage = 18

if missing_percentage == 0:
    status = "No missing values"
elif missing_percentage <= 5:
    status = "Minor missingness"
elif missing_percentage <= 15:
    status = "Moderate missingness"
else:
    status = "Substantial missingness"

print("Data-quality status:", status)

if status == "Substantial missingness":
    print("Human review required")
else:
    print("Continue with the documented checks")
```

**Expected output:**

```text
Data-quality status: Substantial missingness
Human review required
```

---

## Boundary testing

When writing thresholds, test values directly around the boundaries.

The earlier version only assigned six values one after another, so Python kept only the final value and displayed nothing. This repaired example runs the full decision for one boundary value and prints the result.

<a id="example-2-8-33"></a>

#### Example 2.8.33 — Test an exact boundary value

```python
missing_percentage = 5

if missing_percentage == 0:
    status = "No missing values"
elif missing_percentage <= 5:
    status = "Minor missingness"
elif missing_percentage <= 15:
    status = "Moderate missingness"
else:
    status = "Substantial missingness"

print("Missing percentage:", missing_percentage)
print("Classification:", status)
```

**Expected output:**

```text
Missing percentage: 5
Classification: Minor missingness
```

Change only the first line and rerun the complete example with `0`, `1`, `5`, `6`, `15` and `16`. The printed classification should change at the intended boundaries.

Boundary testing helps reveal mistakes such as gaps or overlaps.

For example, this code contains a gap:

<a id="example-2-8-34"></a>

#### Example 2.8.34 — Reveal a missing boundary branch

```python
observation_minutes = 20

if observation_minutes > 20:
    print("Standard or extended fieldnote")
elif observation_minutes < 20:
    print("Brief fieldnote")
```

Nothing happens when `observation_minutes` is exactly `20`.

A repair needs to include the boundary value. The worked exercises below continue with complete, beginner-friendly decisions that use `input()`, comparison operators, `if`, `elif` and `else`. They focus on branching, so assume that each learner enters a sensible value in the range described; Tutorial 2.10 adds input validation and exception handling.

<a id="example-2-8-35"></a>

#### Worked Exercise 2.8.35 — Decide whether an online fieldnote is ready

**Story:** A Digital Anthropology group observes a public livestream about local cultural life.<br>
The observer records whether the fieldnote includes both a time and a place description.<br>
For this first decision, the student enters `yes` only when both details are present.<br>
Any answer other than `yes` or `no` should receive a clear instruction instead of being silently accepted.

**Question:** Ask whether both required details are present and print the correct next step.

**Steps to solve it:**

1. Collect and clean the yes/no answer.
2. Use `if` for `yes`.
3. Use `elif` for `no`.
4. Use `else` for an unclear answer.
5. Print one plain-language next step.

<details>
<summary>Show the worked solution</summary>

```python
details_answer = input("Are both time and place described? yes/no: ").strip().lower()

if details_answer == "yes":
    print("Fieldnote is ready for group review")
elif details_answer == "no":
    print("Add the missing contextual detail")
else:
    print("Please enter yes or no")
```

For an input of `no`, the program prints `Add the missing contextual detail`.

</details>

---

<a id="example-2-8-36"></a>

#### Worked Exercise 2.8.36 — Review a stakeholder map

**Story:** A group in Framing Techno-Anthropological Transformation prepares a fictional neighbourhood heat-plan case.<br>
They count the different stakeholder groups represented on their map.<br>
Eight or more groups is labelled broad, four to seven is developing, and fewer than four needs expansion.<br>
The labels organise discussion and do not prove that every voice is represented.

**Question:** Ask for the number of stakeholder groups and print the matching map label.

**Steps to solve it:**

1. Convert the entered count to an integer.
2. Check the highest threshold first.
3. Use `elif` for the middle range.
4. Use `else` for the remaining values.
5. Print the resulting label.

<details>
<summary>Show the worked solution</summary>

```python
stakeholder_groups = int(input("Number of stakeholder groups: "))

if stakeholder_groups >= 8:
    print("Broad stakeholder map")
elif stakeholder_groups >= 4:
    print("Developing stakeholder map")
else:
    print("Expand the stakeholder map")
```

For an input of `6`, the program prints `Developing stakeholder map`.

</details>

---

<a id="example-2-8-37"></a>

#### Worked Exercise 2.8.37 — Classify a wayfinding test from the lowest boundary

**Story:** A TAN7 group tests a fictional wayfinding kiosk before discussing the design.<br>
A participant tries to find the accessibility information, and the group records the time in seconds.<br>
Thirty seconds or less is quick, 31 to 60 seconds is workable, and more than 60 seconds suggests revision.<br>
The decision is written from the lowest upper boundary rather than from the highest value.

**Question:** Ask for the completion time and classify it using ascending upper boundaries.

**Steps to solve it:**

1. Convert the entered seconds to an integer.
2. Check `30` or less first.
3. Use `elif` for `60` or less.
4. Use `else` for a longer time.
5. Print the matching observation.

<details>
<summary>Show the worked solution</summary>

```python
completion_seconds = int(input("Seconds needed to find the information: "))

if completion_seconds <= 30:
    print("Quick completion")
elif completion_seconds <= 60:
    print("Workable completion time")
else:
    print("The wayfinding design needs revision")
```

For an input of `52`, the program prints `Workable completion time`.

</details>

---

<a id="example-2-8-38"></a>

#### Worked Exercise 2.8.38 — Check the valid range of a seven-day media diary

**Story:** A Digital Anthropology exercise asks for one media-diary entry on each of seven days.<br>
The student enters how many daily entries were completed.<br>
A value below zero or above seven is impossible and must be reported separately.<br>
Within the valid range, seven is complete, four to six is usable but incomplete, and fewer than four is limited.

**Question:** Validate the possible range before classifying the diary.

**Steps to solve it:**

1. Convert the entered days to an integer.
2. Check a negative value first.
3. Use `elif` to check a value above seven separately.
4. Continue with exact and threshold branches for the valid range.
5. Use `else` for the remaining valid values.

<details>
<summary>Show the worked solution</summary>

```python
completed_days = int(input("Completed diary days (0-7): "))

if completed_days < 0:
    print("Diary days cannot be negative")
elif completed_days > 7:
    print("A seven-day diary cannot contain more than seven daily entries")
elif completed_days == 7:
    print("Complete media diary")
elif completed_days >= 4:
    print("Usable but incomplete media diary")
else:
    print("Media diary is too limited for this task")
```

For an input of `8`, the program prints `Invalid number of diary days`.

</details>

---

<a id="example-2-8-39"></a>

#### Worked Exercise 2.8.39 — Interpret a written AI-explanation rating

**Story:** A class discusses a fictional explanation shown after an automated application-sorting decision.<br>
Instead of entering a number, one participant chooses the word `clear`, `partial`, or `unclear`.<br>
The program should preserve these three meanings and reject an unrecognised category.<br>
One response cannot establish that the underlying system is fair.

**Question:** Ask for the word rating and print the matching interpretation.

**Steps to solve it:**

1. Clean the text with `strip()` and `lower()`.
2. Use `if` for `clear`.
3. Use `elif` for `partial` and another `elif` for `unclear`.
4. Use `else` for an unsupported word.
5. Print one message.

<details>
<summary>Show the worked solution</summary>

```python
clarity_label = input("Explanation rating (clear/partial/unclear): ").strip().lower()

if clarity_label == "clear":
    print("The explanation was reported as clear")
elif clarity_label == "partial":
    print("The explanation needs more detail")
elif clarity_label == "unclear":
    print("The explanation needs substantial revision")
else:
    print("Use clear, partial, or unclear")
```

For an input of `partial`, the program prints `The explanation needs more detail`.

</details>

---

<a id="example-2-8-40"></a>

#### Worked Exercise 2.8.40 — Reuse a moderation-response classification

**Story:** A student studies a fictional online community with a published safety-report process.<br>
The student records how many hours passed before a moderator acknowledged one report.<br>
The first decision stores a response-speed label instead of printing inside every branch.<br>
A second decision uses that stored result to add a follow-up action.

**Question:** Classify the response time, print the stored label, and add a follow-up when the response is delayed.

**Steps to solve it:**

1. Convert the entered hours to a float.
2. Assign one of three labels inside `if`, `elif`, and `else`.
3. Print the stored label after the branch.
4. Use a second `if` to test the stored result.
5. Print the follow-up only for the delayed category.

<details>
<summary>Show the worked solution</summary>

```python
response_hours = float(input("Hours before acknowledgement: "))

if response_hours <= 6:
    response_status = "Quick acknowledgement"
elif response_hours <= 24:
    response_status = "Same-day acknowledgement"
else:
    response_status = "Delayed acknowledgement"

print("Response status:", response_status)

if response_status == "Delayed acknowledgement":
    print("Add the case to the follow-up review")
```

For an input of `30`, the program prints the delayed status and the follow-up instruction.

</details>

---

# Tutorial 2.9 — Logical operators and nested decisions

## Tutorial 2.9 overview

Logical operators combine or change Boolean expressions so a decision can use more than one rule. `and` is true only when both of its conditions are true, while `or` is true when at least one condition is true. `not` reverses a Boolean result and is often clearest when applied to a well-named Boolean variable. Parentheses make the intended grouping visible and prevent readers from guessing how several comparisons belong together. Python uses short-circuit evaluation, meaning it may stop evaluating an `and` or `or` expression as soon as the final result is already known. Nested decisions can represent dependent questions, but a flatter combined condition is often easier to trace when the questions are independent.

**Core Python vocabulary:** logical operator, `and`, `or`, `not`, combined condition, parentheses, truth table, short-circuit evaluation and nested decision.

### Why this matters in this course

Real rules often depend on more than one fact. For example, a record might need review when a source is unverified or when both engagement and missingness meet stated conditions. Logical operators make these rules executable, while parentheses and complete comparisons make them readable enough to question.

## Combining conditions with logical operators

Logical operators allow a program to combine or reverse conditions.

## `and`

Both conditions must be true.

<a id="example-2-9-1"></a>

#### Example 2.9.1 — `and`

```python
missing_values = 4
duplicate_rows = 0

if missing_values <= 5 and duplicate_rows == 0:
    print("The dataset passes the initial check")
```

**Expected output:**

```text
The dataset passes the initial check
```

Truth pattern for `and`:

| First condition | Second condition | Result |
|---|---|---|
| `True` | `True` | `True` |
| `True` | `False` | `False` |
| `False` | `True` | `False` |
| `False` | `False` | `False` |

---

## `or`

At least one condition must be true.

<a id="example-2-9-2"></a>

#### Example 2.9.2 — `or`

```python
missing_values = 3
duplicate_rows = 7

if missing_values > 10 or duplicate_rows > 0:
    print("Review is required")
```

**Expected output:**

```text
Review is required
```

The first condition is false, but the second condition is true.

---

## `not`

`not` reverses a Boolean value.

<a id="example-2-9-3"></a>

#### Example 2.9.3 — `not`

```python
source_verified = False

if not source_verified:
    print("Do not use the record without review")
```

**Expected output:**

```text
Do not use the record without review
```

The condition reads:

> If `source_verified` is not true, print the warning.

---

## Require several conditions with `and`

<a id="example-2-9-4"></a>

#### Example 2.9.4 — Require three conditions with and

```python
actor_type = "Citizen Group"
engagement = 240
source_verified = True

if actor_type == "Citizen Group" and engagement >= 200 and source_verified:
    print("Include in the high-engagement citizen-group review")
else:
    print("Use the standard review process")
```

**Expected output:**

```text
Include in the high-engagement citizen-group review
```

---

## Parentheses for clarity

Python has rules for evaluating logical expressions, but parentheses make your intention clearer.

Less clear:

<a id="example-2-9-5"></a>

#### Example 2.9.5 — Ambiguous grouping without parentheses

```python
topic = "Cycling"
engagement = 120

if topic == "Cycling" or topic == "Public Transport" and engagement > 100:
    print("Selected")
```

Clearer:

<a id="example-2-9-6"></a>

#### Example 2.9.6 — Explicit grouping with parentheses

```python
topic = "Cycling"
engagement = 120

if (topic == "Cycling" or topic == "Public Transport") and engagement > 100:
    print("Selected")
```

The clearer version requires:

- one of the selected topics;
- and engagement above `100`.

Use parentheses when combining several conditions.

---

## Common mistake: repeating the variable incorrectly

Incorrect:

<a id="example-2-9-7"></a>

#### Example 2.9.7 — Incorrect or condition

```python
topic = "Cycling"

if topic == "Cycling" or "Public Transport":
    print("Selected topic")
```

This condition does not mean what it appears to mean. The non-empty string `"Public Transport"` is treated as truthy, so the decision will almost always pass.

Correct:

<a id="example-2-9-8"></a>

#### Example 2.9.8 — Repeat the comparison correctly

```python
topic = "Cycling"

if topic == "Cycling" or topic == "Public Transport":
    print("Selected topic")
```

A later alternative is:

<a id="example-2-9-9"></a>

#### Example 2.9.9 — Use membership in a list

```python
topic = "Cycling"
selected_topics = ["Cycling", "Public Transport"]

if topic in selected_topics:
    print("Selected topic")
```

This alternative uses a short list and the `in` membership operator. Lists are introduced fully in Tutorial 2.11; here, read the condition as “if the topic appears among these allowed values.”

---

## Practice checkpoint — Combine priority-review rules

Create a condition that prints `"Priority review"` when:

- engagement is at least `150`;
- and either the actor type is `"Citizen Group"` or `"NGO"`.

<details>
<summary>Suggested solution</summary>

<a id="example-2-9-10"></a>

#### Example 2.9.10 — Test grouped logical conditions

```python
engagement = 180
actor_type = "NGO"

if engagement >= 150 and (actor_type == "Citizen Group" or actor_type == "NGO"):
    print("Priority review")
```

</details>

---

## Nested decisions

A nested decision is an `if` statement inside another decision.

## Basic nested example

<a id="example-2-9-11"></a>

#### Example 2.9.11 — Basic nested example

```python
source_verified = True
engagement = 230

if source_verified:
    print("Source check passed")

    if engagement >= 200:
        print("High-engagement verified record")
```

**Expected output:**

```text
Source check passed
High-engagement verified record
```

The second decision is checked only when the first decision passes.

---

## Nested decision with alternatives

<a id="example-2-9-12"></a>

#### Example 2.9.12 — Nested decision with alternatives

```python
source_verified = True
engagement = 80

if source_verified:
    if engagement >= 200:
        print("High-engagement verified record")
    else:
        print("Verified record with normal engagement")
else:
    print("Source review required")
```

**Expected output:**

```text
Verified record with normal engagement
```

---

## Avoid unnecessary nesting

This nested code:

<a id="example-2-9-13"></a>

#### Example 2.9.13 — Nested version of the rule

```python
source_verified = True
engagement = 230

if source_verified:
    if engagement >= 200:
        print("Selected")
```

can also be written as:

<a id="example-2-9-14"></a>

#### Example 2.9.14 — Combined-condition version of the rule

```python
source_verified = True
engagement = 230

if source_verified and engagement >= 200:
    print("Selected")
```

Use the form that is easiest to understand.

Nested decisions are useful when the second question only makes sense after the first. Combined logical conditions are useful when the criteria form one clear test.

## Worked exercises with different kinds of logic

The fictional situations below are inspired by current TAN7 Moodle themes: critical data studies and counter-mapping, digital archives, infrastructures and platforms, Responsible Innovation, AI ethics and digital participation. They are new teaching cases rather than copies of assessed activities. Each exercise uses `input()`, `if`, `elif` and `else`, while the sequence deliberately changes the logical structure:

- 2.9.15 combines a numeric threshold with a missing prerequisite;
- 2.9.16 allows two access routes but applies one restriction;
- 2.9.17 uses a nested decision because impact is assessed only after an outage is confirmed;
- 2.9.18 checks an ethical stop signal before considering continuation;
- 2.9.19 applies `not` to a grouped pair of participation options.

Assume that number inputs are sensible and that yes/no answers use those words. Tutorial 2.10 adds fuller input validation.

<a id="example-2-9-15"></a>

#### Worked Exercise 2.9.15 — Prepare a critical counter-map

**Story:** A Digital Anthropology group is preparing a small counter-map about places affected by a fictional redevelopment plan.<br>
The students enter how many local places appear on the map and whether they added a short note explaining the local context.<br>
The map is ready for discussion only when it contains at least four places and includes local context.<br>
If four places are present but the context is missing, the program should name that specific next step.

**Question:** Ask for the number of mapped places and whether local context was added, then print the correct preparation message.

**Steps to solve it:**

1. Collect the place count with `input()` and convert it to an integer.
2. Collect the yes/no context answer and convert it to a Boolean comparison.
3. Use `and` in the first branch because both readiness conditions must be true.
4. Use `not` in the `elif` branch to identify the missing context.
5. Use `else` when the map still needs more local places.

<details>
<summary>Show the worked solution</summary>

```python
mapped_places = int(input("Number of local places on the map: "))
local_context_added = input("Was local context added? yes/no: ").strip().lower() == "yes"

if mapped_places >= 4 and local_context_added:
    print("Counter-map is ready for discussion")
elif mapped_places >= 4 and not local_context_added:
    print("Add local context before the discussion")
else:
    print("Map more local places first")
```

For inputs `5` and `no`, the program prints `Add local context before the discussion`.

</details>

---

<a id="example-2-9-16"></a>

#### Worked Exercise 2.9.16 — Decide whether an archival item can be used

**Story:** A student finds a fictional digitised item while studying how the digital can work as an archive.<br>
The item may be available through public access or through university permission.<br>
A separate rights note can restrict classroom reuse even when one access route exists.<br>
The program must distinguish permitted use, a rights review, and missing access.

**Question:** Ask three yes/no questions and decide what the student should do with the archival item.

**Steps to solve it:**

1. Convert each yes/no answer into a Boolean value.
2. Group the two possible access routes with parentheses and `or`.
3. Add `and not rights_restricted` because access alone is insufficient.
4. Use `elif` to give a restriction the specific review message.
5. Use `else` when neither access route is available.

<details>
<summary>Show the worked solution</summary>

```python
public_access = input("Is the item publicly accessible? yes/no: ").strip().lower() == "yes"
university_permission = input("Is university permission available? yes/no: ").strip().lower() == "yes"
rights_restricted = input("Does the item have a reuse restriction? yes/no: ").strip().lower() == "yes"

if (public_access or university_permission) and not rights_restricted:
    print("The item may be used for the classroom task")
elif rights_restricted:
    print("Pause and review the rights note")
else:
    print("Access permission is needed")
```

For inputs `no`, `yes` and `no`, the program prints `The item may be used for the classroom task`.

</details>

---

<a id="example-2-9-17"></a>

#### Worked Exercise 2.9.17 — Respond to a platform outage

**Story:** A Digital Anthropology group treats a fictional campus platform as infrastructure and records a service interruption.<br>
The students enter whether an outage is confirmed, how many services are affected, and whether a backup channel is available.<br>
The impact question matters only after the outage has been confirmed, so the decision should be nested.<br>
Three affected services and no backup require the strongest response.

**Question:** Build a nested decision that prints the appropriate outage response.

**Steps to solve it:**

1. Keep the first yes/no answer as cleaned text so `yes`, `no` and another answer can take different branches.
2. In the outer `if`, continue only when the outage answer is `yes`.
3. Ask for the affected-service count and backup channel only inside that confirmed-outage branch.
4. Inside that branch, use `and`, `or` and `not` to distinguish urgent, priority and routine responses.
5. Use the outer `elif` and `else` for `no` and an unclear answer.

<details>
<summary>Show the worked solution</summary>

```python
outage_answer = input("Is the outage confirmed? yes/no: ").strip().lower()

if outage_answer == "yes":
    affected_services = int(input("Number of affected services: "))
    backup_available = input("Is a backup channel available? yes/no: ").strip().lower() == "yes"

    if affected_services >= 3 and not backup_available:
        print("Urgent infrastructure response")
    elif affected_services >= 3 or not backup_available:
        print("Priority infrastructure review")
    else:
        print("Routine outage documentation")
elif outage_answer == "no":
    print("Record that no outage is confirmed")
else:
    print("Enter yes or no for the outage question")
```

For inputs `yes`, `4` and `no`, the program prints `Urgent infrastructure response`.

</details>

---

<a id="example-2-9-18"></a>

#### Worked Exercise 2.9.18 — Apply a responsible-innovation stop rule

**Story:** A class discusses a fictional AI pilot using themes from Responsible Innovation and AI ethics.<br>
The students record whether a possible harm has been reported, whether human review is complete, and whether an appeal route exists.<br>
A harm signal or missing human review must pause the pilot before other conditions are considered.<br>
Only a reviewed pilot with an appeal route receives the continuation message.

**Question:** Ask the three questions and print whether to pause, continue carefully, or add an appeal route.

**Steps to solve it:**

1. Convert the three yes/no answers into Boolean values.
2. Put the stop rule first and join its alternatives with `or`.
3. Use `not` to test for missing human review.
4. In `elif`, use `and` for the two requirements that support limited continuation.
5. Use `else` for a reviewed pilot that still lacks an appeal route.

<details>
<summary>Show the worked solution</summary>

```python
harm_reported = input("Has a possible harm been reported? yes/no: ").strip().lower() == "yes"
human_review_complete = input("Is human review complete? yes/no: ").strip().lower() == "yes"
appeal_route_available = input("Is an appeal route available? yes/no: ").strip().lower() == "yes"

if harm_reported or not human_review_complete:
    print("Pause the AI pilot for review")
elif human_review_complete and appeal_route_available:
    print("The limited pilot may continue with monitoring")
else:
    print("Add an appeal route before continuing")
```

For inputs `no`, `yes` and `no`, the program prints `Add an appeal route before continuing`.

</details>

---

<a id="example-2-9-19"></a>

#### Worked Exercise 2.9.19 — Check a digital-participation plan

**Story:** A group designs a fictional public discussion inspired by the Digital Participation topic.<br>
People may join through an online session or a room-based session, and the information should be available in an accessible format.<br>
The first decision asks whether neither participation route exists by applying `not` to the grouped alternatives.<br>
If a route exists, the next decision checks whether the accessible material is ready.

**Question:** Ask about the two participation routes and the accessible material, then print the plan's next action.

**Steps to solve it:**

1. Convert all three yes/no answers into Boolean values.
2. Put the two participation routes inside parentheses with `or`.
3. Place `not` before the parentheses to test whether both routes are absent.
4. Use `elif` to check the material only after a route exists.
5. Use `else` when a route exists but the accessible material is missing.

<details>
<summary>Show the worked solution</summary>

```python
online_session = input("Is an online session available? yes/no: ").strip().lower() == "yes"
room_session = input("Is a room-based session available? yes/no: ").strip().lower() == "yes"
accessible_material = input("Is accessible information ready? yes/no: ").strip().lower() == "yes"

if not (online_session or room_session):
    print("Create at least one participation route")
elif accessible_material:
    print("Participation plan is ready to review")
else:
    print("Add accessible information before inviting participants")
```

For inputs `yes`, `no` and `no`, the program prints `Add accessible information before inviting participants`.

</details>

---

# Tutorial 2.10 — User input, validation and exceptions

## Tutorial 2.10 overview

The built-in `input()` function pauses a script and returns the learner's response as a string. Functions such as `int()` and `float()` convert suitable numerical text, but conversion alone does not prove that the number is possible in the situation. A `try` block contains an operation that may raise an expected exception, and an `except ValueError` block explains what to do when numerical conversion fails. Catching the specific error keeps unrelated programming mistakes visible instead of hiding them behind a broad `except`. Range checks and relationship checks belong after successful conversion because values such as `-5` or `120` may be valid numbers but invalid percentages. A robust input pathway therefore separates prompting, conversion, exception handling, situational validation and final use.

**Core Python vocabulary:** `input()`, prompt, string input, conversion, validation, exception, `try`, `except`, `ValueError`, range check and relationship check.

### Why this matters in this course

Human-entered data is rarely perfectly tidy. A response can be convertible to a number and still be impossible, inappropriate or outside the study's agreed range. Good validation therefore distinguishes what Python can read from what the research context permits.

## User input, type conversion and validation

The `input()` function always returns a string.

## Why conversion is necessary

<a id="example-2-10-1"></a>

#### Example 2.10.1 — Input returns a string

```python
engagement = input("Enter the engagement value: ")

print(type(engagement))
```

Possible output:

```text
Enter the engagement value: 125
<class 'str'>
```

Even though the user typed digits, the result is a string.

This fails:

<a id="example-2-10-2"></a>

#### Example 2.10.2 — A string–integer comparison error

```python
engagement = input("Enter the engagement value: ")

if engagement > 100:
    print("High engagement")
```

Python cannot directly compare a string with an integer.

Repair:

<a id="example-2-10-3"></a>

#### Example 2.10.3 — Convert before comparing

```python
engagement = input("Enter the engagement value: ")
engagement = int(engagement)

if engagement > 100:
    print("High engagement")
```

---

## Conversion in one line

<a id="example-2-10-4"></a>

#### Example 2.10.4 — Conversion in one line

```python
engagement = int(input("Enter the engagement value: "))

if engagement > 100:
    print("High engagement")
else:
    print("Normal engagement")
```

This is concise, but a conversion error will stop the program when the user enters non-numeric text.

---

## Identify assumptions in converted input

Consider:

<a id="example-2-10-5"></a>

#### Example 2.10.5 — Identify assumptions in converted input

```python
age = int(input("Enter age: "))
```

The code assumes that the user will enter a whole number such as `25`.

Possible problematic inputs include:

```text
twenty-five
25.5
unknown
(blank input)
```

Good programming requires thinking about the assumptions behind input.

---

## Handling errors with `try` and `except`

## Why error handling matters

Without error handling:

<a id="example-2-10-6"></a>

#### Example 2.10.6 — Conversion without error handling

```python
engagement = int(input("Enter engagement: "))
print("Recorded:", engagement)
```

Entering `high` produces a `ValueError` and stops the program.

With error handling:

<a id="example-2-10-7"></a>

#### Example 2.10.7 — A broad error handler

```python
try:
    engagement = int(input("Enter engagement: "))
    print("Recorded:", engagement)
except:
    print("Error: enter a whole number")
```

Possible interaction:

```text
Enter engagement: high
Error: enter a whole number
```

---

## Understanding the structure

<a id="example-2-10-8"></a>

#### Example 2.10.8 — Understanding the structure

```python
try:
    engagement = int("high")
    print("Recorded:", engagement)
except ValueError:
    print("Error: enter a whole number")
```

Python first attempts the `try` block. When an error occurs, it moves to the `except` block.

---

## Catching a specific error

It is usually better to name the expected error.

<a id="example-2-10-9"></a>

#### Example 2.10.9 — Catching a specific error

```python
try:
    engagement = int(input("Enter engagement: "))
    print("Recorded:", engagement)
except ValueError:
    print("Error: enter a whole number")
```

This handles `ValueError` without hiding every possible problem.

---

## Adding a decision after valid input

<a id="example-2-10-10"></a>

#### Example 2.10.10 — Adding a decision after valid input

```python
try:
    engagement = int(input("Enter engagement: "))

    if engagement >= 200:
        print("High engagement")
    elif engagement >= 100:
        print("Medium engagement")
    else:
        print("Low engagement")

except ValueError:
    print("The engagement value must be a whole number")
```

---

## Valid type but invalid range

A value can be correctly converted but still be unreasonable.

<a id="example-2-10-11"></a>

#### Example 2.10.11 — Valid type but invalid range

```python
try:
    percentage = float(input("Enter missing-data percentage: "))

    if percentage < 0 or percentage > 100:
        print("Error: percentage must be between 0 and 100")
    elif percentage > 15:
        print("Substantial missingness")
    else:
        print("Missingness is within the initial review threshold")

except ValueError:
    print("Error: enter a numeric value")
```

This distinguishes:

- a conversion error;
- an implausible value;
- a valid value.

---

## Avoid a completely empty `except`

A broad `except:` can hide unexpected problems. In beginner exercises, it may be used to introduce the concept, but prefer specific errors where possible.

Less informative:

<a id="example-2-10-12"></a>

#### Example 2.10.12 — A broad except block

```python
try:
    engagement = int("high")
    print("Recorded:", engagement)
except:
    print("Something went wrong")
```

More informative:

<a id="example-2-10-13"></a>

#### Example 2.10.13 — A specific ValueError handler

```python
try:
    engagement = int("high")
    print("Recorded:", engagement)
except ValueError:
    print("Enter a numeric value")
```

---

## Practice checkpoint — Repair numerical input handling

Repair this program so that non-numeric input produces a helpful message:

<a id="example-2-10-14"></a>

#### Example 2.10.14 — Unprotected starter program

```python
number_of_records = int(input("Enter number of records: "))

if number_of_records >= 100:
    print("Suitable for the planned exercise")
else:
    print("Small dataset")
```

<details>
<summary>Suggested solution</summary>

<a id="example-2-10-15"></a>

#### Example 2.10.15 — Repaired input handling

```python
try:
    number_of_records = int(input("Enter number of records: "))

    if number_of_records >= 100:
        print("Suitable for the planned exercise")
    else:
        print("Small dataset")

except ValueError:
    print("Enter a whole number")
```

</details>

---

---

## Contextual worked exercises for Tutorial 2.10

These five exercises use different TAN7-related situations and different program structures. Attempt each question and write a short plan before opening the worked solution.

<a id="example-2-10-16"></a>

#### Worked Exercise 2.10.16 — Validate an interview duration

**Story:** A student records the duration of a semi-structured interview in minutes.<br>
The teaching plan allows durations from 1 to 240 minutes.<br>
Text such as `one hour` cannot be converted directly to an integer.<br>
A numerical value outside the range is a different problem from a conversion error.

**Question:** Ask for the duration and distinguish conversion errors from invalid ranges.

**Steps to solve it:**

1. Put the conversion inside `try`.
2. Catch `ValueError` specifically.
3. Reject values below 1 or above 240.
4. Accept values inside the documented range.
5. Print a message that identifies the type of problem.

<details>
<summary>Show the worked solution</summary>

```python
try:
    interview_minutes = int(input("Interview duration in minutes: "))
    if interview_minutes < 1 or interview_minutes > 240:
        print("Duration must be between 1 and 240 minutes")
    else:
        print("Duration recorded:", interview_minutes)
except ValueError:
    print("Enter the duration as a whole number")
```

An input of `one hour` produces the whole-number message.

</details>

---

<a id="example-2-10-17"></a>

#### Worked Exercise 2.10.17 — Validate a survey response percentage

**Story:** A community survey reports a response percentage that may include a decimal.<br>
The value must be between 0 and 100 inclusive.<br>
Using `float()` accepts `62.5`, while unsuitable text still raises `ValueError`.<br>
A valid number above 100 remains logically impossible.

**Question:** Read a decimal percentage and validate both its type and range.

**Steps to solve it:**

1. Convert with `float()` inside `try`.
2. Catch `ValueError`.
3. Check the lower and upper limits.
4. Classify an accepted value as below or at least 60 per cent.
5. Keep range validation separate from conversion.

<details>
<summary>Show the worked solution</summary>

```python
try:
    response_percentage = float(input("Survey response percentage: "))
    if response_percentage < 0 or response_percentage > 100:
        print("Percentage must be between 0 and 100")
    elif response_percentage >= 60:
        print("Response target reached")
    else:
        print("Response target not yet reached")
except ValueError:
    print("Enter a numerical percentage")
```

An input of `62.5` prints `Response target reached`.

</details>

---

<a id="example-2-10-18"></a>

#### Worked Exercise 2.10.18 — Check workshop capacity relationships

**Story:** A participatory workshop has a stated number of places and a number of registrations.<br>
Both values must be whole numbers and neither may be negative.<br>
The registrations may exceed capacity, but capacity itself cannot be zero for this planned event.<br>
The relationship between the two valid inputs determines whether a waiting list is needed.

**Question:** Read both counts and validate their relationship before reporting capacity.

**Steps to solve it:**

1. Convert both inputs inside one focused `try` block.
2. Reject a non-positive capacity.
3. Reject a negative registration count.
4. Compare registrations with capacity.
5. Catch `ValueError` for unsuitable text.

<details>
<summary>Show the worked solution</summary>

```python
try:
    available_places = int(input("Available workshop places: "))
    registrations = int(input("Number of registrations: "))
    if available_places <= 0:
        print("Available places must be greater than zero")
    elif registrations < 0:
        print("Registrations cannot be negative")
    elif registrations > available_places:
        print("Create a waiting list")
    else:
        print("All registrations fit within capacity")
except ValueError:
    print("Enter both counts as whole numbers")
```

Inputs `24` and `29` print `Create a waiting list`.

</details>

---

<a id="example-2-10-19"></a>

#### Worked Exercise 2.10.19 — Validate an archival year

**Story:** A student enters the stated year of a digitised archival item.<br>
The classroom collection covers years from 1900 through 2026.<br>
A year written as text causes a conversion error.<br>
A converted year such as 3026 is numerical but outside the collection scope.

**Question:** Validate the entered year and report whether it belongs to the stated collection period.

**Steps to solve it:**

1. Convert the input to an integer.
2. Catch `ValueError`.
3. Check the earliest year.
4. Check the latest year.
5. Accept only a year inside both boundaries.

<details>
<summary>Show the worked solution</summary>

```python
try:
    archive_year = int(input("Year shown on the archival item: "))
    if archive_year < 1900:
        print("Year is earlier than this teaching collection")
    elif archive_year > 2026:
        print("Year is later than this teaching collection")
    else:
        print("Year is within the teaching collection")
except ValueError:
    print("Enter the year as a whole number")
```

An input of `1987` is accepted as within the collection.

</details>

---

<a id="example-2-10-20"></a>

#### Worked Exercise 2.10.20 — Validate an outage duration with an optional decimal

**Story:** A group documents the duration of a fictional platform outage in hours.<br>
A decimal such as `1.5` is valid, while negative time is impossible.<br>
Durations above 72 hours require confirmation because the unit may have been entered incorrectly.<br>
The program must distinguish these cases from unsuitable text.

**Question:** Read the duration as a float and print the appropriate validation message.

**Steps to solve it:**

1. Convert with `float()` inside `try`.
2. Reject a negative duration.
3. Flag values above 72 for confirmation.
4. Accept the remaining range.
5. Catch `ValueError` separately.

<details>
<summary>Show the worked solution</summary>

```python
try:
    outage_hours = float(input("Platform outage duration in hours: "))
    if outage_hours < 0:
        print("Outage duration cannot be negative")
    elif outage_hours > 72:
        print("Confirm the value and its unit")
    else:
        print("Outage duration recorded:", outage_hours)
except ValueError:
    print("Enter the duration as a number")
```

An input of `1.5` records the decimal duration.

</details>

---

# Tutorial 2.11 — Collections, for loops and counters

## Tutorial 2.11 overview

Collections let one variable organise several related values before the course moves to CSV and JSON data. A list preserves order and can contain repeated values, a dictionary connects keys with values, and a set stores unique values without relying on a meaningful position. A list of dictionaries can represent several records that share the same fields, which closely resembles rows and columns in later data work. A `for` loop visits each item in a collection or generated range and temporarily assigns that item to an iteration variable. Counters and totals must normally be initialised before the loop so each iteration updates rather than resets the accumulated result. Conditions inside a loop allow each item to be classified, counted or preserved for review.

**Core Python vocabulary:** collection, list, dictionary, key, value, set, record, `for`, iteration variable, `range()`, counter and accumulator.

### Why this matters in this course

Collections let a script represent several observations rather than one isolated value. A list keeps an order, a dictionary gives fields meaningful labels and a set keeps unique values. Loops then apply the same documented step to each item, which supports systematic inspection but can hide individual detail when results are reduced to totals.

## Collections needed before CSV and JSON

CSV and JSON tutorials introduce new file formats, but the values read from them are normally organised with Python collections. A **list** keeps an ordered sequence, a **dictionary** connects keys with values, and a **set** keeps unique values. A list of dictionaries is especially important because each dictionary can represent one record before the same structure is written to or read from a file.

## Lists: ordered values

<a id="example-2-11-1"></a>

#### Example 2.11.1 — Lists: ordered values

```python
campuses = ["Aalborg", "Copenhagen"]
campuses.append("Online")

print(campuses[0])
print(len(campuses))
print(campuses)
```

Lists use square brackets. Index positions begin at zero, `append()` adds one value at the end and `len()` reports the number of items.

## Dictionaries: labelled values

<a id="example-2-11-2"></a>

#### Example 2.11.2 — Dictionaries: labelled values

```python
registration = {
    "participant_id": "CPH-014",
    "campus": "Copenhagen",
    "attending": True,
}

print(registration["campus"])
registration["group"] = 3
print(registration)
```

Dictionary keys make a record easier to interpret than a sequence of unexplained positions. Accessing a missing key with square brackets raises `KeyError`; `registration.get("email")` would instead return `None` when the key is absent. `None` is Python’s special value for “no value is present”; it should normally trigger an explicit missing-data check rather than be treated as an ordinary response.

## Sets: unique values

<a id="example-2-11-3"></a>

#### Example 2.11.3 — Sets: unique values

```python
submitted_ids = ["A12", "B07", "A12", "C03"]
unique_ids = set(submitted_ids)

print(unique_ids)
print(len(unique_ids))
```

A set removes repeated values and is useful for membership checks. Sets are not a substitute for preserving the original ordered records, because they discard duplicate occurrences and do not communicate why a duplicate appeared.

## A list of dictionaries: records ready for later file work

<a id="example-2-11-4"></a>

#### Example 2.11.4 — A list of dictionaries: records ready for later file work

```python
observations = [
    {"record_id": 1, "category": "Bus", "minutes": 12},
    {"record_id": 2, "category": "Cycle", "minutes": 8},
]

for observation in observations:
    print(observation["record_id"], observation["category"], observation["minutes"])
```

Every dictionary uses the same keys, which is the structure students will meet again as CSV column names and JSON object properties. Before moving on, practise reading, updating and looping through this structure without changing the raw source records accidentally.

## Repetition and loops

A loop repeats a block of code.

There are two major beginner-level loop types:

- `for` loops;
- `while` loops.

A `for` loop is normally used when you have a known sequence, range or collection. A `while` loop repeats while a condition remains true.

---

## `for` loops

## A simple definite loop

<a id="example-2-11-5"></a>

#### Example 2.11.5 — A simple definite loop

```python
for number in [1, 2, 3]:
    print(number)
```

**Expected output:**

```text
1
2
3
```

### Trace the iteration variable

<a id="example-2-11-6"></a>

#### Example 2.11.6 — Trace the iteration variable

```python
numbers = [1, 2, 3]

for number in numbers:
    print("Current number:", number)
```

- `for` begins the loop.
- `number` is the iteration variable.
- `in` means that Python will take values from the sequence.
- `[1, 2, 3]` is a list.
- The colon begins the loop body.

Each time through the loop, `number` receives the next value.

---

## Looping through strings

<a id="example-2-11-7"></a>

#### Example 2.11.7 — Looping through strings

```python
topics = ["Cycling", "Public Transport", "Accessibility"]

for topic in topics:
    print("Current topic:", topic)
```

**Expected output:**

```text
Current topic: Cycling
Current topic: Public Transport
Current topic: Accessibility
```

### What changes?

The variable `topic` changes during each iteration:

1. `"Cycling"`
2. `"Public Transport"`
3. `"Accessibility"`

The indented line runs once for each value.

---

## The code after the loop

<a id="example-2-11-8"></a>

#### Example 2.11.8 — The code after the loop

```python
topics = ["Cycling", "Public Transport", "Accessibility"]

for topic in topics:
    print(topic)

print("All topics processed")
```

**Expected output:**

```text
Cycling
Public Transport
Accessibility
All topics processed
```

The final line is not indented, so it runs after the loop finishes.

---

## Using `range()`

`range()` generates a sequence of integers.

<a id="example-2-11-9"></a>

#### Example 2.11.9 — Using `range()`

```python
for number in range(5):
    print(number)
```

**Expected output:**

```text
0
1
2
3
4
```

`range(5)` starts at `0` and stops before `5`.

---

## Starting and stopping a range

<a id="example-2-11-10"></a>

#### Example 2.11.10 — Starting and stopping a range

```python
for number in range(1, 6):
    print(number)
```

**Expected output:**

```text
1
2
3
4
5
```

The first argument is the starting value. The second is the stopping point, which is not included.

---

## Add a step argument to `range()`

<a id="example-2-11-11"></a>

#### Example 2.11.11 — Add a step argument to range

```python
for number in range(0, 11, 2):
    print(number)
```

**Expected output:**

```text
0
2
4
6
8
10
```

The arguments mean:

```text
start at 0
stop before 11
increase by 2
```

---

## Repeating a message

<a id="example-2-11-12"></a>

#### Example 2.11.12 — Repeat with a named variable

```python
for repetition in range(3):
    print("Check the dataset")
```

**Expected output:**

```text
Check the dataset
Check the dataset
Check the dataset
```

The iteration variable exists even when it is not printed.

A conventional name for an unused variable is `_`:

<a id="example-2-11-13"></a>

#### Example 2.11.13 — Use an underscore for an unused value

```python
for _ in range(3):
    print("Check the dataset")
```

---

## Conditions inside a loop

<a id="example-2-11-14"></a>

#### Example 2.11.14 — Conditions inside a loop

```python
engagement_values = [35, 120, 240, 80]

for engagement in engagement_values:
    if engagement >= 200:
        print(engagement, "is high")
    elif engagement >= 100:
        print(engagement, "is medium")
    else:
        print(engagement, "is low")
```

**Expected output:**

```text
35 is low
120 is medium
240 is high
80 is low
```

This combines repetition with decision-making.

---

## Counting values that meet a condition

<a id="example-2-11-15"></a>

#### Example 2.11.15 — Counting values that meet a condition

```python
engagement_values = [35, 120, 240, 80, 310]
high_count = 0

for engagement in engagement_values:
    if engagement >= 200:
        high_count = high_count + 1

print("High-engagement records:", high_count)
```

**Expected output:**

```text
High-engagement records: 2
```

### Step-by-step explanation

<a id="example-2-11-16"></a>

#### Example 2.11.16 — Initialise the counter

```python
engagement_values = [35, 120, 240]
high_count = 0

print("Counter before the loop:", high_count)
```

The counter begins at zero.

<a id="example-2-11-17"></a>

#### Example 2.11.17 — Visit every engagement value

```python
engagement_values = [35, 120, 240]

for engagement in engagement_values:
    print("Current engagement:", engagement)
```

Python processes each engagement value.

<a id="example-2-11-18"></a>

#### Example 2.11.18 — Test the current value

```python
engagement_values = [35, 120, 240]

for engagement in engagement_values:
    if engagement >= 200:
        print(engagement, "meets the high threshold")
```

The program checks whether the current value meets the threshold.

<a id="example-2-11-19"></a>

#### Example 2.11.19 — Increase the counter explicitly

```python
engagement_values = [35, 120, 240]
high_count = 0

for engagement in engagement_values:
    if engagement >= 200:
        high_count = high_count + 1

print("High-engagement records:", high_count)
```

When the condition is true, the counter increases by one.

An equivalent shorter form is:

<a id="example-2-11-20"></a>

#### Example 2.11.20 — Increase the counter with +=

```python
engagement_values = [35, 120, 240]
high_count = 0

for engagement in engagement_values:
    if engagement >= 200:
        high_count += 1

print("High-engagement records:", high_count)
```

---

## Accumulating a total

<a id="example-2-11-21"></a>

#### Example 2.11.21 — Accumulate a total

```python
engagement_values = [35, 120, 240, 80]
total_engagement = 0

for engagement in engagement_values:
    total_engagement = total_engagement + engagement

print("Total engagement:", total_engagement)
```

**Expected output:**

```text
Total engagement: 475
```

Then calculate the mean:

<a id="example-2-11-22"></a>

#### Example 2.11.22 — Calculate a mean from complete data

```python
engagement_values = [35, 120, 240, 80]
total_engagement = 0

for engagement in engagement_values:
    total_engagement += engagement

average_engagement = total_engagement / len(engagement_values)
print("Average engagement:", average_engagement)
```

**Expected output:**

```text
Average engagement: 118.75
```

`len()` returns the number of items in the list. The complete example repeats the list and total calculation so it can run independently.

Later, pandas will calculate summaries more directly. This example helps you understand the repeated process behind a total and mean.

---

## Deliberate indentation error

Broken:

<a id="example-2-11-23"></a>

#### Example 2.11.23 — Broken loop indentation

```python
topics = ["Cycling", "Accessibility"]

for topic in topics:
print(topic)
```

Repair:

<a id="example-2-11-24"></a>

#### Example 2.11.24 — Repaired loop indentation

```python
topics = ["Cycling", "Accessibility"]

for topic in topics:
    print(topic)
```

---

## Practice checkpoint — Loop through review topics

Write a loop that prints each item with the phrase `"Topic under review:"`.

Starter code:

<a id="example-2-11-25"></a>

#### Example 2.11.25 — Starter list for the topic loop

```python
topics = ["Cycling", "Parking", "Accessibility"]
```

Expected output:

```text
Topic under review: Cycling
Topic under review: Parking
Topic under review: Accessibility
```

<details>
<summary>Suggested solution</summary>

<a id="example-2-11-26"></a>

#### Example 2.11.26 — Completed topic loop

```python
topics = ["Cycling", "Parking", "Accessibility"]

for topic in topics:
    print("Topic under review:", topic)
```

</details>

---

---

## Contextual worked exercises for Tutorial 2.11

These five exercises use different TAN7-related situations and different program structures. Attempt each question and write a short plan before opening the worked solution.

<a id="example-2-11-27"></a>

#### Worked Exercise 2.11.27 — Number media-diary themes

**Story:** A student has identified four themes in a media diary.<br>
The original order reflects when the themes were first recorded.<br>
A loop should print every theme with a counter beginning at one.<br>
The counter must be initialised before the loop and updated once per theme.

**Question:** Loop through the ordered list and print a numbered theme list.

**Steps to solve it:**

1. Create the list in the intended order.
2. Initialise the counter before the loop.
3. Print the counter and current theme.
4. Increase the counter inside the loop.
5. Check that every theme appears once.

<details>
<summary>Show the worked solution</summary>

```python
themes = ["Work", "Family", "News", "Entertainment"]
theme_number = 1

for theme in themes:
    print(theme_number, theme)
    theme_number += 1
```

The output numbers the four themes from 1 to 4.

</details>

---

<a id="example-2-11-28"></a>

#### Worked Exercise 2.11.28 — Add a review status to an archival record

**Story:** A digitised archival item is represented by a dictionary with named fields.<br>
The student needs to read the title and then add a review status.<br>
Using keys communicates what each value means more clearly than relying on positions.<br>
The original identifier must remain unchanged.

**Question:** Read one dictionary value, add a new key, and print the updated record.

**Steps to solve it:**

1. Create a dictionary with identifier, title, and year.
2. Access the title by its key.
3. Add a `review_status` key.
4. Print the unchanged identifier.
5. Print the complete updated dictionary.

<details>
<summary>Show the worked solution</summary>

```python
archive_item = {
    "item_id": "ARC-07",
    "title": "Neighbourhood meeting poster",
    "year": 1987,
}

print("Title:", archive_item["title"])
archive_item["review_status"] = "Context note required"
print("Identifier:", archive_item["item_id"])
print(archive_item)
```

The output preserves `ARC-07` and includes the new review status.

</details>

---

<a id="example-2-11-29"></a>

#### Worked Exercise 2.11.29 — Find repeated workshop registrations

**Story:** A workshop list contains participant codes, including accidental repeats.<br>
The original list must be preserved because repetition is itself information.<br>
A set can identify unique codes, while the difference in lengths shows how many repeated entries exist.<br>
The program should report both totals.

**Question:** Use a list and a set to calculate the number of repeated registration entries.

**Steps to solve it:**

1. Store the original codes in a list.
2. Create a set from the list.
3. Calculate the difference between the two lengths.
4. Print the original and unique totals.
5. Print the repeated-entry count.

<details>
<summary>Show the worked solution</summary>

```python
registration_codes = ["CPH-01", "AAL-02", "CPH-01", "CPH-03", "AAL-02"]
unique_codes = set(registration_codes)
repeated_entries = len(registration_codes) - len(unique_codes)

print("Original entries:", len(registration_codes))
print("Unique codes:", len(unique_codes))
print("Repeated entries:", repeated_entries)
```

The program reports five entries, three unique codes, and two repeated entries.

</details>

---

<a id="example-2-11-30"></a>

#### Worked Exercise 2.11.30 — Review structured transport observations

**Story:** A fieldwork group stores three transport observations as dictionaries inside a list.<br>
Each record has an identifier, a mode, and a duration in minutes.<br>
A loop should classify observations lasting at least 15 minutes for extended review.<br>
The program must count the selected records without losing their identifiers.

**Question:** Loop through the records, print each decision, and count extended-review observations.

**Steps to solve it:**

1. Create a list of dictionaries with consistent keys.
2. Initialise the counter before the loop.
3. Read named values from each dictionary.
4. Apply the duration decision.
5. Print the identifier and final count.

<details>
<summary>Show the worked solution</summary>

```python
observations = [
    {"record_id": "T-01", "mode": "Bus", "minutes": 12},
    {"record_id": "T-02", "mode": "Cycle", "minutes": 18},
    {"record_id": "T-03", "mode": "Walk", "minutes": 21},
]
extended_count = 0

for observation in observations:
    if observation["minutes"] >= 15:
        print(observation["record_id"], "Extended review")
        extended_count += 1
    else:
        print(observation["record_id"], "Standard review")

print("Extended-review observations:", extended_count)
```

Records `T-02` and `T-03` enter extended review.

</details>

---

<a id="example-2-11-31"></a>

#### Worked Exercise 2.11.31 — Calculate a mean only when responses exist

**Story:** A small community survey stores completion times in a list.<br>
The total must be accumulated with a loop before calculating a mean.<br>
An empty list would make the denominator zero.<br>
The program should therefore check the list before dividing.

**Question:** Calculate the mean completion time and handle an empty list safely.

**Steps to solve it:**

1. Create the list and initialise a total.
2. Loop through the values and add each to the total.
3. Check whether the list contains any values.
4. Divide only when the length is greater than zero.
5. Print a clear message for either path.

<details>
<summary>Show the worked solution</summary>

```python
completion_times = [8, 11, 9, 12]
total_time = 0

for completion_time in completion_times:
    total_time += completion_time

if len(completion_times) > 0:
    mean_time = total_time / len(completion_times)
    print("Mean completion time:", mean_time)
else:
    print("No completion times are available")
```

The mean of the four values is `10.0`.

</details>

---

# Tutorial 2.12 — While loops and loop control

## Tutorial 2.12 overview

A `while` loop repeats as long as its condition remains true, making it suitable when the number of repetitions is not known in advance. Every safe loop needs an initial state, a condition, a progress update and a reachable stopping point. If the condition never becomes false, the script enters an infinite loop and must be interrupted before it can continue. `break` exits the nearest loop immediately, while `continue` skips the rest of the current iteration and starts the next condition check. These statements can be useful, but they should not hide where progress and termination occur. Use a `for` loop for a known collection and a `while` loop for a genuinely condition-controlled process such as repeating until input is valid.

**Core Python vocabulary:** `while`, loop condition, initial state, update, termination, infinite loop, `break`, `continue`, iteration and sentinel value.

### Why this matters in this course

A `while` loop is useful when a process should continue until something changes, such as asking again until an acceptable response is entered. Before running it, you should be able to explain the starting state, the stopping condition and how progress occurs. This makes the automation understandable and prevents a process that never ends.

## `while` loops

A `while` loop repeats while a condition remains true.

## Count down with a `while` loop

<a id="example-2-12-1"></a>

#### Example 2.12.1 — Count down with a while loop

```python
number = 5

while number > 0:
    print(number)
    number = number - 1

print("Finished")
```

**Expected output:**

```text
5
4
3
2
1
Finished
```

### Three essential parts

Most `while` loops need:

1. an initial value;
2. a condition;
3. an update.

In the example:

<a id="example-2-12-2"></a>

#### Example 2.12.2 — Set the initial loop state

```python
number = 5
print("Initial value:", number)
```

is the initial value.

<a id="example-2-12-3"></a>

#### Example 2.12.3 — Use the condition in a complete loop

```python
number = 3

while number > 0:
    print(number)
    number -= 1

print("Condition is now false")
```

is the condition.

<a id="example-2-12-4"></a>

#### Example 2.12.4 — Update the state in a complete loop

```python
number = 3

while number > 0:
    print("Before update:", number)
    number = number - 1
    print("After update:", number)
```

is the update.

---

## An infinite loop

This code never changes `number`:

<a id="example-2-12-5"></a>

#### Example 2.12.5 — An infinite loop

```python
number = 5

while number > 0:
    print(number)
```

The condition remains true forever.

### How to stop an infinite loop in Colab

Use the stop button beside the running cell.

### Repair the missing loop update

<a id="example-2-12-6"></a>

#### Example 2.12.6 — Repair the missing loop update

```python
number = 5

while number > 0:
    print(number)
    number = number - 1
```

---

## A loop that never starts

<a id="example-2-12-7"></a>

#### Example 2.12.7 — A loop that never starts

```python
number = 0

while number > 0:
    print(number)

print("Finished")
```

**Expected output:**

```text
Finished
```

The condition is false before the first iteration.

---

## Repeating until valid input

<a id="example-2-12-8"></a>

#### Example 2.12.8 — Repeating until valid input

```python
valid_input = False

while not valid_input:
    answer = input("Type yes or no: ").strip().lower()

    if answer == "yes" or answer == "no":
        valid_input = True
    else:
        print("Please type exactly yes or no")

print("Accepted:", answer)
```

### Explanation

- `valid_input` begins as `False`.
- `while not valid_input` means repeat while valid input has not been received.
- When the answer is acceptable, `valid_input` becomes `True`.
- The condition becomes false and the loop ends.

This is a meaningful use of a `while` loop because the number of attempts is unknown.

---

## `for` or `while`?

Use a `for` loop when you know the sequence or number of repetitions:

<a id="example-2-12-9"></a>

#### Example 2.12.9 — Choose a for loop for known items

```python
topics = ["Cycling", "Accessibility", "Public Transport"]

for topic in topics:
    print(topic)
```

Use a `while` loop when repetition depends on a changing condition:

<a id="example-2-12-10"></a>

#### Example 2.12.10 — Choose a while loop for an unknown number of attempts

```python
answers = ["maybe", "yes"]
answer_index = 0
valid_input = False

while not valid_input:
    answer = answers[answer_index]
    print("Checking:", answer)
    answer_index += 1
    if answer == "yes" or answer == "no":
        valid_input = True

print("Accepted:", answer)
```

For beginners, `for` loops are usually safer and more common in data processing.

---

## Loop-control statements

This section is useful, but it can be treated as **recommended rather than essential**.

## `break`

`break` ends the loop immediately.

<a id="example-2-12-11"></a>

#### Example 2.12.11 — `break`

```python
topics = ["Cycling", "Accessibility", "STOP", "Parking"]

for topic in topics:
    if topic == "STOP":
        break

    print(topic)

print("Loop ended")
```

**Expected output:**

```text
Cycling
Accessibility
Loop ended
```

When `"STOP"` is reached, the loop ends.

---

## `continue`

`continue` skips the rest of the current iteration and moves to the next one.

<a id="example-2-12-12"></a>

#### Example 2.12.12 — `continue`

```python
values = [120, None, 75, 240]

for value in values:
    if value is None:
        continue

    print("Valid value:", value)
```

**Expected output:**

```text
Valid value: 120
Valid value: 75
Valid value: 240
```

The missing value is skipped.

---

## Use with care

`break` and `continue` can be helpful, but too many control statements can make a loop difficult to follow. Prefer clear conditions and meaningful variable names.

---

---

## Contextual worked exercises for Tutorial 2.12

These five exercises use different TAN7-related situations and different program structures. Attempt each question and write a short plan before opening the worked solution.

<a id="example-2-12-13"></a>

#### Worked Exercise 2.12.13 — Repeat a consent-status question until it is clear

**Story:** A classroom simulation asks whether consent documentation is present.<br>
Only `yes` or `no` is accepted, but the number of attempts is unknown.<br>
The loop should explain an unclear answer and then ask again.<br>
It stops immediately after a valid response.

**Question:** Use a while loop to repeat until the answer is `yes` or `no`.

**Steps to solve it:**

1. Start with a Boolean flag set to `False`.
2. Ask and clean the answer inside the loop.
3. Set the flag to `True` only for accepted words.
4. Print guidance for another word.
5. Print the accepted answer after the loop.

<details>
<summary>Show the worked solution</summary>

```python
valid_answer = False

while not valid_answer:
    consent_answer = input("Is consent documentation present? yes/no: ").strip().lower()
    if consent_answer == "yes" or consent_answer == "no":
        valid_answer = True
    else:
        print("Please enter yes or no")

print("Accepted answer:", consent_answer)
```

The loop continues after `maybe` and stops after `yes` or `no`.

</details>

---

<a id="example-2-12-14"></a>

#### Worked Exercise 2.12.14 — Limit attempts to enter a participant code

**Story:** A workshop check accepts the fictional code `TAN7`.<br>
To avoid an endless prompt, the student receives at most three attempts.<br>
The loop condition must track both success and remaining attempts.<br>
The final message distinguishes success from using all attempts.

**Question:** Build a bounded while loop with a maximum of three attempts.

**Steps to solve it:**

1. Initialise the attempt counter and success flag.
2. Repeat while attempts remain and success is false.
3. Increase the attempt count on every path.
4. Set success when the code matches.
5. Print the final result after the loop.

<details>
<summary>Show the worked solution</summary>

```python
attempts = 0
code_accepted = False

while attempts < 3 and not code_accepted:
    entered_code = input("Enter participant code: ").strip().upper()
    attempts += 1
    if entered_code == "TAN7":
        code_accepted = True
    else:
        print("Code not recognised")

if code_accepted:
    print("Participant code accepted")
else:
    print("Maximum attempts reached")
```

The loop cannot continue beyond three attempts.

</details>

---

<a id="example-2-12-15"></a>

#### Worked Exercise 2.12.15 — Collect fieldnote tags until a sentinel word

**Story:** A student adds short tags while reviewing a fieldnote.<br>
The number of tags is not known before the review begins.<br>
Typing `done` is a sentinel that ends collection and should not become a tag.<br>
Empty text should be ignored with a helpful message.

**Question:** Collect valid tags until the student enters `done`.

**Steps to solve it:**

1. Start with an empty tag list.
2. Use `while True` for the prompt cycle.
3. Use `break` for the documented sentinel.
4. Append non-empty tags.
5. Print the final list after the loop.

<details>
<summary>Show the worked solution</summary>

```python
fieldnote_tags = []

while True:
    tag = input("Add a fieldnote tag, or type done: ").strip().lower()
    if tag == "done":
        break
    if tag == "":
        print("Empty tags are not recorded")
        continue
    fieldnote_tags.append(tag)

print("Recorded tags:", fieldnote_tags)
```

Entering `mobility`, `access`, and `done` stores the first two tags.

</details>

---

<a id="example-2-12-16"></a>

#### Worked Exercise 2.12.16 — Stop at an explicit review marker

**Story:** A list represents records arriving in a documented order.<br>
The marker `STOP FOR REVIEW` means later records must not be processed automatically.<br>
A `for` loop is appropriate because the records already exist.<br>
A `break` statement ends the loop at the marker.

**Question:** Process records until the explicit review marker appears.

**Steps to solve it:**

1. Store the ordered records in a list.
2. Loop through each value.
3. Test for the marker before printing a processed message.
4. Use `break` when the marker is reached.
5. Print a final message after the loop.

<details>
<summary>Show the worked solution</summary>

```python
review_queue = ["R-01", "R-02", "STOP FOR REVIEW", "R-03"]

for record_id in review_queue:
    if record_id == "STOP FOR REVIEW":
        print("Automatic processing stopped")
        break
    print("Processed:", record_id)

print("Review the remaining queue manually")
```

`R-03` is not processed automatically.

</details>

---

<a id="example-2-12-17"></a>

#### Worked Exercise 2.12.17 — Skip missing values while preserving a count

**Story:** A list of observation durations contains two missing values represented by `None`.<br>
`None` means that no duration value is stored for that position.<br>
The loop should skip numerical processing for those entries but count them for review.<br>
Valid values must still be printed.

**Question:** Use `continue` to skip missing values without hiding how many were found.

**Steps to solve it:**

1. Initialise a missing-value counter.
2. Loop through every value.
3. Increase the counter before `continue`.
4. Print valid numerical values.
5. Print the missing-value count after the loop.

<details>
<summary>Show the worked solution</summary>

```python
observation_minutes = [12, None, 8, None, 21]
missing_count = 0

for minutes in observation_minutes:
    if minutes is None:
        missing_count += 1
        continue
    print("Recorded minutes:", minutes)

print("Missing durations:", missing_count)
```

The program reports three valid durations and two missing values.

</details>

---

# Tutorial 2.13 — Functions, parameters and return values

## Tutorial 2.13 overview

A function gives a reusable piece of logic a name and a clear boundary. The `def` keyword begins a function definition, parameters name the values the function expects, and arguments are the actual values supplied when the function is called. Statements inside the indented function body do not run until a call is made. `return` sends a result back to the caller so it can be stored, tested or used in another expression, whereas `print()` only displays information. Variables created inside a function are normally local to that call and should not be assumed to exist elsewhere. Small functions are easier to test when each one performs one calculation, classification or validation responsibility.

**Core Python vocabulary:** function, `def`, function body, call, parameter, argument, `return`, return value, local variable and reusable logic.

### Why this matters in this course

A function gives a repeated procedure a name. In research code, one function might calculate a rate, apply a documented classification or format a report consistently across many records. Parameters make the procedure adaptable, and return values let later steps use the result without hiding how it was produced.

## Functions

A function is a named block of reusable code.

Functions help you:

- avoid repeating code;
- organise a program;
- give a meaningful name to a process;
- test one part of a program separately;
- reuse the same logic with different values.

---

## Defining and calling a function

<a id="example-2-13-1"></a>

#### Example 2.13.1 — Defining and calling a function

```python
def show_welcome():
    print("Welcome to the data-quality checker")

show_welcome()
```

**Expected output:**

```text
Welcome to the data-quality checker
```

### Explanation

<a id="example-2-13-2"></a>

#### Example 2.13.2 — Write a complete function definition

```python
def show_welcome():
    print("Welcome to the data-quality checker")

show_welcome()
```

- `def` is a reserved word that defines a function.
- `show_welcome` is the function name.
- Parentheses are required.
- The colon starts the function body.

<a id="example-2-13-3"></a>

#### Example 2.13.3 — Put the function body inside the definition

```python
def show_welcome():
    message = "Welcome to the data-quality checker"
    print(message)

show_welcome()
```

The indented line belongs to the function.

<a id="example-2-13-4"></a>

#### Example 2.13.4 — Call the function after defining it

```python
def show_welcome():
    print("Welcome to the data-quality checker")

show_welcome()
```

This calls the function.

Defining a function does not automatically run it.

---

## Meaningful function names

Good names:

<a id="example-2-13-5"></a>

#### Example 2.13.5 — Use a descriptive function name

```python
def classify_engagement(engagement):
    if engagement >= 200:
        return "High"
    return "Standard"

print(classify_engagement(240))
```

Less useful names:

<a id="example-2-13-6"></a>

#### Example 2.13.6 — Why a vague function name is unhelpful

```python
def do_it(value):
    return value >= 200

print(do_it(240))
```

A function name should describe the action.

---

## Parameters and arguments

<a id="example-2-13-7"></a>

#### Example 2.13.7 — Parameters and arguments

```python
def greet_actor(actor_name):
    print("Record submitted by:", actor_name)

greet_actor("Green Streets Association")
greet_actor("Local Business Council")
```

**Expected output:**

```text
Record submitted by: Green Streets Association
Record submitted by: Local Business Council
```

### Terminology

In the definition:

<a id="example-2-13-8"></a>

#### Example 2.13.8 — Identify a parameter in a complete function

```python
def greet_actor(actor_name):
    print("Record submitted by:", actor_name)

greet_actor("Green Streets Association")
```

`actor_name` is a **parameter**.

In the call:

<a id="example-2-13-9"></a>

#### Example 2.13.9 — Supply an argument in a complete call

```python
def greet_actor(actor_name):
    print("Record submitted by:", actor_name)

greet_actor("Green Streets Association")
```

`"Green Streets Association"` is an **argument**.

---

## Multiple parameters

<a id="example-2-13-10"></a>

#### Example 2.13.10 — Multiple parameters

```python
def show_record(actor_name, topic, engagement):
    print("Actor:", actor_name)
    print("Topic:", topic)
    print("Engagement:", engagement)

show_record("Cycling Alliance", "Cycling", 245)
```

**Expected output:**

```text
Actor: Cycling Alliance
Topic: Cycling
Engagement: 245
```

The order of arguments should match the order of parameters.

---

## Returning a value

A function can calculate and return a result.

<a id="example-2-13-11"></a>

#### Example 2.13.11 — Returning a value

```python
def calculate_missing_percentage(missing_values, total_values):
    if total_values <= 0:
        return None
    return missing_values / total_values * 100

result = calculate_missing_percentage(18, 200)

if result is None:
    print("Invalid total")
else:
    print(result)
```

**Expected output:**

```text
9.0
```

### Explanation

<a id="example-2-13-12"></a>

#### Example 2.13.12 — Return a value from a complete function

```python
def calculate_missing_percentage(missing_values, total_values):
    if total_values <= 0:
        return None
    percentage = missing_values / total_values * 100
    return percentage

print(calculate_missing_percentage(18, 200))
```

sends the result back to the place where the function was called.

<a id="example-2-13-13"></a>

#### Example 2.13.13 — Store a returned value

```python
def calculate_missing_percentage(missing_values, total_values):
    if total_values <= 0:
        return None
    return missing_values / total_values * 100

result = calculate_missing_percentage(18, 200)
print("Stored result:", result)
```

stores the returned value in `result`.

---

## `print()` and `return` are not the same

Printing:

<a id="example-2-13-14"></a>

#### Example 2.13.14 — A function that only prints

```python
def calculate_total(a, b):
    print(a + b)
```

Returning:

<a id="example-2-13-15"></a>

#### Example 2.13.15 — A function that returns a value

```python
def calculate_total(a, b):
    return a + b
```

A returned value can be stored and used later:

<a id="example-2-13-16"></a>

#### Example 2.13.16 — Use a returned value in another calculation

```python
def calculate_total(a, b):
    return a + b

total = calculate_total(5, 7)
average = total / 2
print(average)
```

When a function only prints, the printed result is visible but is not automatically available for later calculation.

---

## A function with conditional logic

<a id="example-2-13-17"></a>

#### Example 2.13.17 — A function with conditional logic

```python
def classify_engagement(engagement):
    if engagement >= 200:
        return "High"
    elif engagement >= 100:
        return "Medium"
    else:
        return "Low"

print(classify_engagement(240))
print(classify_engagement(130))
print(classify_engagement(45))
```

**Expected output:**

```text
High
Medium
Low
```

The function can be reused with different values.

---

## A function with validation

<a id="example-2-13-18"></a>

#### Example 2.13.18 — A function with validation

```python
def classify_percentage(percentage):
    if percentage < 0 or percentage > 100:
        return "Invalid percentage"
    elif percentage > 15:
        return "Substantial missingness"
    elif percentage > 5:
        return "Moderate missingness"
    else:
        return "Minor missingness"

print(classify_percentage(18))
print(classify_percentage(4))
print(classify_percentage(120))
```

**Expected output:**

```text
Substantial missingness
Minor missingness
Invalid percentage
```

---

## Local and global variables

This is an important idea, but it does not need advanced treatment yet.

<a id="example-2-13-19"></a>

#### Example 2.13.19 — Local and global variables

```python
status = "Global status"

def show_status():
    status = "Local status"
    print(status)

show_status()
print(status)
```

**Expected output:**

```text
Local status
Global status
```

The variable created inside the function is local to that function.

A good beginner rule is:

> Pass information into a function through parameters and send results back using `return`.

Avoid relying heavily on global variables.

---

## Deliberate function errors

### Error 1: Function not called

<a id="example-2-13-20"></a>

#### Example 2.13.20 — Define a function without calling it

```python
def show_message():
    print("Hello")
```

No output appears because the function is defined but not called.

Repair:

<a id="example-2-13-21"></a>

#### Example 2.13.21 — Define and call the function

```python
def show_message():
    print("Hello")

show_message()
```

### Error 2: Missing argument

<a id="example-2-13-22"></a>

#### Example 2.13.22 — Call a function without its argument

```python
def greet(name):
    print("Hello", name)

greet()
```

This produces a `TypeError` because the required argument is missing.

Repair:

<a id="example-2-13-23"></a>

#### Example 2.13.23 — Repair the missing argument

```python
def greet(name):
    print("Hello", name)

greet("Amina")
```

### Error 3: Incorrect indentation

<a id="example-2-13-24"></a>

#### Example 2.13.24 — Broken function indentation

```python
def greet(name):
print("Hello", name)
```

Repair:

<a id="example-2-13-25"></a>

#### Example 2.13.25 — Repaired function indentation

```python
def greet(name):
    print("Hello", name)
```

---

## Practice checkpoint — Write a reusable completion-rate function

Create a function called `calculate_completion_rate()` that:

- receives `complete_records`;
- receives `total_records`;
- returns `"Invalid total"` when the total is zero or negative;
- otherwise returns the completion percentage.

Test it with `180` complete records out of `200`, then test a total of `0`.

<details>
<summary>Suggested solution</summary>

<a id="example-2-13-26"></a>

#### Example 2.13.26 — Test a reusable completion-rate function

```python
def calculate_completion_rate(complete_records, total_records):
    if total_records <= 0:
        return "Invalid total"
    return complete_records / total_records * 100

print(calculate_completion_rate(180, 200))
print(calculate_completion_rate(5, 0))
```

Expected output:

```text
90.0
```

</details>

---

## Combining loops and functions

## Apply one function to several values

<a id="example-2-13-27"></a>

#### Example 2.13.27 — Apply one function to several values

```python
def classify_engagement(engagement):
    if engagement >= 200:
        return "High"
    elif engagement >= 100:
        return "Medium"
    else:
        return "Low"

engagement_values = [35, 120, 240, 80]

for engagement in engagement_values:
    category = classify_engagement(engagement)
    print(engagement, "->", category)
```

**Expected output:**

```text
35 -> Low
120 -> Medium
240 -> High
80 -> Low
```

### Why this structure is useful

The function contains the classification rule. The loop applies the rule repeatedly.

Later, data-processing libraries will perform similar repeated operations across rows or columns.

---

## Count function results

<a id="example-2-13-28"></a>

#### Example 2.13.28 — Count function results

```python
def classify_engagement(engagement):
    if engagement >= 200:
        return "High"
    elif engagement >= 100:
        return "Medium"
    else:
        return "Low"

engagement_values = [35, 120, 240, 80, 310]
high_count = 0

for engagement in engagement_values:
    category = classify_engagement(engagement)

    if category == "High":
        high_count = high_count + 1

print("High-engagement count:", high_count)
```

**Expected output:**

```text
High-engagement count: 2
```

---

## More advanced example: produce a simple report

<a id="example-2-13-29"></a>

#### Example 2.13.29 — More advanced example: produce a simple report

```python
def classify_engagement(engagement):
    if engagement >= 200:
        return "High"
    elif engagement >= 100:
        return "Medium"
    else:
        return "Low"


engagement_values = [35, 120, 240, 80, 310]

high_count = 0
medium_count = 0
low_count = 0

for engagement in engagement_values:
    category = classify_engagement(engagement)

    if category == "High":
        high_count = high_count + 1
    elif category == "Medium":
        medium_count = medium_count + 1
    else:
        low_count = low_count + 1

print("Engagement report")
print("-----------------")
print("High:", high_count)
print("Medium:", medium_count)
print("Low:", low_count)
```

**Expected output:**

```text
Engagement report
-----------------
High: 2
Medium: 1
Low: 2
```

This example combines:

- function definition;
- parameters;
- return values;
- a list;
- a loop;
- conditional execution;
- counters;
- formatted output.

---

---

## Contextual worked exercises for Tutorial 2.13

These five exercises use different TAN7-related situations and different program structures. Attempt each question and write a short plan before opening the worked solution.

<a id="example-2-13-30"></a>

#### Worked Exercise 2.13.30 — Normalise a project label with a function

**Story:** A project label may contain outer spaces or inconsistent capitalisation.<br>
The same cleaning rule will be needed for several labels.<br>
A function can receive one label and return a normalised result.<br>
The caller should decide when to print or store it.

**Question:** Create and test a function that returns a cleaned project label.

**Steps to solve it:**

1. Define one parameter for the label.
2. Apply `strip()` and `title()` inside the function.
3. Return the cleaned value.
4. Call the function with an untidy label.
5. Store and print the returned result.

<details>
<summary>Show the worked solution</summary>

```python
def normalise_project_label(project_label):
    cleaned_label = project_label.strip().title()
    return cleaned_label

normalised_label = normalise_project_label("  digital participation  ")
print(normalised_label)
```

The function returns `Digital Participation`.

</details>

---

<a id="example-2-13-31"></a>

#### Worked Exercise 2.13.31 — Check two consent requirements

**Story:** A fictional record may be used in a classroom exercise only when consent is documented and withdrawal has not been requested.<br>
The function receives two Boolean arguments.<br>
It returns a Boolean result instead of printing inside the function.<br>
The caller turns that result into a message.

**Question:** Write a Boolean validation function with two parameters.

**Steps to solve it:**

1. Define parameters for consent and withdrawal.
2. Combine the conditions with `and` and `not`.
3. Return the Boolean result.
4. Call the function with a test case.
5. Print the caller’s decision.

<details>
<summary>Show the worked solution</summary>

```python
def record_may_be_used(consent_documented, withdrawal_requested):
    return consent_documented and not withdrawal_requested

use_allowed = record_may_be_used(True, False)

if use_allowed:
    print("Record may be used for the classroom exercise")
else:
    print("Record requires review")
```

Arguments `True` and `False` return `True`.

</details>

---

<a id="example-2-13-32"></a>

#### Worked Exercise 2.13.32 — Calculate a completion rate safely

**Story:** A team needs a reusable completion-rate calculation.<br>
The number of complete records is divided by the total and multiplied by 100.<br>
A total of zero cannot be used as a denominator.<br>
The function should return `None` for that invalid case so the caller can explain it.

**Question:** Write and test a rate function that guards against a zero total.

**Steps to solve it:**

1. Define parameters for the part and whole.
2. Check the denominator first.
3. Return `None` for a non-positive total.
4. Otherwise return the percentage.
5. Test one valid and one zero-total call.

<details>
<summary>Show the worked solution</summary>

```python
def calculate_completion_rate(complete_records, total_records):
    if total_records <= 0:
        return None
    return complete_records / total_records * 100

print(calculate_completion_rate(72, 80))
print(calculate_completion_rate(0, 0))
```

The calls return `90.0` and `None`.

</details>

---

<a id="example-2-13-33"></a>

#### Worked Exercise 2.13.33 — Apply a classification function to several observations

**Story:** A mobility observation list contains several durations.<br>
One function should classify a duration as brief, standard, or extended.<br>
A loop then applies the same documented rule to every value.<br>
The rule remains in one place, which makes later changes easier to test.

**Question:** Define the classification function and apply it in a loop.

**Steps to solve it:**

1. Define one duration parameter.
2. Return a category from `if`, `elif`, and `else`.
3. Create a list of test durations.
4. Loop through the list and call the function.
5. Print each value and returned category.

<details>
<summary>Show the worked solution</summary>

```python
def classify_observation(minutes):
    if minutes >= 45:
        return "Extended"
    elif minutes >= 20:
        return "Standard"
    return "Brief"

observation_durations = [12, 32, 51]

for duration in observation_durations:
    print(duration, "->", classify_observation(duration))
```

The three values produce Brief, Standard, and Extended.

</details>

---

<a id="example-2-13-34"></a>

#### Worked Exercise 2.13.34 — Build a structured review record

**Story:** A later CSV or JSON lesson will need records with consistent named fields.<br>
A function can receive an identifier, category, and review flag.<br>
It returns a new dictionary rather than relying on a global variable.<br>
Two calls should produce independent records with the same keys.

**Question:** Create a function that returns a dictionary with consistent fields.

**Steps to solve it:**

1. Define three parameters.
2. Create the dictionary inside the function.
3. Return the dictionary.
4. Call the function twice.
5. Print both returned records and compare their keys.

<details>
<summary>Show the worked solution</summary>

```python
def build_review_record(record_id, category, needs_review):
    return {
        "record_id": record_id,
        "category": category,
        "needs_review": needs_review,
    }

first_record = build_review_record("R-01", "Mobility", False)
second_record = build_review_record("R-02", "Accessibility", True)

print(first_record)
print(second_record)
print("Same keys:", set(first_record) == set(second_record))
```

Both records have the same three keys.

</details>

---

# Tutorial 2.14 — Imports, libraries and systematic debugging

## Tutorial 2.14 overview

An import makes code from another module available instead of requiring every operation to be written again. `import module` keeps the module name visible, `from module import name` imports a selected item, and `as` creates a local alias. Python's standard library is installed with Python, while third-party packages such as pandas require a separate installation step in an appropriate environment. A traceback reports where execution failed and names the exception that Python raised. Systematic debugging starts with the final traceback line, inspects the highlighted location, makes one justified repair and reruns a focused test. Logic errors need predicted outputs and boundary cases because a plausible but incorrect result may produce no traceback.

**Core Python vocabulary:** module, library, standard library, third-party package, `import`, `from`, `as`, alias, traceback, exception and logic error.

### Why this matters in this course

Imports let you use tested tools that Python or another package already provides, while debugging helps you understand failures in your own use of those tools. A traceback can show where execution stopped, but a program that finishes can still implement the wrong rule. Technical success and meaningful validity must therefore be checked separately.

## Modules and libraries

A module contains reusable Python code. A library is a broader collection of tools. In beginner practice, the terms are sometimes used informally, but the core idea is the same:

> You can import existing functionality instead of writing everything yourself.

---

## Importing a standard module

<a id="example-2-14-1"></a>

#### Example 2.14.1 — Importing a standard module

```python
import math

result = math.sqrt(16)
print(result)
```

**Expected output:**

```text
4.0
```

### Explanation

<a id="example-2-14-2"></a>

#### Example 2.14.2 — Import the math module

```python
import math
```

makes the `math` module available.

<a id="example-2-14-3"></a>

#### Example 2.14.3 — Call a function through its module

```python
import math

result = math.sqrt(16)
print(result)
```

uses the `sqrt()` function from that module.

The dot connects the module name and the function.

---

## Importing one item

<a id="example-2-14-4"></a>

#### Example 2.14.4 — Import sqrt directly

```python
from math import sqrt

result = sqrt(25)
print(result)
```

**Expected output:**

```text
5.0
```

Now `sqrt()` can be used without writing `math.`.

For beginners, importing the full module can make the origin of a function clearer:

<a id="example-2-14-5"></a>

#### Example 2.14.5 — Keep the module origin visible

```python
import math

result = math.sqrt(25)
print(result)
```

shows that `sqrt()` comes from `math`.

---

## Using an alias

Later, the pandas tutorial will use `import pandas as pd` after its package setup. `pd` is the conventional alias, or shorter name, for pandas. Do not run that preview in this standard-library-only foundation tutorial.

A standard example:

<a id="example-2-14-6"></a>

#### Example 2.14.6 — Use a conventional short alias

```python
import math as m

print(m.sqrt(36))
```

**Expected output:**

```text
6.0
```

Aliases should follow common conventions. Do not create confusing aliases such as:

<a id="example-2-14-7"></a>

#### Example 2.14.7 — Avoid a confusing alias

```python
import math as banana
```

Python allows it, but it makes the code harder to understand.

---

## Example with the `random` module

<a id="example-2-14-8"></a>

#### Example 2.14.8 — Example with the `random` module

```python
import random

number = random.randint(1, 5)
print(number)
```

The output can be any whole number from `1` to `5`.

This demonstrates that not every program produces exactly the same result each time.

For reproducible data analysis, randomness must be controlled and documented. This becomes important later in machine learning.

---

## Import errors

This code contains a spelling error:

<a id="example-2-14-9"></a>

#### Example 2.14.9 — Misspell a module name

```python
import maths
```

Python produces:

```text
ModuleNotFoundError: No module named 'maths'
```

Repair:

<a id="example-2-14-10"></a>

#### Example 2.14.10 — Repair the module name

```python
import math
```

Another common error:

<a id="example-2-14-11"></a>

#### Example 2.14.11 — Misspell a module attribute

```python
import math

print(math.squareroot(16))
```

This produces an `AttributeError` because the function is called `sqrt()`, not `squareroot()`.

Repair:

<a id="example-2-14-12"></a>

#### Example 2.14.12 — Repair the attribute call

```python
import math

print(math.sqrt(16))
```

---

## Reading and responding to errors

Errors are normal evidence that Python reached something it could not interpret or execute.

A useful debugging routine is:

1. Read the final line of the error message.
2. Identify the error type.
3. Find the referenced line.
4. Inspect spelling, punctuation, indentation, values and types.
5. Make one change.
6. Run the code again.
7. Check whether the output now makes sense.

---

## `SyntaxError`

Example:

<a id="example-2-14-13"></a>

#### Example 2.14.13 — SyntaxError from a missing colon

```python
if engagement > 100
    print("High")
```

The colon is missing.

Repair:

<a id="example-2-14-14"></a>

#### Example 2.14.14 — Repair the missing colon

```python
engagement = 120

if engagement > 100:
    print("High")
```

---

## `IndentationError`

Example:

<a id="example-2-14-15"></a>

#### Example 2.14.15 — IndentationError from an unindented body

```python
for topic in topics:
print(topic)
```

Repair:

<a id="example-2-14-16"></a>

#### Example 2.14.16 — Repair the loop indentation

```python
topics = ["Cycling", "Accessibility"]

for topic in topics:
    print(topic)
```

---

## `NameError`

Example:

<a id="example-2-14-17"></a>

#### Example 2.14.17 — NameError from inconsistent spelling

```python
engagment = 120
print(engagement)
```

The variable was assigned using one spelling and printed using another.

Repair:

<a id="example-2-14-18"></a>

#### Example 2.14.18 — Repair the variable spelling

```python
engagement = 120
print(engagement)
```

---

## `TypeError`

Example:

<a id="example-2-14-19"></a>

#### Example 2.14.19 — TypeError from adding unlike types

```python
engagement = "120"
result = engagement + 10
```

A string and integer cannot be added in this way.

Repair:

<a id="example-2-14-20"></a>

#### Example 2.14.20 — Repair the type mismatch

```python
engagement = "120"
result = int(engagement) + 10

print(result)
```

---

## `ValueError`

Example:

<a id="example-2-14-21"></a>

#### Example 2.14.21 — ValueError from unsuitable numerical text

```python
engagement = int("high")
```

The string cannot be converted to an integer.

Possible repair:

<a id="example-2-14-22"></a>

#### Example 2.14.22 — Handle the ValueError

```python
try:
    engagement = int(input("Enter engagement: "))
except ValueError:
    print("Enter a whole number")
```

---

## `ModuleNotFoundError`

Example:

<a id="example-2-14-23"></a>

#### Example 2.14.23 — ModuleNotFoundError from a misspelling

```python
import statisticss
```

Possible repair:

<a id="example-2-14-24"></a>

#### Example 2.14.24 — Repair the standard-library import

```python
import statistics
```

Check the spelling first. `statistics` is part of the Python standard library, so this repair does not require a package installation.

---

## `TypeError` from a missing function argument

Example:

<a id="example-2-14-25"></a>

#### Example 2.14.25 — TypeError from a missing function argument

```python
def classify(value):
    return value > 100

result = classify()
```

Repair:

<a id="example-2-14-26"></a>

#### Example 2.14.26 — Repair the missing argument

```python
def classify(value):
    return value > 100

result = classify(120)
print(result)
```

---

## Logic errors

A logic error does not necessarily produce an error message. The program runs, but the result is wrong.

Example:

<a id="example-2-14-27"></a>

#### Example 2.14.27 — A formula that runs but is wrong

```python
missing_values = 10
total_values = 200

missing_percentage = total_values / missing_values * 100
print(missing_percentage)
```

The code runs, but the formula is reversed.

Correct:

<a id="example-2-14-28"></a>

#### Example 2.14.28 — Repair the reversed formula

```python
missing_values = 10
total_values = 200

missing_percentage = missing_values / total_values * 100
print(missing_percentage)
```

**Expected output:**

```text
5.0
```

Logic errors require testing and domain understanding.

---

## Tracing code manually

Tracing means following how variables change line by line.

Example:

<a id="example-2-14-29"></a>

#### Example 2.14.29 — Tracing code manually

```python
count = 0

for value in [40, 120, 220]:
    if value >= 100:
        count = count + 1

print(count)
```

Trace table:

| Step | Current `value` | Is `value >= 100`? | `count` after step |
|---|---:|---|---:|
| Before loop | Not set | Not checked | 0 |
| First iteration | 40 | False | 0 |
| Second iteration | 120 | True | 1 |
| Third iteration | 220 | True | 2 |

Final output:

```text
2
```

Tracing is particularly helpful for:

- loops;
- counters;
- nested decisions;
- function calls;
- logic errors.

---

---

## Contextual worked exercises for Tutorial 2.14

These five exercises use different TAN7-related situations and different program structures. Attempt each question and write a short plan before opening the worked solution.

<a id="example-2-14-30"></a>

#### Worked Exercise 2.14.30 — Calculate a map distance with math

**Story:** A simplified classroom map uses horizontal and vertical distances measured in kilometres.<br>
The straight-line distance follows the square-root rule.<br>
The `math` module provides `sqrt()`.<br>
The result should be rounded for display while the original values remain visible.

**Question:** Import `math`, calculate the straight-line distance, and print the rounded result.

**Steps to solve it:**

1. Import the full module.
2. Store the two component distances.
3. Calculate the sum of their squares.
4. Call `math.sqrt()`.
5. Round only the displayed value.

<details>
<summary>Show the worked solution</summary>

```python
import math

horizontal_km = 3
vertical_km = 4
distance_km = math.sqrt(horizontal_km ** 2 + vertical_km ** 2)

print("Straight-line distance:", round(distance_km, 2), "km")
```

The displayed distance is `5.0 km`.

</details>

---

<a id="example-2-14-31"></a>

#### Worked Exercise 2.14.31 — Summarise response times with statistics

**Story:** A small pilot study records five response times in minutes.<br>
The standard-library `statistics` module can calculate a mean and median.<br>
The two summaries answer different questions when unusual values appear.<br>
The code should keep the module name visible in both calls.

**Question:** Calculate and print the mean and median response times.

**Steps to solve it:**

1. Import `statistics`.
2. Store the five values in a list.
3. Call `statistics.mean()`.
4. Call `statistics.median()`.
5. Print both results with labels.

<details>
<summary>Show the worked solution</summary>

```python
import statistics

response_times = [8, 9, 10, 11, 32]
mean_time = statistics.mean(response_times)
median_time = statistics.median(response_times)

print("Mean response time:", mean_time)
print("Median response time:", median_time)
```

The median remains `10` even though the value `32` raises the mean.

</details>

---

<a id="example-2-14-32"></a>

#### Worked Exercise 2.14.32 — Make a reproducible random classroom selection

**Story:** A lecturer demonstrates random selection from fictional discussion topics.<br>
A fixed seed makes the teaching output reproducible when the cell is rerun.<br>
The selection is suitable for demonstration and is not a fairness guarantee.<br>
The available topics should remain visible in the code.

**Question:** Use `random.seed()` and `random.choice()` to make a reproducible selection.

**Steps to solve it:**

1. Import `random`.
2. Set a documented seed.
3. Create the topic list.
4. Select one topic.
5. Print the selected value and limitation note.

<details>
<summary>Show the worked solution</summary>

```python
import random

random.seed(7)
discussion_topics = ["Data ethics", "Platform infrastructure", "Digital participation"]
selected_topic = random.choice(discussion_topics)

print("Selected topic:", selected_topic)
print("A reproducible random draw does not establish a fair allocation")
```

Rerunning the cell with seed `7` produces the same selection.

</details>

---

<a id="example-2-14-33"></a>

#### Worked Exercise 2.14.33 — Repair a fieldnote summary error

**Story:** A student intends to add two observation durations.<br>
One value was entered as the string `"18"`, so adding it to an integer raises `TypeError`.<br>
The debugging task is to read the error type, inspect the values, and make one justified conversion.<br>
The repaired code should display both the converted value and the total.

**Question:** Repair the type mismatch and explain why the conversion is appropriate.

**Steps to solve it:**

1. Inspect both values with `type()`.
2. Identify the string–integer addition.
3. Convert the numerical-looking string with `int()`.
4. Calculate the total.
5. Print the types and repaired result.

<details>
<summary>Show the worked solution</summary>

```python
first_duration = "18"
second_duration = 22

print(type(first_duration), type(second_duration))
first_duration = int(first_duration)
total_duration = first_duration + second_duration

print("Converted first duration:", first_duration)
print("Total duration:", total_duration)
```

The repaired total is `40`.

</details>

---

<a id="example-2-14-34"></a>

#### Worked Exercise 2.14.34 — Trace and repair a counter logic error

**Story:** A script should count confidence scores of at least 80.<br>
The original comparison uses `<= 80`, so the program runs but counts the wrong values.<br>
No traceback appears because the syntax and types are valid.<br>
A manual trace of boundary values reveals the logic error.

**Question:** Trace the original rule, correct the comparison, and print the repaired count.

**Steps to solve it:**

1. List the values including 79 and 80.
2. Predict which values the intended rule should count.
3. Locate the reversed comparison.
4. Change it to `>= 80`.
5. Run and compare the final count with the prediction.

<details>
<summary>Show the worked solution</summary>

```python
confidence_scores = [42, 79, 80, 91]
high_confidence_count = 0

for confidence_score in confidence_scores:
    if confidence_score >= 80:
        high_confidence_count += 1

print("High-confidence scores:", high_confidence_count)
```

The repaired program counts `80` and `91`, producing `2`.

</details>

---

# Tutorial 2.15 — Applied Python problem solving

## Tutorial 2.15 overview

Applied problem solving combines the separate ideas from Tutorials 2.1–2.14 into a complete and testable process. Begin by describing the situation in ordinary language, identifying inputs and rules, and separating calculations, decisions and repeated work into manageable responsibilities. Functions make those responsibilities reusable, while collections organise several records and loops apply the same process consistently. A useful solution includes normal cases, exact boundaries, unsuitable types, impossible relationships and explicit limitation notes rather than only one successful demonstration. The ten exercises below prepare students for later CSV and JSON work by combining structured records, lists, dictionaries, sets, functions, loops, validation and documented assumptions without yet reading or writing external files. The cumulative self-test then asks you to trace unfamiliar logic, diagnose errors and justify design choices before consulting its dedicated answer notebook.

**Core Python vocabulary:** decomposition, requirement, validation function, structured record, list of dictionaries, test case, boundary case, exception path, reproducibility and limitation.

### Why this matters in this course

Applied scripting starts with describing the situation clearly, not immediately typing code. Breaking the task into inputs, rules, functions, tests and outputs creates an audit trail that others can follow. A complete solution should also state its assumptions, edge cases and decisions that still require human review.

The fully commented versions of Worked Examples A and B are included at the beginning of the [Tutorial 2.15 Applied Solutions notebook](https://colab.research.google.com/github/asmrabbi/E26_TAN7_Scripting_CPH/blob/main/notebooks/lecture_04/L04_Tutorial_2_15_Applied_Solutions.ipynb).

## Worked example A — Green Mobility data-quality checker

This case combines the core ideas from the tutorial.

### Situation description

A municipality is preparing consultation records for analysis. Before continuing, staff want a simple Python script that:

1. asks for the total number of records;
2. asks for the number of missing records;
3. checks that both inputs are numeric;
4. rejects impossible values;
5. calculates the missing-data percentage;
6. classifies the result;
7. prints a short report.

This is not a complete professional data-quality system. It is a bounded learning exercise.

---

### Step 1: Write the process in plain language

```text
START
Ask for total records
Ask for missing records
Convert both values to integers
Check whether the inputs are valid
Calculate the missing percentage
Classify the percentage
Display the report
END
```

---

### Step 2: Create the classification function

```python
def classify_missingness(percentage):
    if percentage > 15:
        return "Substantial missingness"
    elif percentage > 5:
        return "Moderate missingness"
    else:
        return "Minor missingness"
```

Test it independently:

```python
print(classify_missingness(18))
print(classify_missingness(10))
print(classify_missingness(3))
```

**Expected output:**

```text
Substantial missingness
Moderate missingness
Minor missingness
```

---

### Step 3: Add input and error handling

```python
try:
    total_records = int(input("Enter total records: "))
    missing_records = int(input("Enter missing records: "))

except ValueError:
    print("Error: both values must be whole numbers")
```

This catches conversion errors, but it does not yet calculate anything.

---

### Step 4: Add validation

```python
try:
    total_records = int(input("Enter total records: "))
    missing_records = int(input("Enter missing records: "))

    if total_records <= 0:
        print("Error: total records must be greater than zero")
    elif missing_records < 0:
        print("Error: missing records cannot be negative")
    elif missing_records > total_records:
        print("Error: missing records cannot exceed total records")
    else:
        print("Inputs accepted")

except ValueError:
    print("Error: both values must be whole numbers")
```

---

### Step 5: Complete the script

```python
def classify_missingness(percentage):
    if percentage > 15:
        return "Substantial missingness"
    elif percentage > 5:
        return "Moderate missingness"
    else:
        return "Minor missingness"


try:
    total_records = int(input("Enter total records: "))
    missing_records = int(input("Enter missing records: "))

    if total_records <= 0:
        print("Error: total records must be greater than zero")

    elif missing_records < 0:
        print("Error: missing records cannot be negative")

    elif missing_records > total_records:
        print("Error: missing records cannot exceed total records")

    else:
        missing_percentage = missing_records / total_records * 100
        status = classify_missingness(missing_percentage)

        print()
        print("Data-quality report")
        print("-------------------")
        print("Total records:", total_records)
        print("Missing records:", missing_records)
        print("Missing percentage:", round(missing_percentage, 2))
        print("Classification:", status)

except ValueError:
    print("Error: both values must be whole numbers")
```

### Example interaction

```text
Enter total records: 200
Enter missing records: 18

Data-quality report
-------------------
Total records: 200
Missing records: 18
Missing percentage: 9.0
Classification: Moderate missingness
```

---

### Line-by-line review

### Function definition

```python
def classify_missingness(percentage):
```

Defines a reusable function with one parameter.

```python
    if percentage > 15:
```

Checks the highest threshold first.

```python
        return "Substantial missingness"
```

Sends a category back to the caller.

### Input block

```python
try:
```

Begins code that might produce a conversion error.

```python
    total_records = int(input("Enter total records: "))
```

Receives text input, converts it to an integer and stores it.

### Validation block

```python
    if total_records <= 0:
```

Rejects zero and negative totals.

```python
    elif missing_records > total_records:
```

Rejects an impossible count.

### Calculation block

```python
missing_percentage = missing_records / total_records * 100
```

Calculates the percentage.

```python
status = classify_missingness(missing_percentage)
```

Calls the function and stores the returned classification.

```python
round(missing_percentage, 2)
```

Rounds the displayed value to two decimal places.

### Error block

```python
except ValueError:
```

Runs when conversion to an integer fails.

---

### Test plan

Do not test only one successful example.

| Test | Input | Expected behaviour |
|---|---|---|
| Normal case | total `200`, missing `18` | Moderate missingness |
| No missing data | total `200`, missing `0` | Minor missingness |
| High missingness | total `100`, missing `30` | Substantial missingness |
| Zero total | total `0`, missing `0` | Error message |
| Negative missing | total `100`, missing `-2` | Error message |
| Missing exceeds total | total `100`, missing `120` | Error message |
| Text instead of number | total `many` | Conversion error message |
| Boundary | total `100`, missing `5` | Minor missingness |
| Boundary | total `100`, missing `6` | Moderate missingness |
| Boundary | total `100`, missing `15` | Moderate missingness |
| Boundary | total `100`, missing `16` | Substantial missingness |

---

### Critical reflection

The thresholds in this example are invented for teaching. They should not be treated as universal standards.

Ask:

1. Who decided that more than 15% is “substantial”?
2. Does the importance of missing data depend on which column is missing?
3. Could 2% missingness be serious when the missing cases represent a marginalised group?
4. Does a low percentage automatically mean the data are reliable?
5. What documentation would be needed before using such a classification professionally?

A script can apply rules consistently, but it cannot decide whether the rules are socially, methodologically or ethically appropriate.

---

## Worked example B — Reviewing several records

This example is more challenging. It combines a list, a function, a loop, conditions and counters.

```python
def review_record(actor_type, engagement, source_verified):
    if not source_verified:
        return "Source review"

    if engagement >= 200 and actor_type in ["Citizen Group", "NGO"]:
        return "Priority review"

    if engagement >= 100:
        return "Standard review"

    return "Low-priority review"


records = [
    {"actor_type": "Citizen Group", "engagement": 240, "source_verified": True},
    {"actor_type": "Business", "engagement": 130, "source_verified": True},
    {"actor_type": "NGO", "engagement": 260, "source_verified": False},
    {"actor_type": "Municipality", "engagement": 75, "source_verified": True},
]

priority_count = 0
source_review_count = 0

for record in records:
    actor_type = record["actor_type"]
    engagement = record["engagement"]
    source_verified = record["source_verified"]

    decision = review_record(actor_type, engagement, source_verified)

    print(actor_type, "->", decision)

    if decision == "Priority review":
        priority_count = priority_count + 1
    elif decision == "Source review":
        source_review_count = source_review_count + 1

print()
print("Priority reviews:", priority_count)
print("Source reviews:", source_review_count)
```

**Expected output:**

```text
Citizen Group -> Priority review
Business -> Standard review
NGO -> Source review
Municipality -> Low-priority review

Priority reviews: 1
Source reviews: 1
```

## Why this is advanced

This example uses a list of dictionaries, the structured-record pattern introduced in Tutorial 2.11. Focus on the larger logic:

1. the function contains the decision rules;
2. the loop processes each record;
3. each record supplies values to the function;
4. the returned decision is printed;
5. counters produce a summary.

The named keys make each field visible now, and later pandas will represent this kind of tabular information more directly.

---

## Ten situational exercises combining Python Foundations I and II

The ten exercises below are longer than the focused checkpoints. Each one requires you to translate a situation into variables, decisions, repetition and functions before writing the final program. The instruction notebook contains the situations and ordered code plans without the finished answers; the solution notebook contains a separate, fully commented answer for every number.

The same two notebooks serve all ten exercises:

- [Open the Tutorial 2.15 instructions in Colab](https://colab.research.google.com/github/asmrabbi/E26_TAN7_Scripting_CPH/blob/main/notebooks/lecture_04/L04_Tutorial_2_15_Applied_Exercises.ipynb)
- [Open the fully commented Tutorial 2.15 solutions in Colab](https://colab.research.google.com/github/asmrabbi/E26_TAN7_Scripting_CPH/blob/main/notebooks/lecture_04/L04_Tutorial_2_15_Applied_Solutions.ipynb)
- [View the Lecture 4 notebooks on GitHub](https://github.com/asmrabbi/E26_TAN7_Scripting_CPH/tree/main/notebooks/lecture_04)

## Exercise 2.15.1 — Allocate TAN7 project groups across two campuses

AAU teaches Techno-Anthropology on the Aalborg and Copenhagen campuses. In this fictional teaching cohort, Copenhagen has 45 students and Aalborg has 36 students, and the coordinators want groups of four or five without mixing campuses. A group of fewer than four should be reported for manual coordination rather than silently accepted. The coordinators also need a readable campus-by-campus summary showing group sizes, the number of groups and whether anyone remains unassigned.

**Code plan**

1. Store the two campus names and student counts in a dictionary.
2. Write a function that first tries groups of five and then redistributes students so every group has four or five members.
3. Loop through the campuses and call the function for each count.
4. Validate that every generated size is four or five and that the sizes add back to the original count.
5. Print a transparent report and state that accessibility, student preferences and prior collaboration still require human coordination.


## Exercise 2.15.2 — Check a municipal mobility dataset before analysis

A municipality expects 240 consultation records, but the received extract contains 233 records. Seven records have missing consent information, three identifiers are duplicated and the team has not yet established whether those categories overlap. The analyst must calculate transparent quality indicators without calling the remaining records automatically “good”. A compact report should flag impossible counts, calculate a provisional retention rate and preserve a note about the unresolved overlap assumption.

**Code plan**

1. Store the expected, received, missing-consent and duplicate counts with meaningful names.
2. Write a validation function that rejects negative values and problem counts greater than received records.
3. Ask explicitly whether the two problem categories overlap, and keep the answer as a documented assumption.
4. Calculate the retained count and rate only when the inputs are logically valid.
5. Print the indicators, flags and limitation note with clear labels.


## Exercise 2.15.3 — Build a bounded course-keyword guessing activity

A lecturer wants a short guessing activity that helps students recognise Python keywords. The program should choose from a documented list, reveal correctly guessed letters and stop after six incorrect attempts. Invalid entries such as numbers, symbols or more than one letter should not consume an attempt. The final message must reveal the word and show whether the learner completed it within the stated limit.

**Code plan**

1. Import `random`, store the allowed words and select one reproducibly with a fixed seed.
2. Write one function that builds the visible word from the secret word and guessed letters.
3. Use a bounded `while` loop for the attempts and a set for letters already tried.
4. Validate each simulated or keyboard entry before updating the game state.
5. Test a successful path, repeated-letter input and an unsuccessful path.

**Adaptation note:** This exercise adapts the word-guessing structure in Rodrigo Pinheiro’s [`hangman.py`](https://github.com/roedorpi/TAN7_Scripting_classnotes/blob/master/hangman.py). The teaching version is rewritten for deterministic Colab execution and the learning scope of Tutorials 2.1–2.15.


## Exercise 2.15.4 — Scale ingredients for a community cooking workshop

A community centre offers three recipes and needs an ingredient list for a chosen number of participants. Every recipe contains ingredient names, quantities and units, but quantities must be multiplied consistently and ingredients with different units must remain separate. The organiser may enter a recipe name with extra spaces or different capitalisation. The program should either produce a scaled list or display the available recipe names without crashing.

**Code plan**

1. Represent the cookbook as a dictionary whose values are lists of ingredient dictionaries.
2. Write a normalisation function for the requested recipe name.
3. Write a scaling function that validates the portion count and returns new result records.
4. Loop through the scaled records and display quantities with their units.
5. Test a known recipe, an unknown recipe, zero portions and a decimal quantity.

**Adaptation note:** The data-structure idea is adapted from Rodrigo Pinheiro’s [`session03_exercises.py`](https://github.com/roedorpi/TAN7_Scripting_classnotes/blob/master/session03_exercises.py). The situation, recipe records, validation and complete solution are newly written.


## Exercise 2.15.5 — Design an ethical feedback collector

A project team wants to collect a product name, a rating from one to five and an optional comment. A previous design repeatedly pressured respondents who selected fewer than four stars, which would distort the evidence and disrespect participants. The replacement must accept every valid rating, reject only values outside the scale and let the participant skip the comment. The final summary should count ratings without changing them and include a warning when the sample is too small for strong claims.

**Code plan**

1. Write a function that converts a rating and validates the one-to-five range.
2. Process several simulated responses so the notebook can run from top to bottom without waiting for input.
3. Preserve each valid response as a dictionary and record invalid responses separately.
4. Use a loop to count rating frequencies and calculate a mean only when valid responses exist.
5. Print the summary and a short methodological warning.

**Adaptation note:** This exercise critically redesigns the manipulative rating prompt in Rodrigo Pinheiro’s [`session02_exercises.py`](https://github.com/roedorpi/TAN7_Scripting_classnotes/blob/master/session02_exercises.py). It uses the original as an ethical discussion point rather than reproducing its behaviour.


## Exercise 2.15.6 — Convert and classify fieldwork temperatures

A fieldwork team records temperatures in either Celsius or Fahrenheit and wants a common Celsius summary. Each record includes a place label, a numerical value and a unit entered as text. Unit labels may contain spaces or lower-case letters, while unknown units must be sent for review. The program should preserve the original record, create converted records and classify Celsius values as freezing, cool, moderate or hot using documented project thresholds.

**Code plan**

1. Store several observations as a list of dictionaries.
2. Write one function to normalise the unit and another to convert a value to Celsius.
3. Write a classification function with explicit boundary tests.
4. Loop through the observations, catch unsuitable numerical values and preserve invalid records for review.
5. Display both original and converted values so the transformation remains traceable.

**Adaptation note:** The conversion idea is adapted from Rodrigo Pinheiro’s [`session01_exercises.py`](https://github.com/roedorpi/TAN7_Scripting_classnotes/blob/master/session01_exercises.py) and [`session05_functions_in_class.py`](https://github.com/roedorpi/TAN7_Scripting_classnotes/blob/master/session05_functions_in_class.py). The record-based workflow and validation are newly written.


## Exercise 2.15.7 — Validate workshop registrations and waiting-list priority

An AAU workshop has 24 places and receives registrations containing a participant code, campus and accessibility-support flag. Duplicate participant codes must not receive a second place, and incomplete records must be kept for human review. When capacity is reached, later valid registrations enter a waiting list without being deleted. The output should show accepted, waiting and review lists while making clear that accessibility needs are not a basis for exclusion.

**Code plan**

1. Store registrations as a list of dictionaries and prepare three empty output lists.
2. Write a validation function for required fields and recognised campuses.
3. Use a set to identify duplicate participant codes.
4. Loop through every registration and assign it to review, accepted or waiting according to the documented order.
5. Print counts and identifiers, then test the exact-capacity boundary.


## Exercise 2.15.8 — Triage municipal service requests transparently

A municipal help desk receives requests with an identifier, category, urgency label and location status. Safety-related requests without a confirmed location require human review rather than automatic prioritisation. Valid urgent or accessibility-related requests enter a priority queue, while other valid requests enter a standard queue. The program must process every record once, preserve its identifier and explain the rule that produced each destination.

**Code plan**

1. Represent requests as a list of dictionaries with consistent keys.
2. Write a function that returns both a destination and a reason.
3. Validate the identifier and required fields before applying the routing rules.
4. Loop through the records and append an annotated result to the appropriate queue.
5. Print queue summaries and test missing, urgent, accessibility and ordinary inputs.


## Exercise 2.15.9 — Review confidence scores without hiding uncertainty

A research team assigns confidence scores from zero to one hundred to coded interview excerpts. Scores at or above 80 are provisionally labelled high confidence, scores from 50 to 79 require review and lower scores receive a low-confidence flag. Missing or out-of-range scores must not be forced into one of the three categories. The report should count each outcome, list the records needing human attention and state that the thresholds do not measure truth.

**Code plan**

1. Store coded records as dictionaries containing an identifier and score.
2. Write a classification function that returns an invalid status for missing or out-of-range values.
3. Loop through every record and maintain counters in a dictionary.
4. Collect the identifiers requiring review or correction.
5. Print a summary and test 49, 50, 79, 80, `None` and 101 as boundaries.


## Exercise 2.15.10 — Prepare structured records for the next CSV and JSON lesson

A team has received five service observations represented as dictionaries with the same intended fields: identifier, category, minutes and resolved status. Some values contain outer spaces, one duration is numerical-looking text and one record is missing a category. Before writing any CSV or JSON file, students must normalise the records in memory and keep rejected records separate. The final program should produce a clean list of dictionaries whose keys and types are consistent enough for the next tutorial.

**Code plan**

1. Store the raw list without overwriting it and define the required keys.
2. Write small functions to normalise text, convert duration and validate one record.
3. Loop through the raw records, building clean copies or documented rejection records.
4. Verify that every clean record has the same keys and intended value types.
5. Print clean and rejected summaries, then explain how the structure maps naturally to CSV rows and JSON objects.


---

## Focused student activities

## Activity 1: Predict and run

Predict the output before running:

```python
value = 12

if value > 10:
    print("A")
elif value > 5:
    print("B")
else:
    print("C")
```

Explain why only one letter is printed.

---

## Activity 2: Modify

Start with:

```python
engagement = 125

if engagement >= 200:
    print("High")
elif engagement >= 100:
    print("Medium")
else:
    print("Low")
```

Modify it so that:

- `300` or more is `"Very high"`;
- `200` to `299` is `"High"`;
- `100` to `199` is `"Medium"`;
- below `100` is `"Low"`.

Test at least four values.

---

## Activity 3: Break and repair

The program below contains at least five problems:

```python
def classify(value)
if value > 100:
return "High"
else
return "Low"

print(classify())
```

Repair the program and explain every change.

---

## Activity 4: Loop and count

Given:

```python
missing_counts = [0, 3, 12, 4, 18, 2]
```

Write a loop that counts how many values are greater than `10`.

Expected output:

```text
Values above 10: 2
```

---

## Activity 5: Create a function

Create:

```python
calculate_percentage(part, whole)
```

The function should:

- return `part / whole * 100`;
- return `"Invalid total"` when `whole` is zero or negative.

Test:

```python
calculate_percentage(15, 100)
calculate_percentage(5, 0)
```

---

## Activity 6: Input validation

Write a program that asks the user for an engagement value.

Requirements:

- convert the input to an integer;
- catch non-numeric input;
- reject negative values;
- classify valid values as high, medium or low.

---

## Activity 7: Confidence-score classification exercise

A research team has assigned confidence scores from `0` to `100` to several coded records:

```python
confidence_scores = [85, 42, 91, 67, 50, 78]
```

Write a program that:

1. prints each score;
2. classifies `80` or above as `"High confidence"`;
3. classifies `50` to `79` as `"Review recommended"`;
4. classifies below `50` as `"Low confidence"`;
5. counts each category;
6. prints a final summary.

Then reflect:

- Who assigned the confidence scores?
- Are the thresholds justified?
- Can a single number represent coding uncertainty?
- What information is lost through this classification?

---

## Cumulative self-test

Answer every question in ordinary language before running any Python. For tracing questions, write the value of each relevant variable after every step. The questions deliberately combine ideas from several tutorials, so an answer should explain the reasoning rather than provide only a final word or number.

### A. Conditions, logic and validation

1. Explain the different purposes of `records = 5` and `records == 5`. What type of value does the second expression produce?
2. A decision checks `score >= 80`, then `score >= 60`, then uses `else`. Which branch is selected for scores `59`, `60`, `79` and `80`, and why is only one branch executed?
3. A programmer checks `score >= 50` before an `elif score >= 80`. Explain why a score of `92` receives the wrong category and state the smallest structural repair.
4. Evaluate the rule `consent_recorded and age >= 18 or staff_override` for the combinations `(True, 17, False)`, `(False, 21, False)` and `(False, 16, True)`. Explain how parentheses could make the intended policy clearer.
5. Explain why `total_records > 0 and missing_records / total_records > 0.10` avoids division by zero when `total_records` is zero. Name the Python behaviour that makes this possible.
6. A learner enters `12.5` when a program calls `int(input(...))`. Identify the exception path, then explain why changing to `float()` solves only the conversion question and not range validation.

### B. Collections and loop tracing

7. Choose a list, dictionary or set for each purpose: preserving six responses in order, connecting one record identifier with named fields, and identifying unique category labels. Justify every choice and name one kind of information each structure could lose.
8. Without running Python, list the values produced by `range(2, 11, 3)` and explain why `11` is not included.
9. A counter is assigned zero inside a `for` loop immediately before it is increased. Explain the final result and move the initialisation to the correct conceptual location.
10. Three records contain engagement values `80`, `120` and `200`. Trace a loop that adds every value to a total and increases `high_count` for values at least `100`. State the total, count and value of both variables after each iteration.
11. A list of dictionaries is expected to use the key `"campus"`, but one record omits it. Compare the effect of `record["campus"]` with `record.get("campus")` and explain when silently accepting `None` would itself be risky.
12. A `while` loop begins with `attempts = 3` and repeats while `attempts > 0`, but the body never changes `attempts`. Diagnose the problem, describe a repair and state one boundary test.
13. A loop uses `continue` before the statement that updates its progress variable. Explain how this can create an infinite loop and reorganise the steps conceptually so every repeated path makes progress.
14. Explain the difference between `break` and `continue` in a record-review loop. Give one situation where each is appropriate and one situation where it would hide unprocessed data.

### C. Functions, imports and debugging

15. A function displays a calculated percentage with `print()` but the caller tries to store its result and compare it with `80`. Explain the resulting value and replace the display responsibility with a reusable return responsibility.
16. Distinguish a parameter from an argument using a function that classifies a missing-data percentage. What error occurs when the required argument is omitted?
17. A variable named `status` is created inside a function and then printed outside the function without storing the returned result. Explain the scope problem and show the required flow in words.
18. A classification function uses the boundaries below `50`, from `50` to `79`, and at least `80`. Specify tests for `49`, `50`, `79`, `80`, `None` and `101`, including which inputs require validation rather than classification.
19. Compare `import statistics`, `from statistics import mean` and `import statistics as stats`. State how the call to `mean()` differs in each case and identify which names become available locally.
20. Match each problem with its most likely error type: a missing colon, inconsistent indentation, an undefined variable, adding a string to an integer, converting `"many"` with `int()`, importing a misspelled module and calling a function without a required argument.

### D. Integrated reasoning and critical testing

21. A dataset contains 500 records, 30 missing-consent records and 20 duplicates, but the categories may overlap. Calculate the provisional retained count under a non-overlap assumption, then explain why the same arithmetic may double-count exclusions.
22. A group-allocation function claims to make groups of four or five for 36 students. Design at least four tests that check the group sizes, sum, exact boundary and an impossible small cohort. State what the function cannot decide about actual students.
23. Five cleaned records will later become CSV rows or JSON objects. Describe the checks needed to confirm identical keys, stable value types, preserved identifiers and a separate rejection record for invalid input.
24. A rule labels confidence scores at least `80` as high confidence. Explain how you would test its code, document its threshold and communicate why consistent classification does not prove that the scores or rule are valid.

- [Open the dedicated self-test answers in Colab](https://colab.research.google.com/github/asmrabbi/E26_TAN7_Scripting_CPH/blob/main/notebooks/lecture_04/L04_Python_Foundations_II_Self_Test_Answers.ipynb)
- [View the self-test answer notebook on GitHub](https://github.com/asmrabbi/E26_TAN7_Scripting_CPH/blob/main/notebooks/lecture_04/L04_Python_Foundations_II_Self_Test_Answers.ipynb)

---

## Common mistakes checklist

Before asking for help, check:

- Did I use `==` for comparison rather than `=`?
- Did I include a colon after `if`, `elif`, `else`, `for`, `while`, `try`, `except` and `def`?
- Is the code block indented?
- Did I spell the variable name consistently?
- Did I convert input from string to number?
- Did I test boundary values?
- Does my `while` loop update the condition?
- Did I call the function after defining it?
- Did I provide all required function arguments?
- Did I use `return` when I need the result later?
- Did I import the module before using it?
- Did I read the final line of the error message?
- Did I test whether the output makes sense, rather than only whether the code runs?

---

## Responsible use of AI for this tutorial

AI tools may help you:

- explain an error message;
- describe what a code block does;
- suggest a smaller example;
- propose test cases;
- compare two versions of code;
- identify a missing colon or indentation problem;
- suggest a modification.

You remain responsible for:

- reading the code;
- running it;
- testing it;
- checking that the result is correct;
- understanding the important logic;
- documenting significant AI assistance;
- not submitting unexplained generated code.

## Better AI prompt

```text
I am a beginner learning Python conditions. Explain why this code produces an
IndentationError. Do not replace the entire program. Point to the line that is
wrong, explain the indentation rule, and give me one small correction to test.

[Paste code here]
```

## Less useful prompt

```text
Fix everything.
```

The first prompt supports learning. The second encourages blind replacement.

---

## What comes next

In the next part of the course, you will begin working with CSV files and pandas.

You will encounter code such as:

```python
import pandas as pd

data = pd.read_csv("green_mobility_records.csv")
selected_data = data[data["engagement"] >= 100]
```

After this tutorial, you should already recognise:

- `import` introduces a library;
- `data` and `selected_data` are variables;
- `"green_mobility_records.csv"` is a string;
- `read_csv()` is a function;
- `>=` is a comparison;
- the comparison creates a condition used to select data.

Pandas introduces new structures and syntax, but it builds on the Python ideas you have already learned.

---

## Glossary

| Term | Beginner-friendly meaning |
|---|---|
| Argument | A value supplied when calling a function |
| Boolean | A value that is either `True` or `False` |
| Branch | One possible path through a decision |
| Condition | An expression evaluated as true or false |
| Counter | A variable used to count occurrences |
| Definite loop | A loop that processes a known sequence or collection |
| Exception | An error event that can sometimes be handled |
| Function | A named, reusable block of code |
| Import | A statement that makes a module or library available |
| Indefinite loop | A loop that continues until a condition becomes false |
| Indentation | Spaces used to define Python code blocks |
| Infinite loop | A loop that does not terminate |
| Iteration | One repetition of a loop |
| Iteration variable | The variable receiving each value during a loop |
| Library | A collection of reusable code |
| Logic error | A mistake that produces an incorrect result without necessarily stopping the program |
| Logical operator | `and`, `or` or `not` |
| Module | A reusable unit of Python code |
| None | Python’s special value meaning that no value is present |
| Parameter | A named input in a function definition |
| Return value | A result sent back by a function |
| Traceback | Python’s report showing where an error occurred |
| Validation | Checking whether input or data meets required rules |

---

## Source and scope note

The topic selection for this tutorial follows the earlier course materials on:

- conditional execution with `if`, `else` and `elif`;
- logical operators;
- error handling with `try` and `except`;
- functions, parameters and return values;
- `for` and `while` loops;
- definite and indefinite iteration;
- loop control;
- modules and standard libraries.

The material has been reorganised and expanded for the 2026 beginner-oriented course pathway. Traditional file handling, NumPy file loading and plotting are not taught here because they will be handled later through CSV, pandas and visualisation tutorials.

---

## Completion checklist

Before moving to CSV and pandas, you should be able to say:

- [ ] I can create a Boolean comparison.
- [ ] I understand the difference between `=` and `==`.
- [ ] I can write an `if`, `elif`, `else` decision.
- [ ] I can combine conditions using `and`, `or` and `not`.
- [ ] I understand why indentation matters.
- [ ] I can convert user input to a number.
- [ ] I can use `try` and `except` for a basic conversion error.
- [ ] I can write a `for` loop over a short list.
- [ ] I can use `range()`.
- [ ] I can explain the three parts of a `while` loop.
- [ ] I can recognise an infinite loop.
- [ ] I can define and call a function.
- [ ] I can use parameters and return values.
- [ ] I can import and use a simple module.
- [ ] I can read the final line of a traceback.
- [ ] I can test boundary values and unreasonable inputs.
- [ ] I can explain the main logic of the integrated case.
- [ ] I can identify assumptions and limitations in a rule-based script.
