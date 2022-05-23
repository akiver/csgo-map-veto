import React from 'react';
import { Routes, Route, HashRouter, BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import { Footer } from 'renderer/components/footer';
import { VetoViewSwitcher } from 'renderer/veto/components/veto-view-switcher';
import { Settings } from 'renderer/settings/components/settings';
import { VetosRoute } from 'renderer/vetos/vetos-route';
import { ThemeProvider } from 'renderer/theme/theme-provider';

const AppWrapper = styled.div`
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

const Router = IS_ELECTRON ? HashRouter : BrowserRouter;

export function App() {
  return (
    <ThemeProvider>
      <AppWrapper>
        <Router>
          <Content>
            <Routes>
              <Route path="/" element={<VetoViewSwitcher />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/vetos" element={<VetosRoute />} />
            </Routes>
          </Content>
        </Router>
        <Footer />
      </AppWrapper>
    </ThemeProvider>
  );
}
