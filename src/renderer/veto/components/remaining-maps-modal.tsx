import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from 'renderer/components/modal';
import { MapImage } from 'renderer/components/map-image';
import { Text } from 'renderer/components/text';
import { Button } from 'renderer/components/button';
import { makeVote } from 'renderer/veto/actions/make-vote';
import { getRemainingMaps } from 'renderer/veto/selectors/get-remaining-maps';

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

const RemainingMapsModal = ({ onClose }: Props) => {
  const dispatch = useDispatch();
  const maps = useSelector(getRemainingMaps);

  return (
    <MapsModal onClose={onClose}>
      <Maps>
        {maps.map(map => {
          return (
            <MapWrapper
              key={map.name}
              onClick={() => {
                dispatch(makeVote(map.name));
                onClose();
              }}
              data-testid={`map-${map.name}`}
            >
              <StyledMapImage mapName={map.name} />
              <Text textAlign="center">{map.name}</Text>
            </MapWrapper>
          );
        })}
      </Maps>
      <Footer>
        <Button onClick={onClose}>Close</Button>
      </Footer>
    </MapsModal>
  );
};

export { RemainingMapsModal };
