# Architecture memory

## Pages and assets

| Path | Responsibility |
| --- | --- |
| `index.html` | Main portfolio and Usage product entry |
| `privacy/usage/index.html` | Structured bilingual Usage privacy policy |
| `support/usage/index.html` | Bilingual Usage support page |
| `privacy.html` | Separate root privacy document; likely legacy, still preserved |
| `assets/styles.css` | Shared layout, theme, responsive, and component styles |
| `assets/main.js` | Dark/light theme persistence and accessible toggle label |

## Runtime model

- Browser loads plain HTML and shared CSS/JavaScript; there is no compilation step.
- Root page references `assets/` directly.
- Nested Usage pages reference the root and assets with `../../` paths.
- Theme state is stored under `bowens-imprint-theme` in `localStorage`.
- Without a saved preference, the CSS/default document theme is used.

## URL contract

- Homepage: repository root.
- Usage privacy: `/privacy/usage/`.
- Usage support: `/support/usage/`.
- Navigation and App Store metadata may rely on these paths, so moves require
  redirects or coordinated external updates.

## Deployment

The README describes GitHub Pages deployment from the `main` branch and repository
root. No package manager, static-site generator, CI workflow, or automated test suite
is currently present. Local rendering and published-site verification are separate
checks.
