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
        selectedMode: React.PropTypes.object
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
                               onChange={(e) => this.props.onTeamName1Changed(e.target.value)}
                               disabled={this.props.isVetoStarted}
                               value={this.props.teamName1} />
                    </p>
                </div>
                <div className="field">
                    <label htmlFor="team2-name" className="label">Team 2</label>
                    <p className="control">
                        <input type="text"
                               className="input"
                               id="team2-name"
                               placeholder="Team 2"
                               onChange={(e) => this.props.onTeamName2Changed(e.target.value)}
                               disabled={this.props.isVetoStarted}
                               value={this.props.teamName2} />
                    </p>
                </div>
                <div className="field">
                    <label htmlFor='bestof' className="label">Best Of</label>
                    <Select name="select-bestof"
                            onChange={(value) => this.props.onBestOfChanged(value)}
                            disabled={this.props.isVetoStarted}
                            options={this.props.bestOfList}
                            value={this.props.selectedBestOf}
                            clearable={false} />
                </div>
                <div className="field">
                    <label htmlFor="select-mode" className="label">Mode</label>
                    <Select name="select-mode"
                            onChange={(value, selectedValues) => this.props.onModeChanged(selectedValues)}
                            disabled={this.props.isVetoStarted}
                            options={this.props.selectedBestOf.modes}
                            value={this.props.selectedMode}
                            clearable={false} />
                </div>
                <div className="field">
                    <label htmlFor="maps" className="label">Maps</label>
                    <Select multi
                            name="select-maps"
                            options={this.props.maps}
                            value={this.props.selectedMapList}
                            disabled={this.props.isVetoStarted}
                            onChange={(maps) => this.props.onUpdateSelectedMaps(maps)} />
                </div>
                <div className="field is-grouped">
                    <p className="control">
                        <button className='button is-success'
                                type='button'
                                onClick={this.props.onStartClicked}
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
