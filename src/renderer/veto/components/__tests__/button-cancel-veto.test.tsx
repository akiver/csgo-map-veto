import React from 'react'
import { ButtonCancelVeto } from '../button-cancel-veto'
import { renderWithRedux } from 'test/render-with-redux'

describe('ButtonCancelVeto', () => {
  const { getByText } = renderWithRedux(<ButtonCancelVeto />)

  it('should render', () => {
    expect(getByText('Cancel')).toBeTruthy()
  })
})
