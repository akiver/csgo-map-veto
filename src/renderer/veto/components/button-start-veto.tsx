import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'renderer/components/button';
import { startVeto } from 'renderer/veto/actions/start-veto';

const ButtonStartVeto = () => {
  const dispatch = useDispatch();

  return (
    <Button
      onClick={() => {
        dispatch(startVeto());
      }}
      data-testid="button-start-veto"
    >
      Start
    </Button>
  );
};

export { ButtonStartVeto };
