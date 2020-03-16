import { StoreState } from 'renderer/store';

const getOptions = (state: StoreState) => {
  return state.options;
};

export { getOptions };
