const root = document.documentElement;
const toggle = document.querySelector("[data-theme-toggle]");
const savedTheme = localStorage.getItem("bowens-imprint-theme");

// Persist a simple light/dark preference without adding a framework or dependency.
if (savedTheme === "light" || savedTheme === "dark") {
  root.dataset.theme = savedTheme;
}

function currentTheme() {
  return root.dataset.theme === "light" ? "light" : "dark";
}

function updateThemeButton() {
  if (!toggle) return;
  toggle.textContent = currentTheme() === "light" ? "Dark" : "Light";
  toggle.setAttribute("aria-label", `Switch to ${toggle.textContent.toLowerCase()} mode`);
}

updateThemeButton();

if (toggle) {
  toggle.addEventListener("click", () => {
    const nextTheme = currentTheme() === "light" ? "dark" : "light";
    root.dataset.theme = nextTheme;
    localStorage.setItem("bowens-imprint-theme", nextTheme);
    updateThemeButton();
  });
}
