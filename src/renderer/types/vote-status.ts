const VoteStatuses = Object.freeze({
  WAITING: 'waiting' as const,
  CURRENT: 'current' as const,
  DONE: 'done' as const,
});

type VoteStatus = EnumLiteralsOf<typeof VoteStatuses>;

export { VoteStatus, VoteStatuses };
