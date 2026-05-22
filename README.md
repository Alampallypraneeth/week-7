# Week 7 — Premium React & Vite Web Applications

Welcome to the **Week 7 Workspace**! This repository is a curated collection of three high-end, responsive, single-page web applications built using **React 19**, **Vite**, and **Tailwind CSS v4**. Each application showcases modern design patterns, polished micro-interactions, robust state management, and real-time data integration.

---

## ✦ Workspace Projects Overview

Each project in this workspace is organized into its own folder, operating independently with its own dev environment, styling configurations, and production builds.

| Project Name | Folder Path | Primary Features | Core Tech Stack | Live Demo / Deployment |
| :--- | :--- | :--- | :--- | :--- |
| **QUICKSHOP** | [`/Product`](Product) | Minimalist boutique, dynamic landing hero, real-time client search, category filters, and detailed product overview. | React 19, React Router v7, Tailwind CSS v4, Fake Store API | Deployed |
| **Country Explorer** | [`/Country-explorer`](Country-explorer) | Modern global demographics dashboard, dynamic REST countries search, debounced input filtering, and custom pastel region badge elements. | React 19, Tailwind CSS v4, REST Countries API | Deployed |
| **Task Manager** | [`/task`](task) | Luxury product listing tracker, custom form validations, statistics panels (Total/Done/Pending), and an interactive sliding percentage progress bar. | React 19, Tailwind CSS v4, Local State management | [Vercel App](https://week7-react-handson2.vercel.app/) |

---

## ✦ Technical Highlights & Architecture

1. **Vibrant & Consistent Aesthetics**: All three applications have been fully transformed from raw/dark layouts into stunning, ultra-premium, minimal light-themed UIs. They employ soft outlines, pastel pill badges, card raises (`hover:-translate-y-1`), and focus-glow rings.
2. **React 19 State Flow**: High-fidelity reactive patterns are implemented throughout, using hooks such as `useState`, `useEffect`, `useRef`, and `useLocation` for crisp user interaction flows.
3. **Tailwind CSS v4 Utility Layers**: Styled completely with next-generation utility structures. The projects utilize custom CSS imports (`@import "tailwindcss";`) and advanced layouts (e.g. grid alignments, glassmorphic blur layers, responsive scaling).
4. **Resilient Asynchronous Fetching**: Asynchronous HTTP pipelines query external REST APIs, cleanly managing loading spinners, fallback values, and connection failures.

---

## ✦ Quick Start Guide (Local Development)

To spin up any of these applications locally, navigate to its respective directory, install the required packages, and run the hot-reload Vite server.

### Option 1: Run QUICKSHOP
```bash
cd Product
npm install
npm run dev
```

### Option 2: Run Country Explorer
```bash
cd Country-explorer
npm install
npm run dev
```

### Option 3: Run Task Manager
```bash
cd task
npm install
npm run dev
```

*By default, the Vite dev server will run on `http://localhost:5173` (or the next available port).*

---

## ✦ Building for Production

Compile optimized, minified bundles ready for static hosting:

```bash
# QUICKSHOP
cd Product && npm run build

# Country Explorer
cd Country-explorer && npm run build

# Task Manager
cd task && npm run build
```
*The compiled assets will be created in each application's local `dist/` directory.*

---

## ✦ Vercel Deployment

Each application is structured to be deployed independently as its own project on Vercel. 

1. Create a new project on [Vercel](https://vercel.com).
2. Link this repository.
3. Set the **Root Directory** settings to the project's subfolder (e.g., `Product`, `Country-explorer`, or `task`).
4. Vercel will automatically detect **Vite** and configure the build settings (`npm run build` using the `dist` output folder).
