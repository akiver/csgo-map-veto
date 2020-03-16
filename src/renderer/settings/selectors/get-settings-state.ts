import { StoreState } from 'renderer/store';

const getSettingsState = (state: StoreState) => {
  return state.settings;
};

export { getSettingsState };
