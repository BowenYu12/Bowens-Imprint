# Bowen's Imprint - Codex working memory

This repository is the website project associated with the Codex thread named
"AI website" or "AI web". Do not edit sibling repositories unless explicitly asked.

## Start every task

1. Read `.codex/context/STATUS.md` and `.codex/context/PRODUCT.md`.
2. Run `./scripts/update-context.sh`.
3. Read `.codex/context/ARCHITECTURE.md` before changing HTML, CSS, JavaScript,
   navigation, URLs, privacy, or support pages.
4. Use `.codex/context/CODE_INDEX.md` to locate pages and headings.

## Product and content rules

- This is a dependency-free static site intended for GitHub Pages.
- Preserve working relative URLs from both root and nested pages.
- Treat `privacy/usage/index.html` as the structured Usage privacy page and
  `support/usage/index.html` as the Usage support page.
- `privacy.html` is a separate legacy-looking privacy document. Do not delete or
  silently merge it without confirming intent.
- Privacy statements are factual promises. Do not change claims about data,
  credentials, analytics, servers, or third parties unless the app behavior has been
  checked and the user asked for that policy change.

## Keep memory current

Before finishing a task that changes repository files:

- Update `PRODUCT.md` when audience, site purpose, portfolio categories, products,
  or public promises change.
- Update `ARCHITECTURE.md` for page structure, shared assets, URL layout, deployment,
  or JavaScript behavior changes.
- Always update `STATUS.md` for completed work, publication status, blockers,
  verification results, and current priorities.
- Run `./scripts/update-context.sh` after site-source changes.

Keep the memory files short and never store private credentials or unpublished
personal information in them.

## Verification

Check root and nested relative links, responsive layouts, both themes, keyboard
navigation, and privacy/support URLs. Deployment is not verified merely because
local files look correct; state separately whether GitHub Pages was checked.
