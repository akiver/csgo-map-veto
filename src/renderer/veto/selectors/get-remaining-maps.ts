import { StoreState } from 'renderer/store';
import { getMaps } from 'renderer/veto/selectors/get-maps';
import { MapStatuses } from 'renderer/types/map-status';

const getRemainingMaps = (state: StoreState) => {
  const maps = getMaps(state);
  return maps.filter(map => map.status === MapStatuses.REMAINING);
};

export { getRemainingMaps };
