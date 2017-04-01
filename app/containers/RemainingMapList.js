import { connect } from 'react-redux'
import MapList from '../components/MapList'

const getRemainingMapList = (maps) => {
    return maps.filter(m => m.isSelected && (!m.isPicked && !m.isBanned && !m.isRandom))
}

const mapStateToProps = (state) => {
    return {
        maps: getRemainingMapList(state.settings.maps)
    }
}

export default connect(mapStateToProps)(MapList)
