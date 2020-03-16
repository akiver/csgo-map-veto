import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Footer } from '../footer';

const mockOpenExternal = jest.fn();

jest.mock('electron', () => {
  return {
    shell: {
      openExternal: mockOpenExternal,
    },
    ipcRenderer: {
      on: jest.fn(),
    },
  };
});

describe('Footer', () => {
  const renderComponent = () => render(<Footer />);

  it('should display credits', () => {
    const { findByText } = renderComponent();

    expect(findByText('CSGO Map Veto v15 by Akiver')).toBeDefined();
  });

  describe('GitHub link', () => {
    it('should have a link to GitHub', () => {
      const { getByRole } = renderComponent();

      expect(getByRole('button')).toBeInTheDocument();
    });

    describe('on web environment', () => {
      it('should redirect to GitHub on click', () => {
        global.open = jest.fn();
        global.IS_ELECTRON = false;
        const { getByRole } = renderComponent();

        const link = getByRole('button');
        fireEvent.click(link);

        expect(global.open).toHaveBeenLastCalledWith('https://github.com');
      });
    });

    describe('on Electron environment', () => {
      it('should redirect to GitHub on click', () => {
        global.IS_ELECTRON = true;
        const { getByRole } = renderComponent();

        const link = getByRole('button');
        fireEvent.click(link);

        expect(mockOpenExternal).toHaveBeenLastCalledWith('https://github.com');
      });
    });
  });
});
