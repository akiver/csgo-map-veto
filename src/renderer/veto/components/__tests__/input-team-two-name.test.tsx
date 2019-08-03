import React from 'react'
import { renderWithRedux } from 'test/render-with-redux'
import { fireEvent } from '@testing-library/react'
import { InputTeamTwoName } from '../input-team-two-name'

describe('InputTeamTwoName', () => {
  const renderComponent = () => {
    return renderWithRedux(<InputTeamTwoName />)
  }

  it('should have a placeholder', () => {
    const { getByLabelText } = renderComponent()
    const input = getByLabelText('Team 2') as HTMLInputElement

    expect(input.placeholder).toEqual('Team 2')
  })

  it('should update the team two name', () => {
    const { getByLabelText } = renderComponent()
    const input = getByLabelText('Team 2') as HTMLInputElement

    fireEvent.change(input, { target: { value: 'Toto' } })

    expect(input.value).toEqual('Toto')
  })
})
