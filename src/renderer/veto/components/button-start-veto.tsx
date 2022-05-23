import React from 'react';
import { Button } from 'renderer/components/button';
import { useDispatch } from 'renderer/use-dispatch';
import { useVeto } from '../use-veto';
import { startVeto, startVetoError } from '../veto-actions';

function useStartVeto() {
  const dispatch = useDispatch();
  const { teamOneName, teamTwoName, mapNames, bestOfMode } = useVeto();

  return () => {
    try {
      if (mapNames.length < bestOfMode.votes.length) {
        throw new Error('Wrong maps number selected.');
      }
      if (teamOneName.length === 0 || teamTwoName.length === 0) {
        throw new Error('You have to specify teams name.');
      }

      dispatch(
        startVeto({
          mode: bestOfMode,
          mapNames,
        })
      );
    } catch (error) {
      dispatch(startVetoError(error instanceof Error ? error.message : 'An error occurred'));
    }
  };
}

export function ButtonStartVeto() {
  const startVeto = useStartVeto();

  return (
    <Button onClick={startVeto} data-testid="button-start-veto">
      Start
    </Button>
  );
}
