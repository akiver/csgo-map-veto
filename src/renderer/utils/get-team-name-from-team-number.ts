import { TeamNumbers, TeamNumber } from 'renderer/types/team-number'

const getTeamNameByTeamNumber = (teamNumber: TeamNumber, teamOneName: string, teamTwoName: string) => {
  switch (teamNumber) {
    case TeamNumbers.TEAM1:
      return teamOneName
    case TeamNumbers.TEAM2:
      return teamTwoName
    default:
      return 'SERVER'
  }
}

export { getTeamNameByTeamNumber }
