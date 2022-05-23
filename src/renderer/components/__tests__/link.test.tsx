import React from 'react';
import { Routes, Route } from 'react-router';
import { fireEvent, cleanup } from '@testing-library/react';
import { renderWithRouter } from 'test/render-with-router';
import { Link } from '../link';

describe('Link', () => {
  afterEach(cleanup);

  it('should redirect', () => {
    const { getByText } = renderWithRouter(
      <>
        <Routes>
          <Route path="/" element={<p>Home</p>} />
          <Route path="/other" element={<p>Other</p>} />
        </Routes>
        <Link to="/other">Fake link</Link>
      </>
    );

    expect(getByText('Home')).toBeTruthy();

    fireEvent.click(getByText('Fake link'));

    expect(getByText('Other')).toBeTruthy();
  });
});
