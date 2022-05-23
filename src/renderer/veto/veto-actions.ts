import { createAction } from '@reduxjs/toolkit';
import { BestOf } from 'renderer/types/best-of';
import { BestOfMode } from 'renderer/types/best-of-mode';

export const startVeto = createAction<{ mode: BestOfMode; mapNames: string[] }>('veto/start');
export const startVetoError = createAction<string>('veto/startError');
export const resetVeto = createAction('veto/reset');
export const makeVote = createAction<string>('veto/makeVote');
export const teamName1Changed = createAction<string>('veto/teamName1Changed');
export const teamName2Changed = createAction<string>('veto/teamName2Changed');
export const bestOfChanged = createAction<BestOf>('veto/bestOfChanged');
export const modeChanged = createAction<BestOfMode>('veto/modeChanged');
export const mapFiltered = createAction<string>('veto/mapFiltered');
