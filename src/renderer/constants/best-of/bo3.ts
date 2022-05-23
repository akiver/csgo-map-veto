import { VoteType } from 'renderer/types/vote-type';
import { BestOf } from 'renderer/types/best-of';
import { TeamNumber } from 'renderer/types/team-number';
import { BestOfMode } from 'renderer/types/best-of-mode';

export const BO3_MODE_BPBR: BestOfMode = {
  value: '1',
  label: 'Ban / Pick / Ban / Random',
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
};

export const BEST_OF_3: BestOf = {
  value: 3,
  label: 'BO 3',
  modes: [
    BO3_MODE_BPBR,
    {
      value: '2',
      label: 'Ban / Ban / Pick / Random',
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
      label: 'Ban / Pick / Random',
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
          type: VoteType.Random,
          teamNumber: TeamNumber.Server,
        },
      ],
    },
    {
      value: '4',
      label: 'Ban / Ban / Random',
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
          type: VoteType.Random,
          teamNumber: TeamNumber.Server,
        },
      ],
    },
    {
      value: '5',
      label: 'Pick / Random',
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
          type: VoteType.Random,
          teamNumber: TeamNumber.Server,
        },
      ],
    },
    {
      value: '6',
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
      ],
    },
  ],
};
