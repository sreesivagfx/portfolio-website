# SREEGFX — Creative Studio Portfolio

A single-page, dark-themed portfolio site with a custom cursor system, magnetic
buttons, tilt-on-hover cards, scroll reveals and a direction-aware marquee. No
build step or dependencies — plain HTML/CSS/JS.

## Structure

- `index.html` — page markup and section layout
- `styles/main.css` — design system, layout and all animation/CSS
- `scripts/cursor.js` — the two-layer custom cursor (dot + trailing ring that
  morphs into "View" / "Drag" labels over interactive elements)
- `scripts/main.js` — content data (services, work, process) + interactions
  (preloader, nav, magnetic buttons, tilt, filters, stats counters, reveals)
- `assets/favicon.svg` — logo mark

## Adding content later

Everything you'll want to expand lives in `scripts/main.js`:

- **Add a service/discipline** → push a new object into the `SERVICES` array
  (pick or add an icon key in `ICONS`).
- **Add a project** → push a new object into the `WORK` array. Set `tag` to an
  existing category (it becomes a filter automatically) or a new one, `grad`
  to any CSS gradient for the placeholder thumbnail, and `big: true` to make
  it span two grid columns. Swap the `grad` placeholder for a real image by
  changing `.work-thumb`'s background in `main.js`/`main.css` to
  `background-image: url(...)` once you have real thumbnails.
- **Add a process step** → push a new object into the `PROCESS` array.

## Running locally

No build tools needed — just serve the folder statically, e.g.:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Notes

- The custom cursor and hover effects (tilt, magnetic buttons, spotlight)
  automatically disable on touch devices via `(pointer: fine)` checks, and
  respect `prefers-reduced-motion`.
- Fonts are loaded from Google Fonts (Space Grotesk + Inter) via CDN link
  tags in `index.html`.
