import React from 'react';
import { useSelector } from 'react-redux';
import { Maps } from 'renderer/veto/components/maps';
import { getPickedMaps } from 'renderer/veto/selectors/get-picked-maps';

const PickedMaps = () => {
  const maps = useSelector(getPickedMaps);
  return <Maps maps={maps} />;
};

export { PickedMaps };
