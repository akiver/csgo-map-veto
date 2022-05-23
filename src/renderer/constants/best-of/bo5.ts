import { VoteType } from 'renderer/types/vote-type';
import { BestOf } from 'renderer/types/best-of';
import { TeamNumber } from 'renderer/types/team-number';

export const BEST_OF_5: BestOf = {
  value: 5,
  label: 'BO 5',
  modes: [
    {
      value: '1',
      label: 'Ban / Pick / Pick / Random',
      votes: [
        {
          id: 1,
          type: VoteType.Ban,
          teamNumber: TeamNumber.Team1,
        },
        {
          id: 2,
          type: VoteType.Ban,
          teamNumber: TeamNumber.Team2,
        },
        {
          id: 3,
          type: VoteType.Pick,
          teamNumber: TeamNumber.Team1,
        },
        {
          id: 4,
          type: VoteType.Pick,
          teamNumber: TeamNumber.Team2,
        },
        {
          id: 5,
          type: VoteType.Pick,
          teamNumber: TeamNumber.Team1,
        },
        {
          id: 6,
          type: VoteType.Pick,
          teamNumber: TeamNumber.Team2,
        },
        {
          id: 7,
          type: VoteType.Random,
          teamNumber: TeamNumber.Server,
        },
      ],
    },
    {
      value: '2',
      label: 'Pick / Ban / Pick / Random',
      votes: [
        {
          id: 1,
          type: VoteType.Pick,
          teamNumber: TeamNumber.Team1,
        },
        {
          id: 2,
          type: VoteType.Pick,
          teamNumber: TeamNumber.Team2,
        },
        {
          id: 3,
          type: VoteType.Ban,
          teamNumber: TeamNumber.Team1,
        },
        {
          id: 4,
          type: VoteType.Ban,
          teamNumber: TeamNumber.Team2,
        },
        {
          id: 5,
          type: VoteType.Pick,
          teamNumber: TeamNumber.Team1,
        },
        {
          id: 6,
          type: VoteType.Pick,
          teamNumber: TeamNumber.Team2,
        },
        {
          id: 7,
          type: VoteType.Random,
          teamNumber: TeamNumber.Server,
        },
      ],
    },
    {
      value: '3',
      label: 'Pick / Pick / Ban / Random',
      votes: [
        {
          id: 1,
          type: VoteType.Pick,
          teamNumber: TeamNumber.Team1,
        },
        {
          id: 2,
          type: VoteType.Pick,
          teamNumber: TeamNumber.Team2,
        },
        {
          id: 3,
          type: VoteType.Pick,
          teamNumber: TeamNumber.Team1,
        },
        {
          id: 4,
          type: VoteType.Pick,
          teamNumber: TeamNumber.Team2,
        },
        {
          id: 5,
          type: VoteType.Ban,
          teamNumber: TeamNumber.Team1,
        },
        {
          id: 6,
          type: VoteType.Ban,
          teamNumber: TeamNumber.Team2,
        },
        {
          id: 7,
          type: VoteType.Random,
          teamNumber: TeamNumber.Server,
        },
      ],
    },
    {
      value: '4',
      label: 'Pick / Pick / Random',
      votes: [
        {
          id: 1,
          type: VoteType.Pick,
          teamNumber: TeamNumber.Team1,
        },
        {
          id: 2,
          type: VoteType.Pick,
          teamNumber: TeamNumber.Team2,
        },
        {
          id: 3,
          type: VoteType.Pick,
          teamNumber: TeamNumber.Team1,
        },
        {
          id: 4,
          type: VoteType.Pick,
          teamNumber: TeamNumber.Team2,
        },
        {
          id: 5,
          type: VoteType.Random,
          teamNumber: TeamNumber.Server,
        },
      ],
    },
    {
      value: '5',
      label: 'All Random',
      votes: [
        {
          id: 1,
          type: VoteType.Random,
          teamNumber: TeamNumber.Server,
        },
        {
          id: 2,
          type: VoteType.Random,
          teamNumber: TeamNumber.Server,
        },
        {
          id: 3,
          type: VoteType.Random,
          teamNumber: TeamNumber.Server,
        },
        {
          id: 4,
          type: VoteType.Random,
          teamNumber: TeamNumber.Server,
        },
        {
          id: 5,
          type: VoteType.Random,
          teamNumber: TeamNumber.Server,
        },
      ],
    },
    {
      value: '6',
      label: 'Pick / Ban / Pick / Ban / Pick / Pick / Random',
      votes: [
        {
          id: 1,
          type: VoteType.Pick,
          teamNumber: TeamNumber.Team1,
        },
        {
          id: 2,
          type: VoteType.Ban,
          teamNumber: TeamNumber.Team2,
        },
        {
          id: 3,
          type: VoteType.Pick,
          teamNumber: TeamNumber.Team1,
        },
        {
          id: 4,
          type: VoteType.Ban,
          teamNumber: TeamNumber.Team2,
        },
        {
          id: 5,
          type: VoteType.Pick,
          teamNumber: TeamNumber.Team1,
        },
        {
          id: 6,
          type: VoteType.Pick,
          teamNumber: TeamNumber.Team2,
        },
        {
          id: 7,
          type: VoteType.Random,
          teamNumber: TeamNumber.Server,
        },
      ],
    },
  ],
};
