import { StoreState } from 'renderer/store';
import { getOptions } from 'renderer/veto/selectors/get-options';

const getSelectedBestOf = (state: StoreState) => {
  return getOptions(state).selecteBestOf;
};

export { getSelectedBestOf };
