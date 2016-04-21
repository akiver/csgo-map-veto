import { connect } from 'react-redux';
import MapList from '../components/MapList';

const mapStateToProps = (state, ownProps) => {
    return {
        selectedMapList: ownProps.selectedMapList
    };
};

export default connect(mapStateToProps)(MapList);
