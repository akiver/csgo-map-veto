import { StoreState } from 'renderer/store';
import { getOptions } from 'renderer/veto/selectors/get-options';

const getSelectedMode = (state: StoreState) => {
  return getOptions(state).selectedMode;
};

export { getSelectedMode };
