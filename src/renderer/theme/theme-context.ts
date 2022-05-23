import { createContext } from 'react';
import { Theme } from './theme';
import { themes } from './themes';

type ThemeContextState = {
  theme: Theme;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextState>({
  theme: themes.dark,
  toggleTheme: () => {
    throw new Error('toggleTheme not implemented');
  },
});
