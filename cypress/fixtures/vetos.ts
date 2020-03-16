import { VetoResponse } from 'renderer/types/api';
import { VoteTypes } from 'renderer/types/vote-type';
import { TeamNumbers } from 'renderer/types/team-number';
import { MAPS } from 'renderer/constants/maps';

const vetosFixture: VetoResponse[] = [
  {
    id: 1,
    team_one_name: 'Team 1',
    team_two_name: 'Team 2',
    best_of: 3,
    votes: [
      {
        id: 1,
        type: VoteTypes.PICK,
        team_number: TeamNumbers.TEAM1,
        map_name: MAPS[0],
      },
      {
        id: 2,
        type: 'pick',
        team_number: TeamNumbers.TEAM2,
        map_name: MAPS[1],
      },
      {
        id: 3,
        type: VoteTypes.BAN,
        team_number: TeamNumbers.TEAM1,
        map_name: MAPS[2],
      },
      {
        id: 4,
        type: VoteTypes.BAN,
        team_number: TeamNumbers.TEAM2,
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
        type: VoteTypes.RANDOM,
        team_number: TeamNumbers.SERVER,
        map_name: MAPS[0],
      },
    ],
    created_at: new Date('September 20, 1990'),
  },
];

export { vetosFixture };
