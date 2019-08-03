import { StoreState } from 'renderer/Store'
import { getOptions } from 'renderer/veto/selectors/get-options'

const getVetoStatus = (state: StoreState) => {
  return getOptions(state).vetoStatus
}

export { getVetoStatus }
