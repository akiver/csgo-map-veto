import React from 'react'
import styled from 'styled-components'
import { MapImage } from 'renderer/components/map-image'
import { Text } from 'renderer/components/text'
import { Theme } from 'renderer/contexts/theme-context'
import { Map } from 'renderer/types/map'
import Unknown from 'renderer/svg/unknown.svg'

const UnknownMap = styled(Unknown)<{ theme: Theme }>`
  height: 100px;
  margin-left: auto;
  margin-right: auto;
  fill: ${({ theme }) => theme.darkInversed};
`

const MapImageWrapper = styled.div`
  margin-right: 20px;
  margin-bottom: 10px;
`

const StyledMapImage = styled(MapImage)`
  margin-left: auto;
  margin-right: auto;
  height: 100px;
`

type Props = {
  maps: Map[]
}

const Maps = ({ maps }: Props) => {
  return maps.length === 0 ? (
    <MapImageWrapper>
      <UnknownMap title="unknown" data-testid="unknown-map" />
    </MapImageWrapper>
  ) : (
    <>
      {maps.map(map => (
        <MapImageWrapper key={map.name}>
          <StyledMapImage mapName={map.name} />
          <Text size="sm" textAlign="center">
            {map.name}
          </Text>
        </MapImageWrapper>
      ))}
    </>
  )
}

export { Maps }
