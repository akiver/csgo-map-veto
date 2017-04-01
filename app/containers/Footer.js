import {connect} from 'react-redux'
import Footer from '../components/Footer'

const GITHUB_URL = 'https://github.com/akiver/csgo-map-veto'

const mapDispatchToProps = (dispatch) => {
    return {
        onGitHubClicked() {
            if (process.browser) {
                window.open(GITHUB_URL)
            } else {
                (require('electron').shell).openExternal(GITHUB_URL)
            }
        },
    }
}

export default connect(() => {return {}}, mapDispatchToProps)(Footer)
