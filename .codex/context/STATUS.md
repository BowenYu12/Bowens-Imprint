# Current status

## Snapshot

- Git branch: `main`, connected to `BowenYu12/Bowens-Imprint`.
- Repository began with an initial commit on 2026-07-08.
- Static site contains the homepage, shared assets, Usage privacy, and Usage support.
- No dependency installation or build step is required.
- GitHub Pages publication and its live URL were not verified during memory setup.

## Current content

- Portfolio categories: apps, games, books, and photography.
- Featured product: Usage for iOS.
- English/Chinese public descriptions and Usage policy/support copy.
- Persistent dark/light theme toggle.

## Risks and open checks

- `privacy.html` and `privacy/usage/index.html` overlap in subject and can drift.
  Determine whether the root file is still externally linked before consolidating.
- Privacy wording must remain consistent with the Usage app's real credential,
  networking, widget, local-history, analytics, and server behavior.
- There are no automated link, HTML, accessibility, or visual regression tests.
- Published GitHub Pages behavior, mobile layouts, and nested relative links still
  need browser verification after meaningful changes.

## Current priority

1. Keep a stable public home, Usage privacy URL, and Usage support URL.
2. Verify the deployed site and decide the long-term role of `privacy.html`.
3. Add real project entries and media only when source material is available.

## Recent completed work

- 2026-07-09: Added Codex project memory and generated page/source indexing. Existing
  HTML, CSS, JavaScript, and public copy were not changed.
