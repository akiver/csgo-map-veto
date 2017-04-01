import * as types from '../actions/types'
import MAPS from '../data/maps'
import BO from '../data/BO'

export default function settings(state = {
    teamName1: 'Team 1',
    teamName2: 'Team 2',
    maps: MAPS,
    bestOfList: BO,
    selectedBestOf: BO.filter(b => b.isSelected)[0],
    selectedMode: BO.filter(b => b.isSelected)[0].modes.filter(b => b.isSelected)[0],
    isVetoStarted: false
}, action) {
    switch (action.type) {
        case types.SETTINGS_SELECT_MAP:
        case types.SELECT_MAP:
        case types.SELECT_RANDOM_MAP:
            return Object.assign({}, state, {
                maps: state.maps.map(c => map(c, action))
            })
        case types.START_VETO:
            return Object.assign({}, state, {
                isVetoStarted: true
            })
        case types.CANCEL_VETO:
            return Object.assign({}, state, {
                isVetoStarted: false,
                maps: state.maps.map(c => map(c, action))
            })
        case types.TEAM_1_NAME_CHANGED:
            return Object.assign({}, state, {
                teamName1: action.name
            })
        case types.TEAM_2_NAME_CHANGED:
            return Object.assign({}, state, {
                teamName2: action.name
            })
        case types.BEST_OF_CHANGED: {
            const bestOfList = state.bestOfList.map(m => bestOf(m, action))
            return Object.assign({}, state, {
                bestOfList,
                selectedBestOf: bestOfList.filter(b => b.isSelected)[0]
            })
        }
        case types.MODE_CHANGED: {
            const bestOfList = state.bestOfList.map(m => bestOf(m, action))
            return Object.assign({}, state, {
                bestOfList,
                selectedMode: bestOfList.filter(b => b.isSelected)[0].modes.filter(b => b.isSelected)[0]
            })
        }
        case types.UPDATE_SELECTED_MAPS:
            return Object.assign({}, state, {
                maps: state.maps.map(m => map(m, action))
            })
        default:
            return state
    }
}

const map = (state = {
    name: '',
    imagePath: null,
    isSelected: true,
    value: null,
    isBanned: false,
    isPicked: false,
    isRandom: false
}, action) => {
    switch (action.type) {
        case types.SETTINGS_SELECT_MAP:
            if (state.name !== action.map.name) {
                return state
            }
            return Object.assign({}, state, {
                isSelected: true
            })
        case types.UPDATE_SELECTED_MAPS:
            if (action.maps.filter(m => m.value == state.value).length !== 0) {
                return {
                    ...state,
                    isSelected: true
                }
            }
            return {
                ...state,
                isSelected: false
            }
        case types.SELECT_MAP:
        case types.SELECT_RANDOM_MAP:
            if (action.map !== state) {
                return state
            }
            switch (action.vote.type) {
                case 'ban':
                    return Object.assign({}, state, {
                        isBanned: true
                    })
                case 'pick':
                    return Object.assign({}, state, {
                        isPicked: true
                    })
                case 'random':
                    return Object.assign({}, state, {
                        isRandom: true
                    })
            }
            return state
        case types.CANCEL_VETO:
            return Object.assign({}, state, {
                isPicked: false,
                isBanned: false,
                isRandom: false
            })
        default:
            return state
    }
}

const bestOf = (state = {
    value: null,
    isSelected: false,
    modes: []
}, action) => {
    switch (action.type) {
        case types.BEST_OF_CHANGED:
            if (state.value !== action.value) {
                return Object.assign({}, state, {
                    isSelected: false
                })
            }
            return Object.assign({}, state, {
                isSelected: true
            })
        case types.MODE_CHANGED:
            if (state.value !== action.bestOfValue) {
                return state
            }
            return Object.assign({}, state, {
                modes: state.modes.map(m => mode(m, action))
            })
        default:
            return state
    }
}

const mode = (state = {
    value: null,
    isSelected: false
}, action) => {
    switch (action.type) {
        case types.MODE_CHANGED:
            if (state.value !== action.modeValue) {
                return {
                    ...state,
                    isSelected: false
                }
            }
            return {
                ...state,
                isSelected: true
            }
        default:
            return state
    }
}