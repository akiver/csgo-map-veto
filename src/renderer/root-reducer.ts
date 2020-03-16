import { combineReducers } from 'redux';
import { settingsReducer } from 'renderer/settings/settings-reducer';
import { mapsReducer } from 'renderer/veto/reducers/maps-reducer';
import { votesReducer } from 'renderer/veto/reducers/votes-reducer';
import { optionsReducer } from 'renderer/veto/reducers/options-reducer';

const reducer = combineReducers({
  settings: settingsReducer,
  votes: votesReducer,
  options: optionsReducer,
  maps: mapsReducer,
});

export { reducer };
