import 'regenerator-runtime/runtime';
import React, { useState, useEffect } from 'react';
import { Router } from 'react-router-dom';
import { createHashHistory, createBrowserHistory } from 'history';
import styled, { ThemeProvider } from 'styled-components';
import { ResetCSS } from 'renderer/styles/reset-css';
import { GlobalStyles } from 'renderer/styles/global-styles';
import { AppThemeContext, themes, Theme, THEME_DARK, THEME_LIGHT, ThemesKeys } from 'renderer/contexts/theme-context';
import { KEY_THEME } from 'renderer/constants/local-storage';
import { Routes } from 'renderer/routes';
import { Footer } from 'renderer/components/footer';

const AppWrapper = styled.div<{ theme: Theme }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  min-height: 100%;
  background-color: ${({ theme }) => theme.dark};
  box-sizing: border-box;
`;

const Content = styled.div`
  height: 100%;
  width: 100%;
  margin-bottom: 40px;
`;

const history = IS_ELECTRON || process.env.NODE_ENV === 'production' ? createHashHistory() : createBrowserHistory();

const App = () => {
  const [theme, setTheme] = useState(themes.dark);

  useEffect(() => {
    const themeKey = localStorage.getItem(KEY_THEME) as ThemesKeys | null;
    if (themeKey !== null) {
      setTheme(themes[themeKey]);
    }
  }, []);

  return (
    <AppThemeContext.Provider
      value={{
        theme,
        toggleTheme: () => {
          const themeKey = theme === themes[THEME_DARK] ? THEME_LIGHT : THEME_DARK;
          setTheme(themes[themeKey]);
          localStorage.setItem(KEY_THEME, themeKey);
        },
      }}
    >
      <ThemeProvider theme={theme}>
        <AppWrapper>
          <ResetCSS />
          <GlobalStyles />
          <Router history={history}>
            <Content>
              <Routes />
            </Content>
          </Router>
          <Footer />
        </AppWrapper>
      </ThemeProvider>
    </AppThemeContext.Provider>
  );
};

export { App };
