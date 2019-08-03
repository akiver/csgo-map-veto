import React from 'react'
import { Link } from 'renderer/components/link'

const SettingsLink = () => {
  return (
    <Link to="/settings" data-testid="button-settings">
      Settings
    </Link>
  )
}

export { SettingsLink }
