import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { Text } from 'renderer/components/text'
import { VoteRowAction } from 'renderer/veto/components/vote-row-action'
import { Theme } from 'renderer/contexts/theme-context'
import { VoteTypes, VoteType } from 'renderer/types/vote-type'
import { Vote } from 'renderer/types/vote'
import { VoteStatuses } from 'renderer/types/vote-status'
import { getVoteTypeText } from 'renderer/utils/get-vote-type-text'
import { getTeamName } from 'renderer/veto/selectors/get-team-name'
import { StoreState } from 'renderer/Store'
import { makeRandomVote } from 'renderer/veto/actions/make-random-vote'

const getRowColor = (voteType: VoteType, theme: Theme) => {
  if (voteType === VoteTypes.BAN) {
    return theme.danger
  }

  if (voteType === VoteTypes.PICK) {
    return theme.success
  }

  return theme.warning
}

const StyledVoteRow = styled.div<{ vote: Vote; theme: Theme }>`
  display: flex;
  flex: none;
  align-items: center;
  border-radius: 4px;
  margin-bottom: 10px;
  background-color: ${({ vote, theme }) => getRowColor(vote.type, theme)};
  padding: 10px 20px 10px 20px;
`

const VoteRowContent = styled.div`
  display: flex;
  flex: 1;
  height: 60px;
  align-items: center;
`

const Status = styled(Text)`
  margin-left: 10px;
  text-transform: uppercase;
`

const getVoteText = (vote: Vote) => {
  if (vote.status === VoteStatuses.DONE) {
    return `${getVoteTypeText(vote.type)} ${vote.mapName}`
  }

  return vote.type
}

type Props = {
  vote: Vote
}

const VoteRow = ({ vote }: Props) => {
  const teamName = useSelector((state: StoreState) => getTeamName(state, vote.teamNumber))
  const dispatch = useDispatch()
  const isCurrentVote = vote.status === VoteStatuses.CURRENT
  const isRandomVote = vote.type === VoteTypes.RANDOM

  useEffect(() => {
    if (isCurrentVote && isRandomVote) {
      dispatch(makeRandomVote())
    }
  })

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
  )
}

export { VoteRow }
