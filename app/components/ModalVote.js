import React from 'react'
import Modal from 'react-modal'

class ModalVote extends React.Component {

    static propTypes = {
        isOpen: React.PropTypes.bool,
        remainingMapList: React.PropTypes.array,
        onMapSelected: React.PropTypes.func,
        onHide: React.PropTypes.func,
        vote: React.PropTypes.object
    }

    renderMap(map, idx) {
        return (
            <div key={idx}
                 className="col-xs-4">
                <img
                    src={`images/maps/${map.imageName}`}
                    alt={map.name}
                    className="img-responsive img-thumbnail img-modal"
                    onClick={() => this.props.onMapSelected(this.props.vote, map)}/>
                <p className="text-center">{map.name}</p>
            </div>
        )
    }

    renderMapRow(maps, idx) {
        return (
            <div key={idx}
                 className="row">
                {maps.map((map, idx) => {
                    return this.renderMap(map, idx)
                })}
            </div>
        )
    }

    renderMaps() {
        let rowCount = Math.ceil(this.props.remainingMapList.length / 3)
        let content = []
        for (let i = 0; i < rowCount; i++) {
            let maps = this.props.remainingMapList.slice(i * 3, i * 3 + 3)
            content.push(this.renderMapRow(maps, i))
        }

        return content
    }

    render() {
        //console.log('render ModalVote', this.props)
        return (
            <Modal className="Modal__Bootstrap modal-dialog"
                   onRequestClose={this.props.onHide}
                   contentLabel="Test"
                   isOpen={this.props.isOpen}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">Select map</h4>
                    </div>
                    <div className="modal-body">
                        {this.renderMaps()}
                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-info center-block"
                                onClick={this.props.onHide}>
                            Cancel
                        </button>
                    </div>
                </div>
            </Modal>
        )
    }
}

export default ModalVote
