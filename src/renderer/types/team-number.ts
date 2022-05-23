export const TeamNumber = {
  Team1: 1,
  Team2: 2,
  Server: 3,
} as const;

export type TeamNumber = typeof TeamNumber[keyof typeof TeamNumber];
