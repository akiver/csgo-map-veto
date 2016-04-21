import * as types from '../actions/types';

export default function maps(state = {
    message: null
}, action) {
    switch (action.type) {
        case types.SHOW_ERROR:
            return Object.assign({}, state, {
                message: action.message
            });
        case types.HIDE_ERROR:
            return Object.assign({}, state, {
                message: null
            });
        default:
            return state;
    }
}
