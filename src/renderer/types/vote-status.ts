export const VoteStatus = {
  Waiting: 'waiting',
  Current: 'current',
  Done: 'done',
} as const;

export type VoteStatus = typeof VoteStatus[keyof typeof VoteStatus];
