import { StoreState } from 'renderer/store';
import { getSettingsState } from './get-settings-state';

const getApiAddress = (state: StoreState) => {
  const settings = getSettingsState(state);
  return settings.apiAddress;
};
export { getApiAddress };
