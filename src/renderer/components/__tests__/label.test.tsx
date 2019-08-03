import React from 'react'
import { render } from '@testing-library/react'
import { renderWithTheme } from 'test/utils'
import { themes } from 'renderer/contexts/theme-context'
import { Label } from '../label'

describe('Label', () => {
  it('should render', () => {
    const { getByText } = render(<Label id="an-id" label="A label" />)

    const label = getByText('A label')
    expect(label).toBeTruthy()
    expect(label).toHaveAttribute('for', 'an-id')
  })

  it('should render with dark theme', () => {
    const { container } = renderWithTheme(<Label id="an-id" label="A label" />, themes.dark)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render with light theme', () => {
    const { container } = renderWithTheme(<Label id="an-id" label="A label" />, themes.light)

    expect(container.firstChild).toMatchSnapshot()
  })
})
