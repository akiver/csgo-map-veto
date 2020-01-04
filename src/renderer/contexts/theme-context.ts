import { createContext } from 'react'

type Theme = {
  dark: '#222' | '#fff'
  light: '#333' | '#f5f5f5'
  darkInversed: '#222' | '#fff'
  lightInversed: '#333' | '#f5f5f5'
  primary: '#1976d2' | '#90caf9'
  danger: '#f56565'
  success: '#48bb78'
  warning: '#ed8936'
}

const THEME_DARK = 'dark'
const THEME_LIGHT = 'light'
type ThemesKeys = typeof THEME_DARK | typeof THEME_LIGHT

type Themes = {
  [THEME_DARK]: Theme
  [THEME_LIGHT]: Theme
}

const themes: Themes = {
  [THEME_LIGHT]: {
    dark: '#fff',
    darkInversed: '#222',
    light: '#f5f5f5',
    lightInversed: '#333',
    primary: '#1976d2',
    danger: '#f56565',
    success: '#48bb78',
    warning: '#ed8936',
  },
  [THEME_DARK]: {
    dark: '#222',
    darkInversed: '#fff',
    light: '#333',
    lightInversed: '#f5f5f5',
    primary: '#90caf9',
    danger: '#f56565',
    success: '#48bb78',
    warning: '#ed8936',
  },
}

type ThemeContext = {
  theme: Theme
  toggleTheme: () => void
}

const AppThemeContext = createContext<ThemeContext>({
  theme: themes[THEME_DARK],
  toggleTheme: () => {}, // eslint-disable-line
})

export { Theme, THEME_DARK, THEME_LIGHT, ThemesKeys, AppThemeContext, themes }
