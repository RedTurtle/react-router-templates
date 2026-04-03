# React Router 7 Template

A production-ready template for full-stack React applications using React Router 7, with batteries included: testing, linting, Docker, and CI/CD out of the box.

## Use this template

```bash
pnpm dlx create-react-router@latest my-app --template <github-owner>/<repo>
```

## What's included

- **React Router 7** — full-stack SSR with file-system routing
- **TypeScript** — strict mode enabled
- **TailwindCSS 4** — via Vite plugin
- **Vitest** + **Testing Library** — unit and integration tests with coverage
- **Playwright** — E2E tests on Chromium, Firefox, and WebKit
- **ESLint** + **Prettier** + **Stylelint** — comprehensive code quality tooling
- **Docker** — multi-stage production build (Node 24 Alpine)
- **GitHub Actions** — CI (test + build) and Release (tarball + Docker image) workflows
- **GitLab CI** — equivalent pipeline for GitLab projects

## Getting started

Install dependencies:

```bash
pnpm install
```

Start the development server:

```bash
pnpm dev
```

Your application will be available at `http://localhost:3300`.

## Commands

| Command | Description |
|---|---|
| `pnpm dev` | Start dev server with HMR |
| `pnpm build` | Production build |
| `pnpm start` | Run production server |
| `pnpm typecheck` | Type checking |
| `pnpm lint` | Run ESLint + Stylelint |
| `pnpm lint:fix` | Auto-fix lint issues |
| `pnpm test` | Unit tests with coverage |
| `pnpm test:e2e` | Playwright E2E tests |
| `pnpm test:e2e:ui` | Playwright interactive UI |

## Docker

```bash
docker build -t my-app .
docker run -p 3000:3000 my-app
```

## Project structure

```
app/
├── root.tsx          # Root layout and error boundary
├── app.css           # Global styles
├── routes.ts         # Route config (fs-routes auto-discovery)
└── routes/           # File-based routing
    └── _index.tsx    # Home page (/)
e2e/                  # Playwright E2E tests
```

---

Built with React Router.
