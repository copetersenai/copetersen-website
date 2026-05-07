# copetersen.ai Website UI Kit

## Overview
High-fidelity single-page scrolling website prototype for Christian O. Petersen (copetersen.ai).

## Design Width
1280px (desktop-first, responsive down to 375px mobile)

## Sections (per brief)
1. **Nav** — fixed, frosted glass on scroll
2. **Hero** — full-bleed photo, dark overlay, headline + CTA
3. **Proof Strip** — 3–4 stat/credential pills
4. **About** — 2-col: text left, photo right
5. **Peer Group** — dark section, group format explained
6. **The Call** — CTA section, schedule a call
7. **Thinking** — blog/articles preview strip
8. **Footer** — links, contact, social

## Files
- `index.html` — main interactive prototype (loads all JSX)
- `Nav.jsx` — navigation component
- `Hero.jsx` — hero section
- `Sections.jsx` — About, Peer Group, The Call, Thinking
- `Footer.jsx` — footer

## Icon Note
Uses Lucide Icons via CDN (thin stroke, matches brand aesthetic).
Lucide substitutes for any icons on the live site.

## Font Note
Raleway substitutes for Aptos (Microsoft proprietary). If Aptos is available,
swap `--font-display: 'Raleway'` to `--font-display: 'Aptos'` in colors_and_type.css.
