import React, { useState } from 'react';
import { vi } from 'vitest';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { InputText } from '../input-text';

describe('InputText', () => {
  it('should act like an input', async () => {
    function Consumer() {
      const [value, setValue] = useState('a-value');
      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
      };

      return (
        <>
          <InputText label="A label" id="an-id" value={value} onChange={handleChange} placeholder="A placeholder" />
          <p>{value}</p>
        </>
      );
    }

    const { getByText, getByPlaceholderText } = render(<Consumer />);

    expect(getByText('a-value')).toBeTruthy();

    const user = userEvent.setup();
    const input = getByPlaceholderText('A placeholder');
    await user.clear(input);
    await user.type(input, 'new-value');

    expect(getByText('new-value')).toBeTruthy();
  });

  it('should be disabled', () => {
    const { getByLabelText } = render(
      <InputText label="A label" id="an-id" value="a-value" onChange={vi.fn()} isDisabled={true} />
    );

    expect(getByLabelText('A label')).toBeDisabled();
  });
});
