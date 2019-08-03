import { StoreState } from 'renderer/Store'

const getOptions = (state: StoreState) => {
  return state.options
}

export { getOptions }
