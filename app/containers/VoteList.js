import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import VoteList from '../components/VoteList'
import {initVoteList} from '../actions/votes'

class VoteListContainer extends Component {

    static propTypes = {
        votes: PropTypes.array.isRequired,
        initVoteList: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.initVoteList(this.props.mode)
    }

    render() {
        return <VoteList votes={this.props.votes}/>
    }
}

const mapStateToProps = (state) => {
    return {
        votes: state.votes.votes,
        mode: state.settings.selectedMode
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        initVoteList(mode) {
            dispatch(initVoteList(mode))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VoteListContainer)
