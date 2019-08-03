import { Reducer } from 'redux'
import { UpdateApiAddressAction, UPDATE_API_ADDRESS } from 'renderer/settings/actions/update-api-address'
import { DEFAULT_API_ADDRESS } from 'renderer/constants/api'

type SettingsState = {
  apiAddress: string
}

const initialState: SettingsState = {
  apiAddress: DEFAULT_API_ADDRESS,
}

const settingsReducer: Reducer<SettingsState, UpdateApiAddressAction> = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_API_ADDRESS:
      return {
        ...state,
        apiAddress: action.apiAddress,
      }
    default:
      return state
  }
}

export { settingsReducer }
