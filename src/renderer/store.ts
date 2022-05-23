import { configureStore } from '@reduxjs/toolkit';
import { reducer } from 'renderer/root-reducer';
import { KEY_API_ADDRESS } from 'renderer/constants/local-storage';
import { DEFAULT_API_ADDRESS } from 'renderer/constants/api';

const apiAddress = localStorage.getItem(KEY_API_ADDRESS);

export const store = configureStore({
  reducer,
  preloadedState: {
    settings: {
      apiAddress: apiAddress !== null ? apiAddress : DEFAULT_API_ADDRESS,
    },
  },
});

export type RootState = ReturnType<typeof store.getState>;
