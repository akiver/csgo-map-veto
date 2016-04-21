import * as types from './types';

export function bestOfChanged(value) {
    return {
        type: types.BEST_OF_CHANGED,
        value
    };
}

export function modeChanged(bestOfValue, modeValue) {
    return {
        type: types.MODE_CHANGED,
        bestOfValue,
        modeValue
    };
}

export function updateSelectedMaps(mapLabelList) {
    let selectedMapLabelList = mapLabelList.split(',');
    return {
        type: types.UPDATE_SELECTED_MAPS,
        selectedMapLabelList
    };
}

export function updateTeamName1(name) {
    return {
        type: types.TEAM_1_NAME_CHANGED,
        teamNumber: 1,
        name
    };
}

export function updateTeamName2(name) {
    return {
        type: types.TEAM_2_NAME_CHANGED,
        teamNumber: 2,
        name
    };
}