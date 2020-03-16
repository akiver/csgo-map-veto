import { StoreState } from 'renderer/store';
import { getOptions } from 'renderer/veto/selectors/get-options';

const getTeamTwoName = (state: StoreState) => {
  return getOptions(state).teamTwoName;
};

export { getTeamTwoName };
