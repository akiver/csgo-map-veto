import * as types from '../actions/types'

export default function modal(state = {
    isOpen: false,
    vote: {}
}, action) {
    switch (action.type) {
        case types.SHOW_MODAL_VOTE:
            return Object.assign({}, state, {
                isOpen: true,
                vote: action.vote
            })
        case types.HIDE_MODAL_VOTE:
        case types.SELECT_MAP:
            return Object.assign({}, state, {
                isOpen: false,
                vote: {}
            })
        default:
            return state
    }
}
