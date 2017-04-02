import React from 'react'

class VoteRow extends React.Component {

    static propTypes = {
        vote: React.PropTypes.object,
        isVetoStarted: React.PropTypes.bool,
        onShowModalVote: React.PropTypes.func,
        selectRandomMap: React.PropTypes.func,
        remainingMapList: React.PropTypes.array
    }

    shouldComponentUpdate(nextProps) {
        return this.props.vote != nextProps.vote
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.isVetoStarted && nextProps.vote.isCurrentVote && nextProps.vote.type === 'random') {
            this.props.selectRandomMap(
                nextProps.vote,
                nextProps.remainingMapList
            )
        }
    }

    getVoteRowClassName() {
        let className = 'vote-pending'
        if (this.props.vote.type === 'ban') {
            className += ' vote-ban'
        } else if (this.props.vote.type == 'pick') {
            className += ' vote-pick'
        } else {
            className += ' vote-random'
        }

        if (this.props.isVetoStarted && this.props.vote.isCurrentVote) {
            className += ' vote-current'
        }

        return className
    }

    getText() {
        if (this.props.vote.status == 'waiting') {
            switch (this.props.vote.type) {
                case 'ban':
                    return ' BAN'
                case 'pick':
                case 'random':
                    return ' PICK'
                default:
                    return ''
            }
        }

        switch (this.props.vote.type) {
            case 'ban':
                return ' BANNED ' + this.props.vote.selectedMap.name
            case 'random':
            case 'pick':
                return ' PICKED ' + this.props.vote.selectedMap.name
            default:
                return ''
        }
    }

    renderLeft() {
        let text = this.getText()
        return (
            <p className="text-vote">
                <strong>{this.props.vote.teamName}</strong>
                <span>{text}</span>
            </p>
        )
    }

    renderRight() {
        // vote done, show the selected map picture
        if (this.props.vote.status === 'done') {
            return (
                <img className="image image-vote"
                     src={require(`images/maps/${this.props.vote.selectedMap.imageName}`)}
                     alt={this.props.vote.selectedMap.name}/>
            )
        }

        // veto hasn't started, just show the unknown map picture
        if (!this.props.isVetoStarted || !this.props.vote.isCurrentVote) {
            return (
                <img className="image image-vote"
                     src={require('../images/maps/unknown.png')}
                     alt="Unknown map"/>
            )
        }

        // current vote
        if (this.props.vote.isCurrentVote) {
            return (
                <button type="button"
                        className="button is-success"
                        onClick={() => this.props.onShowModalVote(this.props.vote)}>
                    Select Map
                </button>
            )
        }

        // pending vote, show unknown map
        return (
            <img className="image image-vote"
                 src={require(`../images/maps/${this.props.vote.selectedMap.imageName}`)}
                 alt={this.props.vote.selectedMap.name}/>
        )
    }


    render() {
        //console.log('render VoteRow', this.props)
        let className = 'level ' + this.getVoteRowClassName()
        return (
            <nav className={className}>
                <div className="level-left">
                    <div className="level-item">
                        {this.renderLeft()}
                    </div>
                </div>
                <div className="level-right">
                    <div className="level-item">
                        {this.renderRight()}
                    </div>
                </div>
            </nav>
        )
    }
}

export default VoteRow
