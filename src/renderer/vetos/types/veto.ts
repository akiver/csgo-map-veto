import { BestOfType } from 'renderer/types/best-of';
import { Vote } from 'renderer/vetos/types/vote';

export type Veto = {
  id: number;
  teamOneName: string;
  teamTwoName: string;
  bestOf: BestOfType;
  votes: Vote[];
  createdAt: Date;
};
