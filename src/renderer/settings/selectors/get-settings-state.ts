import { StoreState } from 'renderer/Store'

const getSettingsState = (state: StoreState) => {
  return state.settings
}

export { getSettingsState }
