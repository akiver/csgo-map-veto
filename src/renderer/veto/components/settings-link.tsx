import React from 'react';
import { Link } from 'renderer/components/link';

export function SettingsLink() {
  return (
    <Link to="/settings" data-testid="button-settings">
      Settings
    </Link>
  );
}
