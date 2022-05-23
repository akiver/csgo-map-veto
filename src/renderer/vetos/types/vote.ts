import { VoteType } from 'renderer/types/vote-type';
import { TeamNumber } from 'renderer/types/team-number';

export type Vote = {
  id: number;
  type: VoteType;
  teamNumber: TeamNumber;
  mapName: string;
};
