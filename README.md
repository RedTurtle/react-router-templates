# React Router Templates

You can quickly create a new React Router application from any of these templates using the `create-react-router` CLI.

```bash
npx create-react-router@latest --template redturtle/react-router-templates/<template-name>
```

## Contributing

If you find a bug or want to make an improvement to one of the templates, please [create an issue](https://github.com/redturtle/react-router-templates/issues/new) or [create a PR](https://github.com/redturtle/react-router-templates/pulls).

## Templates

### Default template

A full-featured production-ready template with server-side rendering and the following stack:

- **Language**: TypeScript (strict mode enabled)
- **Styling**: TailwindCSS 4.x with Vite integration
- **Routing**: File-System based routing auto-generated from the `app/routes/` directory using `@react-router/fs-routes`
- **Testing**:
  - Unit/Integration: Vitest (with happy-dom environment)
  - E2E: Playwright (Chrome, Firefox, Safari)
- **Code Quality**: ESLint + Prettier, Stylelint with TailwindCSS rules
- **Build Tool**: Vite with React Router dev plugin
- **Container**: Docker (multi-stage build, Node 24-alpine)

#### Usage

```bash
npx create-react-router@latest --template redturtle/react-router-templates/default
```
