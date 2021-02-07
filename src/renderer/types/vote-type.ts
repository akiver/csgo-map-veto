const VoteTypes = Object.freeze({
  BAN: 'ban' as const,
  PICK: 'pick' as const,
  RANDOM: 'random' as const,
});

type VoteType = EnumLiteralsOf<typeof VoteTypes>;

export { VoteType, VoteTypes };
