import { StoreState } from 'renderer/Store'
import { getOptions } from 'renderer/veto/selectors/get-options'

const getTeamTwoName = (state: StoreState) => {
  return getOptions(state).teamTwoName
}

export { getTeamTwoName }
