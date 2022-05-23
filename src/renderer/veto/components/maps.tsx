import React from 'react';
import styled from 'styled-components';
import { MapImage } from 'renderer/components/map-image';
import { Text } from 'renderer/components/text';
import { ReactComponent as Unknown } from 'renderer/svg/unknown.svg';

const UnknownMap = styled(Unknown)`
  height: 100px;
  margin-left: auto;
  margin-right: auto;
  fill: ${({ theme }) => theme.darkInversed};
`;

const MapImageWrapper = styled.div`
  margin-right: 20px;
  margin-bottom: 10px;
`;

const StyledMapImage = styled(MapImage)`
  margin-left: auto;
  margin-right: auto;
  height: 100px;
`;

type Props = {
  mapNames: string[];
};

export function Maps({ mapNames }: Props) {
  return mapNames.length === 0 ? (
    <MapImageWrapper>
      <UnknownMap title="unknown" data-testid="unknown-map" />
    </MapImageWrapper>
  ) : (
    <>
      {mapNames.map((mapName) => (
        <MapImageWrapper key={mapName}>
          <StyledMapImage mapName={mapName} />
          <Text size="sm" textAlign="center">
            {mapName}
          </Text>
        </MapImageWrapper>
      ))}
    </>
  );
}
