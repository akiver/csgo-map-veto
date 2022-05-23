import React from 'react';
import styled from 'styled-components';
import { MapImage } from 'renderer/components/map-image';
import { Text } from 'renderer/components/text';
import { useDispatch } from 'renderer/use-dispatch';
import { mapFiltered } from '../veto-actions';
import { useVeto } from '../use-veto';

const Wrapper = styled.div`
  margin-bottom: 5px;
  cursor: pointer;
  &:not(:last-child) {
    margin-right: 5px;
  }
`;

const StyledMapImage = styled(MapImage)<{ isSelected: boolean }>`
  height: 80px;
  border-width: 3px;
  border-color: ${({ theme, isSelected }) => isSelected && theme.success};
  ${({ isSelected }) =>
    !isSelected &&
    `
    opacity: 0.5;
  `}
`;

type Props = {
  mapName: string;
};

export function MapSelectionEntry({ mapName }: Props) {
  const { mapNames } = useVeto();
  const isSelected = mapNames.includes(mapName);
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(mapFiltered(mapName));
  };

  return (
    <Wrapper onClick={onClick}>
      <StyledMapImage mapName={mapName} isSelected={isSelected} />
      <Text textAlign="center">{mapName}</Text>
    </Wrapper>
  );
}
