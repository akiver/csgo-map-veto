import React from 'react'

class Error extends React.Component {

    static propTypes = {
        message: React.PropTypes.string
    }

    render() {
        //console.log('render Error', this.props)
        if (this.props.message !== null) {
            return (
                <div className='row'>
                    <div className="alert alert-danger">
                        <p className="text-center">{this.props.message}</p>
                    </div>
                </div>
            )
        }
        return null
    }
}

export default Error
