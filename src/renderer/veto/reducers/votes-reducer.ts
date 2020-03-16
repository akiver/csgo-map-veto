import { Reducer } from 'redux';
import { UpdateSelectedModeAction, OPTIONS_UPDATE_SELECTED_MODE } from 'renderer/veto/actions/update-select-mode';
import { UpdateSelectedBestOfAction, OPTIONS_UPDATE_SELECTED_BEST_OF } from 'renderer/veto/actions/update-selected-bo';
import { VOTES_COMPLETE, CompleteVoteAction } from 'renderer/veto/actions/make-vote';
import { UpdateVotesAction, VOTES_UPDATE } from 'renderer/veto/actions/update-votes';
import { VoteStatuses } from 'renderer/types/vote-status';
import { Vote } from 'renderer/types/vote';

const updateVotes = (votes: Vote[]): Vote[] => {
  return votes.map((vote, index) => {
    if (index === 0) {
      return {
        ...vote,
        status: VoteStatuses.CURRENT,
      };
    }

    return vote;
  });
};

type VotesState = Vote[];

type VotesActions = UpdateVotesAction | UpdateSelectedModeAction | UpdateSelectedBestOfAction | CompleteVoteAction;

const initialState: VotesState = [];

const votesReducer: Reducer<VotesState, VotesActions> = (state = initialState, action) => {
  switch (action.type) {
    case VOTES_UPDATE:
      return action.payload.map((vote, index) => {
        if (index === 0) {
          return {
            ...vote,
            status: VoteStatuses.CURRENT,
          };
        }

        return vote;
      });
    case OPTIONS_UPDATE_SELECTED_BEST_OF:
      return updateVotes(action.bestOf.modes[0].votes);
    case OPTIONS_UPDATE_SELECTED_MODE:
      return updateVotes(action.mode.votes);
    case VOTES_COMPLETE:
      return state.map(vote => {
        if (vote.id === action.payload.vote.id) {
          return {
            ...vote,
            mapName: action.payload.map,
            status: VoteStatuses.DONE,
          };
        }

        if (vote.id === action.payload.vote.id + 1) {
          return {
            ...vote,
            status: VoteStatuses.CURRENT,
          };
        }

        return vote;
      });
    default:
      return state;
  }
};

export { votesReducer };
