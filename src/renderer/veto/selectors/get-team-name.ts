import { StoreState } from 'renderer/store';
import { getTeamOneName } from 'renderer/veto/selectors/get-team-one-name';
import { getTeamTwoName } from 'renderer/veto/selectors/get-team-two-name';
import { TeamNumber } from 'renderer/types/team-number';
import { getTeamNameByTeamNumber } from 'renderer/utils/get-team-name-from-team-number';

const getTeamName = (state: StoreState, teamNumber: TeamNumber) => {
  return getTeamNameByTeamNumber(teamNumber, getTeamOneName(state), getTeamTwoName(state));
};

export { getTeamName };
