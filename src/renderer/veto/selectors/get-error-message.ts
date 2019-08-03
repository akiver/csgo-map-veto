import { StoreState } from 'renderer/Store'
import { getOptions } from 'renderer/veto/selectors/get-options'

const getErrorMessage = (state: StoreState) => {
  const options = getOptions(state)
  return options.error
}

export { getErrorMessage }
