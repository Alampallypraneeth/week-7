# QUICKSHOP — Minimalist E-Commerce Store

**QUICKSHOP** is an ultra-premium, minimalist, light-themed e-commerce storefront web application. It is designed to showcase elegant frontend routing, asynchronous API integration, and clean modern web design principles.

---

## ✦ What is it?
QUICKSHOP is a refined, high-end online boutique designed for the modern individual. It operates as a single-page application (SPA) featuring smooth page-load fade-ins, beautiful glassmorphic sticky navigation menus, responsive value-proposition sections, and rich detail cards for every item in our catalog.

---

## ✦ Core Features & How it Works
1. **Dynamic Landing Page (`Home.jsx`)**: Displays an editorial hero banner ("Curated Styles for the Modern Individual") with clear Call-to-Actions (CTAs) and structured brand highlight cards.
2. **Product Catalog & Filters (`ProductList.jsx`)**: 
   - Dynamically fetches items asynchronously from the public **Fake Store API** (`https://fakestoreapi.com/products`).
   - Includes real-time client-side search filtering.
   - Categorizes items using a custom-styled dropdown menu.
   - Renders product cards containing rating scores and inline cart actions.
3. **Single Product View (`Product.jsx`)**: Renders a deep-dive product overview containing media cards, review scores, bold prices, description headers, and interactive dual CTAs ("Add to Cart" and "Buy Now").
4. **Interactive Contact Form (`ContactUs.jsx`)**: A clean form container with hover borders and customized inputs for direct user outreach.
5. **Glassmorphic Navigation (`Header.jsx`) & Brand Footer (`Footer.jsx`)**: Integrates sticky backdrop blurring and modern text layouts for clean aesthetics.

---

## ✦ Technologies Used
To deliver a premium, fast, and scalable user experience, QUICKSHOP uses the following tech stack:

*   **React (v19.2.0)**: The core library for building our component-driven user interface. Uses hooks like `useState`, `useEffect`, `useRef`, and `useLocation` for react state management.
*   **Vite**: The next-generation build tool providing blazingly fast Hot Module Replacement (HMR) during development and optimized rollups for production builds.
*   **Tailwind CSS (v4.2.1)**: The utility-first CSS framework configured natively through Vite plugin integration. Leverages CSS imports (`@import "tailwindcss";`) and advanced modern utilities (e.g., custom flex setups, glassmorphism, responsive breakpoint sizing).
*   **React Router (v7.13.1)**: Manages our SPA client-side routing, navigation states, path matches, and root layouts.
*   **Fake Store API**: A free rest API for fetching dummy product catalog data (clothing, jewelry, electronics).

---

## ✦ Getting Started (Local Development)

### 1. Installation
Navigate into the `Product` directory and install the required dependencies:
```bash
cd Product
npm install
```

### 2. Run Dev Server
Start the local Vite development server:
```bash
npm run dev
```

### 3. Production Build
To build and optimize the application for production deployment:
```bash
npm run build
```
This generates an optimized production bundle inside the `dist/` directory.
