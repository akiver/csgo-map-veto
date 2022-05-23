import { BestOfType } from 'renderer/types/best-of';
import { TeamNumber } from 'renderer/types/team-number';
import { VoteType } from 'renderer/types/vote-type';

type VoteResponse = {
  id: number;
  team_number: TeamNumber;
  type: VoteType;
  map_name: string;
};

export type VetoResponse = {
  id: number;
  created_at: Date;
  best_of: BestOfType;
  team_one_name: string;
  team_two_name: string;
  votes: VoteResponse[];
};

export type VetosResponse = VetoResponse[];

type VotePostRequest = {
  team_number: TeamNumber;
  type: VoteType;
  map_name?: string;
};

export type VetoPostRequest = {
  team_one_name: string;
  team_two_name: string;
  best_of: BestOfType;
  votes: VotePostRequest[];
};
