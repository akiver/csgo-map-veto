import React from 'react'

class Error extends React.Component {

    static propTypes = {
        message: React.PropTypes.string
    }

    render() {
        //console.log('render Error', this.props)
        if (this.props.message !== null) {
            return (
                <article className="message is-danger">
                    <div className="message-body">
                        {this.props.message}
                    </div>
                </article>
            )
        }

        return null
    }
}

export default Error
