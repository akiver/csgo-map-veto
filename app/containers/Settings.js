import { connect } from 'react-redux'
import Settings from '../components/Settings'
import {
    bestOfChanged,
    modeChanged,
    updateSelectedMaps,
    updateTeamName1,
    updateTeamName2
} from '../actions/settings'
import {
    startVeto,
    cancelVeto,
    initVoteList
} from '../actions/votes'

const getSelectedMapList = (maps) => {
    return maps.filter(m => m.isSelected)
}

const mapStateToProps = (state) => {
    const { settings } = state
    return {
        isVetoStarted: settings.isVetoStarted,
        maps: settings.maps,
        bestOfList: settings.bestOfList,
        teamName1: settings.teamName1,
        teamName2: settings.teamName2,
        selectedMapList: getSelectedMapList(settings.maps),
        selectedBestOf: settings.selectedBestOf,
        selectedMode: settings.selectedMode
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onBestOfChanged(value) {
            dispatch(bestOfChanged(value))
        },
        onModeChanged(selectedBestOfValue, selectedValues) {
            let mode = selectedValues[0]
            dispatch(modeChanged(selectedBestOfValue, mode.value))
            dispatch(initVoteList(mode))
        },
        onUpdateSelectedMaps(mapLabelList) {
            dispatch(updateSelectedMaps(mapLabelList))
        },
        onStartClicked(options) {
            dispatch(startVeto(options))
        },
        onCancelClicked() {
            dispatch(cancelVeto())
        },
        onTeamName1Changed(name) {
            dispatch(updateTeamName1(name))
        },
        onTeamName2Changed(name) {
            dispatch(updateTeamName2(name))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
