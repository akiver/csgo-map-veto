import { VoteTypes } from 'renderer/types/vote-type';
import { BestOfMode } from 'renderer/types/best-of-mode';
import { TeamNumbers } from 'renderer/types/team-number';
import { BestOf } from 'renderer/types/best-of';

const MODE_BBBR: BestOfMode = {
  value: '1',
  label: 'Ban / Ban / Ban / Random',
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
};

const MODE_BBR = {
  value: '2',
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
};

const MODE_BR = {
  value: '3',
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
  ],
};

const MODE_ALL_RANDOM = {
  value: '4',
  label: 'All Random',
  votes: [
    {
      id: 1,
      type: VoteTypes.RANDOM,
      teamNumber: TeamNumbers.SERVER,
    },
  ],
};

const BEST_OF_1: BestOf = {
  value: 1,
  label: 'BO 1',
  modes: [MODE_BBBR, MODE_BBR, MODE_BR, MODE_ALL_RANDOM],
};

export { BEST_OF_1 };
