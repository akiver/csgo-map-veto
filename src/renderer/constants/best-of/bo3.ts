import { VoteTypes } from 'renderer/types/vote-type'
import { BestOf } from 'renderer/types/best-of'
import { TeamNumbers } from 'renderer/types/team-number'
import { BestOfMode } from 'renderer/types/best-of-mode'

const BO3_MODE_BPBR: BestOfMode = {
  value: '1',
  label: 'Ban / Pick / Ban / Random',
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
}

const BEST_OF_3: BestOf = {
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
        {
          id: 7,
          type: VoteTypes.RANDOM,
          teamNumber: TeamNumbers.SERVER,
        },
      ],
    },
    {
      value: '3',
      label: 'Ban / Pick / Random',
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
          type: VoteTypes.RANDOM,
          teamNumber: TeamNumbers.SERVER,
        },
      ],
    },
    {
      value: '4',
      label: 'Ban / Ban / Random',
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
          type: VoteTypes.RANDOM,
          teamNumber: TeamNumbers.SERVER,
        },
      ],
    },
    {
      value: '5',
      label: 'Pick / Random',
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
          type: VoteTypes.RANDOM,
          teamNumber: TeamNumbers.SERVER,
        },
      ],
    },
    {
      value: '6',
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
      ],
    },
  ],
}

export { BEST_OF_3, BO3_MODE_BPBR }
