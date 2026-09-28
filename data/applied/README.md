# Applied synthetic teaching datasets

These six files support Tutorials 3.29 and 3.45. They contain no real people, employees, organisations or service results.

| Case | Raw rows | Cleaned rows | Unit of observation |
|---|---:|---:|---|
| Municipal service requests | 560 | 556 | one service request |
| Community digital-support sessions | 540 | 537 | one support session |
| Organisational automation pilot | 580 | 576 | one observed work task |

The raw files contain exact duplicates, repeated identifiers, label variants, invalid dates and numbers, logical contradictions, missing text and context-dependent cases. The cleaned counterparts remove only confirmed exact duplicates, standardise documented variants, retain source text and expose uncertainty through explicit flags.

Run `python data/applied/generate_applied_datasets.py` to reproduce all six CSVs deterministically. The generator uses seed `20260917` and requires pandas. Text preparation uses a transparent regular-expression tokenizer and a small visible stop-word set that retains `not`, `no` and `nor`.

These files are for teaching data-quality reasoning, descriptive analysis and cautious interpretation. They must not be presented as evidence about real services or workplaces.
