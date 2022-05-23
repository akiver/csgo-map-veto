import { Theme } from 'renderer/theme/theme';

declare module 'styled-components' {
  // eslint-disable-next-line
  interface DefaultTheme extends Theme {}
}
