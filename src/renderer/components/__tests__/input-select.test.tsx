import React from 'react';
import { vi } from 'vitest';
import { fireEvent } from '@testing-library/react';
import { renderWithTheme } from 'test/render-with-theme';
import { InputSelect } from '../input-select';

describe('InputSelect', () => {
  const onChange = vi.fn();
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];
  const { getByText } = renderWithTheme(
    <InputSelect
      classNamePrefix="react-select"
      id="select-id"
      label="A label"
      onChange={onChange}
      options={options}
      value={{ value: 'option1', label: 'Option 1' }}
    />
  );

  it('should handle selection', () => {
    const label = getByText('Option 1');
    fireEvent.mouseDown(label);

    const option = getByText('Option 2');
    fireEvent.click(option);

    expect(onChange).toHaveBeenCalledWith(
      {
        value: 'option2',
        label: 'Option 2',
      },
      { action: 'select-option', name: undefined, option: undefined }
    );
  });
});
