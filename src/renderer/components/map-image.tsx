import React from 'react'
import styled from 'styled-components'
import { getAssetPath } from 'renderer/utils/get-asset-path'

const Image = styled.img`
  border-radius: 2px;
  ${({ theme }) => `border: 1px solid ${theme.darkInversed};`}
`

type Props = {
  mapName: string
  className?: string
}

const MapImage = ({ mapName, className }: Props) => {
  return (
    <Image src={getAssetPath(`maps/${mapName}.png`)} alt={mapName} className={className} title={mapName} />
  )
}

export { MapImage }
