// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react-swc";

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// });

import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react-swc';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

export default defineConfig(({ mode }) => ({
  plugins: [react(), vanillaExtractPlugin()],
  resolve: {
    conditions: mode === 'test' ? ['browser'] : [],
  },
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest-setup.js'],
    globals: true,
  },
}));
