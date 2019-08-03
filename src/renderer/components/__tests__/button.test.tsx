import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { Button } from '../button'

describe('Button', () => {
  const onClick = jest.fn()
  const text = 'A button'
  const createComponent = (props = {}) => (
    <Button onClick={onClick} {...props}>
      A button
    </Button>
  )

  it('should render a clickable button', () => {
    const { getByText } = render(createComponent())

    const button = getByText(text)
    fireEvent.click(button)

    expect(button).toBeInTheDocument()
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  describe('when disabled', () => {
    it('should have disabled styles', () => {
      const { getByText } = render(createComponent({ isDisabled: true }))
      const button = getByText(text)

      expect(button).toBeDisabled()
      expect(button).toHaveStyle('opacity: 0.5; cursor: not-allowed;')
    })
  })
})
