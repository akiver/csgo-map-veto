import { VoteTypes } from 'renderer/types/vote-type'
import { BestOf } from 'renderer/types/best-of'
import { TeamNumbers } from 'renderer/types/team-number'

const BEST_OF_5: BestOf = {
  value: 5,
  label: 'BO 5',
  modes: [
    {
      value: '1',
      label: 'Ban / Pick / Pick / Random',
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
        {
          id: 7,
          type: VoteTypes.RANDOM,
          teamNumber: TeamNumbers.SERVER,
        },
      ],
    },
    {
      value: '2',
      label: 'Pick / Ban / Pick / Random',
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
        {
          id: 7,
          type: VoteTypes.RANDOM,
          teamNumber: TeamNumbers.SERVER,
        },
      ],
    },
    {
      value: '3',
      label: 'Pick / Pick / Ban / Random',
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
        {
          id: 5,
          type: VoteTypes.BAN,
          teamNumber: TeamNumbers.TEAM1,
        },
        {
          id: 6,
          type: VoteTypes.BAN,
          teamNumber: TeamNumbers.TEAM2,
        },
        {
          id: 7,
          type: VoteTypes.RANDOM,
          teamNumber: TeamNumbers.SERVER,
        },
      ],
    },
    {
      value: '4',
      label: 'Pick / Pick / Random',
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
        {
          id: 5,
          type: VoteTypes.RANDOM,
          teamNumber: TeamNumbers.SERVER,
        },
      ],
    },
    {
      value: '5',
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
        {
          id: 5,
          type: VoteTypes.RANDOM,
          teamNumber: TeamNumbers.SERVER,
        },
      ],
    },
    {
      value: '6',
      label: 'Pick / Ban / Pick / Ban / Pick / Pick / Random',
      votes: [
        {
          id: 1,
          type: VoteTypes.PICK,
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
        {
          id: 7,
          type: VoteTypes.RANDOM,
          teamNumber: TeamNumbers.SERVER,
        },
      ],
    },
  ],
}

export { BEST_OF_5 }
