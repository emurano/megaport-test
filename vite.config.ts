/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@src': resolve(__dirname, './src'),
      '@app-types': resolve(__dirname, './src/types'),
      '@components': resolve(__dirname, './src/components'),
      '@contexts': resolve(__dirname, './src/contexts'),
      '@functions': resolve(__dirname, './src/functions'),
      '@hooks': resolve(__dirname, './src/hooks'),
      '@pages': resolve(__dirname, './src/pages'),
    },
  },

  test: {
    include: ['src/**/*.test.ts', 'src/**/*.test.tsx'],
    environment: 'jsdom',
    setupFiles: './src/test/setup-tests.ts',
    globals: true,
  }
});
