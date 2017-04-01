import React from 'react'
import {version} from '../../package.json'

class Footer extends React.Component {

    static propTypes = {
        onGitHubClicked: React.PropTypes.func.isRequired
    }

    browseToGitHub = () => {
        this.props.onGitHubClicked()
    }

    render() {
        //console.log('render Footer', this.props)
        return (
            <footer className="footer">
                <div className="container">
                    <div className="footer-text-block">
                            <span>
                                <strong>CSGO Map Veto</strong> v{version} by <strong>AkiVer</strong>.
                            </span>
                        <img className="github-icon"
                             src={require('../images/github.svg')}
                             onClick={this.browseToGitHub}/>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer
