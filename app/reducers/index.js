import { combineReducers } from 'redux';

import settings from './settings';
import votes from './votes';
import error from './error';
import modal from './modal';

const appReducer = combineReducers({
    settings,
    votes,
    error,
    modal
});

export default appReducer;
