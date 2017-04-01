import React from 'react'
import Select from 'react-select'

class Settings extends React.Component {

    static propTypes = {
        onBestOfChanged: React.PropTypes.func,
        onModeChanged: React.PropTypes.func,
        isVetoStarted: React.PropTypes.bool,
        onUpdateSelectedMaps: React.PropTypes.func,
        onTeamName1Changed: React.PropTypes.func,
        onTeamName2Changed: React.PropTypes.func,
        teamName1: React.PropTypes.string,
        teamName2: React.PropTypes.string,
        maps: React.PropTypes.array,
        selectedMapList: React.PropTypes.array,
        bestOfList: React.PropTypes.array,
        selectedBestOf: React.PropTypes.object,
        selectedMode: React.PropTypes.object,
        onCancelClicked: React.PropTypes.func
    }

    startVeto = () => {
        this.props.onStartClicked({
            mode: this.props.selectedMode,
            selectedMapList: this.props.selectedMapList,
            teamName1: this.props.teamName1,
            teamName2: this.props.teamName2
        })
    }

    changeBestOf = (value) => {
        this.props.onBestOfChanged(value)
    }

    changeMode = (value) => {
        this.props.onModeChanged(
            this.props.selectedBestOf.value,
            value
        )
    }

    changeTeam1Name = (e) => {
        this.props.onTeamName1Changed(e.target.value)
    }

    changeTeam2Name = (e) => {
        this.props.onTeamName2Changed(e.target.value)
    }

    updateSelectedMaps = (map) => {
        this.props.onUpdateSelectedMaps(map)
    }

    render() {
        //console.log('render Settings', this.props)
        return (
            <div>
                <div className="field">
                    <label htmlFor="team1-name" className="label">Team 1</label>
                    <p className="control">
                        <input type="text"
                               className="input"
                               id="team1-name"
                               placeholder="Team 1"
                               onChange={this.changeTeam1Name}
                               disabled={this.props.isVetoStarted}
                               value={this.props.teamName1}/>
                    </p>
                </div>
                <div className="field">
                    <label htmlFor="team2-name" className="label">Team 2</label>
                    <p className="control">
                        <input type="text"
                               className="input"
                               id="team2-name"
                               placeholder="Team 2"
                               onChange={this.changeTeam2Name}
                               disabled={this.props.isVetoStarted}
                               value={this.props.teamName2}/>
                    </p>
                </div>
                <div className="field">
                    <label htmlFor='bestof' className="label">Best Of</label>
                    <Select name="select-bestof"
                            onChange={this.changeBestOf}
                            disabled={this.props.isVetoStarted}
                            options={this.props.bestOfList}
                            value={this.props.selectedBestOf}
                            clearable={false}/>
                </div>
                <div className="field">
                    <label htmlFor="select-mode" className="label">Mode</label>
                    <Select name="select-mode"
                            onChange={this.changeMode}
                            disabled={this.props.isVetoStarted}
                            options={this.props.selectedBestOf.modes}
                            value={this.props.selectedMode}
                            clearable={false}/>
                </div>
                <div className="field">
                    <label htmlFor="maps" className="label">Maps</label>
                    <Select multi
                            name="select-maps"
                            options={this.props.maps}
                            value={this.props.selectedMapList}
                            disabled={this.props.isVetoStarted}
                            onChange={this.updateSelectedMaps}/>
                </div>
                <div className="field is-grouped">
                    <p className="control">
                        <button className='button is-success'
                                type='button'
                                onClick={this.startVeto}
                                disabled={this.props.isVetoStarted}>
                            Start
                        </button>
                    </p>
                    <p className="control">
                        <button className='button is-danger'
                                type='button'
                                onClick={this.props.onCancelClicked}
                                disabled={!this.props.isVetoStarted}>
                            Cancel
                        </button>
                    </p>
                </div>
            </div>
        )
    }
}

export default Settings
