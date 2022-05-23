import React from 'react';
import styled from 'styled-components';
import { Text } from 'renderer/components/text';
import { DeleteVetoButton } from 'renderer/vetos/components/delete-veto-button';
import { Veto } from 'renderer/vetos/types/veto';
import { BestOfText } from 'renderer/vetos/components/best-of-text';
import { VoteSummary } from 'renderer/vetos/components/vote-summary';

const StyledVetoEntry = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.light};
  word-break: break-all;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  padding: 10px 20px 10px 20px;
  flex-wrap: wrap;
`;

const TeamName = styled(Text)`
  margin-left: 10px;
  margin-right: 10px;
`;

const Date = styled(Text)`
  margin-right: 10px;
`;

const Votes = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

function getFormattedDate(date: Date) {
  return date.toLocaleDateString('default', {
    year: 'numeric',
    day: '2-digit',
    month: '2-digit',
  });
}

type Props = {
  veto: Veto;
};

export function VetoEntry({ veto }: Props) {
  return (
    <StyledVetoEntry data-testid={`veto-${veto.id}`}>
      <Details data-testid={`veto-${veto.id}-detail`}>
        <BestOfText bestOfType={veto.bestOf} />
        <TeamName>{veto.teamOneName}</TeamName>
        <Text>-</Text>
        <TeamName>{veto.teamTwoName}</TeamName>
        <Date>{getFormattedDate(veto.createdAt)}</Date>
        <DeleteVetoButton vetoId={veto.id} />
      </Details>
      <Votes>
        {veto.votes.map((vote) => {
          return (
            <VoteSummary
              key={`vote-${veto.id}-${vote.id}`}
              vote={vote}
              teamOneName={veto.teamOneName}
              teamTwoName={veto.teamTwoName}
            />
          );
        })}
      </Votes>
    </StyledVetoEntry>
  );
}
