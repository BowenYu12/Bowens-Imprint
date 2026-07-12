# Bowen's Imprint

Bowen's Imprint is a dependency-free personal portfolio and product-support site for software, games, writing, and photography.

## Stack

- Plain HTML, CSS, and JavaScript
- No package manager or third-party runtime dependency
- No environment variables
- No compilation or production build step
- Deployed from the repository root with GitHub Pages

## Local preview

Run a static server from the repository root:

```bash
python3 -m http.server 4173 --bind 127.0.0.1
```

Then open `http://127.0.0.1:4173/`.

For this repository, serving the root directory is the production-equivalent test. There is no separate build output folder.

## Language system

- English is the default language.
- The language control switches the current page between English and Chinese.
- The preference is stored in `localStorage` under `bowens-imprint-language`.
- The selected language persists across the homepage, Usage privacy page, and Usage support page.
- All locale strings, document titles, metadata, alt text, and accessible labels are managed in `assets/i18n.js`.

## Structure

- `index.html` - portfolio homepage
- `privacy/usage/index.html` - Usage privacy policy
- `support/usage/index.html` - Usage support page
- `assets/styles.css` - shared design tokens, typography, layout, and responsive styles
- `assets/i18n.js` - centralized English and Chinese content
- `assets/main.js` - language switching and project interactions
- `assets/images/` - optimized project artwork
- `privacy.html` - preserved legacy privacy document; not linked by the current site

## GitHub Pages

Repository: `BowenYu12/Bowens-Imprint`

GitHub Pages should publish from:

- Branch: `main`
- Folder: repository root

Public URLs:

- Homepage: `https://bowenyu12.github.io/Bowens-Imprint/`
- Usage privacy: `https://bowenyu12.github.io/Bowens-Imprint/privacy/usage/`
- Usage support: `https://bowenyu12.github.io/Bowens-Imprint/support/usage/`

## Contact

by294517@my.ncwu.edu
