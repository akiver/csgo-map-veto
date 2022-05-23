import { createReducer } from '@reduxjs/toolkit';
import { apiAddressChanged } from 'renderer/settings/settings-actions';
import { DEFAULT_API_ADDRESS } from 'renderer/constants/api';

type SettingsState = {
  apiAddress: string;
};

const initialState: SettingsState = {
  apiAddress: DEFAULT_API_ADDRESS,
};

export const settingsReducer = createReducer(initialState, (builder) => {
  builder.addCase(apiAddressChanged, (state, action) => {
    state.apiAddress = action.payload;
  });
});
