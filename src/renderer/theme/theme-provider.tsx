import React, { ReactNode, useEffect, useState } from 'react';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import { KEY_THEME, ThemeName, THEME_DARK_NAME, THEME_LIGHT_NAME } from 'renderer/constants/local-storage';
import { Theme } from 'renderer/theme/theme';
import { GlobalStyles } from 'renderer/theme/global-styles';
import { ResetCSS } from 'renderer/theme/reset-css';
import { ThemeContext } from 'renderer/theme/theme-context';
import { themes } from 'renderer/theme/themes';

type Props = {
  children: ReactNode;
};

export function ThemeProvider({ children }: Props) {
  const [theme, setTheme] = useState<Theme>(themes.dark);

  useEffect(() => {
    const themeName = localStorage.getItem(KEY_THEME) as ThemeName | null;
    if (themeName !== null) {
      setTheme(themeName === THEME_LIGHT_NAME ? themes.light : themes.dark);
    }
  }, []);

  const toggleTheme = () => {
    const themeName: ThemeName = theme === themes.dark ? THEME_LIGHT_NAME : THEME_DARK_NAME;
    localStorage.setItem(KEY_THEME, themeName);
    setTheme(themes[themeName]);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      <SCThemeProvider theme={theme}>
        <ResetCSS />
        <GlobalStyles />
        {children}
      </SCThemeProvider>
    </ThemeContext.Provider>
  );
}
