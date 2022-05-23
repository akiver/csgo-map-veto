import { createReducer } from '@reduxjs/toolkit';
import { BestOf } from 'renderer/types/best-of';
import { BestOfMode } from 'renderer/types/best-of-mode';
import { VetoStatus } from 'renderer/types/veto-status';
import { BEST_OF_3, BO3_MODE_BPBR } from 'renderer/constants/best-of/bo3';
import { MAPS } from 'renderer/constants/maps';
import {
  bestOfChanged,
  makeVote,
  mapFiltered,
  modeChanged,
  resetVeto,
  startVeto,
  startVetoError,
  teamName1Changed,
  teamName2Changed,
} from './veto-actions';
import { VoteStatus } from 'renderer/types/vote-status';
import { Vote } from 'renderer/types/vote';

type VetoState = {
  teamOneName: string;
  teamTwoName: string;
  bestOf: BestOf;
  bestOfMode: BestOfMode;
  mapNames: string[];
  status: VetoStatus;
  error?: string;
  votes: Vote[];
};

const initialState: VetoState = {
  teamOneName: 'Team 1',
  teamTwoName: 'Team 2',
  bestOf: BEST_OF_3,
  bestOfMode: BO3_MODE_BPBR,
  mapNames: MAPS.slice(0, 7).map((mapName) => mapName),
  status: VetoStatus.Setup,
  votes: [],
};

export const vetoReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(startVeto, (state, action) => {
      state.status = VetoStatus.InProgress;
      state.error = undefined;
      for (const [index, vote] of action.payload.mode.votes.entries()) {
        state.votes.push({
          id: vote.id,
          type: vote.type,
          teamNumber: vote.teamNumber,
          status: index === 0 ? VoteStatus.Current : VoteStatus.Waiting,
          mapName: undefined,
        });
      }
    })
    .addCase(startVetoError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(resetVeto, (state) => {
      state.status = VetoStatus.Setup;
      state.votes = [];
    })
    .addCase(teamName1Changed, (state, action) => {
      state.teamOneName = action.payload;
    })
    .addCase(teamName2Changed, (state, action) => {
      state.teamTwoName = action.payload;
    })
    .addCase(bestOfChanged, (state, action) => {
      state.bestOf = action.payload;
      state.bestOfMode = action.payload.modes[0];
    })
    .addCase(modeChanged, (state, action) => {
      state.bestOfMode = action.payload;
    })
    .addCase(mapFiltered, (state, action) => {
      const isMapAlreadySelected = state.mapNames.includes(action.payload);
      if (isMapAlreadySelected) {
        state.mapNames = state.mapNames.filter((mapName) => mapName !== action.payload);
      } else {
        state.mapNames.push(action.payload);
      }
    })
    .addCase(makeVote, (state, action) => {
      const currentVoteIndex = state.votes.findIndex((vote) => vote.status === VoteStatus.Current);
      if (currentVoteIndex === -1) {
        return state;
      }

      const currentVote = state.votes[currentVoteIndex];
      currentVote.status = VoteStatus.Done;
      currentVote.mapName = action.payload;
      const nextVote = state.votes[currentVoteIndex + 1];
      if (nextVote !== undefined) {
        nextVote.status = VoteStatus.Current;
      }

      if (state.votes.every((vote) => vote.status === VoteStatus.Done)) {
        state.status = VetoStatus.Completed;
      }
    });
});
