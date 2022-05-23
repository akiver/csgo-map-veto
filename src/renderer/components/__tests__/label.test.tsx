import React from 'react';
import { render } from '@testing-library/react';
import { Label } from '../label';

describe('Label', () => {
  it('should render', () => {
    const { getByText } = render(<Label id="an-id" label="A label" />);

    const label = getByText('A label');

    expect(label).toBeTruthy();
    expect(label).toHaveAttribute('for', 'an-id');
  });
});
