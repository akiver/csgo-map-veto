import { vi } from 'vitest';
import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '../button';

describe('Button', () => {
  const onClick = vi.fn();
  const text = 'A button';
  const createComponent = (props = {}) => (
    <Button onClick={onClick} {...props}>
      A button
    </Button>
  );

  it('should render a clickable button', async () => {
    const { getByText } = render(createComponent());

    const user = userEvent.setup();
    const button = getByText(text);
    await user.click(button);

    expect(button).toBeInTheDocument();
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  describe('when disabled', () => {
    it('should have disabled styles', () => {
      const { getByText } = render(createComponent({ isDisabled: true }));
      const button = getByText(text);

      expect(button).toBeDisabled();
      expect(button).toHaveStyle('opacity: 0.5; cursor: not-allowed;');
    });
  });
});
