import { StoreState } from 'renderer/store';

const getVotes = (state: StoreState) => {
  return state.votes;
};

export { getVotes };
