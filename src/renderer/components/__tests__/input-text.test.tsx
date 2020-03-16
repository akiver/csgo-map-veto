import React, { useState } from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { InputText } from '../input-text';

describe('InputText', () => {
  afterEach(cleanup);

  const Consumer = () => {
    const [value, setValue] = useState('a-value');
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    };

    return (
      <>
        <InputText label="A label" id="an-id" value="a-value" onChange={handleChange} placeholder="A placeholder" />
        <p>{value}</p>
      </>
    );
  };

  const { getByLabelText, getByText, getByPlaceholderText } = render(<Consumer />);

  it('should act like an input', () => {
    expect(getByText('a-value')).toBeTruthy();
    expect(getByPlaceholderText('A placeholder')).toBeTruthy();

    const input = getByLabelText('A label');
    fireEvent.change(input, { target: { value: 'new-value' } });

    expect(getByText('new-value')).toBeTruthy();
  });

  it('should be disabled', () => {
    const { getByLabelText } = render(
      <InputText label="A label" id="an-id" value="a-value" onChange={jest.fn()} isDisabled={true} />
    );

    expect(getByLabelText('A label')).toBeDisabled();
  });
});
