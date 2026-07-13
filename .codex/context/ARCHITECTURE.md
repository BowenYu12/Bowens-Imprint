# Architecture memory

## Pages and assets

| Path | Responsibility |
| --- | --- |
| `index.html` | Main portfolio and Usage product entry |
| `privacy/usage/index.html` | Structured bilingual Usage privacy policy |
| `support/usage/index.html` | Bilingual Usage support page |
| `privacy.html` | Separate root privacy document; likely legacy, still preserved |
| `assets/styles.css` | Shared layout, typography, responsive, and interaction styles |
| `assets/i18n.js` | Central English/Chinese strings, metadata, alt text, and accessible labels |
| `assets/main.js` | Locale application/persistence plus project and keyboard interactions |
| `assets/images/*.webp` | Optimized 1800 × 1350 project artwork for the homepage |
| `assets/favicon.svg` | Minimal site icon |
| `scripts/preview.sh` | Idempotent local preview entry point at `localhost:4173` |

## Runtime model

- Browser loads plain HTML and shared CSS/JavaScript; there is no compilation step.
- Root page references `assets/` directly.
- Nested Usage pages reference the root and assets with `../../` paths.
- Pages identify themselves with `data-page`; translatable nodes and attributes use
  `data-i18n`, `data-i18n-alt`, and `data-i18n-aria-label` keys.
- English is the fallback/default locale. Chinese is selected with the shared header
  control and stored under `bowens-imprint-language` in `localStorage`.
- Document language, page title, meta description, text, alt text, and accessible
  labels update together without changing the current URL.
- Homepage project overlays are CSS-driven for hover/focus and use a small script
  to toggle `.is-active` on touch devices.
- The script distinguishes Tab input from pointer input so the skip link is visible
  to keyboard users without appearing after a mobile tap.
- The site is light-first and does not expose or persist theme state.
- Homepage images are WebP files and require no runtime image service.

## URL contract

- Homepage: repository root.
- Usage privacy: `/privacy/usage/`.
- Usage support: `/support/usage/`.
- Navigation and App Store metadata may rely on these paths, so moves require
  redirects or coordinated external updates.

## Deployment

The README describes GitHub Pages deployment from the `main` branch and repository
root. No package manager, static-site generator, CI workflow, or automated test suite
is currently present. Serving the repository root is the production-equivalent local
test. `scripts/preview.sh` starts that temporary local server; the address stops
working when the process ends. Local rendering and published-site verification are
separate checks. No custom domain or repository `CNAME` file is currently configured.
