import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

export function renderWithRouter(ui: React.ReactNode) {
  return render(
    <MemoryRouter initialEntries={['/', '/vetos']} initialIndex={0}>
      {ui}
    </MemoryRouter>
  );
}
