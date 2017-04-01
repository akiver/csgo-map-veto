import { connect } from 'react-redux'
import VoteRow from '../components/VoteRow'
import { show as showModalVote } from '../actions/modal'
import { selectRandomMap } from '../actions/votes'

const getRemainingMapList = (maps) => {
    return maps.filter(m => m.isSelected && !m.isPicked && !m.isBanned && !m.isRandom)
}

const mapStateToProps = (state) => {
    return {
        isVetoStarted: state.settings.isVetoStarted,
        remainingMapList: getRemainingMapList(state.settings.maps)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onShowModalVote(vote) {
            dispatch(showModalVote(vote))
        },
        selectRandomMap(vote, remainingMapList) {
            dispatch(selectRandomMap(vote, remainingMapList))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VoteRow)
