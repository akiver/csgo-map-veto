import React from 'react';
import { Maps } from 'renderer/veto/components/maps';
import { usePickedMapNames } from '../use-picked-map-names';

export function PickedMaps() {
  const maps = usePickedMapNames();

  return <Maps mapNames={maps} />;
}
