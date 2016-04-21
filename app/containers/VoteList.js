import { connect } from 'react-redux';
import VoteList from '../components/VoteList';
import { initVoteList } from '../actions/votes';

const mapStateToProps = (state) => {
    return {
        votes: state.votes.votes
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        initVoteList() {
            dispatch(initVoteList(ownProps.selectedMode));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(VoteList);
