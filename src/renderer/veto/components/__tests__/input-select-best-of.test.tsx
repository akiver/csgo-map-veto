import React from 'react';
import { renderWithRedux } from 'test/render-with-redux';
import { InputSelectBestOf } from '../input-select-best-of';
import { AppWithTheme } from 'test/render-with-theme';
import { fireEvent } from '@testing-library/react';

describe('InputSelectBestOf', () => {
  it('should update selected best of', async () => {
    const { getByLabelText, findByText } = renderWithRedux(
      <AppWithTheme>
        <InputSelectBestOf />
      </AppWithTheme>
    );

    const input = getByLabelText('BO') as HTMLInputElement;

    fireEvent.change(input, { target: { value: 5 } });

    expect(await findByText('BO 5')).toBeVisible();
  });
});
