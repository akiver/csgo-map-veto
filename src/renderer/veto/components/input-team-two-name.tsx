import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { InputText } from 'renderer/components/input-text'
import { getTeamTwoName } from 'renderer/veto/selectors/get-team-two-name'
import { updateTeamTwoName } from 'renderer/veto/actions/update-team-two-name'

type Props = {
  children?: never
}

const InputTeamTwoName = ({  }: Props) => {
  const dispatch = useDispatch()
  const teamName = useSelector(getTeamTwoName)

  return (
    <InputText
      id="input-team2"
      value={teamName}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(updateTeamTwoName(e.target.value))
      }}
      label="Team 2"
      placeholder="Team 2"
      data-testid="input-team-2"
    />
  )
}

export { InputTeamTwoName }
