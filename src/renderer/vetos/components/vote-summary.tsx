import React from 'react';
import styled from 'styled-components';
import { Vote } from 'renderer/vetos/types/vote';
import { Text } from 'renderer/components/text';
import { MapImage } from 'renderer/components/map-image';
import { VoteType, VoteTypes } from 'renderer/types/vote-type';
import { Theme } from 'renderer/contexts/theme-context';
import { getVoteTypeText } from 'renderer/utils/get-vote-type-text';
import { getTeamNameByTeamNumber } from 'renderer/utils/get-team-name-from-team-number';

const StyledVoteSummary = styled.div<{ theme: Theme; voteType: VoteType }>`
  display: flex;
  align-items: center;
  padding: 10px 20px 10px 20px;
  background-color: ${({ theme, voteType }) => {
    return voteType === VoteTypes.BAN ? theme.danger : theme.success;
  }};
  ${Text} {
    color: ${({ theme }) => theme.dark};
  }
  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.light};
  }
`;

const StyledVoteType = styled(Text)`
  margin-left: 5px;
  margin-right: 5px;
`;

const StyledMapImage = styled(MapImage)`
  height: 40px;
  margin-right: 10px;
`;

type Props = {
  teamOneName: string;
  teamTwoName: string;
  vote: Vote;
};

const VoteSummary = ({ vote, teamOneName, teamTwoName }: Props) => {
  return (
    <StyledVoteSummary voteType={vote.type} data-testid={`vote-${vote.id}`}>
      <StyledMapImage mapName={vote.mapName} />
      <Text>{getTeamNameByTeamNumber(vote.teamNumber, teamOneName, teamTwoName)}</Text>
      <StyledVoteType>{getVoteTypeText(vote.type)}</StyledVoteType>
      <Text>{vote.mapName}</Text>
    </StyledVoteSummary>
  );
};

export { VoteSummary };
