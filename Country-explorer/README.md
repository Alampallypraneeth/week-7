# Country Explorer — Modern Global Dashboard

**Country Explorer** is a high-end, responsive, minimal light-themed web dashboard for browsing and exploring countries of the world. It provides real-time information about capitals, population sizes, and geographic regions.

---

## ✦ What is it?
Country Explorer is a minimalist react-based single-page dashboard. It leverages asynchronous network request flows to query global country details and presents them inside a clean, modern grid interface. Designed with absolute precision, it utilizes vibrant pastel region-badge categories, soft outlines, high-fidelity hover elevations, and smooth focus-ring searches.

---

## ✦ Core Features & How it Works
1. **Asynchronous API Integration**: 
   - Dynamically fetches global records on mount using the public **REST Countries API** (`https://restcountries.com/v3.1/all?fields=name,capital,flags,population,region`).
   - Handles loading states with an animated spinner, and provides visual callouts for connection failures.
2. **Debounced Real-Time Search**: 
   - A modern SearchBar component equipped with input hooks that auto-focuses on load.
   - Leverages a debounced input handler (500ms delay) to avoid layout reflows and unnecessary UI updates during typing.
3. **Interactive Country Cards**: 
   - Individual country cards featuring high-fidelity flags, capitals, and populations.
   - Dynamic map-based region categorizations with custom pastel badge colors:
     *   **Americas**: Emerald Green (`bg-emerald-50 text-emerald-700`)
     *   **Europe**: Classic Blue (`bg-blue-50 text-blue-700`)
     *   **Asia**: Amber Gold (`bg-amber-50 text-amber-700`)
     *   **Africa**: Rose Red (`bg-rose-50 text-rose-700`)
     *   **Oceania**: Royal Purple (`bg-purple-50 text-purple-700`)
     *   **Antarctic**: Slate Gray (`bg-slate-50 text-slate-700`)
   - High-fidelity micro-interactions including a smooth scale zoom on flag images (`group-hover:scale-105`) and gentle card raises (`hover:-translate-y-1`) with soft shadows on hover.

---

## ✦ Technologies Used
- **React (v19.2.0)**: Powers the component hierarchy, side-effect hooks (`useEffect`), and state wrappers (`useState`, `useRef`).
- **Vite**: Acts as the lighting-fast local bundler and HMR dev server.
- **Tailwind CSS (v4.2.1)**: Utilizes next-generation utility declarations, transition curves, grid alignments, and styling states.
- **REST Countries API**: Serves as the database endpoint for live demographic information.

---

## ✦ Getting Started (Local Development)

### 1. Installation
Navigate to the `Country-explorer` directory and install dependencies:
```bash
cd Country-explorer
npm install
```

### 2. Run Dev Server
Launch the development environment:
```bash
npm run dev
```

### 3. Production Build
Compile and bundle the production assets:
```bash
npm run build
```
The optimized bundle will be compiled inside the local `dist/` directory.
