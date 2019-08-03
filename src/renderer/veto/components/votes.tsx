import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { VoteRow } from 'renderer/veto/components/vote-row'
import { getVotes } from 'renderer/veto/selectors/get-votes'

const VotesWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Votes = () => {
  const votes = useSelector(getVotes)
  return (
    <VotesWrapper>
      {votes.map(vote => (
        <VoteRow vote={vote} key={`vote-${vote.id}`} />
      ))}
    </VotesWrapper>
  )
}

export { Votes }
