import { Dispatch } from 'redux';
import { StoreState } from 'renderer/store';
import { updateMapStatus, UpdateMapStatusAction } from 'renderer/veto/actions/update-map-status';
import { VoteTypes } from 'renderer/types/vote-type';
import { MapStatuses } from 'renderer/types/map-status';
import { Vote } from 'renderer/types/vote';
import { updateVetoStatus, UpdateVetoStatusAction } from 'renderer/veto/actions/update-veto-status';
import { VetoStatuses } from 'renderer/types/veto-status';
import { getVotes } from 'renderer/veto/selectors/get-votes';
import { VoteStatuses } from 'renderer/types/vote-status';
import { getCurrentVote } from 'renderer/veto/selectors/get-current-vote';

const VOTES_COMPLETE = 'votes.complete';

const completeVote = (vote: Vote, map: string) => {
  return {
    type: VOTES_COMPLETE as typeof VOTES_COMPLETE,
    payload: {
      vote,
      map,
    },
  };
};

type CompleteVoteAction = ReturnType<typeof completeVote>;

const makeVote = (mapName: string) => {
  return (dispatch: Dispatch<MakeVoteAction>, getState: () => StoreState) => {
    const vote = getCurrentVote(getState());
    if (vote === undefined) return;

    const mapStatus = vote.type === VoteTypes.BAN ? MapStatuses.BANNED : MapStatuses.PICKED;
    dispatch(updateMapStatus(mapName, mapStatus));
    dispatch(completeVote(vote, mapName));

    const votes = getVotes(getState());
    if (votes.every((vote) => vote.status === VoteStatuses.DONE)) {
      dispatch(updateVetoStatus(VetoStatuses.COMPLETED));
    }
  };
};

type MakeVoteAction = CompleteVoteAction | UpdateMapStatusAction | UpdateVetoStatusAction;

export { VOTES_COMPLETE, makeVote, CompleteVoteAction, MakeVoteAction };
