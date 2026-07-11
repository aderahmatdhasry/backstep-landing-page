# AGENTS.md

## Project

React 19 + Vite 8 landing page for "Backstep Shoes Care" (Indonesian shoe cleaning business). Plain JavaScript (JSX), no TypeScript. Tailwind CSS v4 with CSS-first config.

## Commands

```bash
npm run dev        # Vite dev server (port 5173)
npm run build      # Production build to dist/
npm run lint       # ESLint (flat config)
npm run preview    # Preview prod build locally
```

No test, typecheck, or format scripts exist.

## Architecture

Single SPA — `index.html` → `src/main.jsx` → `src/App.jsx` → Navbar + Hero sections.

- Path alias: `@` → `./src` (configured in `vite.config.js`)
- Tailwind v4 config: all theme tokens in `src/index.css` via `@theme` — no `tailwind.config.js`
- Custom CSS classes `.glass` / `.glass-strong` in `src/index.css`

## Conventions

- ESLint flat config (`eslint.config.js`): targets `**/*.{js,jsx}`, ignores `dist/`
- No Prettier — use whatever style the existing files use
- No TypeScript despite `@types/react` in devDeps (editor intellisense only)
- `package-lock.json` (lockfileVersion 3) is committed

## Known Issues

- `src/layout/Navbar.jsx:29` — typo `link.hred` should be `link.href`
- `src/index.css:42` — `var (--color-border)` has a space, and `--color-border` is undefined in `@theme`
- Nav links reference `#about`, `#menu`, `#testimonials` sections that don't exist yet
