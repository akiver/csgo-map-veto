import React from 'react'
import Settings from '../containers/Settings'
import VoteList from '../containers/VoteList'
import RemainingMapList from '../containers/RemainingMapList'
import PickedMapList from '../containers/PickedMapList'
import Error from '../containers/Error'
import ModalVote from '../containers/ModalVote'
import is from 'electron-is'

class App extends React.Component {

    render() {
        // console.log('render App', this.props)
        let className = is.macOS() ? 'app-container-mac' : ''
        return (
            <div className={`columns app-container ${className}`}>
                <div className='column is-3'>
                    <p className="has-text-centered">
                        <strong>Settings</strong>
                    </p>
                    <Settings />
                </div>
                <div className='column is-5'>
                    <p className="has-text-centered">
                        <strong>Votes</strong>
                    </p>
                    <Error />
                    <VoteList />
                </div>
                <div className='column is-2'>
                    <RemainingMapList title="Remaining maps" />
                </div>
                <div className='column is-2'>
                    <PickedMapList title="Picked maps" />
                </div>
                <ModalVote />
            </div>
        )
    }
}

export default App
