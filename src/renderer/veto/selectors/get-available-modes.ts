import { StoreState } from 'renderer/Store'
import { getSelectedBestOf } from 'renderer/veto/selectors/get-selected-best-of'

const getAvailableModes = (state: StoreState) => {
  const selectedBestOf = getSelectedBestOf(state)
  return selectedBestOf.modes
}

export { getAvailableModes }
