# Task Manager — Product Listing Tracker

**Task Manager** is an ultra-premium, interactive dashboard application built with **React 19**, **Vite**, and **Tailwind CSS v4**. It acts as a dedicated tracking system for product lists, allowing teams to manage pending listings, validate incoming item metadata, and monitor catalog preparation progress.

---

## ✦ What is it?
This application serves as an elegant inventory-readiness tracker. Using standard React state flow, the app enables merchants to write product tasks (containing brand names, descriptions, prices, priority rankings, and imagery) and complete them through a refined card-based interface. Designed with meticulous precision, it features dynamic sliding progress widgets, clear statistics panels, custom input validation hooks, and sleek light-themed layout structures.

---

## ✦ Core Features & Component Breakdown

The application is structured into high-performance modular components:

### 1. Unified Container (`TaskManager.jsx`)
- Controls the centralized state logic (`tasks` array) and handles CRUD wrappers: `addTask`, `toggleComplete`, and `deleteTask`.
- Processes live real-time statistics (Total Tasks, Done Tasks, Pending Tasks).
- Computes preparation completeness as a precise percentage, rendering a highly visual, sliding progress bar (`transition-all duration-500`) with smooth active transitions.

### 2. Validation Form (`AddTaskForm.jsx`)
- An editorial product creation form equipped with comprehensive client-side state validators.
- Supported fields:
  *   **Product Name** *(Required, min 3 characters)*
  *   **Brand** *(Required)*
  *   **Price** *(Required, must be a positive number)*
  *   **Priority** *(Low, Medium, or High)*
  *   **Image URL** *(Optional)*
  *   **Description** *(Required)*
- Employs instant error state borders (`border-red-400`) and custom error alerts underneath each input to guide user actions.

### 3. Categorized Task Grid (`TaskList.jsx`)
- Dynamically splits the product collection into two distinct lists: **Pending** and **Completed**.
- Features an elegant empty state illustration (`🛍️ No tasks yet`) when no entries exist.
- Employs fluid responsive CSS grids that reflow flawlessly from mobile screens to desktop widths.

### 4. Interactive Product Cards (`TaskItem.jsx`)
- Individual product task cards that bundle metadata into a beautiful card container.
- Highlights:
  *   **Media Canvas**: Renders custom images. Falls back to a clean placeholder icon (`🛍️`) if no image is supplied or if loading fails.
  *   **Priority Badges**: Soft, custom-colored pill tags representing priority levels:
      - **High**: Coral Red (`bg-red-100 text-red-500`) with matching indicator dot
      - **Medium**: Amber Orange (`bg-orange-100 text-orange-500`) with matching indicator dot
      - **Low**: Emerald Green (`bg-green-100 text-green-600`) with matching indicator dot
  *   **Status Transitions**: Marking a card complete applies an elegant `opacity-60` fade, grayscales the product media, applies line-through typography, and toggles the CTA label from `✓ Complete` to `↩ Undo`.
  *   **Clean Action CTAs**: Premium buttons for toggling completion states and a red action tag for deletion.

---

## ✦ Technologies Used

*   **React (v19.2.0)**: Coordinates all state transitions, dynamic arrays, and state hooks (`useState`).
*   **Vite**: Delivers instant compilation speeds and a seamless hot-reloaded local environment.
*   **Tailwind CSS (v4.2.1)**: Powers all high-end styles including glass effects, flex structures, transition animations, and responsive breakpoints.
*   **Vercel Hosting**: Powers continuous deployments directly linked to GitHub commits.

---

## ✦ Getting Started (Local Development)

### 1. Installation
Navigate to the `task` folder and install local packages:
```bash
cd task
npm install
```

### 2. Run Dev Server
Launch the local hot-reload environment:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Production Build
Compile optimized production code ready for staging:
```bash
npm run build
```
Vite will compile the code to the local `/dist` folder.

---

## ✦ Deployment on Vercel

This app is fully deployed on [Vercel](https://vercel.com) at the following location:  
👉 **[https://week7-react-handson2.vercel.app/](https://week7-react-handson2.vercel.app/)**

### Steps to Deploy New Work:
1. Ensure your latest changes are committed and pushed to the `main` branch on GitHub.
2. The linked Vercel project detects incoming pushes and triggers an automatic build pipeline.
3. The build parameters are:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
