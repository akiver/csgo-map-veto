import React from 'react';
import styled from 'styled-components';
import { Modal } from 'renderer/components/modal';
import { MapImage } from 'renderer/components/map-image';
import { Text } from 'renderer/components/text';
import { Button } from 'renderer/components/button';
import { useRemainingMapNames } from '../use-remaining-map-names';
import { useDispatch } from 'renderer/use-dispatch';
import { makeVote } from '../veto-actions';

const MapsModal = styled(Modal)`
  @media (max-width: 768px) {
    height: 100%;
  }
`;

const Maps = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const MapWrapper = styled.div`
  cursor: pointer;
  border: 1px solid transparent;
  justify-content: center;
  margin-right: 20px;
  &:hover {
    border-color: white;
  }
`;

const StyledMapImage = styled(MapImage)`
  height: 80px;
`;

const Footer = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: center;
`;

type Props = {
  onClose: () => void;
};

export function RemainingMapsModal({ onClose }: Props) {
  const dispatch = useDispatch();
  const remainingMapNames = useRemainingMapNames();

  return (
    <MapsModal onClose={onClose}>
      <Maps>
        {remainingMapNames.map((mapName) => {
          return (
            <MapWrapper
              key={mapName}
              onClick={() => {
                dispatch(makeVote(mapName));
                onClose();
              }}
              data-testid={`map-${mapName}`}
            >
              <StyledMapImage mapName={mapName} />
              <Text textAlign="center">{mapName}</Text>
            </MapWrapper>
          );
        })}
      </Maps>
      <Footer>
        <Button onClick={onClose}>Close</Button>
      </Footer>
    </MapsModal>
  );
}
