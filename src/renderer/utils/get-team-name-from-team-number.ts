import { TeamNumber } from 'renderer/types/team-number';

export function getTeamNameByTeamNumber(teamNumber: TeamNumber, teamOneName: string, teamTwoName: string) {
  switch (teamNumber) {
    case TeamNumber.Team1:
      return teamOneName;
    case TeamNumber.Team2:
      return teamTwoName;
    default:
      return 'SERVER';
  }
}
