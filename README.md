# Abdullah Alsulami — Portfolio

A premium, light, recruiter-friendly portfolio built with React, Vite, and Tailwind CSS.

## Getting started

Requires [Node.js](https://nodejs.org) 18+ (not installed on this machine — install it first).

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

Build for production:

```bash
npm run build
npm run preview
```

## Things to swap in before publishing

1. **CV file** — add your real PDF at `public/Abdullah-Alsulami-CV.pdf` (the "Download CV" button already links to this path).
2. **Dashboard screenshots** — `src/assets/hr-dashboard.svg` and `src/assets/superstore-dashboard.svg` are illustrative placeholder mockups (no real report images were provided). Replace them with your actual Power BI screenshots:
   - Export/crop each report to **1600×900px** (16:9), save as `.png` or `.jpg` in `src/assets/`.
   - Update the two `import` paths at the top of `src/components/Projects.jsx` to point at your new files.
3. **Power BI links** — already wired to the two report URLs you provided in `src/components/Projects.jsx`. Confirm they resolve to a public/shareable view before sending the site to recruiters, since `app.powerbi.com/groups/me/...` links typically require the visitor to be signed into the same tenant.

## Project structure

```
src/
  components/    Section + UI components (Navbar, Hero, About, Education, Skills, Projects, Certificates, Contact, Footer)
  assets/        Dashboard preview graphics
  siteConfig.js  Name, email, social links, nav items — edit once, updates everywhere
  index.css      Tailwind layers + shared component classes (.btn-primary, .card, etc.)
```

## Notes

- Color palette, fonts (Manrope / IBM Plex Sans Arabic), and spacing follow the brand spec exactly — all defined in `tailwind.config.js`.
- No pill-tags, badges, or heavy animation are used anywhere, per design direction.
- Smooth-scroll navigation with active-section highlighting, mobile menu, and full keyboard/focus support are already implemented.
