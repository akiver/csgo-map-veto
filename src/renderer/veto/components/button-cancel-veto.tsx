import React from 'react';
import styled from 'styled-components';
import { Button } from 'renderer/components/button';
import { useDispatch } from 'react-redux';
import { resetVeto } from 'renderer/veto/actions/reset-veto';

const SlyledButtonCancelVeto = styled(Button)`
  background-color: ${(props) => props.theme.danger};
`;

const ButtonCancelVeto = () => {
  const dispatch = useDispatch();
  return (
    <SlyledButtonCancelVeto
      onClick={() => {
        dispatch(resetVeto());
      }}
    >
      Cancel
    </SlyledButtonCancelVeto>
  );
};

export { ButtonCancelVeto };
