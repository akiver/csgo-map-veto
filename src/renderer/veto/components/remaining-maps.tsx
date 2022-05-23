import React from 'react';
import { Maps } from 'renderer/veto/components/maps';
import { useRemainingMapNames } from '../use-remaining-map-names';

export function RemainingMaps() {
  const maps = useRemainingMapNames();

  return <Maps mapNames={maps} />;
}
