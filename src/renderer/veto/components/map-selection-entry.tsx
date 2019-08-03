import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { MapImage } from 'renderer/components/map-image'
import { isMapSelected } from 'renderer/veto/selectors/is-map-selected'
import { StoreState } from 'renderer/Store'
import { Theme } from 'renderer/contexts/theme-context'
import { Text } from 'renderer/components/text'
import { toggleMapSelection } from 'renderer/veto/actions/toggle-map-selection'

const Wrapper = styled.div`
  margin-bottom: 5px;
  cursor: pointer;
  &:not(:last-child) {
    margin-right: 5px;
  }
`

const StyledMapImage = styled(MapImage)<{ theme: Theme; isSelected: boolean }>`
  height: 80px;
  border-width: 3px;
  border-color: ${({ theme, isSelected }) => isSelected && theme.success};
  ${({ isSelected }) =>
    !isSelected &&
    `
    opacity: 0.5;
  `}
`

type Props = {
  mapName: string
}

const MapSelectionEntry = ({ mapName }: Props) => {
  const isSelected = useSelector((state: StoreState) => isMapSelected(state, mapName))
  const dispatch = useDispatch()
  return (
    <Wrapper onClick={() => dispatch(toggleMapSelection(mapName))}>
      <StyledMapImage mapName={mapName} isSelected={isSelected} />
      <Text textAlign="center">{mapName}</Text>
    </Wrapper>
  )
}

export { MapSelectionEntry }
