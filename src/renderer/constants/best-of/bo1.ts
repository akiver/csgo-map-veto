import { VoteType } from 'renderer/types/vote-type';
import { BestOfMode } from 'renderer/types/best-of-mode';
import { TeamNumber } from 'renderer/types/team-number';
import { BestOf } from 'renderer/types/best-of';

const MODE_BBBR: BestOfMode = {
  value: '1',
  label: 'Ban / Ban / Ban / Random',
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

const MODE_BBR = {
  value: '2',
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
};

const MODE_BR = {
  value: '3',
  label: 'Ban / Random',
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
      type: VoteType.Random,
      teamNumber: TeamNumber.Server,
    },
  ],
};

const MODE_ALL_RANDOM = {
  value: '4',
  label: 'All Random',
  votes: [
    {
      id: 1,
      type: VoteType.Random,
      teamNumber: TeamNumber.Server,
    },
  ],
};

export const BEST_OF_1: BestOf = {
  value: 1,
  label: 'BO 1',
  modes: [MODE_BBBR, MODE_BBR, MODE_BR, MODE_ALL_RANDOM],
};
