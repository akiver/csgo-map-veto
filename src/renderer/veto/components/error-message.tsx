import React from 'react';
import styled from 'styled-components';
import { Text } from 'renderer/components/text';
import { useVeto } from '../use-veto';

const Wrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.danger};
  border-radius: 4px;
  padding: 10px;
`;

export function ErrorMessage() {
  const { error } = useVeto();

  if (error === undefined) {
    return null;
  }

  return (
    <Wrapper>
      <Text size="lg" color="danger">
        {error}
      </Text>
    </Wrapper>
  );
}
