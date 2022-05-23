import React from 'react';
import { InputText } from 'renderer/components/input-text';
import { useVeto } from '../use-veto';
import { teamName1Changed } from '../veto-actions';
import { useDispatch } from 'renderer/use-dispatch';

export function InputTeamOneName() {
  const dispatch = useDispatch();
  const { teamOneName } = useVeto();
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(teamName1Changed(event.target.value));
  };

  return (
    <InputText
      id="input-team1"
      value={teamOneName}
      onChange={onChange}
      label="Team 1"
      placeholder="Team 1"
      data-testid="input-team-1"
    />
  );
}
