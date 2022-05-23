const path = require('path');
const { spawn } = require('child_process');
const { createServer, createLogger } = require('vite');
const electronPath = require('electron');
const esbuild = require('esbuild');
const chokidar = require('chokidar');
const outFolderPath = path.resolve(__dirname, '../out');
const srcFolderPath = path.resolve(__dirname, '../src');

/** @type {import('child_process').ChildProcessWithoutNullStreams | null} */
let electronProcess = null;

const devLogger = createLogger('info', {
  prefix: '[dev]',
});

const mainProcessLogger = createLogger('info', {
  prefix: '[main]',
});

function startElectron() {
  devLogger.info('Starting Electron...', { timestamp: true });
  const args = [path.join(outFolderPath, 'main.js')];
  electronProcess = spawn(String(electronPath), args);
  electronProcess.stdout.on('data', (data) => {
    mainProcessLogger.info(data.toString(), { timestamp: true });
  });
  electronProcess.stderr.on('data', (data) => {
    mainProcessLogger.error(data.toString().trim(), { timestamp: true });
  });
  electronProcess.on('exit', (code) => {
    devLogger.info(`Electron process exited with code : ${code}`, { timestamp: true });
    if (code === 0) {
      process.exit(0);
    }
  });
  electronProcess.on('error', (error) => {
    devLogger.error('Electron process error', { timestamp: true });
    devLogger.error(error, { timestamp: true });
  });
}

function killElectronProcess() {
  if (electronProcess !== null) {
    electronProcess.kill('SIGKILL');
    electronProcess = null;
  }
}

function restartElectron() {
  killElectronProcess();
  startElectron();
}

async function buildAndWatchRendererProcessBundle() {
  /** @type {import('vite').InlineConfig} */
  const serverConfig = {
    mode: 'development',
    build: {
      emptyOutDir: false,
      watch: {},
      target: 'chrome102',
    },
    logLevel: 'warn',
    configFile: path.join(__dirname, '..', 'vite.config.ts'),
    define: {
      IS_ELECTRON: true,
      IS_PRODUCTION: false,
    },
  };
  const devServer = await createServer(serverConfig);
  await devServer.listen();
  const { port } = devServer.config.server;
  process.env.VITE_DEV_SERVER_URL = `http://localhost:${port}/`;
}

async function buildMainProcessBundle() {
  const result = await esbuild.build({
    entryPoints: [path.join(srcFolderPath, 'main/main.ts')],
    outfile: path.join(outFolderPath, 'main.js'),
    bundle: true,
    sourcemap: true,
    platform: 'node',
    target: 'node16',
    external: ['electron'],
    metafile: true,
    define: {
      IS_PRODUCTION: false,
    },
  });

  const files = Object.keys(result.metafile.inputs);
  return files;
}

async function buildMainProcessBundles() {
  const mainFiles = await buildMainProcessBundle();
  const files = [...new Set([...mainFiles])];

  return files;
}

async function buildAndWatchMainProcessBundles() {
  const files = await buildMainProcessBundles();
  const watcher = chokidar.watch(files);
  watcher.on('change', async () => {
    try {
      await buildMainProcessBundles();
    } catch (error) {
    } finally {
      restartElectron();
    }
  });
}

(async () => {
  try {
    await Promise.all([buildAndWatchRendererProcessBundle(), buildAndWatchMainProcessBundles()]);
    startElectron();
  } catch (error) {
    devLogger.error(error, { timestamp: true });
    process.exit(1);
  }
})();
