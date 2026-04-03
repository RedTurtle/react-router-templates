import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  resolve: {
    tsconfigPaths: true,
  },
  plugins: [react()],
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: ['./vitest.setup.ts'],
    exclude: ['node_modules', 'dist', 'build', '.react-router', 'e2e'],
    coverage: {
      provider: 'v8',
      // reporter: ['text', 'json', 'html', 'lcov'],
      // exclude: [
      //   'node_modules/',
      //   'build/',
      //   '.react-router/',
      //   '**/*.test.ts',
      //   '**/*.test.tsx',
      //   '**/*.spec.ts',
      //   '**/*.spec.tsx',
      // ],
    },
  },
});
