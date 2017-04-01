import { connect } from 'react-redux'
import MapList from '../components/MapList'

const getPickedMapList = (maps) => {
    return maps.filter(m => m.isSelected && (m.isPicked || m.isRandom))
}

const mapStateToProps = (state) => {
    return {
        maps: getPickedMapList(state.settings.maps)
    }
}

export default connect(mapStateToProps)(MapList)
