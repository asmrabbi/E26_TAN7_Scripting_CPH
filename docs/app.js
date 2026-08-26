const packageIlos = [
  "Navigate the tutorial, Colab and the course GitHub repository.",
  "Recognise the difference between instructions, code cells and output.",
  "Save notebooks, move files and keep course work organised.",
  "Use AI assistance carefully and test suggested changes.",
  "Read a basic error message and apply a simple troubleshooting routine."
];

const courseRepositoryUrl = "https://github.com/asmrabbi/E26_TAN7_Scripting_CPH";
const courseDatasetUrl = "https://raw.githubusercontent.com/asmrabbi/E26_TAN7_Scripting_CPH/main/data/monthly_service_report.csv";
const lecture5DatasetUrl = "https://raw.githubusercontent.com/asmrabbi/E26_TAN7_Scripting_CPH/main/data/E26_TAN7_service_experience_raw.csv";
const pythonResourceLinks = {
  foundationsI: {
    examples: "https://colab.research.google.com/github/asmrabbi/E26_TAN7_Scripting_CPH/blob/main/notebooks/lecture_03/L03_Tutorial_2_1_to_2_7_Examples.ipynb",
    examplesGithub: "https://github.com/asmrabbi/E26_TAN7_Scripting_CPH/blob/main/notebooks/lecture_03/L03_Tutorial_2_1_to_2_7_Examples.ipynb",
    exercises: "https://colab.research.google.com/github/asmrabbi/E26_TAN7_Scripting_CPH/blob/main/notebooks/lecture_03/L03_Tutorial_2_1_to_2_7_Exercises.ipynb",
    practice: "https://colab.research.google.com/github/asmrabbi/E26_TAN7_Scripting_CPH/blob/main/notebooks/lecture_03/L03_Tutorial_2_1_to_2_7_Practice_Materials.ipynb",
    github: "https://github.com/asmrabbi/E26_TAN7_Scripting_CPH/tree/main/notebooks/lecture_03"
  },
  foundationsII: {
    examples: "https://colab.research.google.com/github/asmrabbi/E26_TAN7_Scripting_CPH/blob/main/notebooks/lecture_04/L04_Tutorial_2_8_to_2_14_Examples.ipynb",
    examplesGithub: "https://github.com/asmrabbi/E26_TAN7_Scripting_CPH/blob/main/notebooks/lecture_04/L04_Tutorial_2_8_to_2_14_Examples.ipynb",
    exercises: "https://colab.research.google.com/github/asmrabbi/E26_TAN7_Scripting_CPH/blob/main/notebooks/lecture_04/L04_Tutorial_2_8_to_2_14_Exercises.ipynb",
    solutions: "https://colab.research.google.com/github/asmrabbi/E26_TAN7_Scripting_CPH/blob/main/notebooks/lecture_04/L04_Tutorial_2_8_to_2_14_Solutions.ipynb",
    appliedExercises: "https://colab.research.google.com/github/asmrabbi/E26_TAN7_Scripting_CPH/blob/main/notebooks/lecture_04/L04_Tutorial_2_15_Applied_Exercises.ipynb",
    appliedSolutions: "https://colab.research.google.com/github/asmrabbi/E26_TAN7_Scripting_CPH/blob/main/notebooks/lecture_04/L04_Tutorial_2_15_Applied_Solutions.ipynb",
    selfTestAnswers: "https://colab.research.google.com/github/asmrabbi/E26_TAN7_Scripting_CPH/blob/main/notebooks/lecture_04/L04_Python_Foundations_II_Self_Test_Answers.ipynb",
    github: "https://github.com/asmrabbi/E26_TAN7_Scripting_CPH/tree/main/notebooks/lecture_04"
  },
  dataHandlingI: {
    examples: "https://colab.research.google.com/github/asmrabbi/E26_TAN7_Scripting_CPH/blob/main/notebooks/lecture_05/L05_Tutorial_3_1_to_3_14_Examples.ipynb",
    examplesGithub: "https://github.com/asmrabbi/E26_TAN7_Scripting_CPH/blob/main/notebooks/lecture_05/L05_Tutorial_3_1_to_3_14_Examples.ipynb",
    exercises: "https://colab.research.google.com/github/asmrabbi/E26_TAN7_Scripting_CPH/blob/main/notebooks/lecture_05/L05_Tutorial_3_1_to_3_14_Exercises.ipynb",
    cases: "https://colab.research.google.com/github/asmrabbi/E26_TAN7_Scripting_CPH/blob/main/notebooks/lecture_05/L05_Tutorial_3_1_to_3_14_Case_Activities.ipynb",
    dataset: lecture5DatasetUrl,
    github: "https://github.com/asmrabbi/E26_TAN7_Scripting_CPH/tree/main/notebooks/lecture_05"
  }
};

const tutorialCodeCoverageUrl = `${courseRepositoryUrl}/blob/main/docs/tutorial_code_coverage.md`;
const tutorialIdMigrations = {};

function renumberTutorialSet(moduleSet, chapterSet, referenceSet, newIds) {
  const oldIds = moduleSet.map(module => module.id);
  oldIds.forEach((oldId, index) => {
    const newId = newIds[index];
    tutorialIdMigrations[oldId] = newId;
    moduleSet[index].id = newId;
    if (Object.prototype.hasOwnProperty.call(chapterSet, oldId)) {
      chapterSet[newId] = chapterSet[oldId];
      delete chapterSet[oldId];
    }
    if (Object.prototype.hasOwnProperty.call(referenceSet, oldId)) {
      referenceSet[newId] = referenceSet[oldId];
      delete referenceSet[oldId];
    }
  });
}

renumberTutorialSet(
  pythonFoundationModules,
  pythonFoundationChapters,
  pythonFoundationReferences,
  ["2.1", "2.2", "2.3", "2.4", "2.5", "2.6", "2.7"]
);
const tutorialScreenshotAssets = {
  "PF1-01": { src: "assets/PF1-01-colab-file-menu.png?v=2", caption: "The published Lecture 3 Examples notebook with Colab's File menu open." },
  "PF1-02": { src: "assets/PF1-02-colab-save-copy-drive.png?v=2", caption: "Use Save a copy in Drive before editing the published course notebook." },
  "PF1-03": { src: "assets/PF1-03-colab-notebook-title.png?v=2", caption: "The published Lecture 3 Examples notebook title in Google Colab." },
  "PF1-04": { src: "assets/PF1-04-colab-code-cell-output.png?v=2", caption: "A published, fully commented course code cell with its Run control and successful output." },
  "PF1-05": { src: "assets/PF1-05-colab-code-text-toolbar.png?v=2", caption: "The + Code, + Text and Run all controls in the published course notebook." },
  "PF1-06": { src: "assets/PF1-06-colab-runtime-menu.png?v=2", caption: "The published notebook's Colab Runtime menu, including run-all and restart actions." },
  "PF1-07": { src: "assets/PF1-07-colab-traceback.png", caption: "A real, safely caught ValueError traceback from the Lecture 3 notebook." }
};

function resolveTutorialResource(placeholder) {
  if (placeholder === "COLAB_HOME_URL") return "https://colab.research.google.com/";
  if (placeholder.includes("DATASET")) return courseDatasetUrl;
  if (placeholder.includes("GITHUB") || placeholder === "SCREENSHOT_ASSET_FOLDER_URL") return courseRepositoryUrl;
  if (placeholder.includes("SOLUTION") || placeholder.includes("HINTS") || placeholder.includes("WORKSHEET") || placeholder.includes("BRIEF") || placeholder.includes("SELF_TEST_FORM")) return pythonResourceLinks.foundationsI.exercises;
  if (placeholder.includes("COLAB")) return pythonResourceLinks.foundationsI.examples;
  return null;
}

const startModules = [
  {
    id: "0.1",
    title: "Welcome and how to use this tutorial",
    time: "15 to 20 minutes",
    summary: "Understand the purpose of the course, the structure of the tutorial and where to find help without reading a long orientation manual.",
    intro: "This course is designed for students who are new to coding. You are not expected to memorise Python commands or build software without support. The practical aim is to become comfortable reading short scripts, changing relevant parts, checking outputs and explaining what the process does.",
    steps: [
      ["Understand the course journey", "The course moves from describing computational processes to working with Python, data, visualisations, machine learning and simple automation. Each section introduces only the concepts needed for the next stage."],
      ["Use the tutorial as a working guide", "Tutorial pages combine short explanations, practical steps, code that remains copyable, expected results and troubleshooting advice. Use the left menu to move between tutorials and return to earlier guidance when needed."],
      ["Interpret the labels", "Core activities support the basic course requirements. Recommended activities strengthen your practice. Optional activities are extensions. Estimated times are guidance, not deadlines."],
      ["Organise your work", "Create one course folder with clear subfolders for notebooks, datasets, charts and project notes. Clear filenames make later project work and submission much easier."],
      ["Use support in the right order", "First read the expected result and common problem. Try one repair. Then ask a classmate, teacher or AI tool with the relevant code, error and intended result."]
    ],
    screenshot: ["0.1-A", "Tutorial page overview", "An annotated tutorial page identifying the module menu, practical steps, screenshot area, activity and resource links."],
    task: "Open another module from the left menu, find its estimated time and resource area, then return to this page.",
    problem: ["You opened several resources in the same tab and lost your place in the tutorial.", "Return to the tutorial and open Colab or GitHub resources in a separate tab when instructed."],
    check: ["I understand what this course expects from a beginner.", "I can navigate between tutorials and find support.", "I have one organised place for course files."],
    reflection: "What kind of explanation makes a technical process feel understandable to you?"
  },
  {
    id: "0.2",
    title: "Coding, scripting and programs",
    time: "15 to 20 minutes",
    summary: "Learn the small set of terms needed to discuss code and translate a short example into ordinary language.",
    intro: "Code is a set of instructions written in a form a computer can interpret. Coding is the activity of writing or changing those instructions. A script is usually a relatively small set of instructions that completes a task, while a program or software system may contain many connected parts.",
    steps: [
      ["Identify input, process and output", "Input is the information entering a task. The process is what the instructions do with it. Output is the result. This pattern will later help you understand data cleaning, visualisation and automated workflows."],
      ["Read the example before running it", "The first two lines store a course name and a number. The final line asks Python to display both values. You do not need to understand every symbol before identifying the overall purpose."],
      ["Translate the code", "Explain the example in ordinary language: store the course name, store the number of participants, then display both values. Translating code is an important form of scripting literacy."],
      ["Distinguish editing from running", "Editing changes the instructions. Running asks the computer to perform the current instructions. If you change a value but do not run the cell again, the displayed output will remain unchanged."]
    ],
    code: 'course_name = "Introduction to Scripting"\nparticipants = 28\nprint(course_name, participants)',
    output: "Introduction to Scripting 28",
    screenshot: ["0.2-A", "Input, process and output", "A compact diagram showing stored course information as input, print as the process and displayed text as output."],
    task: "Change the participant number, predict the new output and explain which line you changed.",
    problem: ["The text was copied with curved quotation marks and Python reports a syntax error.", "Replace the curved marks with straight quotation marks inside the code cell."],
    check: ["I can describe what a script is.", "I can identify the input, process and output in the example.", "I can explain the three lines in ordinary language."],
    reflection: "Code follows written rules, but people decide what those rules should represent."
  },
  {
    id: "0.3",
    title: "Working in Google Colab",
    time: "35 to 45 minutes",
    summary: "Open a notebook, run and edit code, save your work, and move a CSV file without installing Python or a coding application.",
    intro: "Google Colab is a browser-based notebook environment. A notebook can contain explanatory text, executable code and the output produced by that code. The course uses prepared notebooks so that technical setup does not take time away from learning scripting and data work.",
    steps: [
      ["Open and copy the course notebook", "Use Open in Colab below. If the notebook is view-only, choose File, then Save a copy in Drive. Rename your copy clearly before editing it."],
      ["Recognise cells and output", "Text cells contain explanations and questions. Code cells contain Python instructions and have a Run button. Output appears below a code cell after it has been executed."],
      ["Run, modify and rerun", "Read the code, predict the output, select Run and compare the result. Change one value and run the same cell again. The output should now reflect the current instructions."],
      ["Save and download", "Colab normally saves a Drive copy automatically. Confirm the saved status, then use File, Download .ipynb when you need a local backup or submission copy."],
      ["Upload a CSV", "Open the Files panel using the folder icon, select Upload and choose the course CSV. The filename shown in Colab must match the filename used in the code, including capital letters, spaces and the .csv extension."],
      ["Remember that session files are temporary", "A file uploaded to the Colab Files panel may disappear when the session resets. Keep the original dataset and important outputs in your course folder or Drive."]
    ],
    code: 'course_name = "Introduction to Scripting"\nmessage = "My first Colab code cell worked"\nprint(course_name + ": " + message)',
    output: "Introduction to Scripting: My first Colab code cell worked",
    screenshot: ["0.3-A", "Colab notebook interface", "Google Colab with the notebook name, text cell, code cell, Run button, output area and Files panel labelled."],
    task: "Make an editable notebook copy, rename it, run the example and replace the message with a sentence of your own.",
    problem: ["The notebook is view-only, or an uploaded file cannot be found.", "Edit a saved copy rather than the course master. For a missing file, compare the code with the exact filename visible in the Files panel."],
    check: ["I can distinguish text, code and output.", "I can save and download a notebook copy.", "I can upload a CSV and check its exact filename."],
    reflection: "Do not upload confidential or identifiable data to a cloud notebook unless the course task and data-handling rules explicitly permit it."
  },
  {
    id: "0.4",
    title: "Course materials on GitHub and responsible AI help",
    time: "25 to 30 minutes",
    summary: "Find the right notebook or dataset, then ask AI for focused coding help without handing over responsibility for the result.",
    intro: "GitHub will be the organised source for course notebooks, scripts, datasets and workflow templates. You do not need to learn version control at this stage. AI tools may help explain or modify code, but their suggestions can contain incorrect functions, invented filenames or unsuitable analytical choices.",
    steps: [
      ["Navigate the repository", "Open the course repository and read its README. Use the folder list and breadcrumb path to find notebooks, datasets and completed examples. Download or open only the resource required by the current tutorial."],
      ["Open the correct resource", "Use the tutorial's direct Colab link for prepared notebooks and the dataset link for CSV files. Saving the GitHub webpage itself does not download a working notebook."],
      ["Describe the task before asking AI", "State what the current code does, what single change you need, which environment you use and what the output should look like. Include the relevant error, but do not share personal or confidential data."],
      ["Ask for a bounded change", "Request a small modification and an explanation. Ask the AI to preserve existing variable names and avoid unfamiliar libraries unless they are genuinely necessary."],
      ["Test the suggestion", "Run the revised code with more than one input. Check that the result matches the task and that the AI has not invented columns, files or functions."],
      ["Record important AI assistance", "For assessed work, note the tool, your request, the changes accepted, any rejected suggestions and how you tested the result."]
    ],
    code: 'temperature_c = 18\nif temperature_c < 20:\n    message = "Bring a jacket"\nelse:\n    message = "A light layer may be enough"\nprint(message)',
    output: "Bring a jacket",
    screenshot: ["0.4-A", "Repository and focused AI request", "A split example showing the course GitHub folder structure and an AI request containing context, one bounded task and testing requirements."],
    task: "Find the Start Here notebook and practice dataset in the repository. Then draft an AI request that asks for one clearly defined change to the example code.",
    problem: ["The AI uses weather_temperature even though the script contains only temperature_c.", "Correct or reject the invented variable, then test values that follow both branches of the condition."],
    check: ["I can find a notebook and dataset in the repository.", "My AI request states one clear task and the expected result.", "I test AI suggestions rather than assuming they are correct."],
    reflection: "If you submit or use AI-generated code, responsibility for checking its behaviour remains with you."
  },
  {
    id: "0.5",
    title: "Reading errors and troubleshooting",
    time: "20 to 25 minutes",
    summary: "Use a repeatable routine to understand and repair common beginner errors instead of treating red text as failure.",
    intro: "An error message describes why Python could not complete the current instruction. It is evidence about the code, not a judgement about the person writing it. Good troubleshooting means making one controlled change, checking the result and keeping track of what has already been tested.",
    steps: [
      ["Start from a working version", "Run the complete example and confirm the expected output. A known working version provides a reliable comparison when you create or encounter an error."],
      ["Read the final line first", "The bottom of a Python error usually names the error type and gives a short explanation. Then inspect the highlighted line to see where Python noticed the problem."],
      ["Compare names and punctuation", "Check quotation marks, brackets, colons, indentation and variable names. Python treats course_name and course_title as different names."],
      ["Change one thing and rerun", "Avoid rewriting the whole cell. Make the smallest plausible correction, run the code again and observe whether the error or output changed."],
      ["Ask for help with evidence", "Share the relevant code, exact error, expected result and what you already tried. This gives a teacher, classmate or AI tool enough information to help efficiently."]
    ],
    code: 'course_name = "Introduction to Scripting"\nmessage = "Errors help us learn"\nprint(course_name + ": " + message)',
    output: "Introduction to Scripting: Errors help us learn",
    screenshot: ["0.5-A", "Reading a Python error", "A Colab SyntaxError with the highlighted code line, error type and final explanatory line labelled."],
    task: "Run the working example. Change message to student_message only in the final line, read the resulting NameError, then repair the inconsistent name.",
    problem: ["Several lines were changed at once and it is unclear which change caused the problem.", "Return to the last working version, reproduce one change at a time and rerun after each change."],
    check: ["I can locate the error type and relevant code line.", "I make one repair at a time.", "I can describe the intended result when asking for help."],
    reflection: "A supportive classroom treats errors as shared evidence. Showing a useful error can help other students recognise the same pattern."
  }
];

const foundationIlos = [
  "Explain the difference between a problem, algorithm, program, script and code.",
  "Recognise tasks that can be fully or partly addressed computationally.",
  "Describe a task through inputs, processes and outputs.",
  "Break a large task into smaller, manageable tasks.",
  "Write ordered and precise instructions without using a programming language.",
  "Identify assumptions, missing steps, edge cases and decisions requiring human judgement.",
  "Produce an initial computational specification for a recurring data task.",
  "Reflect on how organisational choices and values enter computational procedures."
];

const foundationModules = [
  {
    id: "1.1",
    title: "What makes a problem computational?",
    time: "20 minutes",
    summary: "Move from a vague organisational request to a problem with defined information, rules, outputs and limits.",
    intro: "Programming should begin with a question, not a Python command: what are we trying to achieve? A request such as ‘automate the monthly report’ is only a starting point. Before code can be written, the file, required information, permitted corrections, outputs, exceptions and human responsibilities must be made explicit.",
    steps: [
      ["Distinguish the central terms", "A problem is the goal or situation. An algorithm is a defined method for reaching an outcome. A program implements a method as executable instructions. Code is the written language used in that program. In this course, a script is usually a focused program for a data-related task."],
      ["Use computational thinking", "Computational thinking includes decomposition, pattern recognition, abstraction, ordered procedure design, testing and revision. It is a human problem-solving practice and can happen before a computer is used."],
      ["Look for a workable structure", "A reasonably defined computational problem has a clear goal, identifiable inputs, a describable process, recognisable outputs, testable success criteria and explicit constraints."],
      ["Decide the computational role", "Some tasks can be automated with clear rules. Others can use computational assistance but still require contextual interpretation. Technically possible automation is not automatically desirable."],
      ["Place problem definition in the wider process", "Problem definition comes before planning, coding and testing, but the process is iterative. Testing may reveal that the original goal, rules or categories need revision."]
    ],
    screenshot: ["1.1-A", "From situation to tested program", "A process diagram moving from a real-world situation through problem definition, planning, code, testing and revision."],
    task: "Classify six situations as suitable for a clearly defined computational process, suitable for computational assistance with human interpretation, or unsuitable for a fully automated decision. Explain what remains a human responsibility.",
    problem: ["‘Analyse the data’ sounds like a task, but it does not specify a question, input, process, output or criterion for success.", "Rewrite it by defining the intended result, the available information, the relevant rules, the required output and the limits of the process."],
    check: ["I can distinguish an algorithm from a program.", "I can name the characteristics of a defined computational problem.", "I can explain why some decisions should not be fully automated."],
    reflection: "Who defines what information is relevant, which categories count and what a successful result means?"
  },
  {
    id: "1.2",
    title: "Inputs, processes and outputs",
    time: "25 minutes",
    summary: "Describe how information and supporting rules enter a process, how they are transformed and what results are produced.",
    intro: "The input-process-output model provides a compact first description of a computational task. It asks what information enters, what happens to it and what result is produced. The model is deliberately simple, but it makes vague requests easier to examine and discuss.",
    steps: [
      ["Identify all inputs", "Inputs include the main dataset as well as parameters and rules. A monthly report may require a CSV file, a reporting period, approved centre names and a rule stating that participant counts cannot be negative."],
      ["Describe the process as actions", "Useful process descriptions use verbs such as check, select, compare, group, calculate and save. ‘Monthly information’ is a topic. ‘Group valid records by programme and calculate totals’ describes a process."],
      ["Name the outputs", "Outputs may include a calculated value, cleaned file, issue log, summary table, chart or report. One process can produce several outputs."],
      ["Choose an appropriate level of detail", "A high-level IPO model communicates the overall purpose. A more detailed version reveals checks, transformations and review points needed for later implementation."],
      ["Include feedback and human review", "Real processes are not always straight lines. Uncertain records may go to human review, then return as corrected inputs before final processing."]
    ],
    screenshot: ["1.2-A", "Input-process-output model", "Three connected cards showing a monthly CSV and rules, validation and calculation, then a summary, chart and issue log."],
    task: "Create both an IPO and a CIPO description for a room-capacity warning system. The system compares recorded participants with the room's permitted capacity. Include the participant data, the capacity rule, the comparison and the possible outputs. In the CIPO version, also describe the organisational context that gives the capacity rule its meaning. Finish by writing two or three sentences about what becomes more visible when context is added.",
    problem: ["A description says ‘check the data’ and lists only the CSV as an input.", "Specify what is checked, according to which rules, what happens when a problem is found and which supporting inputs are required."],
    check: ["I can identify data and supporting rules as inputs.", "I describe processes using actions.", "I can explain what the CIPO model adds to an IPO description."],
    reflection: "Which decisions become less visible when they are hidden inside broad words such as clean, valid or useful?"
  },
  {
    id: "1.3",
    title: "Breaking a large task into smaller tasks",
    time: "30 minutes",
    summary: "Use decomposition to turn a broad task into understandable components with useful names, dependencies and results.",
    intro: "Large tasks are difficult to plan, test and explain when they are treated as one action. Decomposition divides a complex task into smaller parts that can be understood and checked separately. The aim is not to produce the longest possible list, but to reveal meaningful components and their relationships.",
    steps: [
      ["Begin with the overall goal", "Write one sentence describing the complete result, such as ‘prepare the monthly participation report’. This becomes the root of the task tree."],
      ["Create action-based major tasks", "Use names such as receive the file, preserve the source, inspect the structure, validate records, calculate summaries, create the visualisation and save the results."],
      ["Choose useful detail", "‘Process data’ is too broad. Listing every mouse click is too detailed for an initial plan. A useful subtask has a recognisable purpose and result."],
      ["Separate structure from sequence", "Decomposition shows what the parts are. Sequencing shows the order in which they should happen. A task tree is not automatically a timeline."],
      ["Identify dependencies and results", "Some tasks depend on earlier outputs. Summary calculations depend on validated data. Define what each subtask produces so later dependencies are visible."]
    ],
    screenshot: ["1.3-A", "Expandable decomposition tree", "A task tree for preparing a monthly report, with the Validate records branch expanded to reveal its subtasks."],
    task: "Build a task tree for preparing a monthly data report. Include six to ten major tasks, then expand one branch into at least four smaller tasks.",
    problem: ["The task tree contains only ‘get data’, ‘process data’ and ‘make report’, or it lists every click and filename.", "Use action-based tasks at a level where each component has a clear purpose, result and relationship to the overall goal."],
    check: ["I can explain decomposition without describing sequence.", "My task names begin with meaningful actions.", "I can identify at least one dependency between tasks."],
    reflection: "How might the chosen decomposition make some forms of work visible while hiding others?"
  },
  {
    id: "1.4",
    title: "Writing precise instructions and pseudocode",
    time: "25 minutes",
    summary: "Replace vague requests with ordered, testable instructions and express the important logic as beginner-friendly pseudocode.",
    intro: "People often fill in missing information using context and experience. A computer cannot safely guess what the author intended. Useful computational instructions do not need complicated language, but they must make the required actions and rules sufficiently explicit.",
    steps: [
      ["Write ordered actions", "State what happens first, next and last. The order should respect dependencies, such as validating records before calculating totals."],
      ["Replace vague terms", "Words such as clean, normal, reasonable and useful hide decisions. Replace them with operational definitions that another person could inspect and test."],
      ["Include sequence, decisions and repetition", "Sequence describes ordered steps. A decision selects an action according to a condition. Repetition applies an action to every relevant record or continues until a condition is met."],
      ["Make the process finite and executable", "Instructions need a defined stopping point and actions that are actually possible with the available information and permissions."],
      ["Use structured language or pseudocode", "Pseudocode expresses the solution logic without requiring strict Python syntax. It is useful for discussing and testing a process before implementation."]
    ],
    screenshot: ["1.4-A", "Vague versus precise instructions", "A side-by-side comparison of ‘clean the data and make a useful chart’ with operational instructions for checking counts, calculating totals and creating a labelled bar chart."],
    task: "A university help desk receives requests in a spreadsheet. Write eight to twelve ordered instructions or lines of pseudocode for preparing a daily priority list. Your process must check every request, identify requests marked urgent, send incomplete records for human review, produce a priority list and stop after all records have been considered. Define what the word urgent means instead of asking the reader to guess.",
    problem: ["A person can follow the instructions only because they silently decide what counts as invalid, which chart is useful and what to do with missing values.", "Make those criteria explicit and identify any decision that should be referred to a person rather than guessed."],
    check: ["My instructions are ordered and finite.", "I have replaced vague terms with explicit rules.", "I include at least one decision and one repeated action."],
    reflection: "Precision improves repeatability, but who has the authority to define the rules being repeated?"
  },
  {
    id: "1.5",
    title: "Finding assumptions and missing steps",
    time: "25 minutes",
    summary: "Look beyond the expected happy path to expose assumptions, edge cases, failures and choices that could distort the result.",
    intro: "An assumption is something treated as true without being stated or verified. A missing step is an action required for the process to work but absent from the instructions. Both can produce a program that runs successfully while still producing the wrong or misleading result.",
    steps: [
      ["Describe the happy path", "First identify the expected situation in which the correct file arrives, columns are present, values follow the rules and outputs can be saved."],
      ["Search for edge cases", "Consider an empty file, a missing column, a boundary date, zero participants, a new category, a repeated identifier with conflicting values or an unavailable output folder."],
      ["Question categories and corrections", "Ask who defined valid categories, whether the lists are current and which corrections are permitted. Do not turn uncertainty into invented data."],
      ["Plan for missing data and duplicates", "A blank value can have several meanings. Repeated records may be legitimate or conflicting. Detection does not automatically justify deletion."],
      ["Treat planning as debugging", "Finding an unclear requirement before writing code prevents later logic errors. Debugging concerns the specification and process as well as Python syntax."]
    ],
    screenshot: ["1.5-A", "Reveal the missing steps", "The sequence Open file, Calculate totals, Create chart with missing checks, source preservation, validation, review and issue logging revealed around it."],
    task: "Inspect the instruction ‘open the file, remove duplicates, calculate totals and create a chart’. Identify at least eight assumptions or missing steps and propose how each should be handled.",
    problem: ["The process automatically removes every repeated identifier and fills all blank values with zero.", "Separate detection from resolution. Define when a repeated record or blank value can be handled automatically and when human review is required."],
    check: ["I can distinguish an assumption from a missing step.", "I can give examples of edge cases.", "I understand why valid code can still produce an invalid conclusion."],
    reflection: "Which groups or centres might be disadvantaged if incomplete records are automatically excluded?"
  },
  {
    id: "1.6",
    title: "Case activity: describe a recurring data task",
    time: "35 minutes",
    summary: "Combine problem definition, IPO, decomposition, instructions, edge cases and success criteria in one CivicConnect specification.",
    intro: "CivicConnect is a fictional organisation coordinating community programmes. Each month, local centres submit participation records that are combined into a CSV file. Employees currently make inconsistent decisions about missing values, spelling variations and repeated records. Your task is to specify a transparent and repeatable process before any Python is written.",
    steps: [
      ["A. Define the problem", "Describe the current situation, desired outcome, why computational assistance may help and which responsibilities must remain with people."],
      ["B. Create an IPO description", "Identify the monthly CSV, reporting month, approved category lists and validation rules. Describe the checks, corrections, summaries and outputs, including an issue log."],
      ["C. Decompose the task", "Create a tree containing six to ten major tasks. Expand one major task, such as validating records, into at least four smaller tasks."],
      ["D. Write the process", "Write eight to fifteen ordered instructions using structured language or pseudocode. Include a decision, repetition, unresolved-record handling, saved outputs and a stopping point."],
      ["E. Identify assumptions and edge cases", "List at least five assumptions, five edge cases and two privacy or ethical considerations."],
      ["F. Define success", "State at least four testable criteria, such as preserving the source file, tracing corrections, logging unresolved records and reproducing summary totals."]
    ],
    screenshot: ["1.6-A", "CivicConnect case worksheet", "A six-part worksheet with tabs for Problem, IPO, Decomposition, Instructions, Assumptions and edge cases, and Success criteria."],
    task: "Produce the complete computational task specification. The expected outputs are a validated dataset, issue log, summary tables, labelled chart and processing summary, but uncertain records must remain visible for human review.",
    problem: ["The specification jumps directly from receiving the file to producing a chart and silently resolves unfamiliar categories or conflicting duplicates.", "Preserve the source, validate structure and values, log unresolved records, apply only approved corrections, verify outputs and keep interpretation under human responsibility."],
    check: ["My specification connects the problem, inputs, actions and outputs.", "It includes decisions, repetition, exceptions and success criteria.", "It makes human responsibility and privacy considerations visible."],
    reflection: "Which part is easiest to automate, which depends most on organisational definitions and which should remain under human review?"
  }
];

const foundationChapters = {
  "1.1": [
    {
      title: "Start with the problem, not the code",
      html: `<p>People sometimes imagine that programming begins by opening an application and typing Python commands. In practice, programming should begin earlier: <strong>what are we trying to achieve?</strong></p>
      <p>Imagine an organisation that receives a CSV file every month. An employee opens it, checks whether required information is present, corrects recognised inconsistencies, calculates totals, creates a chart and prepares a report. The organisation might say, “We want to automate the monthly report.”</p>
      <p>This is a useful starting point, but it is not yet a defined computational problem. Which file should be used? Which columns are required? What counts as an error? Which corrections are permitted? What should happen when information is incomplete? Who decides whether a suspicious value is actually wrong?</p>
      <blockquote>Writing code is not normally the first step. The first step is understanding and defining the problem.</blockquote>`
    },
    {
      title: "Problem, algorithm, program, code and script",
      html: `<p>These terms describe connected but different parts of computational work.</p>
      <div class="definition-table">
        <div><strong>Problem</strong><span>The situation or goal to be addressed, such as finding the largest value.</span></div>
        <div><strong>Algorithm</strong><span>A defined process for achieving the outcome, such as comparing each value with the largest found so far.</span></div>
        <div><strong>Program</strong><span>Stored instructions that implement a solution and can be executed by a computer.</span></div>
        <div><strong>Code</strong><span>The written statements expressed in a programming language.</span></div>
        <div><strong>Script</strong><span>A focused program that performs or automates a task, often involving files or data.</span></div>
      </div>
      <p>The same algorithm can be followed manually, written as structured instructions, represented as pseudocode or implemented in several programming languages. A programming language gives us a way to express a solution. It does not define the problem for us <a class="citation" href="https://books.trinket.io/pfe/01-intro.html" target="_blank" rel="noreferrer">(Severance, 2016)</a>.</p>`
    },
    {
      title: "A small algorithm without Python",
      html: `<p>Consider the values <code>12, 8, 19, 14, 6</code>. To find the largest value, treat the first number as the largest found so far. Look at each remaining number. If the next number is larger, replace the stored value. Continue until no numbers remain, then report the largest value.</p>
      <p>This is an algorithm even though it has not been written in Python. The important achievement is that the method is ordered, finite and testable.</p>`
    },
    {
      title: "Computational thinking is a human practice",
      html: `<p>Computational thinking means formulating problems and possible solutions so that information and procedures can be represented systematically. It includes decomposition, pattern recognition, abstraction, algorithmic thinking, testing and refinement <a class="citation" href="https://doi.org/10.1145/1118178.1118215" target="_blank" rel="noreferrer">(Wing, 2006)</a>.</p>
      <p>You use computational thinking when you turn a complex activity into a checklist, decide which information is required, define rules for categorising records, identify repeated work or decide which parts of a process should remain under human responsibility. It can therefore happen before a computer is used.</p>`
    },
    {
      title: "What makes a problem computational?",
      html: `<p>A problem becomes suitable for computational treatment when enough of it can be represented as data, rules, procedures or detectable patterns. A reasonably defined computational problem normally includes:</p>
      <ul class="chapter-list"><li><strong>A clear goal</strong>, such as producing a validated monthly summary.</li><li><strong>Identifiable inputs</strong>, including data, rules and selected parameters.</li><li><strong>A describable process</strong>, such as checking, grouping and calculating.</li><li><strong>A recognisable output</strong>, such as a table, chart, cleaned file or issue log.</li><li><strong>Testable success criteria</strong>, including checks that can show whether the result is correct.</li><li><strong>Boundaries and constraints</strong>, such as preserving the source file and not inventing missing values.</li></ul>`
    },
    {
      title: "Computational assistance is not the same as full automation",
      html: `<p>Counting blank values or converting recognised date formats can be expressed through clear rules. Explaining why participation is lower in one neighbourhood may be supported by data, but contextual investigation remains necessary. Deciding whether a programme was socially meaningful requires interpretation. Deciding whether someone deserves access to a service also raises questions of accountability, consequences and appeal.</p>
      <p>A technically possible automation is not automatically desirable. Ask who defined the categories, whose experiences are absent, who benefits and which decisions affected people can question. Algorithms are shaped by human and institutional choices, even when those choices become difficult to see in the finished system <a class="citation" href="https://doi.org/10.7551/mitpress/9780262525374.003.0009" target="_blank" rel="noreferrer">(Gillespie, 2014)</a>.</p>`
    },
    {
      title: "Where this fits in programming",
      html: `<p>Programming is iterative. We move from a real-world situation to a defined problem, identify the inputs, rules, constraints and outputs, plan the solution, write code, test the result and revise earlier decisions when problems appear <a class="citation" href="https://books.trinket.io/pfe/01-intro.html" target="_blank" rel="noreferrer">(Severance, 2016)</a>.</p>
      <p>Section 1.1 concentrates on problem understanding and solution planning. Flowcharts, pseudocode and Python will follow later.</p>`
    }
  ],
  "1.2": [
    {
      title: "The input-process-output model",
      html: `<p>The input-process-output model, usually shortened to <strong>IPO</strong>, asks three questions: what information enters the task, what happens to that information, and what result is produced?</p>
      <p>The model is intentionally simple. Its value is that it transforms a broad request into a structure that can be examined, discussed and gradually made more detailed.</p>`
    },
    {
      title: "Inputs include more than the dataset",
      html: `<p>An input is information supplied to a process. It might come from a CSV file, form, database, sensor, website, user choice or another program. The main dataset is often not sufficient by itself.</p>
      <p>A monthly report may also require a list of permitted centre names, a date range, a numerical threshold, an approved correction table and validation rules. These supporting inputs define how the dataset will be interpreted.</p>`
    },
    {
      title: "Processes should describe actions",
      html: `<p>A process examines, compares, transforms, combines or reorganises inputs. Useful process words include check, select, filter, sort, compare, count, calculate, convert, group, summarise and visualise.</p>
      <p>“Monthly information” names a topic. “Group valid records by programme and calculate the total participants for each programme” describes an action and an intended result.</p>`
    },
    {
      title: "Outputs are the produced results",
      html: `<p>An output might be a number, a cleaned dataset, a list of problematic records, a summary table, chart, report or saved file. One process can produce several outputs.</p>
      <p>A data-cleaning process might therefore produce a processed CSV, a separate list of records requiring review and a short summary of the changes made.</p>`
    },
    {
      title: "Watch: input, process and output",
      html: `<p>Use this short video as a second explanation of the IPO model. While watching, identify one example of an input, one action performed by the process and one output.</p>
      <figure class="video-figure">
        <div class="video-frame"><iframe src="https://www.youtube-nocookie.com/embed/CBf-jIn44X0" title="CS Basics: Input Process Output by Mr Matthews" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
        <a class="video-file-fallback" href="https://www.youtube.com/watch?v=CBf-jIn44X0" target="_blank" rel="noreferrer" aria-label="Play CS Basics: Input Process Output on YouTube">
          <img src="https://i.ytimg.com/vi/CBf-jIn44X0/hqdefault.jpg" alt="" />
          <span><b>▶ Play video on YouTube</b><small>The direct link is used when the tutorial is opened as a local file.</small></span>
        </a>
        <figcaption><strong>Video:</strong> <em>CS Basics: Input Process Output</em> by Mr Matthews. As you watch, identify the input, the action performed and the output in one example. <a href="https://www.youtube.com/watch?v=CBf-jIn44X0" target="_blank" rel="noreferrer">Open directly on YouTube ↗</a></figcaption>
      </figure>`
    },
    {
      title: "A complete monthly-report example",
      html: `<div class="ipo-inline"><div><strong>Input</strong><span>Monthly CSV, June date range and validation rules</span></div><b>→</b><div><strong>Process</strong><span>Select June records, exclude invalid rows, group and total</span></div><b>→</b><div><strong>Output</strong><span>Programme summary table</span></div></div>
      <p>The same task can be described at different levels. “Monthly records → prepare report → monthly report” communicates the overall purpose. A detailed version reveals the individual checks, transformations and outputs needed for implementation.</p>`
    },
    {
      title: "Feedback and human review",
      html: `<p>Real processes are not always straight lines. Automated checks may identify an uncertain category, send the record to a person for review, receive a corrected or confirmed value and then continue processing.</p>
      <p>The IPO model remains a useful starting point even when storage, feedback, human review or communication with other systems makes the complete process more complicated.</p>`
    },
    {
      title: "The CIPO model: add the context",
      html: `<p><strong>CIPO</strong> adds <strong>context</strong> to input, process and output. The model was developed for analysing educational systems, where rules, resources and expectations surrounding a process influence what enters it, how it operates and how its outputs are judged <a class="citation" href="https://doi.org/10.1080/0924345900010106" target="_blank" rel="noreferrer">(Scheerens, 1990)</a>. Here we adapt that idea to scripting.</p>
      <p>For a room-capacity warning system, the context includes fire-safety rules, the room's approved use, who is responsible for acting on a warning and whether the recorded participant count is trustworthy. Context does not simply become another data column. It explains why the rules and outputs matter.</p>
      <figure class="cipo-figure">
        <div class="cipo-model" role="img" aria-label="CIPO model for a room-capacity warning system. A context panel containing safety regulation, room use, responsibility and data reliability points to all three stages. Input contains recorded participants and permitted capacity. Process validates and compares the values. Output reports within capacity, warning or human review.">
          <div class="cipo-context-panel">
            <span class="cipo-letter">C</span>
            <div><b>Context</b><small>The surrounding conditions that shape the inputs, rules and meaning of the output</small></div>
            <ul><li>Safety regulation</li><li>Approved room use</li><li>Responsibility for action</li><li>Reliability of the records</li></ul>
          </div>
          <div class="cipo-influence" aria-hidden="true"><span>Context influences</span><i>↓</i><i>↓</i><i>↓</i></div>
          <div class="cipo-core">
            <div class="cipo-stage input"><span class="cipo-letter">I</span><div><b>Input</b><small>Recorded participants<br>Permitted capacity</small></div></div>
            <i class="cipo-arrow" aria-hidden="true">→</i>
            <div class="cipo-stage process"><span class="cipo-letter">P</span><div><b>Process</b><small>Validate the values<br>Compare count with capacity</small></div></div>
            <i class="cipo-arrow" aria-hidden="true">→</i>
            <div class="cipo-stage output"><span class="cipo-letter">O</span><div><b>Output</b><small>Within capacity<br>Warning or human review</small></div></div>
          </div>
          <div class="cipo-feedback"><span aria-hidden="true">↺</span> The output is interpreted within its context and can lead to revised rules, records or responsibilities.</div>
        </div>
        <figcaption><strong>Figure:</strong> CIPO model adapted to a scripting-course room-capacity case. Unlike a simple IPO chain, the context explicitly influences the input, process and output. The layout is inspired by the model described in <a href="https://en.wikipedia.org/wiki/The_CIPO-model" target="_blank" rel="noreferrer">The CIPO-model ↗</a>.</figcaption>
      </figure>`
    }
  ],
  "1.3": [
    {
      title: "Why large tasks are difficult",
      html: `<p>“Prepare the monthly data report” sounds like one task, but it can involve identifying the correct file, preserving the original data, inspecting columns, checking the reporting period, finding missing values, resolving categories, calculating summaries, creating visualisations and communicating the result.</p>
      <p>Trying to solve everything at once makes the work difficult to explain, test and later implement.</p>`
    },
    {
      title: "Decomposition",
      html: `<p><strong>Decomposition</strong> means breaking a complex problem into smaller and more manageable parts. A smaller task is usually easier to understand, describe, assign, test, improve, reuse and eventually translate into code.</p>
      <p>Begin with the intended outcome, then identify the major components required to produce it.</p>`
    },
    {
      title: "Build a task hierarchy",
      html: `<p>A task hierarchy places the overall goal at the top and divides it into major tasks underneath. Any major task can then be expanded into more specific subtasks. This keeps the overall structure visible without placing every detail at the same level.</p>
      <p>Task-model notations such as ConcurTaskTrees use a hierarchical structure to represent the activities needed to reach a goal without becoming distracted by low-level interface details <a class="citation" href="https://doi.org/10.1007/978-0-387-35175-9_58" target="_blank" rel="noreferrer">(Paternò et al., 1997)</a>. The diagram below uses a simpler course notation inspired by that principle.</p>`
    },
    {
      title: "Use action-based task names",
      html: `<p>Names such as file, data, errors and chart do not reveal the expected work. Use actions such as receive the file, inspect the columns, identify missing values, calculate monthly totals, create a bar chart and save the report.</p>
      <p>Action-based names make responsibilities and expected results easier to see.</p>`
    },
    {
      title: "Choose the right level of detail",
      html: `<p>“Clean the data, analyse the data, make the report” is too broad because it still hides most decisions. Instructions such as moving the mouse and clicking a folder icon are too detailed for an initial model of the data task.</p>
      <p>The appropriate level depends on purpose. For this section, a useful subtask should have a recognisable outcome and should help explain the structure of the complete process.</p>`
    },
    {
      title: "Decomposition, sequence and dependencies",
      html: `<p>Decomposition asks which smaller tasks exist. Sequencing asks in which order they should occur. These are related but not identical.</p>
      <p>A dependency exists when one task requires the result of another. Creating a chart depends on a summary, and calculating a reliable summary depends on validated records. Recognising dependencies prevents impossible or unreliable workflows.</p>`
    },
    {
      title: "Define the result of each subtask",
      html: `<p>Checking required columns should produce a confirmation or a list of missing columns. Identifying invalid counts should produce a list of affected records. Calculating programme totals should produce a summary table. Documenting unresolved issues should produce an issue log.</p>
      <p>A recognisable result makes each component easier to test and connect to the next part of the workflow.</p>`
    }
  ],
  "1.4": [
    {
      title: "People fill in missing information",
      html: `<p>A colleague may understand “check the file and fix the obvious problems” because they know the organisation, the usual file, expected columns, common errors and permitted corrections. A computer does not automatically share that background.</p>
      <p>Words such as correct, normal, recent, large, suspicious, appropriate, relevant, clean and complete hide decisions. To use them computationally, they must be defined or connected to a procedure.</p>
      <p>The same concern applies when giving instructions to a large language model. An LLM may produce a plausible interpretation of words such as “recent”, “clean” or “appropriate”, but that interpretation may not match yours. State the relevant context, define important categories and thresholds, identify the desired output and provide an example when the distinction is difficult to express. Clear and specific prompts reduce ambiguity, but the result must still be checked rather than treated as automatically correct <a class="citation" href="https://help.openai.com/en/articles/10032626-prompt-engineering-best--practices-for-chatgpt" target="_blank" rel="noreferrer">(OpenAI, n.d.)</a>.</p>`
    },
    {
      title: "Precision does not mean complicated language",
      html: `<p>“Find bad participant counts” is brief but unclear. “Identify every record where the participant count is missing, non-numeric, not a whole number or lower than zero” is longer, but it can be followed consistently because the hidden judgement has been replaced with stated conditions.</p>`
    },
    {
      title: "Characteristics of useful instructions",
      html: `<p>Computational instructions should normally be ordered, specific, unambiguous, finite, executable, testable and prepared for variation.</p>
      <ul class="chapter-list"><li><strong>Ordered:</strong> check columns before validating values.</li><li><strong>Specific:</strong> name the field and condition being checked.</li><li><strong>Finite:</strong> state when the work stops.</li><li><strong>Executable:</strong> require only information and actions that are actually available.</li><li><strong>Testable:</strong> define a result that can be checked.</li><li><strong>Prepared for variation:</strong> explain what happens when an expected condition is not met.</li></ul>`
    },
    {
      title: "Sequence, decisions and repetition",
      html: `<p>Many algorithms can first be described through three structures. <strong>Sequence</strong> places actions in an order. A <strong>decision</strong> selects an action according to a condition. <strong>Repetition</strong> applies an action to several items or continues until a stopping condition is met.</p>
      <p>These structures will later be represented through flowcharts and implemented in Python.</p>`
    },
    {
      title: "From a vague request to structured instructions",
      html: `<p>“Clean the monthly CSV file” does not define what counts as a problem, which changes are allowed, what to do with uncertainty or which outputs should be produced.</p>
      <p>A structured version identifies the required columns, stops and reports when they are missing, checks every row against documented rules, applies only approved corrections, preserves blank values when they are unknown, stores unresolved problems in an issue log and never overwrites the source file.</p>`
    },
    {
      title: "Watch: from an algorithm to pseudocode",
      html: `<p>This video introduces pseudocode as a readable way of expressing the important logic of a process before using the exact syntax of a programming language.</p>
      <figure class="video-figure">
        <div class="video-frame"><iframe src="https://www.youtube-nocookie.com/embed/xzN6rrZGsFQ" title="What is Pseudocode? An Introduction by Access 2 Learn" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
        <a class="video-file-fallback" href="https://www.youtube.com/watch?v=xzN6rrZGsFQ" target="_blank" rel="noreferrer" aria-label="Play What is Pseudocode? An Introduction on YouTube">
          <img src="https://i.ytimg.com/vi/xzN6rrZGsFQ/hqdefault.jpg" alt="" />
          <span><b>▶ Play video on YouTube</b><small>The direct link is used when the tutorial is opened as a local file.</small></span>
        </a>
        <figcaption><strong>Video:</strong> <em>What is Pseudocode? An Introduction</em> by Access 2 Learn. As you watch, look for the purpose of pseudocode and how it represents an algorithm. <a href="https://www.youtube.com/watch?v=xzN6rrZGsFQ" target="_blank" rel="noreferrer">Open directly on YouTube ↗</a></figcaption>
      </figure>`
    },
    {
      title: "Pseudocode focuses on logic",
      html: `<p><strong>Pseudocode</strong> is a structured description of an algorithm that resembles programming logic but does not follow the strict syntax of a particular programming language.</p>
      <div class="pseudo-example">START<br><br>IF required columns are missing<br>&nbsp;&nbsp;REPORT the missing columns<br>&nbsp;&nbsp;STOP<br>END IF<br><br>FOR EACH record<br>&nbsp;&nbsp;CHECK the participant count<br>&nbsp;&nbsp;IF the count is invalid<br>&nbsp;&nbsp;&nbsp;&nbsp;ADD the record to the issue log<br>&nbsp;&nbsp;END IF<br>END FOR<br><br>SAVE results<br><br>END</div>
      <p>There is no single universal pseudocode syntax. Clarity and consistency are more important than copying one format. The aim is to make the proposed solution understandable before translating it into executable code <a class="citation" href="https://books.trinket.io/pfe/01-intro.html" target="_blank" rel="noreferrer">(Severance, 2016)</a>.</p>`
    }
  ],
  "1.5": [
    {
      title: "Assumptions become sources of error",
      html: `<p>An <strong>assumption</strong> is something treated as true even though it has not been stated or verified. “Add all participant counts” assumes that every row contains a count, each count is numeric, none is negative, each activity appears only once and the file covers the intended reporting period.</p>
      <p>Familiar work can make assumptions invisible. Formalising or automating the task exposes the consequences when those assumptions are false.</p>`
    },
    {
      title: "Missing steps make a process fragile",
      html: `<p>“Open the CSV, calculate totals and create a chart” omits several necessary actions. The correct file must be identified, the source preserved, required columns checked, missing counts handled, possible duplicates investigated, reporting dates confirmed, calculations verified and outputs saved with clear labels.</p>
      <p>The process may work when everything is perfect, but it is not prepared for real data.</p>`
    },
    {
      title: "The happy path is not enough",
      html: `<p>The <strong>happy path</strong> is the version of a process where the file exists, columns are present, formats are correct, numbers are valid and outputs can be saved. It is useful for describing the expected flow, but reliable processes must also define what happens when reality differs.</p>`
    },
    {
      title: "Edge cases are unusual, not automatically wrong",
      html: `<p>An edge case might be an empty file, a file containing only headings, zero participants, an unusually large count, two records sharing an identifier, a date at a month boundary, a new programme name, text in a numeric field or private information inside notes.</p>
      <p>Zero participants may be valid for a cancelled activity. A new programme may be legitimate. The process must distinguish between unusual and invalid values.</p>`
    },
    {
      title: "Ask systematic questions",
      html: `<p>Ask who created the input, how the correct file is identified, which columns and formats are required, who defined the categories and whether new ones can appear. Ask what blanks mean, whether replacement is permitted, what counts as a duplicate, who uses the output, whether it can be overwritten and what happens when processing fails.</p>
      <p>These questions convert hidden expectations into visible requirements. Requirements work connects real-world goals, functions and constraints to a specification of how a system should behave <a class="citation" href="https://doi.org/10.1145/267580.267581" target="_blank" rel="noreferrer">(Zave, 1997)</a>.</p>`
    },
    {
      title: "Detection is not the same as judgement",
      html: `<p>“Remove duplicates” hides several decisions. Repeated identifiers can be detected automatically, but the rows may contain conflicting information or represent legitimate repeated activities.</p>
      <p>A safer procedure records repeated identifiers, marks identical later occurrences as probable duplicates, sends conflicts for human review, logs every decision and preserves the original source.</p>`
    },
    {
      title: "Assumptions are organisational and social",
      html: `<p>Measuring programme success only through attendance assumes that attendance represents success, larger programmes are preferable, participant experience matters less and access barriers do not explain lower numbers.</p>
      <p>The calculation may be arithmetically correct while the interpretation remains incomplete. Identifying assumptions is therefore both technical preparation and critical examination of how organisational values become rules <a class="citation" href="https://doi.org/10.7551/mitpress/9780262525374.003.0009" target="_blank" rel="noreferrer">(Gillespie, 2014)</a>.</p>`
    },
    {
      title: "Planning is already debugging",
      html: `<p>Debugging means systematically identifying why a process does not produce its intended result and correcting the problem. It does not begin only when Python displays an error.</p>
      <p>An unclear problem, missing instruction, incorrect task order, poorly defined category or ignored edge case can produce a logic failure even when the later Python syntax is valid. Testing and revision therefore belong to the complete problem-solving process, not only to the final lines of code <a class="citation" href="https://books.trinket.io/pfe/01-intro.html" target="_blank" rel="noreferrer">(Severance, 2016)</a>.</p>`
    }
  ],
  "1.6": [
    {
      title: "The CivicConnect case",
      html: `<p>CivicConnect is a fictional organisation coordinating community programmes through several local centres. Each month, the centres submit participation information that is combined into one CSV file.</p>
      <p>Employees currently make different decisions about missing values, spelling variations and repeated records. CivicConnect may later use a Python script, but it first needs a transparent description of the task.</p>`
    },
    {
      title: "What the monthly file contains",
      html: `<div class="definition-table"><div><strong>record_id</strong><span>Unique record identifier</span></div><div><strong>activity_date</strong><span>Date of the activity</span></div><div><strong>centre</strong><span>Community-centre name</span></div><div><strong>programme</strong><span>Type of programme</span></div><div><strong>participants</strong><span>Participant count</span></div><div><strong>duration_minutes</strong><span>Duration of the activity</span></div><div><strong>satisfaction_score</strong><span>Optional score from 1 to 5</span></div><div><strong>notes</strong><span>Optional contextual notes</span></div></div>`
    },
    {
      title: "The required process",
      html: `<p>The organisation wants a repeatable monthly process that checks the data, identifies possible quality problems, applies only permitted corrections, calculates participation summaries, creates a visualisation and preserves unresolved problems for human review. The work combines decomposition, abstraction, procedural thinking and testing <a class="citation" href="https://doi.org/10.1145/1118178.1118215" target="_blank" rel="noreferrer">(Wing, 2006)</a>.</p>
      <p>You will not open or process the dataset yet. This specification can later be connected to the predefined course dataset during Python, cleaning, analysis and visualisation.</p>`
    },
    {
      title: "A. Define the problem",
      html: `<p>Describe the current situation, the desired outcome and why computational assistance may help. Then state what a person must remain responsible for, including rules, uncertain records, interpretation and access to sensitive outputs. Remember that a computational procedure embeds choices about classification and relevance <a class="citation" href="https://doi.org/10.7551/mitpress/9780262525374.003.0009" target="_blank" rel="noreferrer">(Gillespie, 2014)</a>.</p>`
    },
    {
      title: "B–C. Map the task",
      html: `<p>Create an IPO description covering the monthly file, reporting period, approved categories, validation rules, checks, corrections, summaries and outputs. Then build a task tree containing six to ten major tasks and expand one branch into at least four smaller tasks.</p>`
    },
    {
      title: "D. Write the process instructions",
      html: `<p>Write eight to fifteen ordered instructions using structured plain language or pseudocode. Explain how the correct input is identified, what is checked first, at least one decision, at least one repeated action, what happens to unresolved records, which outputs are saved and where the process stops.</p>`
    },
    {
      title: "E–F. Challenge and test the specification",
      html: `<p>Identify at least five assumptions, five edge cases and two privacy or ethical considerations. Then define at least four testable success criteria.</p>
      <p>A strong specification preserves the source, traces every automatic correction to an approved rule, logs unresolved records, reproduces summary totals, keeps the chart consistent with the summary and prevents sensitive notes from appearing in public outputs.</p>`
    }
  ]
};

const foundationVisuals = {
  "1.1": `<figure class="concept-figure process-journey">
    <div class="process-journey-diagram" role="img" aria-label="An iterative programming process moving from a real-world situation to problem definition, solution plan, code, testing and a working program. A revision arrow returns from testing to the earlier stages.">
      <div class="journey-step"><span>1</span><strong>Real-world situation</strong><small>Understand the people, setting and need</small></div>
      <b>→</b>
      <div class="journey-step"><span>2</span><strong>Define the problem</strong><small>Goal, inputs, rules, limits and outputs</small></div>
      <b>→</b>
      <div class="journey-step"><span>3</span><strong>Plan the solution</strong><small>Tasks, instructions and test criteria</small></div>
      <b>→</b>
      <div class="journey-step"><span>4</span><strong>Write code</strong><small>Express the planned procedure</small></div>
      <b>→</b>
      <div class="journey-step"><span>5</span><strong>Test and revise</strong><small>Compare the actual and intended results</small></div>
      <div class="revision-loop">↶ Problems can send us back to redefine an earlier decision</div>
    </div>
    <figcaption><strong>Figure:</strong> From a real-world situation to a tested program. The process is iterative because testing can reveal problems in the definition, assumptions or plan.</figcaption>
  </figure>`,
  "1.3": `<figure class="concept-figure task-tree-figure">
    <div class="task-tree-diagram" role="img" aria-label="A task tree for preparing a monthly report. The root divides into acquire data, preserve source, validate records, summarise data, create visualisation and save outputs. Validate records is expanded into checking columns, dates, missing values and participant counts.">
      <div class="tree-root">Prepare a reliable monthly report</div>
      <div class="tree-trunk" aria-hidden="true"></div>
      <div class="tree-branches">
        <div class="tree-node">Acquire data</div>
        <div class="tree-node">Preserve source</div>
        <div class="tree-node expanded">Validate records</div>
        <div class="tree-node">Summarise data</div>
        <div class="tree-node">Create visualisation</div>
        <div class="tree-node">Save outputs</div>
      </div>
      <div class="tree-subtasks">
        <span>Check required columns</span>
        <span>Check reporting dates</span>
        <span>Identify missing values</span>
        <span>Check participant counts</span>
      </div>
    </div>
    <figcaption><strong>Figure:</strong> Expandable decomposition tree. <strong>Alt text:</strong> A task tree for preparing a monthly report, with the Validate records branch expanded to reveal its subtasks. The visual is adapted to the CivicConnect case and informed by hierarchical task modelling <a href="https://www.w3.org/2012/02/ctt/" target="_blank" rel="noreferrer">(Paternò et al., 2012)</a>.</figcaption>
  </figure>`
};

const foundationReferences = {
  "1.1": [
    `Gillespie, T. (2014). The relevance of algorithms. In T. Gillespie, P. J. Boczkowski, & K. A. Foot (Eds.), <em>Media technologies: Essays on communication, materiality, and society</em> (pp. 167–194). MIT Press. <a href="https://doi.org/10.7551/mitpress/9780262525374.003.0009" target="_blank" rel="noreferrer">https://doi.org/10.7551/mitpress/9780262525374.003.0009</a>`,
    `Severance, C. R. (2016). <em>Python for everybody: Exploring data using Python 3</em>. Charles Severance. <a href="https://www.py4e.com/book" target="_blank" rel="noreferrer">https://www.py4e.com/book</a>`,
    `Wing, J. M. (2006). Computational thinking. <em>Communications of the ACM, 49</em>(3), 33–35. <a href="https://doi.org/10.1145/1118178.1118215" target="_blank" rel="noreferrer">https://doi.org/10.1145/1118178.1118215</a>`
  ],
  "1.2": [
    `Scheerens, J. (1990). School effectiveness research and the development of process indicators of school functioning. <em>School Effectiveness and School Improvement, 1</em>(1), 61–80. <a href="https://doi.org/10.1080/0924345900010106" target="_blank" rel="noreferrer">https://doi.org/10.1080/0924345900010106</a>`,
    `Wikipedia contributors. (n.d.). The CIPO-model. In <em>Wikipedia</em>. Retrieved July 31, 2026, from <a href="https://en.wikipedia.org/wiki/The_CIPO-model" target="_blank" rel="noreferrer">https://en.wikipedia.org/wiki/The_CIPO-model</a>`
  ],
  "1.3": [
    `Paternò, F., Mancini, C., & Meniconi, S. (1997). ConcurTaskTrees: A diagrammatic notation for specifying task models. In S. Howard, J. Hammond, & G. Lindgaard (Eds.), <em>Human-computer interaction: INTERACT '97</em> (pp. 362–369). Springer. <a href="https://doi.org/10.1007/978-0-387-35175-9_58" target="_blank" rel="noreferrer">https://doi.org/10.1007/978-0-387-35175-9_58</a>`,
    `Paternò, F., Santoro, C., & Spano, L. D. (2012). <em>Concur Task Trees (CTT)</em>. World Wide Web Consortium. <a href="https://www.w3.org/2012/02/ctt/" target="_blank" rel="noreferrer">https://www.w3.org/2012/02/ctt/</a>`
  ],
  "1.4": [
    `OpenAI. (n.d.). <em>Prompt engineering best practices for ChatGPT</em>. OpenAI Help Center. Retrieved July 31, 2026, from <a href="https://help.openai.com/en/articles/10032626-prompt-engineering-best--practices-for-chatgpt" target="_blank" rel="noreferrer">https://help.openai.com/en/articles/10032626-prompt-engineering-best--practices-for-chatgpt</a>`,
    `Severance, C. R. (2016). <em>Python for everybody: Exploring data using Python 3</em>. Charles Severance. <a href="https://www.py4e.com/book" target="_blank" rel="noreferrer">https://www.py4e.com/book</a>`
  ],
  "1.5": [
    `Gillespie, T. (2014). The relevance of algorithms. In T. Gillespie, P. J. Boczkowski, & K. A. Foot (Eds.), <em>Media technologies: Essays on communication, materiality, and society</em> (pp. 167–194). MIT Press. <a href="https://doi.org/10.7551/mitpress/9780262525374.003.0009" target="_blank" rel="noreferrer">https://doi.org/10.7551/mitpress/9780262525374.003.0009</a>`,
    `Severance, C. R. (2016). <em>Python for everybody: Exploring data using Python 3</em>. Charles Severance. <a href="https://www.py4e.com/book" target="_blank" rel="noreferrer">https://www.py4e.com/book</a>`,
    `Zave, P. (1997). Classification of research efforts in requirements engineering. <em>ACM Computing Surveys, 29</em>(4), 315–321. <a href="https://doi.org/10.1145/267580.267581" target="_blank" rel="noreferrer">https://doi.org/10.1145/267580.267581</a>`
  ],
  "1.6": [
    `Gillespie, T. (2014). The relevance of algorithms. In T. Gillespie, P. J. Boczkowski, & K. A. Foot (Eds.), <em>Media technologies: Essays on communication, materiality, and society</em> (pp. 167–194). MIT Press. <a href="https://doi.org/10.7551/mitpress/9780262525374.003.0009" target="_blank" rel="noreferrer">https://doi.org/10.7551/mitpress/9780262525374.003.0009</a>`,
    `Wing, J. M. (2006). Computational thinking. <em>Communications of the ACM, 49</em>(3), 33–35. <a href="https://doi.org/10.1145/1118178.1118215" target="_blank" rel="noreferrer">https://doi.org/10.1145/1118178.1118215</a>`
  ]
};

const legacyFlowIlos = [
  "Explain the purpose of a flow diagram and recognise the course symbol set.",
  "Represent sequence, decisions and controlled repetition visually.",
  "Trace a flow diagram using specific test scenarios.",
  "Identify and repair notation and logic errors.",
  "Translate existing pseudocode into a flow diagram.",
  "Check pseudocode and a flow diagram for consistency.",
  "Design and test a complete flow diagram for the recurring monthly CSV task.",
  "Identify where a process still depends on human judgement."
];

const legacyFlowModules = [
  {
    id: "1.7",
    title: "Flow diagrams: symbols, meaning and syntax",
    time: "30 minutes",
    summary: "Learn the complete symbol set used in this course and the rules that make a diagram readable.",
    intro: "Section 1.1 described the monthly CSV task using structured instructions and pseudocode. We will now represent the same logic visually. A flow diagram lets us inspect actions, inputs, outputs and decisions before any Python is written.",
    task: "Classify Start, Receive monthly file, Does the file exist?, Open the file, Display an error, Calculate the average and End. Then draw the basic monthly-file path using the correct shapes.",
    problem: ["A diagram uses a diamond for ‘Open the file’, places ‘Does the file exist?’ in a rectangle and leaves the two decision branches unlabelled.", "Use a rectangle for the action, a diamond for the question, label both branches and make sure each path reaches another step or an end."],
    check: ["I can distinguish a process from a decision.", "I label every decision branch.", "I can explain why the basic monthly-file diagram uses each symbol."],
    reflection: "A diagram can make a process appear objective. Which organisational choices are still hidden inside labels such as valid, required or correct?",
    contribution: "You have created the first visual representation of the monthly CSV process.",
    model: "Start and End use the terminal symbol. Receive monthly file and Display an error are input/output. Open the file and Calculate the average are processes. Does the file exist? is a decision with labelled Yes and No branches."
  },
  {
    id: "1.8",
    title: "Sequence: doing things in the correct order",
    time: "20 minutes",
    summary: "Arrange actions according to their dependencies and recognise when a simple linear path is enough.",
    intro: "Sequence is the order in which instructions are carried out. Every action in a diagram can be correct by itself and the process can still fail if those actions appear in the wrong order.",
    task: "Arrange Receive file, Open file, Inspect columns, Check values, Calculate summary, Create visualisation and Save results. Draw arrows and write one reason for each dependency.",
    problem: ["The flowchart calculates a summary before the file has been opened and checked.", "Move the calculation after inspection and validation. A later step may only use information that an earlier step has made available."],
    check: ["I can identify the prerequisite for an action.", "I do not add a decision when there is only one path.", "I can explain why saving comes after producing the result."],
    reflection: "Who decides the order of work, and can that order make some checks or responsibilities less visible?",
    contribution: "You have built the basic linear path from receiving the file to saving the result.",
    model: "Receive file → Open file → Inspect columns → Check values → Calculate summary → Create visualisation → Save results. Each step depends on information or output produced by the previous step."
  },
  {
    id: "1.9",
    title: "Conditions: making a decision",
    time: "30 minutes",
    summary: "Write clear decision questions, label their branches and define what happens on each path.",
    intro: "A linear sequence assumes that the same steps are always possible. Real data work contains conditions. The process may continue when a file is present, stop when a required column is missing or send an uncertain record to a person for review.",
    task: "Add two decisions to the monthly process: Does the file exist? and Are all required columns present? Give each decision labelled paths and a valid outcome for both answers.",
    problem: ["The error branch reports missing columns and then continues as if the dataset were valid.", "End the process after the error report, or direct it to an explicit correction or human-review step before it can rejoin the normal path."],
    check: ["My decision is written as a clear question.", "Both branches are labelled and meaningful.", "An error path does not silently continue as a successful path."],
    reflection: "A Yes or No branch simplifies a situation. What important uncertainty might be lost when a judgement is forced into two categories?",
    contribution: "The monthly process can now respond differently when the file or required columns are missing.",
    model: "Does the file exist? Yes leads to Open file; No leads to Display missing-file error and End. Are all required columns present? Yes leads to checking records; No leads to Report missing columns and End or an explicit review path."
  },
  {
    id: "1.10",
    title: "Repetition: performing a step more than once",
    time: "30 minutes",
    summary: "Represent repeated checks using a controlled loop with progress and a visible exit.",
    intro: "A CSV file can contain hundreds of records. Drawing the same checking action hundreds of times would hide the logic. Repetition describes one set of instructions that is applied to each relevant item.",
    task: "Complete the row-checking loop. Identify the repeated action, the continuation question, what changes on each pass, the loop-back arrow and the exit path.",
    problem: ["The loop repeatedly checks the current row but never moves to the next row.", "Add an action that advances the current row. Then return to the continuation question so the process eventually reaches its No branch."],
    check: ["I can identify what repeats and what changes.", "My loop has a labelled exit path.", "I can explain why the loop will eventually stop."],
    reflection: "Repeating one rule across every record produces consistency, but when might uniform treatment be inappropriate?",
    contribution: "The process can now check every row without copying the same actions many times.",
    model: "Ask Are there more rows? If Yes, select the next row, check it, record any problem and return to the question. If No, continue to the summary. Selecting the next row creates progress; the No path provides the exit."
  },
  {
    id: "1.11",
    title: "Tracing a flow diagram manually",
    time: "25 minutes",
    summary: "Follow one path step by step and record how particular inputs affect decisions, actions and outputs.",
    intro: "A flowchart can look plausible without working for every input. Tracing means testing the diagram with a specific scenario and recording only the symbols that are actually executed.",
    task: "Complete one trace table for a valid monthly file and another for a file that exists but lacks a required column. Predict the final output in each scenario.",
    problem: ["The trace follows both the Yes and No branches of the same decision.", "Use the scenario information to select one branch. Record the decision outcome and follow only that path until a later step returns to the decision."],
    check: ["I keep the scenario input fixed while tracing.", "I record only executed steps.", "I can trace more than one pass through a loop."],
    reflection: "Which test scenarios are most likely to be forgotten, and whose experience might those missing tests represent?",
    contribution: "The developing monthly CSV flowchart has now been tested with both a normal and a problematic input.",
    model: "The valid file follows the Yes path at the file and column decisions, checks each row and reaches the summary. The problematic file follows Yes at file existence, No at required columns, reports the problem and follows the defined error or review path."
  },
  {
    id: "1.12",
    title: "Finding and repairing a logic error",
    time: "25 minutes",
    summary: "Trace a broken process, locate the exact mismatch and verify a controlled repair.",
    intro: "Correct shapes do not guarantee correct logic. Debugging a diagram means comparing intended and actual behaviour, finding where they diverge and checking that a focused repair solves the problem.",
    task: "Inspect the broken monthly diagram. Identify one notation error and one logic error, explain their effects, repair them and trace the corrected version.",
    problem: ["The diagram was made visually neater, but the missing loop exit and reversed branch still behave incorrectly.", "State the intended behaviour first, trace the existing logic, repair the specific fault and trace again. Layout is secondary to behaviour."],
    check: ["I can distinguish notation from logic.", "I identify the fault before changing the diagram.", "I verify a repair by tracing it."],
    reflection: "A technically correct repair may still implement an unsuitable rule. What should be checked beyond the diagram itself?",
    contribution: "The recurring flowchart has been debugged before it is compared with the existing pseudocode.",
    model: "A decision in the wrong shape is a notation error. Continuing after required columns are missing is a logic error. Repair the shape, direct the missing-column branch to a report and end or review step, then trace both scenarios again."
  },
  {
    id: "1.13",
    title: "Connecting existing pseudocode to a flow diagram",
    time: "30 minutes",
    summary: "Map prior pseudocode to flowchart symbols without changing the meaning of the algorithm.",
    intro: "Pseudocode and flowcharts are two representations of the same algorithm. You already used pseudocode in Section 1.1. The task now is to recognise how its sequence, decisions, repetition and outputs appear visually.",
    task: "Mark a pseudocode block using S for start/end, I/O for input/output, P for process, D for decision and R for repetition. Convert the missing-column block and row-checking loop into diagrams.",
    problem: ["Every line of pseudocode has been forced into exactly one shape, changing the branch and loop structure.", "Translate meaning rather than line count. One IF or FOR EACH structure usually requires a decision, two paths and several arrows."],
    check: ["I can map START, actions, IF, ELSE, repetition, output and END.", "I preserve both decision paths.", "I do not change the rule while changing its representation."],
    reflection: "When two representations appear to match, whose interpretation determines that they mean the same thing?",
    contribution: "The Section 1.1 pseudocode now provides the basis for the complete monthly CSV flowchart.",
    model: "START and END map to terminal symbols. RECEIVE and REPORT map to input/output. An action maps to a process. IF maps to a decision with both branches. FOR EACH becomes a continuation decision, repeated actions, a loop-back arrow and an exit."
  },
  {
    id: "1.14",
    title: "Checking pseudocode and flow diagrams against each other",
    time: "30 minutes",
    summary: "Use a consistency checklist to find missing actions, changed conditions and weakened error handling.",
    intro: "A flowchart can look convincing while omitting an instruction or changing a loop. Consistency checking asks whether the pseudocode, flowchart and original task specification still describe the same process.",
    task: "Compare the supplied pseudocode and flowchart. Mark each checklist item as consistent, inconsistent or unclear. Find one missing action and one changed condition, then repair the correct representation.",
    problem: ["The wording looks similar, so the pair is accepted without checking the error path or loop exit.", "Compare meaning systematically: actions, order, conditions, branches, repeated work, exit, inputs, outputs and assumptions."],
    check: ["Every action appears in both representations.", "Conditions and loop exits have the same meaning.", "I check the original specification before deciding what to repair."],
    reflection: "If the specification, pseudocode and flowchart disagree, which source should have authority, and who should decide?",
    contribution: "Differences between the existing pseudocode and developing flowchart have been identified and recorded.",
    model: "The missing-file branch must report an error and stop or enter review in both representations. The row-checking loop must process every row in both. Correct the representation that conflicts with the agreed Section 1.1 specification."
  },
  {
    id: "1.15",
    title: "Case activity: visualise and test the dataset-checking process",
    time: "45 minutes",
    summary: "Create, trace, compare and repair the complete flowchart for the existing CivicConnect monthly CSV task.",
    intro: "This is the final stage of the same CivicConnect case, not a new exercise. Reopen your Section 1.1 specification and pseudocode, then turn them into one tested visual process.",
    task: "Submit one complete flowchart, two trace tables, one pseudocode-flowchart consistency checklist, a short explanation of one repair and one identified human-judgement point.",
    problem: ["The final diagram silently adds new rules, automatically resolves uncertain records or produces a chart without validating the source.", "Return to the approved specification. Preserve the source, show validation and issue handling, add only labelled extensions and keep uncertain judgements visible."],
    check: ["My diagram contains a start, end, decisions, a controlled loop and valid paths.", "I tested a valid and problematic file.", "My pseudocode and diagram match the specification and retain human review."],
    reflection: "Which part of the monthly process is easiest to automate, and which part depends most strongly on organisational interpretation?",
    contribution: "You now have a tested visual specification that can guide later Python implementation.",
    model: "A complete solution receives and preserves the file, checks existence and required columns, loops through records, logs or routes problems, calculates summaries only after validation, creates and saves outputs, and includes an explicit human-review point. Alternative layouts are valid when their logic matches the specification."
  }
];

const legacyFlowChapters = {
  "1.7": [
    { title: "From written logic to visible logic", html: `<p>In Section 1.1, you worked out what the CivicConnect monthly process should do. A flow diagram does not replace that thinking. It gives the same logic a visual form, making it easier to inspect order, decisions, repeated work and possible endings.</p><p>A flowchart is mainly a communication and checking tool for people. It is valuable before coding because a missing branch or unclear stopping point is easier to discuss when it is visible.</p>` },
    { title: "The complete symbol set for this course", html: `<p>You need only a small, consistent set of symbols. Professional diagram systems contain more, but adding unfamiliar shapes would not improve this course process.</p><div class="symbol-guide" role="group" aria-label="Course flowchart symbol guide"><div><span class="mini-node start">Start</span><strong>Start or end</strong><p>Begins or finishes a path.</p></div><div><span class="mini-node io">Receive file</span><strong>Input or output</strong><p>Information enters or leaves.</p></div><div><span class="mini-node process">Open file</span><strong>Process</strong><p>An action or calculation.</p></div><div><span class="mini-node decision">File exists?</span><strong>Decision</strong><p>A question that creates paths.</p></div><div><span class="mini-arrow">→</span><strong>Arrow</strong><p>Shows which step happens next.</p></div></div>` },
    { title: "Construction rules", html: `<p>Every symbol and arrow should communicate how the process behaves. Use the following rules consistently.</p><ol class="chapter-list"><li>Begin with one clear starting point.</li><li>Write actions with verbs, such as <em>Open file</em>.</li><li>Write decisions as questions, such as <em>Does the file exist?</em></li><li>Label every decision branch, normally Yes and No.</li><li>Ensure every normal path ends or returns through a controlled loop.</li><li>Avoid crossing arrows and decorative shapes.</li><li>Keep the level of detail consistent.</li></ol><div class="syntax-compare"><div class="syntax-good"><strong>Correct</strong><span class="mini-node process">Open the file</span><span class="mini-node decision">Does the file exist?</span><small>Action in a rectangle, question in a diamond</small></div><div class="syntax-bad"><strong>Incorrect</strong><span class="mini-node decision">Open the file</span><span class="mini-node process">File existence</span><small>The shapes do not match the instruction types</small></div></div>` },
    { title: "Worked example: preparing tea", html: `<p>This first example is a pure sequence. There is no decision because every action follows the previous one.</p><div class="flow-diagram vertical" role="img" aria-label="Flowchart showing Start, add water, switch on kettle, place tea bag, pour hot water and End"><span class="flow-node start">Start</span><span class="flow-arrow">↓</span><span class="flow-node process">Add water</span><span class="flow-arrow">↓</span><span class="flow-node process">Switch on kettle</span><span class="flow-arrow">↓</span><span class="flow-node process">Place tea bag</span><span class="flow-arrow">↓</span><span class="flow-node process">Pour hot water</span><span class="flow-arrow">↓</span><span class="flow-node start">End</span></div>` },
    { title: "Worked example: the first monthly CSV diagram", html: `<p>The monthly process begins with the same simple structure. Receiving the file is an input, opening it is a process and displaying the dataset is an output.</p><div class="flow-diagram" role="img" aria-label="Basic CivicConnect flowchart from Start to receive monthly CSV, open file, display dataset and End"><span class="flow-node start">Start</span><span class="flow-arrow">→</span><span class="flow-node io">Receive monthly CSV</span><span class="flow-arrow">→</span><span class="flow-node process">Open file</span><span class="flow-arrow">→</span><span class="flow-node io">Display dataset</span><span class="flow-arrow">→</span><span class="flow-node start">End</span></div>` },
    { title: "Guided practice", html: `<p>For each statement in the activity below, first ask whether it begins or ends the process, moves information, performs an action or asks a question. Select the symbol only after deciding its purpose.</p><blockquote>A shape is not decoration. It tells the reader how the instruction behaves.</blockquote>` }
  ],
  "1.8": [
    { title: "Sequence and dependency", html: `<p>Sequence means the order of execution. An arrow states that one step happens before another. It does not merely connect boxes visually.</p><p>To find a valid order, ask what information or result an action requires. You cannot inspect columns before opening the file, and you cannot calculate a trustworthy summary before checking the data used in it.</p>` },
    { title: "Worked example: scrambled tea instructions", html: `<div class="sequence-compare"><div><strong>Scrambled</strong><span>Pour water</span><span>Switch on kettle</span><span>Add water</span><span>Place tea bag</span></div><div><strong>Corrected</strong><span>1. Add water</span><span>2. Switch on kettle</span><span>3. Place tea bag</span><span>4. Pour hot water</span></div></div><p>The corrected sequence respects physical prerequisites. The water must be in the kettle before it is heated.</p>` },
    { title: "Worked example: the monthly process", html: `<div class="flow-diagram sequence-wide" role="img" aria-label="Correct monthly CSV sequence from Receive to Save"><span class="flow-node io">Receive</span><span class="flow-arrow">→</span><span class="flow-node process">Open</span><span class="flow-arrow">→</span><span class="flow-node process">Inspect</span><span class="flow-arrow">→</span><span class="flow-node process">Check</span><span class="flow-arrow">→</span><span class="flow-node process">Summarise</span><span class="flow-arrow">→</span><span class="flow-node process">Visualise</span><span class="flow-arrow">→</span><span class="flow-node io">Save</span></div><p>There is no decision yet. Every arrow represents a dependency, not an optional route.</p>` },
    { title: "Guided ordering method", html: `<ol class="chapter-list"><li>Find the action that requires no earlier result.</li><li>Identify what that action produces.</li><li>Find the next action that needs that result.</li><li>Continue until every action has been placed.</li><li>Check whether any action uses information that has not yet been created.</li></ol>` }
  ],
  "1.9": [
    { title: "When the path depends on an answer", html: `<p>A condition is a statement that can be evaluated. In a flowchart, write it as a clear question inside a decision diamond. The outgoing arrows show what happens for each possible answer.</p><p><strong>Good:</strong> Does the file exist? <strong>Unclear:</strong> File existence. <strong>Not a decision:</strong> Open the file.</p>` },
    { title: "The anatomy of a decision", html: `<div class="decision-map" role="img" aria-label="Decision diagram asking Does the file exist, with Yes leading to Open file and No leading to Display error"><span class="flow-node decision">Does the file exist?</span><div class="branches"><div><b>Yes</b><span class="flow-arrow">↓</span><span class="flow-node process">Open file</span></div><div><b>No</b><span class="flow-arrow">↓</span><span class="flow-node io">Display error</span><span class="flow-arrow">↓</span><span class="flow-node start">End</span></div></div></div><p>Both branches are labelled. The No branch does not rejoin the normal process unless an explicit correction or review step makes continuation possible.</p>` },
    { title: "Worked example: required columns", html: `<div class="decision-map" role="img" aria-label="Decision diagram asking whether all required columns are present"><span class="flow-node decision">All required columns present?</span><div class="branches"><div><b>Yes</b><span class="flow-arrow">↓</span><span class="flow-node process">Check records</span></div><div><b>No</b><span class="flow-arrow">↓</span><span class="flow-node io">Report missing columns</span><span class="flow-arrow">↓</span><span class="flow-node start">End</span></div></div></div>` },
    { title: "Building a defensible branch", html: `<ol class="chapter-list"><li>Write one question that can be answered from the available information.</li><li>Label every outgoing branch.</li><li>Give each branch an appropriate action or end.</li><li>Reconnect paths only when both have produced a state suitable for the next step.</li><li>Check that an error path cannot masquerade as normal completion.</li></ol>` }
  ],
  "1.10": [
    { title: "Why repetition needs control", html: `<p>Repetition is not simply an arrow pointing backwards. A useful loop identifies what repeats, what changes, when the process returns and how it exits. Without progress or an exit condition, the same action may continue forever.</p>` },
    { title: "The anatomy of a row-checking loop", html: `<div class="loop-map" role="img" aria-label="Controlled loop that checks the next row while more rows remain, then exits to calculate the summary"><span class="flow-node decision">More rows?</span><div class="loop-path yes"><b>Yes</b><span class="flow-arrow">→</span><span class="flow-node process">Select next row</span><span class="flow-arrow">→</span><span class="flow-node process">Check row and log issue</span><span class="loop-back">↩ return to question</span></div><div class="loop-path no"><b>No</b><span class="flow-arrow">→</span><span class="flow-node process">Calculate summary</span></div></div>` },
    { title: "First, second and final pass", html: `<div class="iteration-grid"><div><strong>Pass 1</strong><p>Select row 1, check it and advance.</p></div><div><strong>Pass 2</strong><p>Select row 2, check it and advance.</p></div><div><strong>Final check</strong><p>No rows remain, so follow the exit path.</p></div></div>` },
    { title: "How to test whether a loop is finite", html: `<ol class="chapter-list"><li>Name the collection or condition controlling the repetition.</li><li>Identify what changes on every pass.</li><li>State the question checked before repeating.</li><li>Find the branch that leaves the loop.</li><li>Trace a small example through the first, next and final pass.</li></ol>` }
  ],
  "1.11": [
    { title: "Tracing is testing before coding", html: `<p>Tracing follows the diagram for one fixed scenario. Begin at Start, record each executed symbol, evaluate decisions using the supplied information and continue until the path reaches End. Do not follow a branch that the scenario did not select.</p>` },
    { title: "Trace table", html: `<div class="table-wrap"><table class="trace-table"><thead><tr><th>Step</th><th>Current symbol</th><th>Information</th><th>Action taken</th><th>Next step</th></tr></thead><tbody><tr><td>1</td><td>Start</td><td>Valid monthly file</td><td>Begin process</td><td>Receive file</td></tr><tr><td>2</td><td>File exists?</td><td>Yes</td><td>Follow Yes branch</td><td>Open file</td></tr><tr><td>3</td><td>Required columns?</td><td>Yes</td><td>Follow Yes branch</td><td>Check rows</td></tr><tr><td>4</td><td>More rows?</td><td>Yes</td><td>Check next row</td><td>Return to loop</td></tr></tbody></table></div><p>This partial table records only the path executed by the valid-file scenario.</p>` },
    { title: "Two tests of the same process", html: `<div class="scenario-grid"><div><strong>Scenario A: valid file</strong><p>The file exists, all required columns are present and selected record checks pass.</p></div><div><strong>Scenario B: problematic file</strong><p>The file exists, but one required column is missing.</p></div></div><p>These are not separate cases. They test different paths through one flowchart.</p>` },
    { title: "A reliable tracing routine", html: `<ol class="chapter-list"><li>Write the scenario information before starting.</li><li>Number the executed symbols in order.</li><li>Record the answer at every decision.</li><li>Record every loop pass separately.</li><li>Stop only when the path reaches an explicit end.</li><li>Compare the final output with the expected result.</li></ol>` }
  ],
  "1.12": [
    { title: "Notation errors and logic errors", html: `<p>A notation error uses the visual language incorrectly, for example placing a decision in a rectangle. A logic error changes what the process does, for example allowing a missing-column file to continue to the summary.</p><p>Both matter, but repairing appearance without repairing behaviour leaves the process incorrect.</p>` },
    { title: "The repair routine", html: `<ol class="chapter-list"><li>State the intended behaviour.</li><li>Trace the current diagram.</li><li>Find where actual behaviour differs.</li><li>Repair the relevant shape, branch or arrow.</li><li>Trace the corrected diagram.</li><li>Check it against the specification and pseudocode.</li></ol>` },
    { title: "Broken and repaired monthly logic", html: `<div class="repair-visual" role="img" aria-label="Broken flow continues to calculate summary after missing columns, repaired flow reports missing columns and ends"><div class="broken"><strong>Broken</strong><span class="flow-node decision">Columns present?</span><span class="branch-label">No ↓</span><span class="flow-node process">Calculate summary</span><small>The invalid file continues.</small></div><div class="fixed"><strong>Repaired</strong><span class="flow-node decision">Columns present?</span><span class="branch-label">No ↓</span><span class="flow-node io">Report missing columns</span><span class="flow-arrow">↓</span><span class="flow-node start">End</span></div></div>` },
    { title: "Common faults to search for", html: `<div class="definition-table"><div><strong>Dead end</strong><span>A branch leads nowhere.</span></div><div><strong>Unreachable step</strong><span>No possible path enters it.</span></div><div><strong>No progress</strong><span>A loop repeats without changing state.</span></div><div><strong>Wrong order</strong><span>An action occurs before its required input.</span></div><div><strong>Missing behaviour</strong><span>An agreed specification step is absent.</span></div><div><strong>Wrong outcome</strong><span>Actual output differs from expected output.</span></div></div>` }
  ],
  "1.13": [
    { title: "Two representations of one algorithm", html: `<p>Do not begin new pseudocode here. Reopen the pseudocode created in Section 1.1. The aim is to identify equivalent structures and preserve their meaning while changing representation.</p>` },
    { title: "Representation map", html: `<div class="table-wrap"><table class="mapping-table"><thead><tr><th>Existing pseudocode</th><th>Flowchart representation</th></tr></thead><tbody><tr><td>START / END</td><td>Terminal symbol</td></tr><tr><td>RECEIVE / OUTPUT</td><td>Input/output symbol</td></tr><tr><td>Action instruction</td><td>Process symbol</td></tr><tr><td>IF / ELSE</td><td>Decision and alternative branches</td></tr><tr><td>FOR EACH / REPEAT</td><td>Decision, repeated actions, loop back and exit</td></tr></tbody></table></div>` },
    { title: "Worked mapping: missing columns", html: `<div class="mapping-visual"><div class="pseudo-panel">1 IF required columns are missing<br>2 &nbsp; REPORT missing columns<br>3 &nbsp; STOP<br>4 END IF</div><div class="map-links"><span>1 → decision</span><span>2 → output</span><span>3 → end</span><span>False → continue</span></div><div class="decision-map compact"><span class="flow-node decision">Columns missing?</span><div class="branches"><div><b>Yes</b><span class="flow-node io">Report missing columns</span><span class="flow-node start">End</span></div><div><b>No</b><span class="flow-node process">Continue checks</span></div></div></div></div>` },
    { title: "Translation is not one line to one shape", html: `<p>An <code>IF</code> block needs a question, at least two possible paths and the actions on those paths. A <code>FOR EACH</code> block needs a continuation question, the repeated actions, a path back and an exit.</p><blockquote>Preserve the algorithm, not the number of lines.</blockquote>` }
  ],
  "1.14": [
    { title: "Consistency is about meaning", html: `<p>Similar wording is not enough. Both representations must use the same inputs, order, conditions, branches, repeated work, outputs, error handling and stopping conditions.</p>` },
    { title: "The consistency checklist", html: `<ol class="chapter-list two-column-list"><li>Every pseudocode action appears in the flowchart.</li><li>Every flowchart action appears in the pseudocode.</li><li>Actions occur in the same order.</li><li>Decision conditions have the same meaning.</li><li>Both branches perform the same work.</li><li>Loops repeat and stop under the same conditions.</li><li>Inputs and outputs match.</li><li>Errors are handled in the same way.</li><li>Both reach appropriate end points.</li><li>No unsupported assumption has been added.</li></ol>` },
    { title: "Worked mismatch: missing file", html: `<div class="consistency-pair"><div><strong>Pseudocode</strong><div class="pseudo-panel">IF file is missing<br>&nbsp; REPORT error<br>&nbsp; STOP<br>END IF</div></div><div><strong>Flowchart mismatch</strong><p>No → Report error → Open file</p><small>The flowchart continues with a file that does not exist.</small></div></div><p>The correction must be based on the agreed task specification. Here, the missing-file path should end or move to an explicit recovery step.</p>` },
    { title: "Guided checking method", html: `<ol class="chapter-list"><li>Place the two representations side by side.</li><li>Number equivalent actions and structures.</li><li>Mark each checklist item consistent, inconsistent or unclear.</li><li>Return to the original specification when they disagree.</li><li>Repair one representation and repeat the comparison.</li></ol>` }
  ],
  "1.15": [
    { title: "Reuse your Section 1.1 work", html: `<p>Begin with your existing problem description, IPO model, decomposition, structured instructions, assumptions and pseudocode. Do not silently invent a new organisation, dataset or rule.</p><p>The final diagram should make the CivicConnect process testable before it is later implemented in Python.</p>` },
    { title: "Stage 1: annotate the existing pseudocode", html: `<p>Mark inputs, processes, decisions, outputs, repeated actions, stopping points and human-review points. This annotation becomes your diagram plan.</p>` },
    { title: "Stages 2 and 3: plan and draw", html: `<p>Select the appropriate symbol for every instruction. Your complete diagram must contain a clear start and end, inputs and outputs, processes, labelled decisions, at least one controlled loop, a valid error path, a valid completion path and no unreachable steps.</p>` },
    { title: "Stages 4 and 5: trace two scenarios", html: `<div class="scenario-grid"><div><strong>Scenario A</strong><p>A valid monthly file completes the entire process.</p></div><div><strong>Scenario B</strong><p>A problematic monthly file follows an error, correction or review path.</p></div></div><p>Complete a trace table for each. Record the decision result and every loop pass.</p>` },
    { title: "Stages 6 and 7: compare and repair", html: `<p>Complete the Section 1.14 consistency checklist. Repair missing, inconsistent, ambiguous or unreachable steps. Write a short explanation of one correction and show how tracing exposed it.</p>` },
    { title: "Stage 8: make judgement visible", html: `<p>Identify one action a computer could perform through explicit rules and one action that still requires contextual interpretation. A human-review step should be visible in the process rather than hidden in a broad label such as <em>resolve issue</em>.</p>` },
    { title: "Your deliverables", html: `<ol class="chapter-list"><li>One complete flowchart.</li><li>Two trace tables.</li><li>One pseudocode-flowchart consistency checklist.</li><li>A short explanation of one repair.</li><li>At least one identified human-judgement point.</li></ol><blockquote>The result is a tested visual specification, not a decorative diagram.</blockquote>` }
  ]
};

const preMergeFlowIlos = [
  "Explain why flowcharts and pseudocode are useful before coding.",
  "Use standard symbols to represent sequence, decisions and controlled repetition.",
  "Trace, test and repair a flowchart using normal, problem and boundary cases.",
  "Translate between a task description, pseudocode and a flowchart without changing the rules.",
  "Design a complete flowchart and matching pseudocode for a bounded data-processing case.",
  "Recognise common Python keywords and use selected keywords in Python-flavoured pseudocode.",
  "Identify assumptions, error paths and points that still require human judgement."
];

const preMergeFlowModules = [
  {
    id: "1.7",
    title: "Flowcharts: purpose, symbols and construction",
    time: "35 minutes",
    summary: "Understand what a flowchart communicates, use the core symbols and construct a readable path.",
    intro: "A flowchart turns a written process into visible logic. It helps people inspect what happens, in which order, where a choice is made and how a process ends before anyone writes Python.",
    task: "Classify these statements as start or end, input or output, process, or decision: Start; Receive monthly file; Open file; Does the file exist?; Calculate total; Display error; End. Draw a short path and add the missing No branch.",
    problem: ["A diamond is used for Open file, a rectangle is used for Does the file exist?, and the branches have no labels.", "Use the diamond only for a question, use the process rectangle for the action, label both branches and connect every path to another step or an end."],
    check: ["I can explain why a flowchart is useful.", "I can distinguish a process from a decision.", "Every decision branch in my diagram is labelled."],
    reflection: "Which organisational choices might be hidden inside apparently simple labels such as valid, required or correct?",
    contribution: "You have created the first visual path for the CivicConnect monthly file process.",
    model: "Start and End use terminal shapes. Receive monthly file and Display error are input or output. Open file and Calculate total are processes. Does the file exist? is a decision with labelled Yes and No branches."
  },
  {
    id: "1.8",
    title: "Sequence and decisions",
    time: "35 minutes",
    summary: "Order dependent actions, introduce testable questions and define what happens on every branch.",
    intro: "A useful flowchart combines a dependable sequence with decisions. Actions must appear after their prerequisites, while decisions should create explicit paths for different situations.",
    task: "Arrange Receive, Open, Inspect, Check, Summarise, Visualise and Save. Add decisions for Does the file exist? and Are the required columns present?, including a valid outcome for every answer.",
    problem: ["The process calculates a summary before checking the data, and the missing-column path quietly rejoins the successful path.", "Move the summary after validation. End the error path or direct it to explicit correction or human review before it can rejoin the successful path."],
    check: ["I can identify the prerequisite for each action.", "My decisions are written as questions.", "Both success and problem paths have defined destinations."],
    reflection: "What nuance can be lost when an uncertain situation is forced into a Yes or No decision?",
    contribution: "The CivicConnect flowchart now has a valid dependency order and visible success, error and review paths.",
    model: "Receive file → Does the file exist? Yes → Open and inspect file → Are required columns present? Yes → Check values → Summarise → Visualise → Save. Each No branch reports the issue and ends or enters an explicit review path."
  },
  {
    id: "1.9",
    title: "Repetition and controlled loops",
    time: "30 minutes",
    summary: "Represent repeated work with a continuation question, progress, a loop-back connection and an exit.",
    intro: "A CSV may contain hundreds of records. A loop expresses one set of instructions that is applied repeatedly, without drawing the same boxes hundreds of times.",
    task: "Complete the row-checking loop for CivicConnect. Mark the continuation question, repeated work, what changes on each pass, the loop-back arrow and the exit path.",
    problem: ["The loop checks the current row repeatedly but never moves forward.", "Select or advance to the next row during each pass. Return to the continuation question and keep a clearly labelled No exit."],
    check: ["I can identify what repeats and what changes.", "My loop has a visible exit.", "I can explain why the loop eventually stops."],
    reflection: "A repeated rule creates consistency. When could applying exactly the same rule to every record be inappropriate?",
    contribution: "The process can now validate every record while keeping progress and termination visible.",
    model: "Ask Are there more rows? If Yes, select the next row, check it, log any issue and return to the question. If No, continue to the summary. The next-row action creates progress; the No branch provides the exit."
  },
  {
    id: "1.10",
    title: "Tracing, testing and repairing flowcharts",
    time: "35 minutes",
    summary: "Test a diagram with concrete scenarios, distinguish notation from logic errors and verify a focused repair.",
    intro: "A neat flowchart can still fail. Tracing follows one scenario through the diagram exactly as drawn. It exposes missing branches, wrong outcomes, unreachable steps and loops that never stop.",
    task: "Trace the supplied process with a valid file, a file missing a required column and an empty file. Find one notation error and one logic error, repair both and repeat the affected trace.",
    problem: ["The diagram was made visually neater, but its reversed branch and missing loop exit still behave incorrectly.", "State the intended behaviour, trace the current path, repair the first mismatch, then trace the repaired path and one unaffected path."],
    check: ["I follow only the branch selected by the scenario.", "I can distinguish notation from logic.", "I test a repair instead of assuming it works."],
    reflection: "Which test cases are easiest to overlook, and whose experience might those missing cases represent?",
    contribution: "The CivicConnect diagram has now been tested with normal, problem and boundary cases.",
    model: "The valid file reaches the summary after all records are checked. The missing-column file reports the issue and follows the stated error or review path. The empty file reaches the loop decision but performs no row-checking pass. A shape error is notation; producing a summary after failed validation is a logic error."
  },
  {
    id: "1.11",
    title: "Case activity: flowchart and pseudocode",
    time: "60 minutes",
    summary: "Turn one complete data-processing case into matching representations, test them and keep human judgement visible.",
    intro: "This activity combines the full Section 1.2 method. You will move from a nine-part case description to a flowchart and pseudocode, then check whether both representations preserve the same rules.",
    task: "Using the nine-line CivicConnect case on this page, produce one complete flowchart and matching pseudocode. Trace a valid file and a problematic file, complete the consistency checklist, explain one repair and identify one point that needs human judgement.",
    problem: ["The diagram and pseudocode look similar, but one silently invents missing values or permits an invalid file to reach the summary.", "Compare inputs, actions, conditions, branches, repeated work, exits, outputs and review points against the original case. Repair the representation that changed the agreed rule."],
    check: ["Both representations preserve all nine case requirements.", "I tested at least two paths and the loop exit.", "Uncertain records reach an explicit human-review point."],
    reflection: "Which parts of this process are suitable for automation, and which depend on organisational interpretation?",
    contribution: "You now have a tested visual and written specification for later Python implementation.",
    model: "A complete answer preserves the source, checks the file and columns, loops through records, logs uncertain values, creates summaries only from validated data, saves every required output and includes human approval. Alternative layouts and wording are valid when both representations preserve the nine stated rules."
  },
  {
    id: "1.12",
    title: "Pseudocode with Python Keywords",
    time: "45 minutes",
    summary: "Recognise Python's reserved words and use a small, purposeful selection to make pseudocode resemble later code.",
    intro: "We are now moving towards coding. Python keywords give the language its structure. Using a few of them in pseudocode makes the later transition to executable Python easier, while the instructions can still remain readable and unfinished.",
    task: "For the public-consultation case on this page, identify the steps and write Python-flavoured pseudocode using at least for, in, if, elif, else, one of and/or/not, continue and return. Highlight each keyword and explain its role.",
    problem: ["The pseudocode is presented as executable Python, or ordinary names such as print and response are described as keywords.", "Label the result as pseudocode. Use real keywords for structure, keep plain-language actions where code is not yet needed, and check unfamiliar words against the keyword reference."],
    check: ["I can explain what a Python keyword is.", "I can distinguish a keyword from a function or variable name.", "I can use selected keywords to structure readable pseudocode."],
    reflection: "Does making pseudocode look more like Python improve clarity for everyone, or can it make one technical language appear to be the only possible way to describe a process?",
    contribution: "The course process now has a bridge from human-readable logic to the Python structures used in later sections.",
    model: "A suitable answer loops through each response; continues when the topic is missing; uses if with and for urgent records containing personal data; uses elif for other urgent records; uses else for standard records; and returns the completed queue. The exact plain-language action phrases may differ."
  }
];

const preMergeFlowChapters = {
  "1.7": [
    { title: "Why make a flowchart?", html: `<p>A flowchart shows the steps of a process in sequence. Its shapes distinguish actions, inputs, outputs and questions, while arrows show what happens next. It is useful for explaining a proposed process, finding omissions and discussing alternative paths before implementation. A flowchart is therefore a thinking and communication tool, not simply a decorative picture (<a href="https://www.visual-paradigm.com/tutorials/flowchart-tutorial/" target="_blank" rel="noreferrer">Visual Paradigm, n.d.</a>).</p><p>Everyday and recipe flowcharts also demonstrate that a process can be understandable without programming. Explore the examples by <a href="https://creately.com/blog/culture/5-funny-flowcharts/" target="_blank" rel="noreferrer">Athuraliya (2024)</a> and <a href="https://www.behance.net/gallery/95101957/Desserts-recipes-in-infographics" target="_blank" rel="noreferrer">Kruzhinskaia (2020)</a> for visual inspiration, but keep your course diagrams simpler and more formal.</p>` },
    { title: "The course symbol set", html: `<div class="symbol-guide" role="group" aria-label="Five flowchart symbols used in this course"><div><span class="mini-node start">Start</span><strong>Start or end</strong><p>Begins or finishes a path.</p></div><div><span class="mini-node io">Receive file</span><strong>Input or output</strong><p>Information enters or leaves.</p></div><div><span class="mini-node process">Open file</span><strong>Process</strong><p>An action or calculation.</p></div><div><span class="mini-node decision">File exists?</span><strong>Decision</strong><p>A question that creates paths.</p></div><div><span class="mini-arrow">→</span><strong>Arrow</strong><p>Shows direction and order.</p></div></div><p>Professional tools offer many additional symbols. These five are sufficient for the processes in this course and make diagrams easier to compare.</p>` },
    { title: "Construct a readable path", html: `<ol class="chapter-list"><li>Begin with one clear start.</li><li>Place one action or question in each shape.</li><li>Write decisions as testable questions.</li><li>Label every branch, commonly Yes and No.</li><li>Connect every path to another step or a clear end.</li><li>Keep the main direction consistent, usually top to bottom or left to right.</li></ol><div class="flow-diagram" aria-label="Incomplete first flowchart path"><span class="flow-node start">Start</span><span class="flow-arrow">→</span><span class="flow-node io">Receive file</span><span class="flow-arrow">→</span><span class="flow-node decision">File exists?</span><span class="flow-arrow">Yes →</span><span class="flow-node process">Open file</span></div><p>The No branch is deliberately missing. Complete it in Activity 1.7.</p>` }
  ],
  "1.8": [
    { title: "Sequence expresses dependency", html: `<p>Sequence is not just a row of boxes. It states which information must exist before a later action can happen. A chart cannot be created before the relevant values are available, and a result should not be circulated before validation. Ask: <strong>What must already be true before this action can happen?</strong></p><div class="flow-diagram sequence-wide" aria-label="A valid linear data-processing sequence"><span class="flow-node io">Receive</span><span class="flow-arrow">→</span><span class="flow-node process">Open</span><span class="flow-arrow">→</span><span class="flow-node process">Inspect</span><span class="flow-arrow">→</span><span class="flow-node process">Check</span><span class="flow-arrow">→</span><span class="flow-node process">Summarise</span><span class="flow-arrow">→</span><span class="flow-node io">Save</span></div>` },
    { title: "Decisions create alternative paths", html: `<p>A condition asks a question about the current situation. Its answer selects the next path. Later, Python expresses this idea with <code>if</code>, <code>elif</code> and <code>else</code> (<a href="https://books.trinket.io/pfe/03-conditional.html" target="_blank" rel="noreferrer">Severance, 2016, Chapter 3</a>).</p><div class="syntax-compare"><div><span class="bad-label">Vague</span><strong>Check file</strong><p>The possible answers are unclear.</p></div><div><span class="good-label">Testable</span><strong>Does the file exist?</strong><p>Yes and No have defined meanings.</p></div></div>` },
    { title: "Complete every path", html: `<div class="flow-diagram" aria-label="Decision with success and problem paths"><span class="flow-node decision">Required columns present?</span><span class="flow-arrow">Yes →</span><span class="flow-node process">Check rows</span><span class="flow-arrow">No →</span><span class="flow-node io">Report issue</span><span class="flow-arrow">→</span><span class="flow-node start">End or review</span></div><p>A problem branch must not silently rejoin the successful path. If correction is possible, show the correction or human-review step explicitly before the paths reconnect.</p>` }
  ],
  "1.9": [
    { title: "Why repetition needs a loop", html: `<p>Drawing the same check once for every CSV row would hide the process. A loop states that a set of instructions repeats while a condition remains true. Python later represents related patterns with <code>for</code> and <code>while</code> (<a href="https://books.trinket.io/pfe/05-iterations.html" target="_blank" rel="noreferrer">Severance, 2016, Chapter 5</a>).</p>` },
    { title: "Four parts of a controlled loop", html: `<div class="iteration-grid"><div><span>1</span><strong>Question</strong><p>Are there more rows?</p></div><div><span>2</span><strong>Repeated work</strong><p>Select and check one row.</p></div><div><span>3</span><strong>Progress</strong><p>Move to the next row.</p></div><div><span>4</span><strong>Exit</strong><p>No leads to the next stage.</p></div></div>` },
    { title: "Follow the loop", html: `<div class="flow-diagram vertical" aria-label="Controlled loop for checking CSV rows"><span class="flow-node decision">More rows?</span><span class="flow-arrow">Yes ↓</span><span class="flow-node process">Select next row</span><span class="flow-arrow">↓</span><span class="flow-node process">Check and log</span><span class="flow-arrow">↺ return to question</span><span class="flow-arrow">No → continue to summary</span></div><p>For a three-row file, the repeated work occurs three times. A fourth visit to the question produces No and exits. Without progress or an exit, the diagram describes an infinite loop.</p>` }
  ],
  "1.10": [
    { title: "Trace one scenario at a time", html: `<p>Tracing is a manual test. Fix one input scenario, follow only the selected branches and record every loop pass. Testing only the normal case cannot show whether an error path or stopping condition works. Early debugging depends on observing where intended and actual behaviour first differ (<a href="https://books.trinket.io/pfe/01-intro.html" target="_blank" rel="noreferrer">Severance, 2016, Chapter 1</a>).</p><div class="scenario-grid"><div><strong>Normal case</strong><p>The file and required columns exist.</p></div><div><strong>Problem case</strong><p>A required column is absent.</p></div><div><strong>Boundary case</strong><p>The file has a header but no rows.</p></div></div>` },
    { title: "Use a trace table", html: `<div class="table-wrap"><table class="trace-table"><thead><tr><th>Step</th><th>Shape reached</th><th>Decision or action</th><th>Result</th></tr></thead><tbody><tr><td>1</td><td>Receive file</td><td>Input</td><td>monthly.csv</td></tr><tr><td>2</td><td>File exists?</td><td>Decision</td><td>Yes</td></tr><tr><td>3</td><td>Columns present?</td><td>Decision</td><td>No</td></tr><tr><td>4</td><td>Report issue</td><td>Output</td><td>Missing participant_count</td></tr></tbody></table></div>` },
    { title: "Notation errors and logic errors", html: `<div class="repair-visual"><div><span class="bad-label">Notation error</span><p>A decision is drawn as a process rectangle. The agreed visual syntax is wrong.</p></div><div><span class="bad-label">Logic error</span><p>The missing-column branch continues to calculate a summary. The behaviour is wrong.</p></div></div><ol class="chapter-list"><li>State the intended behaviour.</li><li>Choose an input that exposes the fault.</li><li>Trace the existing diagram.</li><li>Locate the first mismatch.</li><li>Repair only the necessary shape, label or connection.</li><li>Trace the repaired and unaffected paths.</li></ol>` },
    { title: "Common faults to inspect", html: `<ul class="chapter-list"><li>Unlabelled decision branches.</li><li>An error path reaches a successful output.</li><li>A loop does not advance or has no exit.</li><li>A shape cannot be reached.</li><li>A path stops without an end.</li><li>The process invents a value for uncertain data.</li></ul><p>A technically correct diagram can still encode an unsuitable organisational rule. Testing the logic does not remove the need to question the rule.</p>` }
  ],
  "1.11": [
    { title: "The CivicConnect case", html: `<p>Use the following case as the authority for both representations. Do not add rules silently.</p><ol class="case-brief"><li>CivicConnect receives one CSV file from each community centre on the first working day of every month.</li><li>The required columns are centre, date, programme and participant_count.</li><li>The original file must be preserved and must never be overwritten.</li><li>If a file is missing or unreadable, record the issue and stop processing that file.</li><li>If a required column is absent, send the file to human review.</li><li>For each record, check the date and participant_count.</li><li>Missing, negative or non-numeric counts enter the issue log; do not invent a replacement value.</li><li>After all valid records are checked, group them by programme, calculate totals and create a bar chart.</li><li>Save the cleaned data, issue log, summary and chart; a person approves them before circulation.</li></ol>` },
    { title: "Translate meaning, not line count", html: `<p>Pseudocode and flowcharts describe the same algorithm differently. One <code>IF</code> block may need a decision diamond, two labelled arrows and actions on each path. One <code>FOR EACH</code> block needs a continuation question, repeated actions, progress, a returning arrow and an exit.</p><div class="mapping-list"><div><code>START / END</code><span>→</span><strong>Terminal</strong></div><div><code>RECEIVE / DISPLAY / SAVE</code><span>→</span><strong>Input or output</strong></div><div><code>OPEN / CALCULATE</code><span>→</span><strong>Process</strong></div><div><code>IF / ELSE</code><span>→</span><strong>Decision and branches</strong></div><div><code>FOR EACH / WHILE</code><span>→</span><strong>Loop and exit</strong></div></div>` },
    { title: "Build and test both representations", html: `<ol class="chapter-list"><li>Underline the inputs, actions, conditions, repeated work, outputs and human-review points.</li><li>Write structured pseudocode for all nine requirements.</li><li>Draw a flowchart with a start, end, labelled decisions, controlled loop, problem paths and human approval.</li><li>Trace one valid file and one problematic file through both.</li><li>Repair any difference from the case and trace again.</li></ol>` },
    { title: "Consistency checklist", html: `<div class="checklist-board"><label><input type="checkbox"> The same inputs and outputs appear.</label><label><input type="checkbox"> Actions have the same dependency order.</label><label><input type="checkbox"> Conditions and branches have the same meaning.</label><label><input type="checkbox"> The same records are repeated and the loop exits.</label><label><input type="checkbox"> Error and human-review paths are preserved.</label><label><input type="checkbox"> No replacement values or other rules were invented.</label></div><blockquote>The result should be a tested specification, not a decorative diagram.</blockquote>` }
  ],
  "1.12": [
    { title: "Moving towards Python", html: `<p>Keywords are reserved words that Python uses to define its grammar and control how instructions are interpreted. They cannot normally be used as variable, function or other identifier names. Examples include <code>if</code>, <code>else</code>, <code>for</code>, <code>in</code> and <code>return</code> (<a href="https://www.w3schools.com/python/python_ref_keywords.asp" target="_blank" rel="noreferrer">W3Schools, n.d.</a>).</p><p>Keywords are not the same as built-in functions or names. For example, <code>if</code> is a keyword, <code>print()</code> is a built-in function and <code>records</code> could be a variable name. Python also distinguishes context-sensitive <em>soft keywords</em>, including <code>match</code> and <code>case</code> in pattern matching (<a href="https://docs.python.org/3/reference/lexical_analysis.html#soft-keywords" target="_blank" rel="noreferrer">Python Software Foundation, 2026</a>).</p>` },
    { title: "The Python keyword wall", html: `<figure class="keyword-figure"><img src="assets/python-keywords.png" alt="Keyword wall showing all 37 words listed in the W3Schools Python keyword reference, grouped by beginner purpose." /><figcaption>All words listed in the W3Schools Python keyword reference. You do not need to memorise them. Begin by recognising the highlighted control words used in this course.</figcaption></figure><p class="keyword-note"><strong>Start with:</strong> <code>if</code>, <code>elif</code>, <code>else</code>, <code>for</code>, <code>in</code>, <code>while</code>, <code>break</code>, <code>continue</code>, <code>and</code>, <code>or</code>, <code>not</code>, <code>True</code>, <code>False</code>, <code>None</code>, <code>import</code>, <code>def</code>, <code>return</code>, <code>try</code> and <code>except</code>. The remaining words can be learned when a task requires them.</p>` },
    { title: "Worked case: check room attendance", html: `<p>A university has attendance records and a permitted room capacity. For each record, missing participant counts must go to human review. Counts above capacity produce a warning. All other counts are recorded as within capacity.</p><h3>Detected steps</h3><ol class="chapter-list"><li>Receive the attendance records and permitted capacity.</li><li>Inspect each record.</li><li>Send a missing count to human review and move to the next record.</li><li>Warn when the count exceeds capacity.</li><li>Otherwise record that the capacity is respected.</li><li>Return the completed results.</li></ol><h3>Python-flavoured pseudocode</h3><pre class="keyword-pseudocode"><code><span class="keyword-key">import</span> capacity_rules<br><br><span class="keyword-key">for</span> record <span class="keyword-key">in</span> attendance_records:<br>    <span class="keyword-key">if</span> record.participants <span class="keyword-key">is</span> <span class="keyword-key">None</span>:<br>        send record to human review<br>        <span class="keyword-key">continue</span><br>    <span class="keyword-key">elif</span> record.participants &gt; permitted_capacity:<br>        add warning to results<br>    <span class="keyword-key">else</span>:<br>        add "within capacity" to results<br><br><span class="keyword-key">return</span> results</code></pre><p>This is still pseudocode. The highlighted words are real Python keywords, but phrases such as <em>send record to human review</em> have not yet been translated into executable functions. Conditional structure is explained further in <a href="https://books.trinket.io/pfe/03-conditional.html" target="_blank" rel="noreferrer">Severance (2016, Chapter 3)</a>.</p>` },
    { title: "Activity case: organise consultation responses", html: `<p>A municipality receives consultation responses. Each response should be processed once. A response without a topic is logged and skipped. An urgent response that also contains personal data must go to human review. Other urgent responses enter a priority queue. All remaining responses enter the standard queue. When no responses remain, the completed queue is returned.</p><p><strong>Your task:</strong> identify the steps, then write Python-flavoured pseudocode using at least <code>for</code>, <code>in</code>, <code>if</code>, <code>elif</code>, <code>else</code>, either <code>and</code>, <code>or</code> or <code>not</code>, <code>continue</code> and <code>return</code>. Highlight every keyword and explain what it controls.</p>` },
    { title: "Use keywords purposefully", html: `<p>Python keywords are case-sensitive, so <code>True</code> and <code>False</code> begin with capital letters while <code>if</code> does not. Do not add keywords merely to make the pseudocode look technical. Each one should express a necessary decision, repetition, relationship, exception or output.</p>` }
  ]
};

const preMergeFlowReferences = {
  "1.7": [
    `Athuraliya, A. (2024, October 24). <em>5 funny flowcharts everybody needs to see!</em> Creately. <a href="https://creately.com/blog/culture/5-funny-flowcharts/" target="_blank" rel="noreferrer">https://creately.com/blog/culture/5-funny-flowcharts/</a>`,
    `Kruzhinskaia, D. (2020, April 9). <em>Desserts recipes in infographics</em> [Infographic project]. Behance. <a href="https://www.behance.net/gallery/95101957/Desserts-recipes-in-infographics" target="_blank" rel="noreferrer">https://www.behance.net/gallery/95101957/Desserts-recipes-in-infographics</a>`,
    `Visual Paradigm. (n.d.). <em>Flowchart tutorial (with symbols, guide and examples)</em>. <a href="https://www.visual-paradigm.com/tutorials/flowchart-tutorial/" target="_blank" rel="noreferrer">https://www.visual-paradigm.com/tutorials/flowchart-tutorial/</a>`
  ],
  "1.8": [
    `Severance, C. R. (2016). <em>Python for everybody: Exploring data using Python 3</em>. Charles Severance. <a href="https://www.py4e.com/book" target="_blank" rel="noreferrer">https://www.py4e.com/book</a>`,
    `Visual Paradigm. (n.d.). <em>Flowchart tutorial (with symbols, guide and examples)</em>. <a href="https://www.visual-paradigm.com/tutorials/flowchart-tutorial/" target="_blank" rel="noreferrer">https://www.visual-paradigm.com/tutorials/flowchart-tutorial/</a>`
  ],
  "1.9": [
    `Severance, C. R. (2016). <em>Python for everybody: Exploring data using Python 3</em>. Charles Severance. <a href="https://www.py4e.com/book" target="_blank" rel="noreferrer">https://www.py4e.com/book</a>`,
    `Visual Paradigm. (n.d.). <em>Flowchart tutorial (with symbols, guide and examples)</em>. <a href="https://www.visual-paradigm.com/tutorials/flowchart-tutorial/" target="_blank" rel="noreferrer">https://www.visual-paradigm.com/tutorials/flowchart-tutorial/</a>`
  ],
  "1.10": [
    `Severance, C. R. (2016). <em>Python for everybody: Exploring data using Python 3</em>. Charles Severance. <a href="https://www.py4e.com/book" target="_blank" rel="noreferrer">https://www.py4e.com/book</a>`,
    `Visual Paradigm. (n.d.). <em>Flowchart tutorial (with symbols, guide and examples)</em>. <a href="https://www.visual-paradigm.com/tutorials/flowchart-tutorial/" target="_blank" rel="noreferrer">https://www.visual-paradigm.com/tutorials/flowchart-tutorial/</a>`
  ],
  "1.11": [
    `Gillespie, T. (2014). The relevance of algorithms. In T. Gillespie, P. J. Boczkowski, & K. A. Foot (Eds.), <em>Media technologies: Essays on communication, materiality, and society</em> (pp. 167–194). MIT Press. <a href="https://doi.org/10.7551/mitpress/9780262525374.003.0009" target="_blank" rel="noreferrer">https://doi.org/10.7551/mitpress/9780262525374.003.0009</a>`,
    `Visual Paradigm. (n.d.). <em>Flowchart tutorial (with symbols, guide and examples)</em>. <a href="https://www.visual-paradigm.com/tutorials/flowchart-tutorial/" target="_blank" rel="noreferrer">https://www.visual-paradigm.com/tutorials/flowchart-tutorial/</a>`
  ],
  "1.12": [
    `Python Software Foundation. (2026). Keywords and soft keywords. In <em>Python 3.14.6 documentation: Lexical analysis</em>. <a href="https://docs.python.org/3/reference/lexical_analysis.html#keywords" target="_blank" rel="noreferrer">https://docs.python.org/3/reference/lexical_analysis.html#keywords</a>`,
    `Severance, C. R. (2016). <em>Python for everybody: Exploring data using Python 3</em>. Charles Severance. <a href="https://www.py4e.com/book" target="_blank" rel="noreferrer">https://www.py4e.com/book</a>`,
    `W3Schools. (n.d.). <em>Python keywords</em>. Retrieved July 31, 2026, from <a href="https://www.w3schools.com/python/python_ref_keywords.asp" target="_blank" rel="noreferrer">https://www.w3schools.com/python/python_ref_keywords.asp</a>`
  ]
};

let modules = startModules;

const state = {
  section: "start",
  current: "overview",
  completed: new Set(JSON.parse(localStorage.getItem("aau-course-completed-v1") || "[]").map(id => tutorialIdMigrations[id] || id))
};

const nav = document.getElementById("module-nav");
const page = document.getElementById("page-content");
const sidebar = document.getElementById("sidebar");
const toast = document.getElementById("toast");

function escapeHtml(value) {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

function updateSidebar() {
  const foundation = state.section === "foundation";
  const flow = state.section === "flow";
  const pythonFoundation = state.section === "python";
  const pythonFoundationII = state.section === "python-ii";
  const dataHandlingI = state.section === "data-i";
  document.getElementById("sidebar-kicker").textContent = foundation || flow
    ? "Part 1 · Computational Foundations"
    : dataHandlingI
    ? "Part III · Data Handling and Analysis"
    : pythonFoundationII
    ? "Part II · Python Foundations"
    : pythonFoundation
      ? "Part II · Python Foundations"
      : "Course orientation";
  document.getElementById("sidebar-title").textContent = foundation
    ? "Section 1.1"
    : flow
      ? "Section 1.2"
      : dataHandlingI
        ? "Section 3.1"
      : pythonFoundationII
        ? "Section 2.2"
      : pythonFoundation
        ? "Section 2.1"
        : "Start Here";
  document.getElementById("sidebar-description").textContent = foundation
    ? "Understand and specify computational problems before writing Python."
    : flow
      ? "Represent, test and translate logic using flowcharts and Python-flavoured pseudocode."
      : dataHandlingI
        ? "Load, inspect, calculate from and critically assess the raw Lecture 5 CSV with pandas."
      : pythonFoundationII
        ? "Make decisions, repeat work, organise functions and handle errors."
      : pythonFoundation
        ? "Run, explain, modify and repair foundational Python in Google Colab."
        : "Prepare your browser workspace and essential learning habits.";
  document.querySelectorAll("[data-package]").forEach(button => button.classList.toggle("active", button.dataset.package === state.section));
}

function updateProgress() {
  const count = modules.filter(module => state.completed.has(module.id)).length;
  const percent = Math.round((count / modules.length) * 100);
  document.getElementById("progress-value").textContent = count;
  document.getElementById("progress-percent").textContent = `${percent}%`;
  document.getElementById("progress-bar").style.width = `${percent}%`;
  document.querySelector(".progress-chip").lastChild.textContent = `/${modules.length} complete`;
}

function renderNav() {
  updateSidebar();
  nav.innerHTML = modules.map(module => `
    <button class="module-link ${state.current === module.id ? "active" : ""} ${state.completed.has(module.id) ? "completed" : ""}" data-module="${module.id}">
      <span class="module-number">${module.id}</span>
      <span class="module-title">${module.title}</span>
      <span class="completion-dot">${state.completed.has(module.id) ? "✓" : ""}</span>
    </button>
  `).join("");
  nav.querySelectorAll("[data-module]").forEach(button => button.addEventListener("click", () => showModule(button.dataset.module)));
  updateProgress();
}

function selectSection(section) {
  state.section = section;
  modules = section === "foundation"
    ? foundationModules
    : section === "flow"
      ? flowModules
      : section === "python-ii"
        ? pythonFoundationIIModules
      : section === "data-i"
        ? dataHandlingIModules
      : section === "python"
        ? pythonFoundationModules
        : startModules;
  renderOverview();
  sidebar.classList.remove("open");
}

function moduleCards() {
  return modules.map(module => `
    <button class="route-card" data-module-card="${module.id}">
      <span class="route-number">${module.id}</span>
      <span><h3>${module.title}</h3><p>${module.summary}</p></span>
      <span class="route-time">${module.time}</span>
    </button>
  `).join("");
}

function bindOverview() {
  page.querySelector("[data-start]").addEventListener("click", event => showModule(event.currentTarget.dataset.start));
  page.querySelector("[data-scroll-roadmap]").addEventListener("click", () => document.getElementById("roadmap").scrollIntoView());
  page.querySelectorAll("[data-module-card]").forEach(button => button.addEventListener("click", () => showModule(button.dataset.moduleCard)));
  setTimeout(() => { page.focus({ preventScroll: true }); window.scrollTo(0, 0); }, 40);
}

function renderOverview() {
  state.current = "overview";
  renderNav();
  if (state.section === "foundation") {
    renderFoundationOverview();
    return;
  }
  if (state.section === "flow") {
    renderFlowOverview();
    return;
  }
  if (state.section === "python-ii") {
    renderPythonFoundationIIOverview();
    return;
  }
  if (state.section === "data-i") {
    renderDataHandlingIOverview();
    return;
  }
  if (state.section === "python") {
    renderPythonFoundationOverview();
    return;
  }
  page.innerHTML = `
    <div class="page compact-page">
      <section class="hero compact-hero">
        <div class="meta-row"><span class="pill">Start Here</span><span class="time">5 practical modules</span></div>
        <h1>Prepare once, then start learning scripting.</h1>
        <p>This short section gives you the browser skills, terminology and troubleshooting routine required by the rest of the course.</p>
        <div class="hero-actions"><button class="primary-button" data-start="0.1">Begin 0.1 <span>→</span></button><button class="secondary-button" data-scroll-roadmap>View modules</button></div>
      </section>
      <section class="package-ilos"><div><p class="eyebrow">Start Here package</p><h2>Intended learning outcomes</h2><p>These outcomes apply to the complete package and are not repeated on each tutorial page.</p></div><ul class="learning-list">${packageIlos.map(ilo => `<li>${ilo}</li>`).join("")}</ul></section>
      <section id="roadmap"><div class="roadmap-heading compact-heading"><div><p class="eyebrow">Five modules</p><h2 class="section-title">Start Here</h2></div><p>Complete these once, then return only when you need the guidance.</p></div><div class="module-grid compact-grid">${moduleCards()}</div></section>
    </div>`;
  bindOverview();
}

function renderFoundationOverview() {
  page.innerHTML = `
    <div class="page compact-page foundation-page">
      <section class="hero compact-hero foundation-hero">
        <div class="meta-row"><span class="pill">Part 1 · Section 1.1</span><span class="time">160 minutes · no programming</span></div>
        <h1>Understanding computational problems</h1>
        <p>Before writing Python, learn to define the problem, information, rules, outputs and human responsibilities that a computational process must represent.</p>
        <div class="hero-actions"><button class="primary-button" data-start="1.1">Begin tutorial 1.1 <span>→</span></button><button class="secondary-button" data-scroll-roadmap>View the sequence</button></div>
      </section>

      <section class="section-introduction">
        <div><p class="eyebrow">Why this section comes first</p><h2>Start with the problem, not the code</h2><p>A computer can repeat instructions and process information quickly, but it does not share an organisation's understanding of what counts as correct, relevant, fair or meaningful. Someone must define the goal, inputs, rules, exceptions, outputs and limits before those choices can be implemented.</p></div>
        <div class="key-idea"><strong>Key idea</strong><p>Scripting begins by turning an unclear task into a transparent and testable process.</p></div>
      </section>

      <section class="package-ilos foundation-ilos"><div><p class="eyebrow">Section 1.1</p><h2>Intended learning outcomes</h2><p>These eight outcomes cover Tutorials 1.1 to 1.6. Individual pages focus on concepts and activities instead of repeating ILOs.</p></div><ul class="learning-list">${foundationIlos.map(ilo => `<li>${ilo}</li>`).join("")}</ul></section>

      <section class="reading-panel">
        <div><p class="eyebrow">Readings and course companions</p><h2>Tarleton Gillespie, “The Relevance of Algorithms”</h2><p>Use the chapter to examine how classification, relevance, visibility and institutional choices enter computational processes. The tutorial provides the practical foundations; the reading supports critical reflection.</p><div class="reading-links"><a href="https://cssbook.net/index.html" target="_blank" rel="noreferrer">Computational Analysis of Communication ↗</a><a href="https://www.py4e.com/book" target="_blank" rel="noreferrer">Python for Everybody ↗</a></div></div>
        <a class="resource-button reading-button" href="https://doi.org/10.7551/mitpress/9780262525374.003.0009" target="_blank" rel="noreferrer">Open reading ↗</a>
      </section>

      <section id="roadmap"><div class="roadmap-heading compact-heading"><div><h2 class="section-title">From problem to specification</h2></div></div><div class="module-grid compact-grid">${moduleCards()}</div></section>

      <section class="section-footer-grid single">
        <div class="checkpoint-card"><p class="eyebrow">Reuse later</p><h3>CivicConnect specification</h3><p>The case output can be converted into flowcharts and pseudocode, then implemented using the predefined course dataset.</p></div>
      </section>
    </div>`;
  bindOverview();
  page.querySelectorAll("[data-toast]").forEach(button => button.addEventListener("click", () => showToast(button.dataset.toast)));
}

function renderFlowOverview() {
  page.innerHTML = `
    <div class="page compact-page foundation-page flow-page">
      <section class="hero compact-hero flow-hero">
        <div class="meta-row"><span class="pill">Part 1 · Section 1.2</span><span class="time">About 4 hours 35 minutes</span></div>
        <h1>Flowcharts and Pseudocode</h1>
        <p>Make the CivicConnect process visible, test its paths and begin translating its logic towards Python.</p>
        <div class="hero-actions"><button class="primary-button" data-start="1.7">Begin tutorial 1.7 <span>→</span></button><button class="secondary-button" data-scroll-roadmap>View the sequence</button></div>
      </section>

      <section class="section-introduction">
        <div><p class="eyebrow">Direct continuation</p><h2>Use the logic you already developed</h2><p>Section 1.1 established the problem, inputs, outputs, task structure and assumptions. Here you will represent that logic through flowcharts, test it with concrete cases and use selected Python keywords to prepare for later coding.</p></div>
        <div class="key-idea"><strong>Learning movement</strong><p>Symbols → sequence, decisions and repetition → tracing and repair → Python keywords → final case.</p></div>
      </section>

      <section class="package-ilos foundation-ilos"><div><p class="eyebrow">Section 1.2</p><h2>Intended learning outcomes</h2><p>These outcomes apply to Tutorials 1.7 to 1.11. They are not repeated on every tutorial page.</p></div><ul class="learning-list">${flowIlos.map(ilo => `<li>${ilo}</li>`).join("")}</ul></section>

      <section class="flow-symbol-strip" aria-label="Flowchart pathway preview">
        <span class="mini-node start">Start</span><span class="mini-arrow">→</span><span class="mini-node io">Input</span><span class="mini-arrow">→</span><span class="mini-node process">Process</span><span class="mini-arrow">→</span><span class="mini-node decision">Decision?</span><span class="mini-arrow">→</span><span class="mini-node start">End</span>
      </section>

      <section id="roadmap"><div class="roadmap-heading compact-heading"><div><h2 class="section-title">From visible logic towards Python</h2></div></div><div class="module-grid compact-grid">${moduleCards()}</div></section>

      <section class="reading-panel flow-resources">
        <div><p class="eyebrow">Shared section materials</p><h2>Templates and reference sheets</h2><p>These resources belong to the complete Section 1.2 package, rather than to individual pages.</p><div class="reading-links"><a href="#" data-toast="Flowchart symbol sheet placeholder.">Symbol reference sheet</a><a href="#" data-toast="Trace-table template placeholder.">Trace-table template</a><a href="#" data-toast="Consistency checklist placeholder.">Consistency checklist</a><a href="#" data-toast="Final case worksheet placeholder.">Case worksheet</a></div></div>
      </section>

      <section class="section-footer-grid">
        <div class="checkpoint-card"><p class="eyebrow">End of section</p><h3>Knowledge check</h3><p>Review symbols, branches, loops, tracing, repairs, consistency and the purpose of common Python keywords.</p><button class="resource-button" data-toast="The Section 1.2 knowledge check will be added as a separate page.">Preview knowledge check</button></div>
        <div class="checkpoint-card"><p class="eyebrow">Output</p><h3>Tested flowchart and pseudocode</h3><p>Your two matching representations become a specification for the later Python implementation.</p></div>
      </section>
    </div>`;
  bindOverview();
  page.querySelectorAll("[data-toast]").forEach(button => button.addEventListener("click", event => { event.preventDefault(); showToast(button.dataset.toast); }));
}

function renderPythonFoundationOverview() {
  page.innerHTML = `
    <div class="page compact-page foundation-page python-page">
      <section class="hero compact-hero python-hero">
        <div class="meta-row"><span class="pill">Part II · Section 2.1</span><span class="time">About 10 to 12 hours</span></div>
        <h1>Python Foundations I</h1>
        <p>Learn your first Python by running, explaining, modifying, deliberately breaking and repairing meaningful examples in Google Colab.</p>
        <div class="hero-actions"><button class="primary-button" data-start="2.1">Begin tutorial 2.1 <span>→</span></button><button class="secondary-button" data-scroll-roadmap>View the sequence</button></div>
      </section>

      <section class="section-introduction">
        <div><p class="eyebrow">Your first Python section</p><h2>Learn by working with complete examples</h2><p>Each subsection includes executable Python, expected output, a line-by-line explanation, common mistakes, a modification task and a deliberate break-and-repair activity. Examples connect to data quality, CSV preparation and organisational or societal cases wherever suitable.</p></div>
        <div class="key-idea"><strong>Learning cycle</strong><p>Run → explain → modify → break → repair → apply.</p></div>
      </section>

      <section class="package-ilos foundation-ilos"><div><p class="eyebrow">Section 2.1</p><h2>Intended learning outcomes</h2><p>These outcomes apply across Tutorials 2.1 to 2.7.</p></div><ul class="learning-list">${pythonFoundationIlos.map(ilo => `<li>${ilo}</li>`).join("")}</ul></section>

      <details class="foundation-guide">
        <summary>Open prerequisites, course files and coding options</summary>
        <div>${pythonFoundationGuide}</div>
      </details>

      <section id="roadmap"><div class="roadmap-heading compact-heading"><div><p class="eyebrow">Seven connected tutorials</p><h2 class="section-title">From your first Colab cell to a complete script</h2></div><p>Study in order if Python is new to you. Each page builds on the vocabulary and skills introduced earlier.</p></div><div class="module-grid compact-grid">${moduleCards()}</div></section>

      <section class="section-footer-grid">
        <div class="checkpoint-card"><p class="eyebrow">End of section</p><h3>Applied problem-solving exercises</h3><p>Bring together input, conversion, calculations, clear output, comments and systematic debugging in bounded scripts.</p></div>
        <div class="checkpoint-card"><p class="eyebrow">Readiness</p><h3>Prepared for Python Foundations II</h3><p>You should be able to read and repair short foundational programs before moving to conditions, loops and functions.</p></div>
      </section>
    </div>`;
  bindOverview();
  page.querySelectorAll("[data-toast]").forEach(button => button.addEventListener("click", event => { event.preventDefault(); showToast(button.dataset.toast); }));
}

function renderPythonFoundationIIOverview() {
  page.innerHTML = `
    <div class="page compact-page foundation-page python-page python-ii-page">
      <section class="hero compact-hero python-hero python-ii-hero">
        <div class="meta-row"><span class="pill">Part II · Section 2.2</span><span class="time">About 12 to 16 hours with applied practice</span></div>
        <h1>Make Python decide, repeat and respond.</h1>
        <p>Build rule-based programs with conditions, loops, functions, imports and structured error handling, then test what those programs can and cannot establish.</p>
        <div class="hero-actions"><button class="primary-button" data-start="2.8">Begin tutorial 2.8 <span>→</span></button><button class="secondary-button" data-scroll-roadmap>View the sequence</button></div>
      </section>

      <section class="section-introduction">
        <div><p class="eyebrow">From values to behaviour</p><h2>Translate computational plans into working Python</h2><p>This section continues the exact learning pattern used in Python Foundations I. Every tutorial asks you to predict, run, inspect, explain, modify, deliberately break, repair, test and critically reflect on complete examples.</p></div>
        <div class="key-idea"><strong>Learning cycle</strong><p>Predict → run → trace → modify → break → repair → test → reflect.</p></div>
      </section>

      <section class="package-ilos foundation-ilos"><div><p class="eyebrow">Section 2.2 outcomes</p><h2>Intended learning outcomes</h2><p>These outcomes align with the syllabus emphasis on simple Python scripts, structured debugging and transparent explanation.</p></div><ul class="learning-list">${pythonFoundationIIIlos.map(ilo => `<li>${ilo}</li>`).join("")}</ul></section>

      <details class="foundation-guide">
        <summary>Open Lecture 4 course files and coding guide</summary>
        <div>${pythonFoundationIIGuide}</div>
      </details>

      <section id="roadmap"><div class="roadmap-heading compact-heading"><div><p class="eyebrow">Eight connected tutorials</p><h2 class="section-title">From Boolean questions to applied Python problem solving</h2></div><p>Study Tutorials 2.8–2.14 in order if decisions, collections, loops and functions are new. Tutorial 2.15 combines both Python foundation sections in ten situational exercises.</p></div><div class="module-grid compact-grid">${moduleCards()}</div></section>

      <section class="reading-panel python-resources">
        <div><p class="eyebrow">Lecture 4 notebooks</p><h2>Match every tutorial with runnable material</h2><p>The Examples notebook mirrors Tutorials 2.8–2.14. Focused exercises and solutions remain separate, Tutorial 2.15 has situational instructions and fully commented answers, and the cumulative self-test has its own answer notebook.</p><div class="reading-links"><a href="${pythonResourceLinks.foundationsII.examples}" target="_blank" rel="noreferrer">Tutorial Examples</a><a href="${pythonResourceLinks.foundationsII.exercises}" target="_blank" rel="noreferrer">Exercises</a><a href="${pythonResourceLinks.foundationsII.solutions}" target="_blank" rel="noreferrer">Numbered Solutions</a><a href="${pythonResourceLinks.foundationsII.appliedExercises}" target="_blank" rel="noreferrer">Tutorial 2.15 Instructions</a><a href="${pythonResourceLinks.foundationsII.appliedSolutions}" target="_blank" rel="noreferrer">Tutorial 2.15 Worked Examples and Solutions</a><a href="${pythonResourceLinks.foundationsII.selfTestAnswers}" target="_blank" rel="noreferrer">Self-test Answers</a><a href="${tutorialCodeCoverageUrl}" target="_blank" rel="noreferrer">Code coverage map</a></div></div>
        <a class="resource-button reading-button" href="python-foundations-ii.md" download>↓ Download full Markdown</a>
      </section>

      <section class="section-footer-grid">
        <div class="checkpoint-card"><p class="eyebrow">Tutorial 2.15</p><h3>Ten situational exercises</h3><p>Combine input, collections, validation, branching, loops, functions, imports and documented tests in bounded programs.</p></div>
        <div class="checkpoint-card"><p class="eyebrow">Next course part</p><h3>Ready for CSV and JSON records</h3><p>Consistent lists of dictionaries, comparisons, imports and reusable functions will support file inspection, cleaning and visualisation.</p></div>
      </section>
    </div>`;
  bindOverview();
  page.querySelectorAll("[data-toast]").forEach(button => button.addEventListener("click", event => { event.preventDefault(); showToast(button.dataset.toast); }));
}

function renderDataHandlingIOverview() {
  page.innerHTML = `
    <div class="page compact-page foundation-page python-page data-handling-page">
      <section class="hero compact-hero python-hero data-handling-hero">
        <div class="meta-row"><span class="pill">Part III · Section 3.1 · Lecture 5</span><span class="time">About 15 to 18 hours with applied practice</span></div>
        <h1>Data Handling, Text Analysis and Visualization I</h1>
        <p>Move from Python values to a reproducible first exploration of a real tabular structure: load the supplied CSV, inspect it, calculate cautiously, explore categories and text, and document quality before cleaning.</p>
        <div class="hero-actions"><button class="primary-button" data-start="3.1">Begin tutorial 3.1 <span>→</span></button><button class="secondary-button" data-scroll-roadmap>View the sequence</button></div>
      </section>

      <section class="section-introduction">
        <div><p class="eyebrow">From Python scripts to datasets</p><h2>Question first, calculation second, interpretation last</h2><p>This section keeps the learning pattern used in both Python Foundations sections while introducing pandas and CSV data. Every tutorial connects code to the underlying records, variable meaning, denominator, quality concern and limitation. The supplied file is deliberately raw: Lecture 5 detects and documents its problems without silently cleaning them.</p></div>
        <div class="key-idea"><strong>Learning cycle</strong><p>Question → load → inspect → calculate → verify rows → document quality → interpret cautiously → reproduce.</p></div>
      </section>

      <section class="package-ilos foundation-ilos"><div><p class="eyebrow">Section 3.1 outcomes</p><h2>Intended learning outcomes</h2><p>These outcomes prepare students for cleaning, richer analysis and visualization in the following lectures.</p></div><ul class="learning-list">${dataHandlingIIlOs.map(ilo => `<li>${ilo}</li>`).join("")}</ul></section>

      <details class="foundation-guide">
        <summary>Open Lecture 5 course files and coding guide</summary>
        <div>${dataHandlingIGuide}</div>
      </details>

      <section id="roadmap"><div class="roadmap-heading compact-heading"><div><p class="eyebrow">Fourteen connected tutorials</p><h2 class="section-title">From datasets and CSV structure to a documented applied exploration</h2></div><p>Study Tutorials 3.1–3.13 in order when pandas is new. Tutorial 3.14 combines the complete workflow in eight applied activities.</p></div><div class="module-grid compact-grid">${moduleCards()}</div></section>

      <section class="reading-panel python-resources">
        <div><p class="eyebrow">Lecture 5 notebooks and dataset</p><h2>Match the website with runnable, verified material</h2><p>The Examples notebook follows the website sequence. The Exercises notebook contains all 33 numbered tasks before its separate answer section. The Applied Activities notebook contains eight cumulative tasks before its model walkthrough.</p><div class="reading-links"><a href="${pythonResourceLinks.dataHandlingI.examples}" target="_blank" rel="noreferrer">Tutorial Examples</a><a href="${pythonResourceLinks.dataHandlingI.exercises}" target="_blank" rel="noreferrer">Exercises and Solutions</a><a href="${pythonResourceLinks.dataHandlingI.cases}" target="_blank" rel="noreferrer">Applied Activities and Model Walkthrough</a><a href="${pythonResourceLinks.dataHandlingI.dataset}" target="_blank" rel="noreferrer">Raw Lecture 5 CSV</a><a href="${pythonResourceLinks.dataHandlingI.github}" target="_blank" rel="noreferrer">Lecture 5 GitHub Folder</a><a href="${tutorialCodeCoverageUrl}" target="_blank" rel="noreferrer">Code Coverage Map</a></div></div>
        <a class="resource-button reading-button" href="data-handling-text-analysis-visualization-i.md" download>↓ Download full Markdown</a>
      </section>

      <section class="section-footer-grid">
        <div class="checkpoint-card"><p class="eyebrow">Tutorial 3.14</p><h3>Eight applied exploration activities</h3><p>Produce a reproducible initial data-exploration report without overwriting or silently repairing the raw source.</p></div>
        <div class="checkpoint-card"><p class="eyebrow">Next course part</p><h3>Ready for cleaning and visualization</h3><p>Variable expectations, quality flags, grouped calculations and text rules provide an auditable starting point for the next lecture.</p></div>
      </section>
    </div>`;
  bindOverview();
  page.querySelectorAll("[data-toast]").forEach(button => button.addEventListener("click", event => { event.preventDefault(); showToast(button.dataset.toast); }));
}

function codeBlock(module) {
  if (!module.code) return "";
  return `<div class="code-shell"><div class="code-toolbar"><span>Python · selectable code</span><button class="copy-button" data-copy="${module.id}">Copy code</button></div><pre><code>${escapeHtml(module.code)}</code></pre></div><div class="expected"><strong>Expected output</strong><code>${escapeHtml(module.output)}</code></div>`;
}

function renderTutorialReferences(id, source) {
  const references = source[id] || [];
  if (!references.length) return "";
  return `<section class="reference-list"><p class="eyebrow">References</p><h2>Sources used in this tutorial</h2><ol>${references.map(reference => `<li>${reference}</li>`).join("")}</ol></section>`;
}

function showModule(id) {
  const module = modules.find(item => item.id === id);
  if (!module) return;
  const foundation = state.section === "foundation";
  const flow = state.section === "flow";
  const pythonFoundation = state.section === "python";
  const pythonFoundationII = state.section === "python-ii";
  const dataHandlingI = state.section === "data-i";
  const conceptual = foundation || flow;
  const sectionLabel = foundation ? "Section 1.1" : flow ? "Section 1.2" : pythonFoundation ? "Section 2.1" : pythonFoundationII ? "Section 2.2" : dataHandlingI ? "Section 3.1" : "Start Here";
  state.current = id;
  renderNav();
  const index = modules.findIndex(item => item.id === id);
  const previous = modules[index - 1];
  const next = modules[index + 1];
  const visualLabel = "Screenshot placeholder";
  const visualDescription = "An annotated interface screenshot will be inserted here.";
  const chapterSource = foundation ? foundationChapters : flow ? flowChapters : pythonFoundation ? pythonFoundationChapters : pythonFoundationII ? pythonFoundationIIChapters : dataHandlingI ? dataHandlingIChapters : null;
  const chapterContent = chapterSource
    ? chapterSource[module.id].map(section => pythonFoundation || pythonFoundationII || dataHandlingI ? section.html : `<section class="chapter-section"><h2>${section.title}</h2>${section.html}</section>`).join("")
    : "";
  const tutorialContent = foundation
    ? `<section class="chapter-paper"><p class="eyebrow">Discussion tutorial</p>${chapterContent}${foundationVisuals[module.id] || ""}</section>`
    : flow
      ? `<section class="chapter-paper flow-chapter"><p class="eyebrow">Guided visual tutorial</p>${chapterContent}</section>`
      : pythonFoundation || pythonFoundationII || dataHandlingI
        ? `<section class="chapter-paper python-chapter"><p class="eyebrow">${dataHandlingI ? "Hands-on data tutorial" : "Hands-on Python tutorial"}</p>${chapterContent}</section>`
        : `<section class="content-card compact-card" id="steps"><p class="eyebrow">Practical guide</p><h2>What to do</h2><div class="step-list compact-steps">${module.steps.map(step => `<div class="step"><h3>${step[0]}</h3><p>${step[1]}</p></div>`).join("")}</div>${codeBlock(module)}<figure class="compact-figure"><div class="screenshot-placeholder compact-placeholder"><div class="placeholder-inner"><div class="placeholder-icon">▣</div><span class="placeholder-label">${visualLabel} ${module.screenshot[0]}</span><strong>${module.screenshot[1]}</strong><p>${visualDescription}</p></div></div><figcaption class="screenshot-caption"><strong>Caption:</strong> ${module.screenshot[1]}. <strong>Alt text:</strong> ${module.screenshot[2]}</figcaption></figure></section>`;
  page.innerHTML = `
    <article class="page compact-page">
      <header class="module-header compact-module-header">
        <div class="module-meta"><span class="pill">Core</span><span class="time">◷ ${module.time}</span>${conceptual ? `<span class="time">No programming</span>` : pythonFoundation || pythonFoundationII ? `<span class="time">Google Colab · beginner</span>` : dataHandlingI ? `<span class="time">Google Colab · pandas · raw CSV</span>` : ""}</div>
        <h1>${module.id} ${module.title}</h1>
        <p class="lead">${module.intro}</p>
      </header>
      <div class="main-column compact-column">
        ${tutorialContent}
        <section class="practice-grid"><div class="activity"><span class="activity-tag">Activity ${module.id}</span><h3>Apply the method</h3><p>${module.task}</p></div><div class="error-box"><h3>${conceptual ? "Design issue to notice" : "Common problem"}</h3><p>${module.problem[0]}</p><div class="repair"><strong>Improve it:</strong> ${module.problem[1]}</div></div></section>
        <section class="check-card compact-check"><div><p class="eyebrow">Quick check</p><h2>Before continuing</h2></div><div class="check-options">${module.check.map((item, itemIndex) => `<label class="check-option"><input type="checkbox" data-check="${itemIndex}" /> <span>${item}</span></label>`).join("")}</div></section>
        ${flow ? `<section class="case-contribution"><p class="eyebrow">Continuing case</p><h3>What this adds</h3><p>${module.contribution}</p></section><details class="model-answer"><summary>Open the model answer</summary><div><p>${module.model}</p><p class="answer-note">A different layout can also be valid when it preserves the same logic and course notation.</p></div></details>` : ""}
        <section class="reflection compact-reflection"><strong>${conceptual ? "Critical reflection" : "Responsible practice"}:</strong> ${module.reflection}</section>
        ${foundation ? renderTutorialReferences(module.id, foundationReferences) : flow ? renderTutorialReferences(module.id, flowReferences) : pythonFoundation ? renderTutorialReferences(module.id, pythonFoundationReferences) : pythonFoundationII ? renderTutorialReferences(module.id, pythonFoundationIIReferences) : dataHandlingI ? renderTutorialReferences(module.id, dataHandlingIReferences) : ""}
        ${conceptual || pythonFoundation || pythonFoundationII || dataHandlingI ? "" : `<section class="resource-panel compact-resources"><div><p class="eyebrow">Resources</p><h2>Open or download</h2></div><div class="resource-row"><button class="resource-button" data-toast="Colab link placeholder.">↗ Colab</button><a class="resource-button" href="${courseRepositoryUrl}" target="_blank" rel="noreferrer">⌘ GitHub</a><a class="resource-button" href="${courseDatasetUrl}" target="_blank" rel="noreferrer">↓ Dataset</a><button class="resource-button" data-toast="Solution link placeholder.">✓ Solution</button></div></section>`}
        <nav class="next-row" aria-label="Module navigation">
          ${previous ? `<button class="next-button" data-previous="${previous.id}"><span>←</span><span><small>Previous</small><strong>${previous.id} ${previous.title}</strong></span></button>` : `<button class="next-button" data-overview><span>←</span><span><small>Return to</small><strong>${sectionLabel}</strong></span></button>`}
          <button class="next-button complete-button ${state.completed.has(module.id) ? "done" : ""}" data-complete="${module.id}"><span>${state.completed.has(module.id) ? "✓" : "○"}</span><span><small>${state.completed.has(module.id) ? "Completed" : "Progress"}</small><strong>${state.completed.has(module.id) ? "Mark incomplete" : "Mark complete"}</strong></span></button>
          ${next ? `<button class="next-button" data-next="${next.id}"><span><small>Next</small><strong>${next.id} ${next.title}</strong></span><span>→</span></button>` : `<button class="next-button" data-overview><span><small>Finish</small><strong>Return to ${sectionLabel}</strong></span><span>→</span></button>`}
        </nav>
      </div>
    </article>`;
  attachModuleEvents(module);
  sidebar.classList.remove("open");
  setTimeout(() => { page.focus({ preventScroll: true }); window.scrollTo(0, 0); }, 40);
}

function attachModuleEvents(module) {
  replaceTutorialScreenshotPlaceholders();
  addCodeCompanionLinks();
  page.querySelectorAll("[data-toast]").forEach(button => button.addEventListener("click", () => showToast(button.dataset.toast)));
  page.querySelectorAll("[data-link-placeholder]").forEach(link => {
    const resolvedUrl = resolveTutorialResource(link.dataset.linkPlaceholder);
    if (resolvedUrl) {
      link.href = resolvedUrl;
      link.target = "_blank";
      link.rel = "noreferrer";
      return;
    }
    link.addEventListener("click", event => {
      event.preventDefault();
      const label = link.dataset.linkPlaceholder.replaceAll("_", " ").toLowerCase();
      showToast(`${label} link is not yet available.`);
    });
  });
  page.querySelectorAll("[data-copy-python]").forEach(button => button.addEventListener("click", async () => {
    const code = button.closest(".md-code")?.querySelector("code")?.textContent || "";
    const originalLabel = button.textContent;
    try {
      await copyToClipboard(code);
      button.textContent = "Copied ✓";
      button.classList.add("copied");
      showToast("Python code copied to the clipboard.");
      setTimeout(() => {
        button.textContent = originalLabel;
        button.classList.remove("copied");
      }, 1800);
    } catch {
      showToast("The code could not be copied. Select the code and copy it manually.");
    }
  }));
  const copy = page.querySelector("[data-copy]");
  if (copy) copy.addEventListener("click", async () => { await navigator.clipboard.writeText(module.code); copy.textContent = "Copied"; showToast("Code copied."); });
  page.querySelector("[data-complete]").addEventListener("click", () => {
    state.completed.has(module.id) ? state.completed.delete(module.id) : state.completed.add(module.id);
    localStorage.setItem("aau-course-completed-v1", JSON.stringify([...state.completed]));
    showModule(module.id);
  });
  page.querySelectorAll("[data-overview]").forEach(button => button.addEventListener("click", renderOverview));
  const previous = page.querySelector("[data-previous]");
  const next = page.querySelector("[data-next]");
  if (previous) previous.addEventListener("click", () => showModule(previous.dataset.previous));
  if (next) next.addEventListener("click", () => showModule(next.dataset.next));
}

function replaceTutorialScreenshotPlaceholders() {
  page.querySelectorAll("blockquote p").forEach(paragraph => {
    const match = paragraph.textContent.trim().match(/^\[Screenshot placeholder (PF1-\d+):\s*(.+)\]$/);
    if (!match || !tutorialScreenshotAssets[match[1]]) return;
    const asset = tutorialScreenshotAssets[match[1]];
    const figure = document.createElement("figure");
    figure.className = "tutorial-screenshot";
    figure.innerHTML = `<img src="${asset.src}" alt="${match[2]}" loading="lazy" /><figcaption><strong>${match[1]}.</strong> ${asset.caption}</figcaption>`;
    paragraph.closest("blockquote").replaceWith(figure);
  });
}

function addCodeCompanionLinks() {
  if (state.section !== "python" && state.section !== "python-ii" && state.section !== "data-i") return;
  const links = state.section === "python-ii"
    ? pythonResourceLinks.foundationsII
    : state.section === "data-i"
      ? pythonResourceLinks.dataHandlingI
      : pythonResourceLinks.foundationsI;
  page.querySelectorAll(".md-code.md-python").forEach(codeBlockElement => {
    if (codeBlockElement.nextElementSibling?.classList.contains("code-companion-links")) return;
    const resourceLinks = document.createElement("div");
    resourceLinks.className = "code-companion-links";
    resourceLinks.innerHTML = state.section === "data-i"
      ? state.current === "3.14"
        ? `<span>Run the matching applied activity:</span><a href="${links.cases}" target="_blank" rel="noreferrer">Open Lecture 5 Applied Activities</a><a href="${links.github}" target="_blank" rel="noreferrer">View Lecture 5 on GitHub</a>`
        : `<span>Run the matching numbered material:</span><a href="${links.examples}" target="_blank" rel="noreferrer">Open Lecture 5 Examples</a><a href="${links.exercises}" target="_blank" rel="noreferrer">Open Exercises and Solutions</a>`
      : state.section === "python"
      ? `<span>Run the matching numbered example:</span><a href="${links.examples}" target="_blank" rel="noreferrer">Open Lecture 3 Examples in Colab</a><a href="${links.examplesGithub}" target="_blank" rel="noreferrer">View Examples on GitHub</a>`
      : state.current === "2.15"
        ? `<span>Run the matching applied solution:</span><a href="${links.appliedSolutions}" target="_blank" rel="noreferrer">Open Tutorial 2.15 Solutions</a><a href="${links.github}" target="_blank" rel="noreferrer">View Lecture 4 on GitHub</a>`
        : `<span>Run the matching numbered example:</span><a href="${links.examples}" target="_blank" rel="noreferrer">Open Lecture 4 Examples</a><a href="${links.examplesGithub}" target="_blank" rel="noreferrer">View Examples on GitHub</a>`;
    codeBlockElement.insertAdjacentElement("afterend", resourceLinks);
  });
}

async function copyToClipboard(text) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const temporaryField = document.createElement("textarea");
  temporaryField.value = text;
  temporaryField.setAttribute("readonly", "");
  temporaryField.style.position = "fixed";
  temporaryField.style.left = "-9999px";
  document.body.appendChild(temporaryField);
  temporaryField.select();
  const copied = document.execCommand("copy");
  temporaryField.remove();
  if (!copied) throw new Error("Copy command was unavailable");
}

let toastTimer;
function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
}

document.documentElement.classList.toggle("local-file", window.location.protocol === "file:");
document.getElementById("home-button").addEventListener("click", renderOverview);
document.getElementById("menu-button").addEventListener("click", () => sidebar.classList.toggle("open"));
document.querySelectorAll("[data-package]").forEach(button => button.addEventListener("click", () => selectSection(button.dataset.package)));
document.querySelectorAll(".top-actions [data-toast]").forEach(button => button.addEventListener("click", () => showToast(button.dataset.toast)));
document.getElementById("glossary-button").addEventListener("click", () => {
  if (state.section === "data-i") {
    modules = dataHandlingIModules;
    showModule("3.13");
  } else if (state.section === "python-ii") {
    modules = pythonFoundationIIModules;
    showModule("2.15");
    setTimeout(() => document.getElementById("python-ii-glossary")?.scrollIntoView({ block: "start" }), 80);
  } else {
    state.section = "python";
    modules = pythonFoundationModules;
    showModule("2.7");
    setTimeout(() => document.getElementById("python-glossary")?.scrollIntoView({ block: "start" }), 80);
  }
});
renderOverview();
