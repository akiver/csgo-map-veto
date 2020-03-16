require('dotenv').config();
const startAndTest = require('start-server-and-test'); // eslint-disable-line

startAndTest({
  start: 'yarn dev',
  url: `http://localhost:${process.env.DEV_SERVER_PORT}`,
  test: 'yarn cy:open',
});
