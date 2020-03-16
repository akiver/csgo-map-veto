import { StoreState } from 'renderer/store';
import { getOptions } from 'renderer/veto/selectors/get-options';

const getSelectedMaps = (state: StoreState) => {
  return getOptions(state).selectedMaps;
};

export { getSelectedMaps };
