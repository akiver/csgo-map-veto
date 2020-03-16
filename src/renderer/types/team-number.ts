const TeamNumbers = Object.freeze({
  TEAM1: 1 as 1,
  TEAM2: 2 as 2,
  SERVER: 3 as 3,
});

type TeamNumber = EnumLiteralsOf<typeof TeamNumbers>;

export { TeamNumber, TeamNumbers };
