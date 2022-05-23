import React from 'react';
import styled from 'styled-components';
import { getMapImageSrcFromMapName } from 'renderer/images/get-map-image-src-from-map-name';

const Image = styled.img`
  border-radius: 2px;
  ${({ theme }) => `border: 1px solid ${theme.darkInversed};`}
`;

type Props = {
  mapName: string;
  className?: string;
};

export function MapImage({ mapName, className }: Props) {
  const src = getMapImageSrcFromMapName(mapName);

  return <Image src={src} alt={mapName} className={className} title={mapName} />;
}
