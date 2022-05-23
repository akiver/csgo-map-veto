import { combineReducers } from 'redux';
import { settingsReducer } from 'renderer/settings/settings-reducer';
import { vetoReducer } from './veto/veto-reducer';

export const reducer = combineReducers({
  settings: settingsReducer,
  veto: vetoReducer,
});
