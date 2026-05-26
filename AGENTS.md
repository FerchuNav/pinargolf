# AGENTS.md — Pinar Golf

## Project

React 19 + Vite 8 single-page site for "Pinar Golf Cabañas Resort" (Sierra de la Ventana, Argentina). Spanish-language content. Deploy target: Vercel.

## Commands

```
npm run dev       # dev server → localhost:5173
npm run build     # production build → dist/
npm run lint      # ESLint (flat config)
npm run preview   # preview production build
```

No test framework is configured. No CI or pre-commit hooks exist.

## Architecture

Single-page app. `src/main.jsx` mounts `App.jsx` which stacks 10 section components vertically. All sections are independent — no routing.

```
src/
  main.jsx              # entry point, imports global.css
  App.jsx               # layout: Navbar → sections → Footer + WhatsAppFloat
  sections/             # 10 page sections (Hero, Features, Gallery, Rooms, Amenities, WinterBanner, Comparison, Reviews, Booking, Location)
  components/           # reusable: Navbar, Footer, WhatsAppFloat (UI/ exists but is empty)
  utils/images.js       # ⭐ image catalog — edit here to add/change photos
  styles/global.css     # global styles + .reveal animation class
```

## Image workflow

Images live in `/public/images/<category>/` (pileta, exterior, interior, amenities). They are **not** imported via ES modules — paths are hardcoded as strings in `src/utils/images.js`. To add or change a photo:

1. Place file in `/public/images/<category>/`
2. Add an entry to the matching array in `src/utils/images.js`

Each entry has: `id`, `src`, `alt`, `label`, `featured` (boolean). The `featured` flag controls which images appear in highlights.

## Conventions

- `.jsx` extension for all React files (no TypeScript)
- Each section/component lives in its own folder: `SectionName/SectionName.jsx`
- ESLint flat config ignores `dist/`; uses `eslint-plugin-react-hooks` and `eslint-plugin-react-refresh`
- Framer Motion for animations, Lucide React for icons
- `.reveal` class + IntersectionObserver in `App.jsx` drives scroll-triggered fade-in animations
