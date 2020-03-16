import { StoreState } from 'renderer/store';
import { getOptions } from 'renderer/veto/selectors/get-options';

const getVetoStatus = (state: StoreState) => {
  return getOptions(state).vetoStatus;
};

export { getVetoStatus };
