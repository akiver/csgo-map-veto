import { StoreState } from 'renderer/store';
import { getVotes } from './get-votes';
import { VoteStatuses } from 'renderer/types/vote-status';

const getCurrentVote = (state: StoreState) => {
  const votes = getVotes(state);
  return votes.find((vote) => vote.status === VoteStatuses.CURRENT);
};

export { getCurrentVote };
