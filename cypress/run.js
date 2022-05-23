const { createServer, createLogger } = require('vite');
const path = require('path');
const cypress = require('cypress');

const logger = createLogger('info', {
  prefix: '[dev]',
});

async function startViteServer() {
  /** @type {import('vite').InlineConfig} */
  const viteServer = {
    mode: 'development',
    configFile: path.join(__dirname, '..', 'vite.config.ts'),
  };
  const devServer = await createServer(viteServer);
  await devServer.listen();
  const { port } = devServer.config.server;
  logger.info(`Vite server listening at http://localhost:${port}`);

  return port;
}

async function openCypress(port) {
  logger.info('Opening Cypress...');
  await cypress.open({
    browser: 'chrome',
    config: {
      baseUrl: `http://localhost:${port}`,
    },
  });
  process.exit(0);
}

async function runCypress(port) {
  try {
    logger.info('Running Cypress...');
    let spec = undefined;
    if (process.argv.length === 3) {
      spec = process.argv[2];
    }

    const result = await cypress.run({
      browser: 'chrome',
      spec,
      config: {
        baseUrl: `http://localhost:${port}`,
        video: false,
      },
    });

    if (result.failures) {
      logger.error('Could not execute tests');
      logger.error(result.message);
      process.exit(result.failures);
    }

    process.exit(result.totalFailed);
  } catch (error) {
    logger.error(error.message);
    process.exit(1);
  }
}

async function main() {
  const port = await startViteServer();
  if (process.argv.includes('--open')) {
    await openCypress(port);
  } else {
    await runCypress(port);
  }
}

main();
