import React from 'react'
import { ThemeProvider } from 'styled-components'
import { render, RenderOptions } from '@testing-library/react'
import { themes, AppThemeContext, THEME_DARK, Theme } from 'renderer/contexts/theme-context'

const AppWithTheme = ({
  children,
  theme = themes[THEME_DARK],
}: {
  children: React.ReactElement<any> // eslint-disable-line
  theme?: Theme
}) => {
  return (
    <AppThemeContext.Provider
      value={{
        theme,
        toggleTheme: () => {}, // eslint-disable-line
      }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </AppThemeContext.Provider>
  )
}

const renderWithTheme = (
  ui: React.ReactElement<any>, // eslint-disable-line
  theme: Theme = themes[THEME_DARK],
  options?: Omit<RenderOptions, 'queries'>
) =>
  render(
    <AppThemeContext.Provider
      value={{
        theme,
        toggleTheme: () => {}, // eslint-disable-line
      }}
    >
      <ThemeProvider theme={theme}>{ui}</ThemeProvider>
    </AppThemeContext.Provider>,
    options
  )

export { renderWithTheme, AppWithTheme }
