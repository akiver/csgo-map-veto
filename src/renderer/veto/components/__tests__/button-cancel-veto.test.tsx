import React from 'react';
import { ButtonCancelVeto } from '../button-cancel-veto';
import { renderWithRedux } from 'test/render-with-redux';
import { AppWithTheme } from 'test/render-with-theme';

describe('ButtonCancelVeto', () => {
  const { getByRole } = renderWithRedux(
    <AppWithTheme>
      <ButtonCancelVeto />
    </AppWithTheme>
  );

  it('should render', () => {
    const button = getByRole('button');
    expect(button).toHaveTextContent('Cancel');
  });
});
