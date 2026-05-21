# Week 7 — Country Explorer & Product Demo

This repository contains two small frontend projects built with React and Vite. Each is a separate app in its own folder and can be run, built, and deployed independently.

Projects
- Country-explorer: A simple country information explorer. Search for countries, browse results, and view details for a selected country. Implemented with React, Vite, and Tailwind CSS. See [Country-explorer](Country-explorer) and its [package.json](Country-explorer/package.json#L1).
- Product: A product listing/demo app with routing, header/footer, and product pages. Built with React, Vite, Tailwind CSS, and `react-router`. See [Product](Product) and its [package.json](Product/package.json#L1).

Tech stack
- React (UI)
- Vite (dev server & build)
- Tailwind CSS (styling)
- ESLint (linting)

Quick start (local)
1. Install dependencies for each project (from repository root):

```bash
cd Country-explorer
npm install
npm run dev

# in a separate terminal for the other app
cd ../Product
npm install
npm run dev
```

2. Build for production:

```bash
cd Country-explorer
npm run build
cd ../Product
npm run build
```

Deployment (Vercel)
- Recommended: create two Vercel projects (one per folder). When importing the Git repository, set the "Root Directory" to `Country-explorer` or `Product` respectively. Use `npm run build` as the build command and `dist` as the output directory.
- CLI alternative (from repo root):

```bash
vercel --cwd Country-explorer --name country-explorer
vercel --cwd Product --name product
```

Notes & troubleshooting
- If Vite isn't detected by Vercel, set the Build Command to `npm run build` and Output Directory to `dist` in project settings.
- Add any required environment variables in the Vercel project settings.

If you'd like, I can:
- Run local builds now and confirm `dist` folders exist.
- Help create the Vercel projects (I can provide the exact commands or guide you through the dashboard).
