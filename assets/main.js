const projects = [...document.querySelectorAll("[data-project]")];
const touchInput = window.matchMedia("(hover: none)");

document.addEventListener("keydown", (event) => {
  if (event.key === "Tab") document.documentElement.classList.add("keyboard-navigation");
});

document.addEventListener("pointerdown", () => {
  document.documentElement.classList.remove("keyboard-navigation");
});

function closeProjects(except = null) {
  projects.forEach((project) => {
    if (project !== except) project.classList.remove("is-active");
  });
}

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
