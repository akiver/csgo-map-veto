import { VoteTypes } from 'renderer/types/vote-type'
import { BestOf } from 'renderer/types/best-of'
import { TeamNumbers } from 'renderer/types/team-number'

const BEST_OF_2: BestOf = {
  value: 2,
  label: 'BO 2',
  modes: [
    {
      value: '1',
      label: 'Ban / Pick',
      votes: [
        {
          id: 1,
          type: VoteTypes.BAN,
          teamNumber: TeamNumbers.TEAM1,
        },
        {
          id: 2,
          type: VoteTypes.BAN,
          teamNumber: TeamNumbers.TEAM2,
        },
        {
          id: 3,
          type: VoteTypes.PICK,
          teamNumber: TeamNumbers.TEAM1,
        },
        {
          id: 4,
          type: VoteTypes.PICK,
          teamNumber: TeamNumbers.TEAM2,
        },
      ],
    },
    {
      value: '2',
      label: 'Ban / Random',
      votes: [
        {
          id: 1,
          type: VoteTypes.BAN,
          teamNumber: TeamNumbers.TEAM1,
        },
        {
          id: 2,
          type: VoteTypes.BAN,
          teamNumber: TeamNumbers.TEAM2,
        },
        {
          id: 3,
          type: VoteTypes.RANDOM,
          teamNumber: TeamNumbers.SERVER,
        },
        {
          id: 4,
          type: VoteTypes.RANDOM,
          teamNumber: TeamNumbers.SERVER,
        },
      ],
    },
    {
      value: '3',
      label: 'All Pick',
      votes: [
        {
          id: 1,
          type: VoteTypes.PICK,
          teamNumber: TeamNumbers.TEAM1,
        },
        {
          id: 2,
          type: VoteTypes.PICK,
          teamNumber: TeamNumbers.TEAM2,
        },
      ],
    },
    {
      value: '4',
      label: 'All Random',
      votes: [
        {
          id: 1,
          type: VoteTypes.RANDOM,
          teamNumber: TeamNumbers.SERVER,
        },
        {
          id: 2,
          type: VoteTypes.RANDOM,
          teamNumber: TeamNumbers.SERVER,
        },
      ],
    },
    {
      value: '5',
      label: 'Ban / Ban / Pick',
      votes: [
        {
          id: 1,
          type: VoteTypes.BAN,
          teamNumber: TeamNumbers.TEAM1,
        },
        {
          id: 2,
          type: VoteTypes.BAN,
          teamNumber: TeamNumbers.TEAM2,
        },
        {
          id: 3,
          type: VoteTypes.BAN,
          teamNumber: TeamNumbers.TEAM1,
        },
        {
          id: 4,
          type: VoteTypes.BAN,
          teamNumber: TeamNumbers.TEAM2,
        },
        {
          id: 5,
          type: VoteTypes.PICK,
          teamNumber: TeamNumbers.TEAM1,
        },
        {
          id: 6,
          type: VoteTypes.PICK,
          teamNumber: TeamNumbers.TEAM2,
        },
      ],
    },
  ],
}

export { BEST_OF_2 }
