import React from 'react';
import { InputText } from 'renderer/components/input-text';
import { useDispatch } from 'renderer/use-dispatch';
import { teamName2Changed } from '../veto-actions';
import { useVeto } from '../use-veto';

export function InputTeamTwoName() {
  const dispatch = useDispatch();
  const { teamTwoName } = useVeto();
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(teamName2Changed(event.target.value));
  };

  return (
    <InputText
      id="input-team2"
      value={teamTwoName}
      onChange={onChange}
      label="Team 2"
      placeholder="Team 2"
      data-testid="input-team-2"
    />
  );
}
