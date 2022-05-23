import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, RenderOptions } from '@testing-library/react';
import { Theme } from 'renderer/theme/theme';
import { themes } from 'renderer/theme/themes';
import { ThemeContext } from 'renderer/theme/theme-context';

export function AppWithTheme({ children, theme = themes.dark }: { children: React.ReactNode; theme?: Theme }) {
  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme: () => {
          throw new Error('toggleTheme not implemented');
        },
      }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}

export function renderWithTheme(ui: React.ReactNode, theme: Theme = themes.dark, options?: RenderOptions) {
  return render(
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme: () => {
          throw new Error('toggleTheme not implemented');
        },
      }}
    >
      <ThemeProvider theme={theme}>{ui}</ThemeProvider>
    </ThemeContext.Provider>,
    options
  );
}
