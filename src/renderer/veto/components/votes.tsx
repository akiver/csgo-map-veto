import React from 'react';
import styled from 'styled-components';
import { VoteRow } from 'renderer/veto/components/vote-row';
import { useVeto } from '../use-veto';

const VotesWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export function Votes() {
  const { votes } = useVeto();

  return (
    <VotesWrapper>
      {votes.map((vote) => (
        <VoteRow vote={vote} key={`vote-${vote.id}`} />
      ))}
    </VotesWrapper>
  );
}
