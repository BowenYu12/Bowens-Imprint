# Current status

## Snapshot

- Git branch: `main`, connected to `BowenYu12/Bowens-Imprint`.
- Repository began with an initial commit on 2026-07-08.
- Static site contains the homepage, shared assets, Usage privacy, and Usage support.
- No dependency installation or build step is required.
- GitHub Pages homepage, Usage privacy, and Usage support URLs returned HTTP 200 on
  2026-07-12. The prior access issue was caused by GitHub not being updated.
- The current redesign remains local and requires commit/push before it appears on
  GitHub Pages.

## Current content

- Portfolio categories: apps, games, books, and photography.
- Featured product: Usage for iOS.
- Homepage is a neutral light-gray personal archive with a concise hero, four
  image-led projects, visible project titles, About, and contact information.
- Usage, Thunder Fighter, and Ten Weapons visuals are derived from local projects.
- Photography uses a neutral placeholder pending original work.
- English and Chinese are mutually exclusive display modes across the homepage,
  Usage policy, and Usage support pages. English is the default and the choice is
  persisted across pages.

## Risks and open checks

- `privacy.html` and `privacy/usage/index.html` overlap in subject and can drift.
  Determine whether the root file is still externally linked before consolidating.
- Privacy wording must remain consistent with the Usage app's real credential,
  networking, widget, local-history, analytics, and server behavior.
- There is no committed automated regression suite; local Playwright checks were
  run manually after the redesign.
- The redesigned version still needs published-site verification after commit/push.

## Current priority

1. Keep a stable public home, Usage privacy URL, and Usage support URL.
2. Commit/push the redesigned version and verify its live language behavior.
3. Replace the Photography placeholder with an original selected photograph.
4. Decide the long-term role of `privacy.html` before changing or redirecting it.

## Recent completed work

- 2026-07-12: Recolored the Thunder Fighter gallery artwork from a dark neon-blue
  scene to a light fog-gray, sage, graphite, and muted clay palette. The gameplay
  composition and equipment references remain intact, while the image now shares
  the tonal weight of the other three homepage visuals. Rechecked the full page in
  headless Chrome at 1440 px and 390 px with no layout, loading, console, network,
  interaction, language, or accessibility regressions.
- 2026-07-12: Diagnosed the reported access problem and confirmed the user had
  resolved it by updating GitHub. Verified the live home, privacy, and support URLs
  return HTTP 200. Rebuilt the shared visual/language system: English default,
  centralized locale dictionary, persistent in-place language switching, single-
  language policy/support rendering, refined typography and spacing, visible project
  identities, and an About/contact section. Local Chrome verification passed at
  1440 px and 390 px for both languages, cross-page persistence, hover/focus/touch,
  keyboard skip link, reduced motion, image alt text/loading, route/assets status,
  console/network errors, horizontal overflow, and contrast (15.35:1 primary,
  4.75:1 muted). No cache/build cleanup was needed.
- 2026-07-09: Reframed the homepage using editorial award-directory principles:
  neutral gray background, compact top navigation, centered metadata, stronger
  masthead, project index rules, and numbered metadata above each image. Project
  titles remain interaction-only. Updated legal/support pages to the same gray
  system and added explicit keyboard-versus-pointer handling for the skip link.
  Chrome verification passed at 1440 px and 390 px for hover, touch, keyboard,
  links, image loading, overflow, console errors, and full-page mobile rendering.
- 2026-07-09: Rebuilt the site as a light modernist portfolio with a bilingual
  masthead and four large image modules. Added project-specific WebP artwork,
  hover/focus/touch disclosure, responsive layouts, and matching privacy/support
  typography. Local Chrome checks passed at 1440 px and 390 px with no overflow,
  missing assets, console errors, or broken local links. The legacy `privacy.html`
  was not changed.
- 2026-07-09: Added Codex project memory and generated page/source indexing. Existing
  HTML, CSS, JavaScript, and public copy were not changed.
