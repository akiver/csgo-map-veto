import * as types from './types';

export function show(vote) {
    return {
        type: types.SHOW_MODAL_VOTE,
        vote
    };
}

export function hide() {
    return {
        type: types.HIDE_MODAL_VOTE
    };
}