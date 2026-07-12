# Current status

## Snapshot

- Git branch: `main`, connected to `BowenYu12/Bowens-Imprint`.
- Repository began with an initial commit on 2026-07-08.
- Static site contains the homepage, shared assets, Usage privacy, and Usage support.
- No dependency installation or build step is required.
- GitHub Pages publication and its live URL have not been re-verified after the
  visual redesign.

## Current content

- Portfolio categories: apps, games, books, and photography.
- Featured product: Usage for iOS.
- Homepage is a neutral light-gray editorial index with compact navigation, a bold
  bilingual masthead, and four numbered image-led projects.
- Usage, Thunder Fighter, and Ten Weapons visuals are derived from local projects.
- Photography uses a neutral placeholder pending original work.
- English/Chinese Usage policy and support copy remain in dedicated pages.

## Risks and open checks

- `privacy.html` and `privacy/usage/index.html` overlap in subject and can drift.
  Determine whether the root file is still externally linked before consolidating.
- Privacy wording must remain consistent with the Usage app's real credential,
  networking, widget, local-history, analytics, and server behavior.
- There is no committed automated regression suite; local Playwright checks were
  run manually after the redesign.
- Published GitHub Pages behavior still needs verification after deployment.

## Current priority

1. Keep a stable public home, Usage privacy URL, and Usage support URL.
2. Replace the Photography placeholder with an original selected photograph.
3. Verify the deployed site and decide the long-term role of `privacy.html`.

## Recent completed work

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
