import React from 'react'
import _ from 'lodash'

class VoteRow extends React.Component {

    static propTypes = {
        vote: React.PropTypes.object,
        isVetoStarted: React.PropTypes.bool,
        onShowModalVote: React.PropTypes.func,
        selectRandomMap: React.PropTypes.func,
        remainingMapList: React.PropTypes.array
    }

    shouldComponentUpdate(nextProps) {
        return !_.isEqual(this.props, nextProps)
    }

    renderWaiting() {
        let text = ''
        switch (this.props.vote.type) {
            case 'ban':
                text = ' has to ban a map'
                break
            case 'pick':
                text = ' has to pick a map'
                break
            case 'random':
                text = ' will pick a random map'
                break
        }
        if (this.props.isVetoStarted) {
            if (this.props.vote.isCurrentVote) {
                if (this.props.vote.type !== 'random') {
                    return (
                        <div>
                            <div className="col-xs-10">
                                <p className="text-vote">
                                    <span className="text-bold">{this.props.vote.teamName}</span>
                                    <span>{text}</span>
                                </p>
                            </div>
                            <div className="col-xs-2">
                                <button type="button"
                                        className="btn btn-info"
                                        onClick={() => this.props.onShowModalVote(this.props.vote)}>
                                    Select Map
                                </button>
                            </div>
                        </div>
                    )
                }

                return (
                    <div>
                        <div className="col-xs-10">
                            <p className="text-vote">
                                <span className="text-bold">{this.props.vote.teamName}</span>
                                <span>{text}</span>
                            </p>
                        </div>
                        <div className="col-xs-2">
                            <button type="button"
                                    className="btn btn-info"
                                    onClick={() => this.props.selectRandomMap(
                                        this.props.vote,
                                        this.props.remainingMapList
                                    )}>
                                Generate
                            </button>
                        </div>
                    </div>
                )
            }
        }
        return (
            <div className="row">
                <div className="col-xs-10">
                    <p className="text-vote">
                        <span className="text-bold">{this.props.vote.teamName}</span>
                        <span>{text}</span>
                    </p>
                </div>
                <div className="col-xs-2">
                    <img className="img-responsive"
                         src="images/maps/unknown.png"
                         alt="Unknown map"/>
                </div>
            </div>
        )
    }

    renderDone() {
        let text = ''
        switch (this.props.vote.type) {
            case 'ban':
                text = ' banned ' + this.props.vote.selectedMap.name
                break
            case 'pick':
                text = ' picked ' + this.props.vote.selectedMap.name
                break
            case 'random':
                text = ' randomly picked ' + this.props.vote.selectedMap.name
                break
        }
        return (
            <div>
                <div className="col-xs-10">
                    <p className="text-vote">
                        <span className="text-bold">{this.props.vote.teamName}</span>
                        <span>{text}</span>
                    </p>
                </div>
                <div className="col-xs-2">
                    <img className="img-responsive"
                         src={`images/maps/${this.props.vote.selectedMap.imageName}`}
                         alt={this.props.vote.selectedMap.name}/>
                </div>
            </div>

        )
    }

    renderContent() {
        if (this.props.vote.status === 'done') {
            return this.renderDone()
        }
        return this.renderWaiting()
    }

    render() {
        //console.log('render VoteRow', this.props)
        let className = 'col-xs-12 alert'
        if (this.props.vote.status === 'done') {
            if (this.props.vote.type === 'ban') {
                className += ' alert-danger'
            } else {
                className += ' alert-success'
            }
        } else {
            className += ' alert-info'
        }
        if (this.props.isVetoStarted && this.props.vote.isCurrentVote) {
            className += ' border-current'
        }
        return (
            <div className='row'>
                <div className={className} role="alert">
                    {this.renderContent()}
                </div>
            </div>
        )
    }
}

export default VoteRow
