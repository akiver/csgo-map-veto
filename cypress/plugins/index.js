require('dotenv').config()
const webpack = require('@cypress/webpack-preprocessor') // eslint-disable-line
const webpackConfig = require('../../webpack.web.js') // eslint-disable-line

module.exports = (on, config) => {
  const options = {
    webpackOptions: webpackConfig('test', 'development'),
  }
  on('file:preprocessor', webpack(options))

  config.baseUrl = `http://localhost:${process.env.DEV_SERVER_PORT}`

  return config
}
