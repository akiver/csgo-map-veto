const path = require('path');
const vite = require('vite');
const esbuild = require('esbuild');
const outFolderPath = path.resolve(__dirname, '../out');
const srcFolderPath = path.resolve(__dirname, '../src');

async function buildRendererProcessBundle() {
  await vite.build({
    mode: 'production',
    build: {
      emptyOutDir: true,
      target: 'chrome102',
    },
    define: {
      IS_ELECTRON: true,
      IS_PRODUCTION: true,
    },
    configFile: path.join(__dirname, '..', 'vite.config.ts'),
  });
}

async function buildMainProcessBundle() {
  await esbuild.build({
    entryPoints: [path.join(srcFolderPath, 'main/main.ts')],
    outfile: path.join(outFolderPath, 'main.js'),
    bundle: true,
    sourcemap: true,
    platform: 'node',
    target: 'node16',
    external: ['electron'],
    define: {
      IS_PRODUCTION: true,
    },
  });
}

(async () => {
  try {
    await buildRendererProcessBundle();
    await buildMainProcessBundle();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
