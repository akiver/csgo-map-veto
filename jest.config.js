module.exports = {
  setupFilesAfterEnv: ['./setupTest.ts'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/cypress/'],
  coveragePathIgnorePatterns: ['<rootDir>/test/'],
  moduleNameMapper: {
    '\\.svg': '<rootDir>/__mocks__/svg.ts',
    '^renderer(.*)$': '<rootDir>/src/renderer$1',
    '^test(.*)$': '<rootDir>/test$1',
  },
  globals: {
    APP_VERSION: 15,
    GITHUB_URL: 'https://github.com',
    IS_ELECTRON: false,
  },
}
