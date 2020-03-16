const VoteStatuses = Object.freeze({
  WAITING: 'waiting' as 'waiting',
  CURRENT: 'current' as 'current',
  DONE: 'done' as 'done',
});

type VoteStatus = EnumLiteralsOf<typeof VoteStatuses>;

export { VoteStatus, VoteStatuses };
