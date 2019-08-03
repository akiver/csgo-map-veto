import React from 'react'
import { fireEvent } from '@testing-library/react'
import { renderWithTheme } from 'test/utils'
import { InputSelect } from '../input-select'

describe('InputSelect', () => {
  const onChange = jest.fn()
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ]
  const { getByLabelText, container, getByText } = renderWithTheme(
    <InputSelect
      classNamePrefix="react-select"
      id="select-id"
      label="A label"
      onChange={onChange}
      options={options}
      value="option1"
    />
  )

  it('should handle selection', () => {
    const label = getByLabelText('A label')
    fireEvent.focus(label)

    const control = container.querySelector('.react-select__control') as Element
    fireEvent.mouseDown(control)

    const option = getByText('Option 2')
    fireEvent.click(option)

    expect(onChange).toHaveBeenCalledWith(
      {
        value: 'option2',
        label: 'Option 2',
      },
      { action: 'select-option', name: undefined, option: undefined }
    )
  })
})
