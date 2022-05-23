import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Text } from 'renderer/components/text';
import { VoteRowAction } from 'renderer/veto/components/vote-row-action';
import { VoteType } from 'renderer/types/vote-type';
import { Vote } from 'renderer/types/vote';
import { VoteStatus } from 'renderer/types/vote-status';
import { getVoteTypeText } from 'renderer/utils/get-vote-type-text';
import { useVeto } from '../use-veto';
import { getTeamNameByTeamNumber } from 'renderer/utils/get-team-name-from-team-number';
import { TeamNumber } from 'renderer/types/team-number';
import { useDispatch } from 'renderer/use-dispatch';
import { makeVote } from '../veto-actions';
import { useRemainingMapNames } from '../use-remaining-map-names';

const StyledVoteRow = styled.div<{ vote: Vote }>`
  display: flex;
  flex: none;
  align-items: center;
  border-radius: 4px;
  margin-bottom: 10px;
  padding: 10px 20px 10px 20px;
  background-color: ${({ vote, theme }) => {
    if (vote.type === VoteType.Ban) {
      return theme.danger;
    }

    if (vote.type === VoteType.Pick) {
      return theme.success;
    }

    return theme.warning;
  }};
`;

const VoteRowContent = styled.div`
  display: flex;
  flex: 1;
  height: 60px;
  align-items: center;
`;

const Status = styled(Text)`
  margin-left: 10px;
  text-transform: uppercase;
`;

function getVoteText(vote: Vote) {
  if (vote.status === VoteStatus.Done) {
    return `${getVoteTypeText(vote.type)} ${vote.mapName}`;
  }

  return vote.type;
}

function useTeamName(teamNumber: TeamNumber) {
  const { teamOneName, teamTwoName } = useVeto();

  return getTeamNameByTeamNumber(teamNumber, teamOneName, teamTwoName);
}

function useGetRandomMapName() {
  const remainingMapNames = useRemainingMapNames();
  const randomIndex = Math.floor(Math.random() * (remainingMapNames.length - 0));
  const mapName = remainingMapNames[randomIndex];

  return mapName;
}

type Props = {
  vote: Vote;
};

export function VoteRow({ vote }: Props) {
  const teamName = useTeamName(vote.teamNumber);
  const dispatch = useDispatch();
  const randomMapName = useGetRandomMapName();
  const isCurrentVote = vote.status === VoteStatus.Current;
  const isRandomVote = vote.type === VoteType.Random;

  useEffect(() => {
    if (isCurrentVote && isRandomVote) {
      dispatch(makeVote(randomMapName));
    }
  });

  return (
    <StyledVoteRow vote={vote} data-testid={`vote-${vote.id}-${vote.status}`}>
      <VoteRowContent>
        <Text size="lg" color="dark" isBold={true}>
          {teamName}
        </Text>
        <Status size="lg" color="dark">
          {getVoteText(vote)}
        </Status>
        <VoteRowAction vote={vote} />
      </VoteRowContent>
    </StyledVoteRow>
  );
}
