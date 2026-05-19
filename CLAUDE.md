# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **`npm start`** — Start the dev server (runs on http://localhost:3000 with hot reload)
- **`npm test`** — Run tests in watch mode (Jest/React Testing Library)
- **`npm run build`** — Build for production to the `build/` folder
- **`npm run build -- --watch`** — Watch mode for builds (if needed for debugging)

## Project Overview

This is a React website for Roger Fisher (Vetrilloquist) built with Create React App. It's a multi-page site using React Router for client-side navigation.

## Architecture

### Routing (src/App.js)
Client-side routing with React Router v7. Routes map to page components:
- `/` → Home
- `/about`, `/contact`, `/gallery`, `/performances`, `/store`, `/videos`, `/email`
- `/oceanback`, `/venthaven2023` (special event/gallery pages)
- Legacy redirect: `/videos.html` → `/videos`

### Component Structure
- **Pages** (`src/pages/`) — Full-page components, one per route
- **Components** (`src/components/`) — Shared UI components
  - `navbar.jsx` — Navigation menu
  - `footer.jsx` — Footer (likely shared across all pages)
  - `carousel.jsx` — Image carousel/slideshow
  - `form.jsx` — Contact or subscription form
  - `copyhtml.jsx` — Utility for copying HTML (used on email page)
  - `scrolltohash.jsx` — Handles URL hash navigation (e.g., `#section`)

### Key Dependencies
- **react-router-dom** v7 — Client-side routing
- **juice** v11 — Inlines CSS into HTML (used for email templates; see `src/pages/email.jsx`)
- **@testing-library/react** — Component testing

## Notable Patterns

- The `ScrollToHash` component runs globally to enable anchor-link scrolling within pages
- The email page (`src/pages/email.jsx`) likely uses the `juice` library to generate inlineable HTML email
- Form component (`src/components/form.jsx`) is used for contact/subscription functionality
