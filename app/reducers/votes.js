import * as types from '../actions/types'

export default function votes(state = {
    votes: [],
    remainingMapList: [],
    isVetoStarted: false,
    isRulesValid: true,
    isModalVoteOpened: false
}, action) {
    switch (action.type) {
        case types.ADD_VOTE:
            return Object.assign({}, state, {
                votes: [
                    ...state.votes,
                    vote(undefined, action)
                ]
            })
        case types.INIT_VOTES:
            return Object.assign({}, state, {
                votes: action.votes
            })
        case types.CLEAR_VOTE_LIST:
            return Object.assign({}, state, {
                votes: []
            })
        case types.UPDATE_VOTES:
            return Object.assign({}, state, {
                votes: state.votes.map(m => vote(m, action))
            })
        case types.START_VETO:
            return Object.assign({}, state, {
                remainingMapList: action.maps,
                isVetoStarted: true,
                votes: state.votes.map(m => vote(m, action))
            })
        case types.CANCEL_VETO:
            return Object.assign({}, state, {
                isVetoStarted: false,
                votes: state.votes.map(m => vote(m, action))
            })
        case types.TEAM_1_NAME_CHANGED:
        case types.TEAM_2_NAME_CHANGED:
            return Object.assign({}, state, {
                votes: state.votes.map(m => vote(m, action))
            })
        case types.SHOW_MODAL_VOTE:
            return Object.assign({}, state, {
                isModalVoteOpened: true
            })
        case types.SELECT_MAP:
        case types.SELECT_RANDOM_MAP:
            return Object.assign({}, state, {
                votes: state.votes.map(m => vote(m, action))
            })
        default:
            return state
    }
}

const vote = (state = {
    id: null,
    type: 'ban',
    status: 'waiting',
    isCurrentVote: false,
    selectedMap: {}
}, action) => {
    switch (action.type) {
        case types.ADD_VOTE:
            return action.vote
        case types.TEAM_1_NAME_CHANGED:
        case types.TEAM_2_NAME_CHANGED:
            if (state.teamNumber !== action.teamNumber) {
                return state
            }
            return Object.assign({}, state, {
                teamName: action.name
            })
        case types.SELECT_MAP:
        case types.SELECT_RANDOM_MAP:
            if (action.vote.id + 1 === state.id) {
                return Object.assign({}, state, {
                    isCurrentVote: true
                })
            }
            if (action.vote.id !== state.id) {
                return state
            }
            return Object.assign({}, state, {
                status: 'done',
                isCurrentVote: false,
                selectedMap: action.map
            })
        case types.START_VETO:
            if (state.id === 1) {
                return Object.assign({}, state, {
                    status: 'waiting',
                    selectedMap: {},
                    isCurrentVote: true
                })
            }
            return Object.assign({}, state, {
                status: 'waiting',
                selectedMap: {},
                isCurrentVote: false
            })
        case types.CANCEL_VETO:
            return Object.assign({}, state, {
                status: 'waiting',
                selectedMap: {},
                isCurrentVote: false
            })
        default:
            return state
    }
}
