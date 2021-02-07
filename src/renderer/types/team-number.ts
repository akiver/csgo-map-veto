const TeamNumbers = Object.freeze({
  TEAM1: 1 as const,
  TEAM2: 2 as const,
  SERVER: 3 as const,
});

type TeamNumber = EnumLiteralsOf<typeof TeamNumbers>;

export { TeamNumber, TeamNumbers };
