import { StoreState } from 'renderer/Store'
import { getOptions } from 'renderer/veto/selectors/get-options'

const getSelectedBestOf = (state: StoreState) => {
  return getOptions(state).selecteBestOf
}

export { getSelectedBestOf }
