import React from 'react'
import VoteRow from '../containers/VoteRow'

class VoteList extends React.Component {

    static propTypes = {
        votes: React.PropTypes.array,
        initVoteList: React.PropTypes.func
    }

    componentDidMount() {
        this.props.initVoteList()
    }

    renderVote(idx, vote) {
        return <VoteRow key={idx} vote={vote} />
    }

    render() {
        //console.log('render VoteList', this.props)
        return (
            <div className='row push-top'>
                <div className="col-xs-12">
                    {this.props.votes.map((vote, idx) => {
                        return this.renderVote(idx, vote)
                    })}
                </div>
            </div>
        )
    }
}

export default VoteList
