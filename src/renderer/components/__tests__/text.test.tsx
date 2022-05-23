import React from 'react';
import { renderWithTheme } from 'test/render-with-theme';
import { Text } from '../text';

describe('Text', () => {
  it('should render text', () => {
    const { getByText } = renderWithTheme(<Text>A text</Text>);

    expect(getByText('A text')).toBeTruthy();
  });
});
