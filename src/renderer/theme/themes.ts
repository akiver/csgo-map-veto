import { Theme } from './theme';

export const themes: {
  dark: Theme;
  light: Theme;
} = {
  light: {
    dark: '#fff',
    darkInversed: '#222',
    light: '#f5f5f5',
    lightInversed: '#333',
    primary: '#1976d2',
    danger: '#f56565',
    success: '#48bb78',
    warning: '#ed8936',
  },
  dark: {
    dark: '#222',
    darkInversed: '#fff',
    light: '#333',
    lightInversed: '#f5f5f5',
    primary: '#90caf9',
    danger: '#f56565',
    success: '#48bb78',
    warning: '#ed8936',
  },
};
