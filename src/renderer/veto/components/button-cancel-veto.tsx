import React from 'react';
import styled from 'styled-components';
import { Button } from 'renderer/components/button';
import { useDispatch } from 'renderer/use-dispatch';
import { resetVeto } from '../veto-actions';

const SlyledButton = styled(Button)`
  background-color: ${(props) => props.theme.danger};
`;

export function ButtonCancelVeto() {
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(resetVeto());
  };

  return <SlyledButton onClick={onClick}>Cancel</SlyledButton>;
}
