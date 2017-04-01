import {connect} from 'react-redux'
import Footer from '../components/Footer'

const GITHUB_URL = 'https://github.com/akiver/csgo-map-veto'

const mapDispatchToProps = (dispatch) => {
    return {
        onGitHubClicked() {
            if (process) {
                (require('electron').shell).openExternal(GITHUB_URL)
            } else {
                window.open(GITHUB_URL)
            }
        },
    }
}

export default connect(() => {return {}}, mapDispatchToProps)(Footer)
