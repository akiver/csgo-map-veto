import React from 'react'
import { AppThemeContext } from 'renderer/contexts/theme-context'
import { Button } from 'renderer/components/button'

const ButtonToggleTheme = () => {
  return (
    <AppThemeContext.Consumer>
      {({ toggleTheme }) => (
        <Button onClick={toggleTheme} data-testid="button-toggle-theme">
          Toggle theme
        </Button>
      )}
    </AppThemeContext.Consumer>
  )
}

export { ButtonToggleTheme }
