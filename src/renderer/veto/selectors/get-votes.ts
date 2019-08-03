import { StoreState } from 'renderer/Store'

const getVotes = (state: StoreState) => {
  return state.votes
}

export { getVotes }
