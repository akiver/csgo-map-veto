import { createGlobalStyle } from 'styled-components';
import lato from '../fonts/Lato-Regular.ttf';
import latoBold from '../fonts/Lato-Bold.ttf';

export const GlobalStyles = createGlobalStyle`
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
`;
