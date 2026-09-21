// Additional sections in the isolated review copy only.
function readDraftProgress() {
  try {
    const values = JSON.parse(localStorage.getItem('aau-l67-offline-draft-v2') || '[]');
    return Array.isArray(values) ? values : [];
  } catch { return []; }
}

function saveDraftProgress(values) {
  try { localStorage.setItem('aau-l67-offline-draft-v2', JSON.stringify(values)); }
  catch { showToast('Progress is available during this visit; browser storage is unavailable.'); }
}

const draftNotebookLinks = {
  6: {
    examples: '../notebooks/lecture_06/L06_Tutorial_3_15_to_3_28_Examples.ipynb',
    exercises: '../notebooks/lecture_06/L06_Tutorial_3_15_to_3_28_Exercises.ipynb',
    integrated: '../notebooks/lecture_06/L06_Tutorial_3_29_Integrated_Problems.ipynb',
    markdown: '../markdown/source_package/E26_TAN7_L06_Data_Quality_Cleaning_Text_Preparation_FINAL.md'
  },
  7: {
    examples: '../notebooks/lecture_07/L07_Tutorial_3_30_to_3_44_Examples.ipynb',
    exercises: '../notebooks/lecture_07/L07_Tutorial_3_30_to_3_44_Exercises.ipynb',
    integrated: '../notebooks/lecture_07/L07_Tutorial_3_45_Integrated_Problems.ipynb',
    markdown: '../markdown/source_package/E26_TAN7_L07_Analysis_Text_Visualisation_FINAL.md'
  }
};

const githubCourseRoot = 'https://github.com/asmrabbi/E26_TAN7_Scripting_CPH/blob/main';
const rawCourseRoot = 'https://raw.githubusercontent.com/asmrabbi/E26_TAN7_Scripting_CPH/main';
const localReview = ['127.0.0.1', 'localhost'].includes(window.location.hostname) || window.location.protocol === 'file:';

function downloadableCourseFile(repositoryPath, localPath) {
  return localReview ? localPath : `${rawCourseRoot}/${repositoryPath}`;
}

function onlineNotebookLinks(config, type) {
  const local = draftNotebookLinks[config.lecture][type];
  const repositoryPath = local.replace('../', '');
  return {
    github: `${githubCourseRoot}/${repositoryPath}`,
    colab: `https://colab.research.google.com/github/asmrabbi/E26_TAN7_Scripting_CPH/blob/main/${repositoryPath}`
  };
}

function draftResourceLinks(config) {
  const links = draftNotebookLinks[config.lecture];
  const examplesOnline = onlineNotebookLinks(config, 'examples');
  const exercisesOnline = onlineNotebookLinks(config, 'exercises');
  const integratedOnline = onlineNotebookLinks(config, 'integrated');
  const examplesDownload = downloadableCourseFile(links.examples.replace('../', ''), links.examples);
  const exercisesDownload = downloadableCourseFile(links.exercises.replace('../', ''), links.exercises);
  const integratedDownload = downloadableCourseFile(links.integrated.replace('../', ''), links.integrated);
  const rawDataset = downloadableCourseFile('data/E26_TAN7_service_experience_raw.csv', '../data/E26_TAN7_service_experience_raw.csv');
  const cleanedDataset = downloadableCourseFile('data/E26_TAN7_service_experience_cleaned.csv', '../data/E26_TAN7_service_experience_cleaned.csv');
  const cleaned = config.lecture === 7
    ? `<a class="resource-button" href="${cleanedDataset}" download>▤ Cleaned teaching CSV</a>`
    : '';
  const sourceMarkdown = localReview
    ? `<a class="resource-button" href="${links.markdown}" download>↓ Source Markdown</a>`
    : '';
  return `<div class="reading-links draft-resources">
    <a class="resource-button" href="${examplesDownload}" download>↓ Examples notebook</a>
    <a class="resource-button" href="${exercisesDownload}" download>↓ Exercises notebook</a>
    <a class="resource-button" href="${integratedDownload}" download>↓ Applied Problems notebook</a>
    ${sourceMarkdown}
    <a class="resource-button" href="${rawDataset}" download>▤ Raw teaching CSV</a>
    ${cleaned}
    <a class="resource-button" href="${githubCourseRoot}/data/applied/README.md" target="_blank" rel="noreferrer">▤ Applied dataset guide</a>
    <a class="resource-button" href="${examplesOnline.colab}" target="_blank" rel="noreferrer">↗ Examples in Colab</a>
    <a class="resource-button" href="${exercisesOnline.colab}" target="_blank" rel="noreferrer">↗ Exercises in Colab</a>
    <a class="resource-button" href="${integratedOnline.colab}" target="_blank" rel="noreferrer">↗ Applied Problems in Colab</a>
    <a class="resource-button" href="${githubCourseRoot}/data/applied" target="_blank" rel="noreferrer">↗ Applied data on GitHub</a>
  </div>`;
}

function updateDraftSidebar(config) {
  document.getElementById('sidebar-kicker').textContent = 'Part III · Data Handling and Analysis';
  document.getElementById('sidebar-title').textContent = `Section ${config.section}`;
  document.getElementById('sidebar-description').textContent = config.subtitle;
  document.querySelectorAll('[data-package]').forEach(button => button.classList.toggle('active', button.dataset.package === state.section));
}

function renderDraftOverview(config) {
  const tutorialCount = config.last - config.first + 1;
  const fileAvailability = localReview
    ? 'The review bundle includes local copies for offline use. The Colab and GitHub buttons open the current course-repository versions when internet access is available.'
    : 'The download, Colab and GitHub buttons open the current draft files in the course repository.';
  page.innerHTML = `<div class="page compact-page foundation-page python-page data-handling-page">
    <section class="hero compact-hero python-hero data-handling-hero">
      <div class="meta-row"><span class="pill">Part III · Section ${config.section} · Lecture ${config.lecture}</span><span class="time">${config.guidedHours} guided hours · ${config.fullHours} hours with extended work</span></div>
      <h1>${config.title}</h1><p>${config.summary}</p>
      <div class="hero-actions"><a class="primary-button" href="#${config.route}/3.${config.first}">Begin tutorial 3.${config.first} <span>→</span></a><button class="secondary-button" data-scroll-roadmap>View the sequence</button></div>
    </section>
    <section class="section-introduction"><div><p class="eyebrow">Final working set · offline review copy</p><h2>${config.subtitle}</h2><p>This draft follows the supplied final Markdown and all three canonical notebooks. Examples and exercises share one sequence inside each tutorial, so gaps in either notebook are intentional. Use the visible item ID to find the matching notebook section.</p><p>The recurring service-experience records and all applied cases are synthetic teaching data. One row in the recurring dataset represents one service category in one city during one reporting month.</p></div><div class="key-idea"><strong>Learning cycle</strong><p>${config.cycle}</p></div></section>
    <section class="package-ilos foundation-ilos"><div><p class="eyebrow">Section ${config.section} outcomes</p><h2>Intended learning outcomes</h2><p>Complete the E26 workflow through practical work and critical reflection.</p></div><div class="draft-outcomes">${config.outcomes}</div></section>
    <details class="foundation-guide"><summary>Open Lecture ${config.lecture} course files, dataset notes and coding guide</summary><div class="python-chapter">${config.guide}</div></details>
    <section class="study-plan-panel"><div><p class="eyebrow">Suggested pathway</p><h2>Use the pages and notebooks together</h2><p>Begin with the guided tutorial sequence. Run the worked examples, then attempt each exercise before consulting its suggested answer or notebook answer key. The final tutorial is a larger problem-solving studio.</p></div><ol><li><strong>Orientation:</strong> review the unit of observation, source files and learning outcomes.</li><li><strong>Guided tutorials:</strong> work through 3.${config.first}–3.${config.standardEnd} in order.</li><li><strong>Notebook practice:</strong> use the same visible item IDs in the Examples and Exercises notebooks.</li><li><strong>Applied studio:</strong> attempt Tutorial 3.${config.last} and record an audit and plan before viewing worked solutions.</li></ol></section>
    <section class="reading-panel python-resources"><div><p class="eyebrow">Current draft files</p><h2>Lecture ${config.lecture} working files</h2><p>${fileAvailability} A fresh NLTK runtime still needs to download its small language resources once.</p><p><strong>Safe to run repeatedly:</strong> repository CSV files are loaded through read-only URLs, transformations use separate in-memory copies, and generated files go only to a temporary <code>tutorial_outputs</code> folder. Running the notebooks cannot overwrite the canonical course data.</p>${draftResourceLinks(config)}<p class="resource-status"><strong>Applied dataset status:</strong> all six synthetic raw/cleaned CSV files for Tutorials 3.${config.last} are included locally and in the course repository. The integrated notebooks have been run end to end against them.</p></div></section>
    <section id="roadmap"><div class="roadmap-heading compact-heading"><div><p class="eyebrow">${tutorialCount} connected tutorials</p><h2 class="section-title">Tutorials 3.${config.first}–3.${config.last}</h2></div><p>Work in order. Each page preserves the final source wording and unified numbering. The last tutorial contains ten larger applied problems, and its complete solutions remain in the separate notebook.</p></div><div class="module-grid compact-grid">${moduleCards()}</div></section>
    <details class="foundation-guide lecture-appendix"><summary>Open Lecture ${config.lecture} summary, cumulative self-test, glossary and further learning</summary><div class="python-chapter">${config.appendix}</div></details>
    <nav class="next-row" aria-label="Lecture navigation"><a class="next-button" href="#${config.lecture === 6 ? 'data-i' : 'data-ii'}">← Lecture ${config.lecture - 1}</a>${config.lecture === 6 ? '<a class="next-button" href="#data-iii">Continue to Lecture 7 →</a>' : '<a class="next-button" href="#start">Course overview →</a>'}</nav>
  </div>`;
  bindOverview();
}

function renderDraftModule(module, config) {
  state.current = module.id;
  renderNav();
  const index = modules.findIndex(item => item.id === module.id);
  const previous = modules[index - 1];
  const next = modules[index + 1];
  page.innerHTML = `<article class="page compact-page">
    <header class="module-header compact-module-header"><div class="module-meta"><span class="pill">${module.kind}</span><span class="time">◷ ${module.time}</span><span class="time">Lecture ${config.lecture} · supplied final package</span></div><h1>${module.id} ${module.title}</h1><p class="lead">${module.intro}</p></header>
    <div class="main-column compact-column"><p class="draft-crumb"><a href="#${config.route}">← Section ${config.section} overview and files</a></p>
      <section class="chapter-paper python-chapter">${module.html}</section>
      <section class="reading-panel python-resources"><div><p class="eyebrow">Matching files</p><h2>Continue with the same numbered material</h2><p>Examples and exercises share one sequence. Download the appropriate notebook and find the visible item ID. For the applied tutorial, attempt the case before consulting the worked notebook.</p>${draftResourceLinks(config)}</div></section>
      <nav class="next-row" aria-label="Module navigation">
        <a class="next-button" href="${previous ? routeHref(state.section, previous.id) : routeHref(state.section)}"><span>←</span><span><small>${previous ? 'Previous' : 'Return to'}</small><strong>${previous ? previous.id + ' ' + previous.title : 'Section ' + config.section}</strong></span></a>
        <button class="next-button complete-button ${state.completed.has(module.id) ? 'done' : ''}" data-complete="${module.id}"><span>${state.completed.has(module.id) ? '✓' : '○'}</span><span><small>Progress</small><strong>${state.completed.has(module.id) ? 'Mark incomplete' : 'Mark complete'}</strong></span></button>
        <a class="next-button" href="${next ? routeHref(state.section, next.id) : config.lecture === 6 ? '#data-iii' : '#data-iii'}"><span><small>${next ? 'Next' : 'Continue'}</small><strong>${next ? next.id + ' ' + next.title : config.lecture === 6 ? 'Lecture 7' : 'Lecture 7 overview'}</strong></span><span>→</span></a>
      </nav>
    </div></article>`;
  attachModuleEvents(module);
  sidebar.classList.remove('open');
  setTimeout(() => { page.focus({ preventScroll: true }); window.scrollTo(0, 0); }, 40);
}
