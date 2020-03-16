import { StoreState } from 'renderer/store';
import { getSelectedMaps } from 'renderer/veto/selectors/get-selected-maps';

const isMapSelected = (state: StoreState, mapName: string) => {
  const selectedMaps = getSelectedMaps(state);
  return selectedMaps.some(map => map.name === mapName);
};

export { isMapSelected };
