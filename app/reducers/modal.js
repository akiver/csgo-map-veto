import * as types from '../actions/types';

export default function modal(state = {
    isOpen: false,
    remainingMapList: [],
    vote: {}
}, action) {
    switch (action.type) {
        case types.SHOW_MODAL_VOTE:
            return Object.assign({}, state, {
                isOpen: true,
                vote: action.vote
            });
        case types.HIDE_MODAL_VOTE:
        case types.SELECT_MAP:
            return Object.assign({}, state, {
                isOpen: false
            });
        case types.START_VETO:
            return Object.assign({}, state, {
                remainingMapList: action.maps
            });
        default:
            return state;
    }
}
