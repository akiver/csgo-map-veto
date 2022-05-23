import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { Modal } from '../modal';
import { vi } from 'vitest';

describe('Modal', () => {
  const handleClose = vi.fn();

  const renderComponent = () => render(<Modal onClose={handleClose}>Content</Modal>);

  beforeEach(() => {
    handleClose.mockReset();
    cleanup();
  });

  it('should render modal content', () => {
    const { getByText } = renderComponent();

    expect(getByText('Content')).toBeInTheDocument();
  });

  it('should handle background click', () => {
    const { getByTestId } = renderComponent();

    fireEvent.click(getByTestId('modal-background'));

    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('should handle click on the modal content', () => {
    const { getByText } = renderComponent();

    fireEvent.click(getByText('Content'));

    expect(handleClose).toHaveBeenCalledTimes(0);
  });

  it('remove the node from the document when it unmounts', () => {
    const { getByTestId, unmount } = renderComponent();
    const portalNode = getByTestId('modal-background');

    expect(document.body.contains(portalNode)).toBe(true);

    unmount();

    expect(document.body.contains(portalNode)).toBe(false);
  });
});
