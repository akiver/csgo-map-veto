import React from 'react'
import VoteRow from '../containers/VoteRow'

class VoteList extends React.Component {

    static propTypes = {
        votes: React.PropTypes.array
    }

    renderVote(idx, vote) {
        return <VoteRow key={idx} vote={vote} />
    }

    render() {
        //console.log('render VoteList', this.props)
        return (
            <div>
                {this.props.votes.map((vote, idx) => {
                    return this.renderVote(idx, vote)
                })}
            </div>
        )
    }
}

export default VoteList
