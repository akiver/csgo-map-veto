import { BestOfMode } from 'renderer/types/best-of-mode';

export type BestOfType = 1 | 2 | 3 | 5;

export type BestOf = {
  value: BestOfType;
  label: string;
  modes: BestOfMode[];
};
