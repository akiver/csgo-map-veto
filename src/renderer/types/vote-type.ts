export const VoteType = {
  Ban: 'ban',
  Pick: 'pick',
  Random: 'random',
} as const;

export type VoteType = typeof VoteType[keyof typeof VoteType];
