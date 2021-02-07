require('dotenv').config(); // eslint-disable-line
const { startAndTest } = require('start-server-and-test'); // eslint-disable-line

startAndTest({
  services: [
    {
      start: 'yarn dev',
      url: `http-get://localhost:${process.env.DEV_SERVER_PORT || 8080}`,
    },
  ],
  test: 'yarn cy:open',
});
