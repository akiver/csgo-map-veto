import { VoteType } from 'renderer/types/vote-type';

export function getVoteTypeText(voteType: VoteType) {
  return voteType === VoteType.Ban ? 'banned' : 'picked';
}
