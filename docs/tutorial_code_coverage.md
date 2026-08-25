# Tutorial code coverage

This report maps the Python Foundations website code to the lecture-ready GitHub and Google Colab notebooks.

## Lecture 3 — Tutorials 2.1–2.7

Lecture 3 now has exactly three student-facing notebooks. All three use standard Python 3, require no third-party packages, run from top to bottom and include a plain-language comment on every non-empty executable line.

| Notebook | GitHub | Colab | Executable cells | Latest audit |
|---|---|---|---:|---|
| Tutorial Examples | [View file](https://github.com/asmrabbi/E26_TAN7_Scripting_CPH/blob/main/notebooks/lecture_03/L03_Tutorial_2_1_to_2_7_Examples.ipynb) | [Open in Colab](https://colab.research.google.com/github/asmrabbi/E26_TAN7_Scripting_CPH/blob/main/notebooks/lecture_03/L03_Tutorial_2_1_to_2_7_Examples.ipynb) | 79 | 0 execution errors; 0 uncommented executable lines |
| Exercises | [View file](https://github.com/asmrabbi/E26_TAN7_Scripting_CPH/blob/main/notebooks/lecture_03/L03_Tutorial_2_1_to_2_7_Exercises.ipynb) | [Open in Colab](https://colab.research.google.com/github/asmrabbi/E26_TAN7_Scripting_CPH/blob/main/notebooks/lecture_03/L03_Tutorial_2_1_to_2_7_Exercises.ipynb) | 7 | 0 execution errors; 0 uncommented executable lines |
| Practice Materials | [View file](https://github.com/asmrabbi/E26_TAN7_Scripting_CPH/blob/main/notebooks/lecture_03/L03_Tutorial_2_1_to_2_7_Practice_Materials.ipynb) | [Open in Colab](https://colab.research.google.com/github/asmrabbi/E26_TAN7_Scripting_CPH/blob/main/notebooks/lecture_03/L03_Tutorial_2_1_to_2_7_Practice_Materials.ipynb) | 7 | 0 execution errors; 0 uncommented executable lines |

The Tutorial Examples notebook preserves every Python block from the website source. Deliberately broken, interactive and later file-dependent snippets remain visible as teaching text; their paired executable cells use safe diagnostic records so **Run all** completes successfully.

| Website tutorial | Example identifiers | Exercise | Practice case |
|---|---|---|---|
| 2.1 Colab and visible output | 2.1.1–2.1.5 | 2.1.1 | 2.1.1 |
| 2.2 Values, variables and names | 2.2.1–2.2.13 | 2.2.1 | 2.2.1 |
| 2.3 Expressions and calculations | 2.3.1–2.3.11 | 2.3.1 | 2.3.1 |
| 2.4 Foundational data types | 2.4.1–2.4.15 | 2.4.1 | 2.4.1 |
| 2.5 Conversion and input | 2.5.1–2.5.10 | 2.5.1 | 2.5.1 |
| 2.6 Comments and debugging | 2.6.1–2.6.10 | 2.6.1 | 2.6.1 |
| 2.7 Integration and recap | 2.7.1–2.7.4 | 2.7.1 | 2.7.1 |

## `L04_complete_python_foundations_II_tutorial.ipynb`

- GitHub: [notebooks/examples/L04_complete_python_foundations_II_tutorial.ipynb](https://github.com/asmrabbi/E26_TAN7_Scripting_CPH/blob/main/notebooks/examples/L04_complete_python_foundations_II_tutorial.ipynb)
- Colab: [Open notebook](https://colab.research.google.com/github/asmrabbi/E26_TAN7_Scripting_CPH/blob/main/notebooks/examples/L04_complete_python_foundations_II_tutorial.ipynb)
- Python blocks covered: **202**

| Block | Tutorial heading | Source line | Audit status |
|---:|---|---:|---|
| 1 | 2.1 Required knowledge from Python Foundations I | 66 | runnable: executed successfully during the audit |
| 2 | 2.2 Quick readiness check | 87 | runnable: executed successfully during the audit |
| 3 | 4.1 What is a Boolean value? | 153 | runnable: executed successfully during the audit |
| 4 | 4.1 What is a Boolean value? | 160 | runnable: executed successfully during the audit |
| 5 | Line-by-line explanation | 177 | runnable: executed successfully during the audit |
| 6 | Line-by-line explanation | 186 | runnable: executed successfully during the audit |
| 7 | Line-by-line explanation | 193 | diagnostic: NameError: name 'record_complete' is not defined |
| 8 | Example 1: Comparing a number | 216 | runnable: executed successfully during the audit |
| 9 | 4.3 Assignment and equality are different | 246 | runnable: executed successfully during the audit |
| 10 | 4.3 Assignment and equality are different | 256 | diagnostic: NameError: name 'engagement' is not defined |
| 11 | Deliberate error | 268 | diagnostic: SyntaxError on line 3: invalid syntax. Maybe you meant '==' or ':=' instead of '='? |
| 12 | Repair | 279 | runnable: executed successfully during the audit |
| 13 | 4.4 Comparing strings | 298 | runnable: executed successfully during the audit |
| 14 | 4.4 Comparing strings | 316 | runnable: executed successfully during the audit |
| 15 | 4.5 Storing the result of a comparison | 346 | runnable: executed successfully during the audit |
| 16 | Explanation | 363 | diagnostic: NameError: name 'missing_values' is not defined |
| 17 | Explanation | 369 | diagnostic: NameError: name 'too_many_missing' is not defined |
| 18 | Explanation | 377 | diagnostic: NameError: name 'missing_values' is not defined |
| 19 | Explanation | 384 | diagnostic: NameError: name 'missing_values' is not defined |
| 20 | Practice checkpoint 1 | 399 | runnable: executed successfully during the audit |
| 21 | 5.1 A one-way decision | 436 | runnable: executed successfully during the audit |
| 22 | Structure | 451 | diagnostic: NameError: name 'condition' is not defined |
| 23 | 5.2 When the condition is false | 468 | runnable: executed successfully during the audit |
| 24 | 5.3 Indentation is part of Python syntax | 493 | runnable: executed successfully during the audit |
| 25 | 5.3 Indentation is part of Python syntax | 513 | diagnostic: SyntaxError on line 4: expected an indented block after 'if' statement on line 3 |
| 26 | Repair | 526 | runnable: executed successfully during the audit |
| 27 | 5.4 Multiple lines inside one `if` block | 537 | runnable: executed successfully during the audit |
| 28 | 5.5 A condition using a string | 564 | runnable: executed successfully during the audit |
| 29 | Common mistake | 579 | runnable: executed successfully during the audit |
| 30 | Common mistake | 590 | runnable: executed successfully during the audit |
| 31 | Practice checkpoint 2 | 607 | diagnostic: NameError: name '__________________' is not defined |
| 32 | Practice checkpoint 2 | 619 | runnable: executed successfully during the audit |
| 33 | 6.1 Basic example | 636 | runnable: executed successfully during the audit |
| 34 | 6.2 Understanding the flow | 663 | diagnostic: NameError: name 'condition' is not defined |
| 35 | 6.3 Example with user input | 681 | manual: interactive input |
| 36 | Problem with this version | 712 | manual: interactive input |
| 37 | 6.4 Deliberate break-and-repair activity | 736 | diagnostic: SyntaxError on line 3: expected ':' |
| 38 | 6.4 Deliberate break-and-repair activity | 749 | runnable: executed successfully during the audit |
| 39 | 7.1 Classifying engagement | 772 | runnable: executed successfully during the audit |
| 40 | 7.2 Order matters | 806 | runnable: executed successfully during the audit |
| 41 | 7.2 Order matters | 827 | runnable: executed successfully during the audit |
| 42 | 7.3 A more detailed classification | 844 | runnable: executed successfully during the audit |
| 43 | Why assign the result to a variable? | 869 | diagnostic: NameError: name 'status' is not defined |
| 44 | Why assign the result to a variable? | 875 | diagnostic: NameError: name 'status' is not defined |
| 45 | 7.4 Boundary testing | 888 | runnable: executed successfully during the audit |
| 46 | 7.4 Boundary testing | 901 | runnable: executed successfully during the audit |
| 47 | 7.4 Boundary testing | 914 | runnable: executed successfully during the audit |
| 48 | Practice checkpoint 3 | 935 | runnable: executed successfully during the audit |
| 49 | Practice checkpoint 3 | 944 | runnable: executed successfully during the audit |
| 50 | 8.1 `and` | 967 | runnable: executed successfully during the audit |
| 51 | 8.2 `or` | 996 | runnable: executed successfully during the audit |
| 52 | 8.3 `not` | 1018 | runnable: executed successfully during the audit |
| 53 | 8.4 A combined example | 1039 | runnable: executed successfully during the audit |
| 54 | 8.5 Parentheses for clarity | 1064 | diagnostic: NameError: name 'topic' is not defined |
| 55 | 8.5 Parentheses for clarity | 1071 | diagnostic: NameError: name 'topic' is not defined |
| 56 | 8.6 Common mistake: repeating the variable incorrectly | 1089 | runnable: executed successfully during the audit |
| 57 | 8.6 Common mistake: repeating the variable incorrectly | 1100 | runnable: executed successfully during the audit |
| 58 | 8.6 Common mistake: repeating the variable incorrectly | 1109 | diagnostic: NameError: name 'topic' is not defined |
| 59 | Practice checkpoint 4 | 1128 | runnable: executed successfully during the audit |
| 60 | 9.1 Basic nested example | 1146 | runnable: executed successfully during the audit |
| 61 | 9.2 Nested decision with alternatives | 1170 | runnable: executed successfully during the audit |
| 62 | 9.3 Avoid unnecessary nesting | 1195 | diagnostic: NameError: name 'source_verified' is not defined |
| 63 | 9.3 Avoid unnecessary nesting | 1203 | diagnostic: NameError: name 'source_verified' is not defined |
| 64 | 10.1 Why conversion is necessary | 1220 | manual: interactive input |
| 65 | 10.1 Why conversion is necessary | 1237 | manual: interactive input |
| 66 | 10.1 Why conversion is necessary | 1248 | manual: interactive input |
| 67 | 10.2 Conversion in one line | 1260 | manual: interactive input |
| 68 | 10.3 Input assumptions | 1277 | manual: interactive input |
| 69 | 11.1 Why error handling matters | 1302 | manual: interactive input |
| 70 | 11.1 Why error handling matters | 1311 | manual: interactive input |
| 71 | 11.2 Understanding the structure | 1330 | diagnostic: NameError: name 'code_to_run_if_an_error_occurs' is not defined |
| 72 | 11.3 Catching a specific error | 1345 | manual: interactive input |
| 73 | 11.4 Adding a decision after valid input | 1359 | manual: interactive input |
| 74 | 11.5 Valid type but invalid range | 1380 | manual: interactive input |
| 75 | 11.6 Avoid a completely empty `except` | 1409 | diagnostic: SyntaxError on line 1: invalid syntax |
| 76 | 11.6 Avoid a completely empty `except` | 1416 | diagnostic: SyntaxError on line 1: invalid syntax |
| 77 | Practice checkpoint 5 | 1427 | manual: interactive input |
| 78 | Practice checkpoint 5 | 1439 | manual: interactive input |
| 79 | 13.1 A simple definite loop | 1473 | runnable: executed successfully during the audit |
| 80 | Explanation | 1488 | diagnostic: SyntaxError on line 1: expected an indented block after 'for' statement on line 1 |
| 81 | 13.2 Looping through strings | 1504 | runnable: executed successfully during the audit |
| 82 | 13.3 The code after the loop | 1533 | runnable: executed successfully during the audit |
| 83 | 13.4 Using `range()` | 1559 | runnable: executed successfully during the audit |
| 84 | 13.5 Starting and stopping a range | 1580 | runnable: executed successfully during the audit |
| 85 | 13.6 Adding a step | 1601 | runnable: executed successfully during the audit |
| 86 | 13.7 Repeating a message | 1629 | runnable: executed successfully during the audit |
| 87 | 13.7 Repeating a message | 1646 | runnable: executed successfully during the audit |
| 88 | 13.8 Conditions inside a loop | 1655 | runnable: executed successfully during the audit |
| 89 | 13.9 Counting values that meet a condition | 1682 | runnable: executed successfully during the audit |
| 90 | Step-by-step explanation | 1701 | runnable: executed successfully during the audit |
| 91 | Step-by-step explanation | 1707 | diagnostic: SyntaxError on line 1: expected an indented block after 'for' statement on line 1 |
| 92 | Step-by-step explanation | 1713 | diagnostic: SyntaxError on line 1: expected an indented block after 'if' statement on line 1 |
| 93 | Step-by-step explanation | 1719 | diagnostic: NameError: name 'high_count' is not defined |
| 94 | Step-by-step explanation | 1727 | diagnostic: NameError: name 'high_count' is not defined |
| 95 | 13.10 Accumulating a total | 1735 | runnable: executed successfully during the audit |
| 96 | 13.10 Accumulating a total | 1753 | diagnostic: NameError: name 'total_engagement' is not defined |
| 97 | 13.11 Deliberate indentation error | 1774 | diagnostic: SyntaxError on line 4: expected an indented block after 'for' statement on line 3 |
| 98 | 13.11 Deliberate indentation error | 1783 | runnable: executed successfully during the audit |
| 99 | Practice checkpoint 6 | 1798 | runnable: executed successfully during the audit |
| 100 | Practice checkpoint 6 | 1813 | runnable: executed successfully during the audit |
| 101 | 14.1 Countdown example | 1830 | manual: a while loop that should be run deliberately |
| 102 | Three essential parts | 1861 | runnable: executed successfully during the audit |
| 103 | Three essential parts | 1867 | diagnostic: SyntaxError on line 1: expected an indented block after 'while' statement on line 1 |
| 104 | Three essential parts | 1873 | diagnostic: NameError: name 'number' is not defined |
| 105 | 14.2 An infinite loop | 1885 | manual: a while loop that should be run deliberately |
| 106 | Repair | 1900 | manual: a while loop that should be run deliberately |
| 107 | 14.3 A loop that never starts | 1912 | manual: a while loop that should be run deliberately |
| 108 | 14.4 Repeating until valid input | 1933 | manual: interactive input |
| 109 | 14.5 `for` or `while`? | 1962 | diagnostic: NameError: name 'topics' is not defined |
| 110 | 14.5 `for` or `while`? | 1969 | manual: a while loop that should be run deliberately |
| 111 | 15.1 `break` | 1986 | runnable: executed successfully during the audit |
| 112 | 15.2 `continue` | 2014 | runnable: executed successfully during the audit |
| 113 | 16.1 Defining and calling a function | 2058 | runnable: executed successfully during the audit |
| 114 | Explanation | 2073 | diagnostic: SyntaxError on line 1: expected an indented block after function definition on line 1 |
| 115 | Explanation | 2082 | diagnostic: SyntaxError on line 1: unexpected indent |
| 116 | Explanation | 2088 | diagnostic: NameError: name 'show_welcome' is not defined |
| 117 | 16.2 Meaningful function names | 2102 | diagnostic: NameError: name 'calculate_percentage' is not defined |
| 118 | 16.2 Meaningful function names | 2111 | diagnostic: NameError: name 'do_it' is not defined |
| 119 | 16.3 Parameters and arguments | 2124 | runnable: executed successfully during the audit |
| 120 | Terminology | 2143 | diagnostic: SyntaxError on line 1: expected an indented block after function definition on line 1 |
| 121 | Terminology | 2151 | diagnostic: NameError: name 'greet_actor' is not defined |
| 122 | 16.4 Multiple parameters | 2161 | runnable: executed successfully during the audit |
| 123 | 16.5 Returning a value | 2186 | runnable: executed successfully during the audit |
| 124 | Explanation | 2203 | diagnostic: SyntaxError: 'return' outside function |
| 125 | Explanation | 2209 | diagnostic: NameError: name 'calculate_missing_percentage' is not defined |
| 126 | 16.6 `print()` and `return` are not the same | 2221 | runnable: executed successfully during the audit |
| 127 | 16.6 `print()` and `return` are not the same | 2228 | runnable: executed successfully during the audit |
| 128 | 16.6 `print()` and `return` are not the same | 2235 | diagnostic: NameError: name 'calculate_total' is not defined |
| 129 | 16.7 A function with conditional logic | 2248 | runnable: executed successfully during the audit |
| 130 | 16.8 A function with validation | 2276 | runnable: executed successfully during the audit |
| 131 | 16.9 Local and global variables | 2306 | runnable: executed successfully during the audit |
| 132 | Error 1: Function not called | 2338 | runnable: executed successfully during the audit |
| 133 | Error 1: Function not called | 2347 | runnable: executed successfully during the audit |
| 134 | Error 2: Missing argument | 2356 | diagnostic: TypeError: greet() missing 1 required positional argument: 'name' |
| 135 | Error 2: Missing argument | 2367 | diagnostic: NameError: name 'greet' is not defined |
| 136 | Error 3: Incorrect indentation | 2373 | diagnostic: SyntaxError on line 2: expected an indented block after function definition on line 1 |
| 137 | Error 3: Incorrect indentation | 2380 | runnable: executed successfully during the audit |
| 138 | Practice checkpoint 7 | 2400 | runnable: executed successfully during the audit |
| 139 | 17.1 Apply one function to several values | 2423 | runnable: executed successfully during the audit |
| 140 | 17.2 Count function results | 2458 | runnable: executed successfully during the audit |
| 141 | 17.3 More advanced example: produce a simple report | 2489 | runnable: executed successfully during the audit |
| 142 | 18.1 Importing a standard module | 2555 | runnable: executed successfully during the audit |
| 143 | Explanation | 2570 | runnable: executed successfully during the audit |
| 144 | Explanation | 2576 | diagnostic: NameError: name 'math' is not defined. Did you forget to import 'math'? |
| 145 | 18.2 Importing one item | 2588 | runnable: executed successfully during the audit |
| 146 | 18.2 Importing one item | 2605 | manual: an intentionally incomplete function call |
| 147 | 18.3 Using an alias | 2617 | runnable: executed successfully during the audit |
| 148 | 18.3 Using an alias | 2625 | runnable: executed successfully during the audit |
| 149 | 18.3 Using an alias | 2639 | runnable: executed successfully during the audit |
| 150 | 18.4 Example with the `random` module | 2649 | runnable: executed successfully during the audit |
| 151 | 18.5 Import errors | 2668 | manual: an intentionally misspelled import |
| 152 | 18.5 Import errors | 2680 | runnable: executed successfully during the audit |
| 153 | 18.5 Import errors | 2686 | diagnostic: AttributeError: module 'math' has no attribute 'squareroot' |
| 154 | 18.5 Import errors | 2696 | diagnostic: NameError: name 'math' is not defined. Did you forget to import 'math'? |
| 155 | 19.1 `SyntaxError` | 2722 | diagnostic: SyntaxError on line 1: expected ':' |
| 156 | 19.1 `SyntaxError` | 2731 | diagnostic: NameError: name 'engagement' is not defined |
| 157 | 19.2 `IndentationError` | 2742 | diagnostic: SyntaxError on line 2: expected an indented block after 'for' statement on line 1 |
| 158 | 19.2 `IndentationError` | 2749 | diagnostic: NameError: name 'topics' is not defined |
| 159 | 19.3 `NameError` | 2760 | diagnostic: NameError: name 'engagement' is not defined. Did you mean: 'engagment'? |
| 160 | 19.3 `NameError` | 2769 | runnable: executed successfully during the audit |
| 161 | 19.4 `TypeError` | 2780 | diagnostic: TypeError: can only concatenate str (not "int") to str |
| 162 | 19.4 `TypeError` | 2789 | runnable: executed successfully during the audit |
| 163 | 19.5 `ValueError` | 2802 | diagnostic: ValueError: invalid literal for int() with base 10: 'high' |
| 164 | 19.5 `ValueError` | 2810 | manual: interactive input |
| 165 | 19.6 `ModuleNotFoundError` | 2823 | manual: an intentionally misspelled import |
| 166 | 19.6 `ModuleNotFoundError` | 2829 | runnable: executed successfully during the audit |
| 167 | 19.7 `TypeError` from a missing function argument | 2841 | diagnostic: TypeError: classify() missing 1 required positional argument: 'value' |
| 168 | 19.7 `TypeError` from a missing function argument | 2850 | diagnostic: NameError: name 'classify' is not defined |
| 169 | 19.8 Logic errors | 2862 | runnable: executed successfully during the audit |
| 170 | 19.8 Logic errors | 2874 | diagnostic: NameError: name 'missing_values' is not defined |
| 171 | 20. Tracing code manually | 2895 | runnable: executed successfully during the audit |
| 172 | 21.3 Step 2: Create the classification function | 2968 | runnable: executed successfully during the audit |
| 173 | 21.3 Step 2: Create the classification function | 2980 | diagnostic: NameError: name 'classify_missingness' is not defined |
| 174 | 21.4 Step 3: Add input and error handling | 2998 | manual: interactive input |
| 175 | 21.5 Step 4: Add validation | 3013 | manual: interactive input |
| 176 | 21.6 Step 5: Complete the script | 3035 | manual: interactive input |
| 177 | Function definition | 3094 | diagnostic: SyntaxError on line 1: expected an indented block after function definition on line 1 |
| 178 | Function definition | 3100 | diagnostic: SyntaxError on line 1: unexpected indent |
| 179 | Function definition | 3106 | diagnostic: SyntaxError on line 1: unexpected indent |
| 180 | Input block | 3114 | diagnostic: SyntaxError on line 1: expected an indented block after 'try' statement on line 1 |
| 181 | Input block | 3120 | diagnostic: SyntaxError on line 1: unexpected indent |
| 182 | Validation block | 3128 | diagnostic: SyntaxError on line 1: unexpected indent |
| 183 | Validation block | 3134 | diagnostic: SyntaxError on line 1: unexpected indent |
| 184 | Calculation block | 3142 | diagnostic: NameError: name 'missing_records' is not defined |
| 185 | Calculation block | 3148 | diagnostic: NameError: name 'classify_missingness' is not defined |
| 186 | Calculation block | 3154 | diagnostic: NameError: name 'missing_percentage' is not defined |
| 187 | Error block | 3162 | diagnostic: SyntaxError on line 1: invalid syntax |
| 188 | 22. Advanced example: reviewing several records | 3210 | runnable: executed successfully during the audit |
| 189 | Activity 1: Predict and run | 3285 | runnable: executed successfully during the audit |
| 190 | Activity 2: Modify | 3304 | runnable: executed successfully during the audit |
| 191 | Activity 3: Break and repair | 3330 | diagnostic: SyntaxError on line 1: expected ':' |
| 192 | Activity 4: Loop and count | 3348 | runnable: executed successfully during the audit |
| 193 | Activity 5: Create a function | 3366 | diagnostic: NameError: name 'calculate_percentage' is not defined |
| 194 | Activity 5: Create a function | 3377 | diagnostic: NameError: name 'calculate_percentage' is not defined |
| 195 | Activity 7: Meaningful mini-case | 3401 | runnable: executed successfully during the audit |
| 196 | Question 1 | 3431 | runnable: executed successfully during the audit |
| 197 | Question 1 | 3437 | diagnostic: NameError: name 'x' is not defined |
| 198 | Question 4 | 3453 | runnable: executed successfully during the audit |
| 199 | Question 5 | 3468 | manual: interactive input |
| 200 | Question 7 | 3481 | manual: a while loop that should be run deliberately |
| 201 | Question 10 | 3500 | diagnostic: ValueError: invalid literal for int() with base 10: 'hello' |
| 202 | 29. What comes next | 3666 | manual: an external CSV file |

