require('dotenv').config();
const path = require('path'); // eslint-disable-line
const HtmlWebpackPlugin = require('html-webpack-plugin'); // eslint-disable-line
const CopyPlugin = require('copy-webpack-plugin'); // eslint-disable-line
const webpack = require('webpack'); // eslint-disable-line
const APP_VERSION = require('./package.json').version;
const GITHUB_URL = require('./package.json').homepage;

module.exports = (env, { mode = 'development' }) => {
  const isProduction = mode === 'production';

  return {
    devtool: isProduction ? false : 'cheap-module-source-map',

    entry: './src/renderer/index.tsx',

    mode,

    output: {
      path: path.join(__dirname, 'dist'),
      publicPath: isProduction ? '' : '/',
      filename: 'bundle.js',
    },

    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
      alias: {
        main: path.resolve(__dirname, 'src/main'),
        renderer: path.resolve(__dirname, 'src/renderer'),
        static: path.resolve(__dirname, 'static'),
      },
    },

    devServer: {
      port: process.env.DEV_SERVER_PORT,
      overlay: true,
      historyApiFallback: true,
    },

    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'babel-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.ico$/,
          use: 'url-loader',
        },
        {
          test: /\.svg$/,
          use: ['@svgr/webpack'],
        },
        {
          test: /\.feature$/,
          use: [
            {
              loader: 'cypress-cucumber-preprocessor/loader',
            },
          ],
        },
      ],
    },

    plugins: [
      new webpack.DefinePlugin({
        __static: JSON.stringify('.'),
        IS_ELECTRON: JSON.stringify(false),
        APP_VERSION: JSON.stringify(APP_VERSION),
        GITHUB_URL: JSON.stringify(GITHUB_URL),
      }),
      new CopyPlugin({
        patterns: [
          { from: 'static/maps', to: 'maps' },
          { from: 'static/fonts', to: 'fonts' },
        ],
      }),
      new HtmlWebpackPlugin({
        template: 'public/index.html',
        title: 'CSGO Map Veto',
        favicon: 'public/icon.ico',
      }),
    ],
  };
};
