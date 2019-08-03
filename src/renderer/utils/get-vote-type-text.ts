import { VoteTypes, VoteType } from 'renderer/types/vote-type'

const getVoteTypeText = (voteType: VoteType) => {
  return voteType === VoteTypes.BAN ? 'banned' : 'picked'
}

export { getVoteTypeText }
