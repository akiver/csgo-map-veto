import { VoteType } from 'renderer/types/vote-type';
import { TeamNumber } from 'renderer/types/team-number';
import { VoteStatus } from 'renderer/types/vote-status';

export type Vote = {
  id: number;
  type: VoteType;
  teamNumber: TeamNumber;
  status?: VoteStatus;
  mapName?: string;
};
