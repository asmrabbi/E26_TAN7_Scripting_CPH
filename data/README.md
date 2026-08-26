# Teaching data

`E26_TAN7_service_experience_raw.csv` is the canonical synthetic raw dataset for Lecture 5 and Website Tutorials 3.1–3.14. One row is intended to represent one service category in one city and reporting month. The file has 121 rows and 14 columns and deliberately contains missing, inconsistent, duplicate, non-numeric, out-of-range and logically contradictory values for beginner data-quality exercises.

The raw file includes, among other planned issues, seven pandas-recognised missing cells, one exact duplicate row, two repeated identifiers, inconsistent city and service labels, three non-numeric `resolution_days` values, an invalid month, invalid numeric ranges and cross-field contradictions. Lecture 5 detects and documents these issues; it does not silently clean them.

`monthly_service_report.csv` is an earlier compact teaching dataset retained for older notebooks. Do not substitute it for the Lecture 5 file because its structure and expected results differ.

The datasets contain no real people, organisations or operational results. They must not be presented as evidence about Copenhagen, Aarhus, Odense, Aalborg or Aalborg University services.

The course design was informed by the examples and file-based exercises in Rodrigo Pérez Iragorri's Aalborg class-notes repository: https://github.com/roedorpi/TAN7_Scripting_classnotes. No file from that repository is reproduced verbatim here.
