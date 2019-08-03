import React from 'react'
import { renderWithTheme } from 'test/utils'
import { themes } from 'renderer/contexts/theme-context'
import { Text } from '../text'

describe('Text', () => {
  it('should render text', () => {
    const { getByText } = renderWithTheme(<Text>A text</Text>)

    expect(getByText('A text')).toBeTruthy()
  })

  it('should render with dark theme', () => {
    const { container } = renderWithTheme(<Text>A text</Text>, themes.dark)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render with light theme', () => {
    const { container } = renderWithTheme(<Text>A text</Text>, themes.light)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render with custom styles properties', () => {
    const { container } = renderWithTheme(
      <Text isBold={true} isUppercase={true} textAlign="center" size="xl">
        A text
      </Text>,
      themes.light
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
