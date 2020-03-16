import { Vote } from 'renderer/types/vote';

const VOTES_UPDATE = 'votes.update';

const updateVotes = (votes: Vote[]) => {
  return {
    type: VOTES_UPDATE as typeof VOTES_UPDATE,
    payload: votes,
  };
};

type UpdateVotesAction = ReturnType<typeof updateVotes>;

export { VOTES_UPDATE, updateVotes, UpdateVotesAction };
