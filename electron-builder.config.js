/**
 * @type {import('electron-builder').Configuration}
 * @see https://www.electron.build/configuration/configuration
 */
const config = {
  appId: 'com.akiver.csgomapveto',
  productName: 'CSGO Map Veto',
  copyright: 'Copyright © 2019-present AkiVer',
  mac: {
    category: 'public.app-category.utilities',
    identity: null,
  },
  linux: {
    target: ['deb', 'snap', 'AppImage'],
  },
  directories: {
    output: 'dist',
    buildResources: 'resources',
  },
  files: [
    'package.json',
    {
      from: 'out',
      to: '.',
    },
  ],
};

module.exports = config;
