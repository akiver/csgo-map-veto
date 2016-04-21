import { connect } from 'react-redux';
import Settings from '../components/Settings';
import {
    bestOfChanged,
    modeChanged,
    updateSelectedMaps,
    updateTeamName1,
    updateTeamName2
} from '../actions/settings';
import {
    startVeto,
    cancelVeto,
    initVoteList
} from '../actions/votes';

const mapStateToProps = (state, ownProps) => {
    return {
        isVetoStarted: state.votes.isVetoStarted,
        maps: state.settings.maps,
        bestOfList: state.settings.bestOfList,
        teamName1: state.settings.teamName1,
        teamName2: state.settings.teamName2,
        selectedMapList: ownProps.selectedMapList,
        selectedBestOf: ownProps.selectedBestOf,
        selectedMode: ownProps.selectedMode
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onBestOfChanged(value) {
            dispatch(bestOfChanged(value));
        },
        onModeChanged(selectedValues) {
            let mode = selectedValues[0];
            dispatch(modeChanged(ownProps.selectedBestOf.value, mode.value));
            dispatch(initVoteList(mode));
        },
        onUpdateSelectedMaps(mapLabelList) {
            dispatch(updateSelectedMaps(mapLabelList));
        },
        onStartClicked() {
            dispatch(startVeto({
                mode: ownProps.selectedMode,
                selectedMapList: ownProps.selectedMapList,
                teamName1: ownProps.teamName1,
                teamName2: ownProps.teamName2
            }));
        },
        onCancelClicked() {
            dispatch(cancelVeto());
        },
        onTeamName1Changed(name) {
            dispatch(updateTeamName1(name));
        },
        onTeamName2Changed(name) {
            dispatch(updateTeamName2(name));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
