# CLAUDE.md

## Project Overview

This is a full-stack React application built with React Router 7, featuring server-side rendering (SSR), TypeScript, and TailwindCSS. It uses a file-system-based routing structure with `@react-router/fs-routes` for automatic route generation.

## Development Commands

### Package Manager
This project uses **pnpm** (v10.33.0+).

### Core Commands
- **`pnpm dev`** — Start development server with HMR on http://localhost:3000
- **`pnpm build`** — Create production build (outputs to `build/` directory)
- **`pnpm start`** — Run production server from built artifacts
- **`pnpm typecheck`** — Generate React Router types and run TypeScript type checking
- **`pnpm lint`** — Run ESLint and Stylelint validation
- **`pnpm lint:fix`** — Auto-fix linting issues
- **`pnpm test`** — Run unit/integration tests with coverage via Vitest
- **`pnpm test:e2e`** — Run Playwright E2E tests (headless)
- **`pnpm test:e2e:ui`** — Run Playwright tests with interactive UI

## Architecture

### Tech Stack
- **Framework**: React Router 7 (full-stack with SSR)
- **Language**: TypeScript (strict mode enabled)
- **Styling**: TailwindCSS 4.x with Vite integration
- **Testing**: 
  - Unit/Integration: Vitest (with happy-dom environment)
  - E2E: Playwright (Chrome, Firefox, Safari)
- **Code Quality**: ESLint + Prettier, Stylelint with TailwindCSS rules
- **Build Tool**: Vite with React Router dev plugin
- **Container**: Docker (multi-stage build, Node 24-alpine)

### Directory Structure

```
app/
├── root.tsx              # Root layout and error boundary
├── app.css               # Global styles
├── routes.ts             # Route config (uses fs-routes for auto-generation)
├── routes/               # File-based routing (auto-discovered)
│   ├── _index.tsx        # Home page (/)
│   └── ...               # Additional routes follow React Router conventions
└── +types/               # Generated type files for routes
```

**Key paths** (from tsconfig):
- `~/*` → `app/*` (module alias for app imports)

### File-System Routing

Routes are auto-generated from the `app/routes/` directory using `@react-router/fs-routes`. File naming conventions:
- `_index.tsx` = root path (/)
- Nested folders create path segments
- Route files export `default` component and optional `meta()` function for meta tags

### Key Entry Points

**root.tsx** — Root layout and error boundary:
- Exports `Layout` component for HTML structure
- Exports `default` App component with `<Outlet />` for child routes
- Exports `ErrorBoundary` with fallback UI for 404s and errors
- Defines `links` function for preconnect and font loading

**routes.ts** — Route configuration:
- Uses `flatRoutes()` to auto-discover routes from `app/routes/`
- No manual route definitions needed

## Testing

### Unit & Integration Tests (Vitest)
- **Location**: Tests colocated with source or in `__tests__` directories
- **Config**: `vitest.config.ts` (happy-dom environment, globals enabled)
- **Setup**: `vitest.setup.ts` for test utilities

### E2E Tests (Playwright)
- **Location**: `e2e/` directory
- **Config**: `playwright.config.ts` (multi-browser: Chromium, Firefox, WebKit)
