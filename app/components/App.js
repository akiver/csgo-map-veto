import React from 'react'
import Settings from '../containers/Settings'
import VoteList from '../containers/VoteList'
import MapList from '../containers/MapList'
import Error from '../containers/Error'
import ModalVote from '../containers/ModalVote'
import _ from 'lodash'

class App extends React.Component {

    static propTypes = {
        teamName1: React.PropTypes.string,
        teamName2: React.PropTypes.string,
        selectedMapList: React.PropTypes.array,
        selectedBestOf: React.PropTypes.object,
        selectedMode: React.PropTypes.object
    }

    shouldComponentUpdate(nextProps) {
        return !_.isEqual(this.props, nextProps)
    }

    render() {
        //console.log('render App', this.props)
        return (
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-xs-12'>
                        <h1 className='text-center'>CSGO Map Veto</h1>
                        <div className="row">
                            <div className="col-xs-3">
                                <Settings teamName1={this.props.teamName1}
                                          teamName2={this.props.teamName2}
                                          selectedMapList={this.props.selectedMapList}
                                          selectedBestOf={this.props.selectedBestOf}
                                          selectedMode={this.props.selectedMode}/>
                            </div>
                            <div className="col-xs-9">
                                <div className='row'>
                                    <div className="col-xs-12">
                                        <MapList selectedMapList={this.props.selectedMapList}/>
                                        <Error />
                                        <VoteList selectedMode={this.props.selectedMode}/>
                                        <ModalVote />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App
