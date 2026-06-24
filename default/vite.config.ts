import { reactRouter } from '@react-router/dev/vite';
import tailwindcss from '@tailwindcss/vite';
import { reactRouterDevTools } from 'react-router-devtools';
import { defineConfig } from 'vite';
import devtoolsJson from 'vite-plugin-devtools-json';

export default defineConfig({
  resolve: {
    tsconfigPaths: true,
  },
  plugins: [
    devtoolsJson(),
    tailwindcss(),
    reactRouterDevTools(),
    reactRouter(),
  ],
  server: {
    port: 3000,
  },
});
