import { VetoResponse } from 'renderer/types/api';
import { VoteType } from 'renderer/types/vote-type';
import { TeamNumber } from 'renderer/types/team-number';
import { MAPS } from 'renderer/constants/maps';

export const vetosFixture: VetoResponse[] = [
  {
    id: 1,
    team_one_name: 'Team 1',
    team_two_name: 'Team 2',
    best_of: 3,
    votes: [
      {
        id: 1,
        type: VoteType.Pick,
        team_number: TeamNumber.Team1,
        map_name: MAPS[0],
      },
      {
        id: 2,
        type: 'pick',
        team_number: TeamNumber.Team2,
        map_name: MAPS[1],
      },
      {
        id: 3,
        type: VoteType.Ban,
        team_number: TeamNumber.Team1,
        map_name: MAPS[2],
      },
      {
        id: 4,
        type: VoteType.Ban,
        team_number: TeamNumber.Team2,
        map_name: MAPS[3],
      },
    ],
    created_at: new Date('September 10, 1990'),
  },
  {
    id: 2,
    team_one_name: 'Toto',
    team_two_name: 'Tata',
    best_of: 1,
    votes: [
      {
        id: 5,
        type: VoteType.Random,
        team_number: TeamNumber.Server,
        map_name: MAPS[0],
      },
    ],
    created_at: new Date('September 20, 1990'),
  },
];
