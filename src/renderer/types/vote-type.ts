const VoteTypes = Object.freeze({
  BAN: 'ban' as 'ban',
  PICK: 'pick' as 'pick',
  RANDOM: 'random' as 'random',
});

type VoteType = EnumLiteralsOf<typeof VoteTypes>;

export { VoteType, VoteTypes };
