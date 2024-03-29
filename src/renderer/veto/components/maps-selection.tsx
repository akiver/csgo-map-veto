import React from 'react';
import styled from 'styled-components';
import { MAPS } from 'renderer/constants/maps';
import { MapSelectionEntry } from 'renderer/veto/components/map-selection-entry';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export function MapsSelection() {
  return (
    <Wrapper>
      {MAPS.map((mapName) => {
        return <MapSelectionEntry key={`map-select-${mapName}`} mapName={mapName} />;
      })}
    </Wrapper>
  );
}
