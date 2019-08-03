import { Theme } from 'renderer/contexts/theme-context'

declare module 'styled-components' {
  // eslint-disable-next-line
  interface DefaultTheme extends Theme {}
}
