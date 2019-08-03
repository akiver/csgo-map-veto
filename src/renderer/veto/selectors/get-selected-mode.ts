import { StoreState } from 'renderer/Store'
import { getOptions } from 'renderer/veto/selectors/get-options'

const getSelectedMode = (state: StoreState) => {
  return getOptions(state).selectedMode
}

export { getSelectedMode }
