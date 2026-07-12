# Architecture memory

## Pages and assets

| Path | Responsibility |
| --- | --- |
| `index.html` | Main portfolio and Usage product entry |
| `privacy/usage/index.html` | Structured bilingual Usage privacy policy |
| `support/usage/index.html` | Bilingual Usage support page |
| `privacy.html` | Separate root privacy document; likely legacy, still preserved |
| `assets/styles.css` | Shared layout, typography, responsive, and interaction styles |
| `assets/main.js` | Touch disclosure plus keyboard-input detection for projects and skip link |
| `assets/images/*.webp` | Optimized 1800 × 1350 project artwork for the homepage |
| `assets/favicon.svg` | Minimal site icon |

## Runtime model

- Browser loads plain HTML and shared CSS/JavaScript; there is no compilation step.
- Root page references `assets/` directly.
- Nested Usage pages reference the root and assets with `../../` paths.
- Homepage project overlays are CSS-driven for hover/focus and use a small script
  to toggle `.is-active` on touch devices.
- The script distinguishes Tab input from pointer input so the skip link is visible
  to keyboard users without appearing after a mobile tap.
- The site is light-first and does not persist theme state.
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
is currently present. Local rendering and published-site verification are separate
checks.
