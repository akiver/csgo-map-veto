import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ModalInformation } from '../modal-information';
import { vi } from 'vitest';

describe('ModalInformation', () => {
  const renderComponent = (
    props = {
      handleClose: vi.fn(),
    }
  ) => render(<ModalInformation onClose={props.handleClose} message="A message" />);

  it('should render a message and a close button', () => {
    const { getByText, getByRole } = renderComponent();

    expect(getByText('A message')).toBeInTheDocument();
    expect(getByText(/close/i)).toBeInTheDocument();
    expect(getByRole('button')).toBeInTheDocument();
  });

  it('should handle a click on the close button', () => {
    const handleClose = vi.fn();
    const { getByText } = renderComponent({ handleClose });

    fireEvent.click(getByText(/close/i));

    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
