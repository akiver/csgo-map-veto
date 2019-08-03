import { createGlobalStyle } from 'styled-components'
import { Theme } from 'renderer/contexts/theme-context'
// Force to use file-loader because electron-webpack internally uses url-loader for fonts
// which doesn't work in production mode.
import lato from '!!file-loader!static/fonts/Lato-Regular.ttf'
import latoBold from '!!file-loader!static/fonts/Lato-Bold.ttf'

const GlobalStyles = createGlobalStyle<{ theme: Theme }>`
  @font-face {
     font-family: 'Lato';
     src: url(${lato});
  }

  @font-face {
    font-family: 'Lato-bold';
    src: url(${latoBold});
  }

  html {
    font-size: 16px;
    background-color: ${({ theme }) => theme.dark};
    box-sizing: border-box;
  }

  body {
    font-family: 'Lato';
  }

  body, html, #app {
    height: 100%;
  }

  img {
    max-width: 100%;
    max-height: 100%;
  }
`
export { GlobalStyles }
