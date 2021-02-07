module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint', 'react', 'react-hooks'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  ignorePatterns: [
    '/*.js',
    'node_modules',
    'dist',
    'static',
    'backend',
    '.DS_Store',
    'yarn.lock',
    '*.svg',
    '*.yml',
    '*.png',
    '*.html',
    '*.md',
    '*.jpg',
    '*.mp4',
    '*.feature',
    '*.ico',
    '*.icns',
    'LICENSE',
    '*.log',
  ],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/prefer-interface': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'property',
        format: ['snake_case'],
        filter: '/team_number|map_name|team_one_name|team_two_name|created_at|veto_id|best_of/',
      },
    ],
  },
};
