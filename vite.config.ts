/// <reference types="vitest" />
import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import pkg from './package.json';

const srcRoot = path.resolve(__dirname, 'src');
const rendererRoot = path.resolve(srcRoot, 'renderer');

export default defineConfig({
  root: rendererRoot,
  base: './',
  plugins: [react(), svgr()],
  build: {
    outDir: path.resolve(__dirname, 'out'),
  },
  server: {
    port: 3120,
  },
  resolve: {
    alias: {
      main: path.resolve(srcRoot, 'main'),
      renderer: path.resolve(srcRoot, 'renderer'),
      test: path.resolve(__dirname, 'test'),
    },
  },
  define: {
    APP_VERSION: `"${pkg.version}"`,
    GITHUB_URL: `"${pkg.homepage}"`,
    IS_ELECTRON: false,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: path.resolve(__dirname, 'test/setup.ts'),
  },
});
