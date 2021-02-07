import { StoreState } from 'renderer/store';
import { getVotes } from 'renderer/veto/selectors/get-votes';
import { VetoPostRequest } from 'renderer/types/api';
import { getSelectedBestOf } from 'renderer/veto/selectors/get-selected-best-of';
import { getTeamOneName } from 'renderer/veto/selectors/get-team-one-name';
import { getTeamTwoName } from 'renderer/veto/selectors/get-team-two-name';

const getCreateVetoParameters = (state: StoreState) => {
  const bestOf = getSelectedBestOf(state);
  const teamOneName = getTeamOneName(state);
  const teamTwoName = getTeamTwoName(state);
  const votes = getVotes(state);

  const parameters: VetoPostRequest = {
    team_one_name: teamOneName,
    team_two_name: teamTwoName,
    best_of: bestOf.value,
    votes: votes.map((vote) => {
      return {
        team_number: vote.teamNumber,
        type: vote.type,
        map_name: vote.mapName,
      };
    }),
  };

  return parameters;
};

export { getCreateVetoParameters };
