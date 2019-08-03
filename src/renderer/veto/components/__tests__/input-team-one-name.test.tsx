import React from 'react'
import { renderWithRedux } from 'test/render-with-redux'
import { fireEvent } from '@testing-library/react'
import { InputTeamOneName } from '../input-team-one-name'

describe('InputTeamOneName', () => {
  const renderComponent = () => {
    return renderWithRedux(<InputTeamOneName />)
  }

  it('should have a placeholder', () => {
    const { getByLabelText } = renderComponent()
    const input = getByLabelText('Team 1') as HTMLInputElement

    expect(input.placeholder).toEqual('Team 1')
  })

  it('should update the team one name', () => {
    const { getByLabelText } = renderComponent()
    const input = getByLabelText('Team 1') as HTMLInputElement

    fireEvent.change(input, { target: { value: 'Toto' } })

    expect(input.value).toEqual('Toto')
  })
})
