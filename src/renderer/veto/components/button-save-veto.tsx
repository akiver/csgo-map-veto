import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'renderer/components/button';
import { ModalInformation } from 'renderer/components/modal-information';
import { VetoStatus } from 'renderer/types/veto-status';
import { useApiAddress } from 'renderer/settings/use-api-address';
import { useDispatch } from 'renderer/use-dispatch';
import { useVeto } from '../use-veto';
import { VetoPostRequest } from 'renderer/types/api';
import { resetVeto } from '../veto-actions';

function useBuildRequestParameters() {
  const { teamOneName, teamTwoName, votes, bestOf } = useVeto();

  return () => {
    const parameters: VetoPostRequest = {
      team_one_name: teamOneName,
      team_two_name: teamTwoName,
      best_of: bestOf.value,
      votes: votes.map((vote) => {
        return {
          team_number: vote.teamNumber,
          type: vote.type,
          map_name: vote.mapName,
        };
      }),
    };

    return parameters;
  };
}

function useSaveVeto() {
  const apiAddress = useApiAddress();
  const buildParameters = useBuildRequestParameters();

  return async () => {
    const parameters = buildParameters();
    const response = await fetch(`${apiAddress}/api/vetos`, {
      method: 'POST',
      body: JSON.stringify(parameters),
    });

    if (response.status !== 201) {
      throw new Error('Failed to create veto');
    }
  };
}

export function ButtonSaveVeto() {
  const [error, setError] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const { status } = useVeto();
  const isDisabled = status !== VetoStatus.Completed;
  const saveVeto = useSaveVeto();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClick = async () => {
    try {
      setIsLoading(true);
      await saveVeto();
      dispatch(resetVeto());
      navigate('vetos');
    } catch (error) {
      setError('An error occurred, make sure the database is running and the API address is correct.');
      setIsLoading(false);
    }
  };

  const onClose = () => {
    setError(undefined);
  };

  return (
    <>
      <Button onClick={onClick} isDisabled={isDisabled || isLoading}>
        Save
      </Button>
      {error && <ModalInformation message={error} onClose={onClose} />}
    </>
  );
}
