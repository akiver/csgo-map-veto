import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { InputText } from 'renderer/components/input-text'
import { getTeamOneName } from 'renderer/veto/selectors/get-team-one-name'
import { updateTeamOneName } from 'renderer/veto/actions/update-team-one-name'

type Props = {
  children?: never
}

const InputTeamOneName = ({  }: Props) => {
  const dispatch = useDispatch()
  const teamName = useSelector(getTeamOneName)

  return (
    <InputText
      id="input-team1"
      value={teamName}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(updateTeamOneName(e.target.value))
      }}
      label="Team 1"
      placeholder="Team 1"
      data-testid="input-team-1"
    />
  )
}

export { InputTeamOneName }
