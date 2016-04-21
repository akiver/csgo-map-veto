import { connect } from 'react-redux';

import App from '../components/App';

const getSelectedMapList = (maps) => {
    return maps.filter(m => m.isSelected);
};

const getSelectedBestOf = (bestOfList) => {
    return bestOfList.filter(b => b.isSelected)[0];
};

const getSelectedMode = (bestOfList) => {
    let selectedBestOf = getSelectedBestOf(bestOfList);
    return selectedBestOf.modes.filter(m => m.isSelected)[0];
};

const mapStateToProps = (state) => {
    const { settings } = state;
    return {
        selectedMapList: getSelectedMapList(settings.maps),
        selectedBestOf: getSelectedBestOf(settings.bestOfList),
        selectedMode: getSelectedMode(settings.bestOfList),
        teamName1: settings.teamName1,
        teamName2: settings.teamName2
    };
};

export default connect(mapStateToProps)(App);
