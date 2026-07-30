# Miguel Bravo portfolio — V2

This directory is the production source for [mabravo.com](https://mabravo.com).

## Structure

- `index.html` — homepage, selected work, experience and about
- `projects.html` — four detailed case studies and the complete project archive
- `speaking.html` — conference talks and publications
- `assets/css/site.css` — visual system and responsive layout
- `assets/js/site.js` — navigation, filters and interaction
- `assets/js/i18n.js` — complete English and Spanish copy
- `assets/docs` — intentionally selected public reports and current résumé

The initial language follows the browser preference. A manual English/Spanish choice is saved in
local storage. The site also respects system colour and reduced-motion preferences.

Netlify publishes this directory from the repository root configuration in `netlify.toml`.

