import React, { useContext } from 'react';
import { ThemeContext } from 'renderer/theme/theme-context';
import { Button } from 'renderer/components/button';

export function ButtonToggleTheme() {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <Button onClick={toggleTheme} data-testid="button-toggle-theme">
      Toggle theme
    </Button>
  );
}
