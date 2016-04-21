import * as types from './types';

export function initVoteList(mode) {
    return dispatch => {
        dispatch(clearVoteList());
        mode.requiredVotes.forEach((v) => {
            dispatch(addVote(v));
        });
        return {
            type: types.INIT_VOTES
        };
    };
}

export function addVote(vote) {
    return {
        type: types.ADD_VOTE,
        vote
    };
}

export function clearVoteList() {
    return {
        type: types.CLEAR_VOTE_LIST
    };
}

export function startVeto(options = {}) {
    return dispatch => {
        let mode = options.mode;
        let selectedMapList = options.selectedMapList;
        let teamName1 = options.teamName1;
        let teamName2 = options.teamName2;
        if (selectedMapList.length < mode.requiredVotes.length) {
            return dispatch(handleError('Wrong maps number selected.'));
        }
        if (teamName1.length === 0 || teamName2.length === 0) {
            return dispatch(handleError('You have to specify teams name.'));
        }
        dispatch(handleHideError());
        return dispatch(handleVetoStarted(selectedMapList));
    };
}

export function cancelVeto() {
    return {
        type: types.CANCEL_VETO
    };
}

function handleError(message) {
    return {
        type: types.SHOW_ERROR,
        message
    };
}

function handleHideError() {
    return {
        type: types.HIDE_ERROR
    };
}

function handleVetoStarted(maps) {
    return {
        type: types.START_VETO,
        maps
    };
}

export function selectMap(vote, map) {
    return {
        type: types.SELECT_MAP,
        map,
        vote
    };
}

export function selectRandomMap(vote, remainingMapList) {
    let r = Math.floor(Math.random() * remainingMapList.length);
    let map = remainingMapList[r];
    return {
        type: types.SELECT_RANDOM_MAP,
        vote,
        map
    };
}