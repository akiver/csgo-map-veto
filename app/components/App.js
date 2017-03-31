import React from 'react'
import Settings from '../containers/Settings'
import VoteList from '../containers/VoteList'
import MapList from '../containers/MapList'
import Error from '../containers/Error'
import ModalVote from '../containers/ModalVote'
import _ from 'lodash'
import is from 'electron-is'

class App extends React.Component {

    static propTypes = {
        teamName1: React.PropTypes.string,
        teamName2: React.PropTypes.string,
        remainingMapList: React.PropTypes.array,
        pickedMapList: React.PropTypes.array,
        selectedBestOf: React.PropTypes.object,
        selectedMode: React.PropTypes.object
    }

    shouldComponentUpdate(nextProps) {
        return !_.isEqual(this.props, nextProps)
    }

    render() {
        //console.log('render App', this.props)
        let className = is.macOS() ? 'app-container-mac' : ''
        return (
            <div className={`columns app-container ${className}`}>
                <div className='column is-3'>
                    <p className="has-text-centered">
                        <strong>Settings</strong>
                    </p>
                    <Settings teamName1={this.props.teamName1}
                              teamName2={this.props.teamName2}
                              selectedMapList={this.props.selectedMapList}
                              selectedBestOf={this.props.selectedBestOf}
                              selectedMode={this.props.selectedMode}/>
                </div>
                <div className='column is-5'>
                    <p className="has-text-centered">
                        <strong>Votes</strong>
                    </p>
                    <Error />
                    <VoteList selectedMode={this.props.selectedMode}/>
                </div>
                <div className='column is-2'>
                    <MapList title="Remaining maps"
                             maps={this.props.remainingMapList}
                    />
                </div>
                <div className='column is-2'>
                    <MapList title="Picked maps"
                             maps={this.props.pickedMapList}
                    />
                </div>
                <ModalVote />
            </div>
        )
    }
}

export default App
