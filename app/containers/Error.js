import { connect } from 'react-redux'
import Error from '../components/Error'

const mapStateToProps = (state) => {
    return {
        message: state.error.message
    }
}

export default connect(mapStateToProps)(Error)
