const webpack = require('webpack') // eslint-disable-line
const path = require('path') // eslint-disable-line
const APP_VERSION = require('./package.json').version
const GITHUB_URL = require('./package.json').homepage

module.exports = function(config) {
  // Remove usage of url-loader for .svg files as we want to use @svgr/webpack
  // to be able to import it as usable React component using JSX syntax.
  const svgRule = config.module.rules.find(rule => {
    return rule.test.toString().indexOf('svg') !== -1
  })
  svgRule.test = /\.(png|jpe?g|gif)(\?.*)?$/

  return {
    ...config,
    resolve: {
      ...config.resolve,
      alias: {
        ...config.alias,
        main: path.resolve(__dirname, 'src/main'),
        renderer: path.resolve(__dirname, 'src/renderer'),
        shared: path.resolve(__dirname, 'src/shared'),
        static: path.resolve(__dirname, 'static'),
      },
    },
    module: {
      ...config.module,
      rules: [
        ...config.module.rules,
        {
          test: /\.svg$/,
          use: ['@svgr/webpack'],
        },
      ],
    },
    plugins: [
      ...config.plugins,
      new webpack.DefinePlugin({
        IS_ELECTRON: JSON.stringify(true),
        APP_VERSION: JSON.stringify(APP_VERSION),
        GITHUB_URL: JSON.stringify(GITHUB_URL),
      }),
    ],
  }
}
