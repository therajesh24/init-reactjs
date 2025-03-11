import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Enables global test functions like describe, it, test, beforeEach, and afterEach without having to import them in every test file
    environment: 'jsdom', // Specifies that tests should run in a JSDOM environment instead of Node.js
    setupFiles: './setupTests.js' // Ensures that necessary configurations (like extending Jest matchers with @testing-library/jest-dom) are applied globally
  },
});
