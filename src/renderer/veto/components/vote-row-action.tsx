import React, { useState } from 'react'
import styled from 'styled-components'
import { MapImage } from 'renderer/components/map-image'
import { Button } from 'renderer/components/button'
import { VoteStatuses } from 'renderer/types/vote-status'
import { Vote } from 'renderer/types/vote'
import Unknown from 'renderer/svg/unknown.svg'
import { RemainingMapsModal } from 'renderer/veto/components/remaining-maps-modal'

const StyledVoteAction = styled.div`
  margin-left: auto;
`

const VoteMapImage = styled(MapImage)`
  margin-left: auto;
`

const UnknownMapImage = styled(Unknown)`
  margin-left: auto;
  height: 60px;
`

type Props = {
  vote: Vote
}

const VoteRowAction = ({ vote }: Props) => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  if (vote.status === VoteStatuses.CURRENT) {
    return (
      <StyledVoteAction>
        <Button onClick={() => setIsModalVisible(!isModalVisible)} data-testid="select-map-button">
          Select map
        </Button>
        {isModalVisible && <RemainingMapsModal onClose={() => setIsModalVisible(false)} />}
      </StyledVoteAction>
    )
  }

  const { mapName } = vote
  if (!mapName) {
    return <UnknownMapImage title="unknown" />
  }

  return <VoteMapImage mapName={mapName} />
}

export { VoteRowAction }
