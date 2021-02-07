module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
  plugins: [
    [
      'babel-plugin-styled-components',
      {
        displayName: process.env.MODE !== 'production',
        fileName: process.env.MODE !== 'production',
      },
    ],
  ],
};
