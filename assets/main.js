const root = document.documentElement;
const pageName = document.body.dataset.page || "home";
const i18nConfig = window.BOWENS_IMPRINT_I18N;
const projects = [...document.querySelectorAll("[data-project]")];
const touchInput = window.matchMedia("(hover: none)");
let currentLanguage = i18nConfig?.defaultLanguage || "en";

function translation(language, key) {
  const value = key.split(".").reduce(
    (result, part) => (result && typeof result === "object" ? result[part] : undefined),
    i18nConfig?.locales?.[language],
  );

  if (typeof value === "string") return value;
  if (language !== "en") return translation("en", key);
  return "";
}

function savedLanguage() {
  try {
    const saved = localStorage.getItem(i18nConfig.storageKey);
    return saved === "zh" ? "zh" : "en";
  } catch {
    return i18nConfig.defaultLanguage;
  }
}

function persistLanguage(language) {
  try {
    localStorage.setItem(i18nConfig.storageKey, language);
  } catch {
    // The page still switches language when storage is unavailable.
  }
}

function applyLanguage(language, persist = true) {
  if (!i18nConfig?.locales?.[language]) return;

  currentLanguage = language;
  root.lang = language === "zh" ? "zh-Hans" : "en";
  root.dataset.language = language;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = translation(language, element.dataset.i18n);
    if (value) element.textContent = value;
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    const value = translation(language, element.dataset.i18nAriaLabel);
    if (value) element.setAttribute("aria-label", value);
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    const value = translation(language, element.dataset.i18nAlt);
    if (value) element.setAttribute("alt", value);
  });

  const pageTitle = translation(language, `meta.${pageName}.title`);
  const pageDescription = translation(language, `meta.${pageName}.description`);
  if (pageTitle) document.title = pageTitle;
  if (pageDescription) {
    document.querySelector('meta[name="description"]')?.setAttribute("content", pageDescription);
  }

  const languageToggle = document.querySelector("[data-language-toggle]");
  if (languageToggle) {
    const label = translation(language, "shared.switchLanguage");
    languageToggle.textContent = translation(language, "shared.languageTarget");
    languageToggle.setAttribute("aria-label", label);
    languageToggle.setAttribute("title", label);
  }

  closeProjects();
  if (persist) persistLanguage(language);
  document.dispatchEvent(new CustomEvent("languagechange", { detail: { language } }));
}

function closeProjects(except = null) {
  projects.forEach((project) => {
    if (project !== except) project.classList.remove("is-active");
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Tab") root.classList.add("keyboard-navigation");
});

document.addEventListener("pointerdown", () => {
  root.classList.remove("keyboard-navigation");
});

document.querySelector("[data-language-toggle]")?.addEventListener("click", () => {
  applyLanguage(currentLanguage === "en" ? "zh" : "en");
});

projects.forEach((project) => {
  project.addEventListener("click", (event) => {
    if (!touchInput.matches || event.target.closest("a")) return;

    const willOpen = !project.classList.contains("is-active");
    closeProjects(project);
    project.classList.toggle("is-active", willOpen);
  });

  project.addEventListener("keydown", (event) => {
    if (event.target !== project || !["Enter", " "].includes(event.key)) return;
    event.preventDefault();
    const willOpen = !project.classList.contains("is-active");
    closeProjects(project);
    project.classList.toggle("is-active", willOpen);
  });
});

document.addEventListener("click", (event) => {
  if (!event.target.closest("[data-project]")) closeProjects();
});

applyLanguage(savedLanguage(), false);
