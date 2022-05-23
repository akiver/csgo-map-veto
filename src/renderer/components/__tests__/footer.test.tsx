import React from 'react';
import { render } from '@testing-library/react';
import { Footer } from '../footer';
import pkg from '../../../../package.json';

describe('Footer', () => {
  const renderComponent = () => render(<Footer />);

  it('should display credits', () => {
    const { findByText } = renderComponent();

    expect(findByText('CSGO Map Veto v15 by Akiver')).toBeDefined();
  });

  it('should have a link to the git repository', () => {
    const { getByRole } = renderComponent();

    const link = getByRole('link');

    expect(link).toHaveAttribute('href', pkg.homepage);
  });
});
