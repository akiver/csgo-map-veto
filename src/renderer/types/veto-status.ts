export const VetoStatus = {
  Setup: 'setup',
  InProgress: 'in-progress',
  Completed: 'completed',
} as const;

export type VetoStatus = typeof VetoStatus[keyof typeof VetoStatus];
