import { StoreState } from 'renderer/Store'
import { getOptions } from 'renderer/veto/selectors/get-options'

const getTeamOneName = (state: StoreState) => {
  return getOptions(state).teamOneName
}

export { getTeamOneName }
