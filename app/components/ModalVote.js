import React from 'react'

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
            <div key={idx} className="column is-4">
                <div className="modal-map-block" onClick={() => this.props.onMapSelected(this.props.vote, map)}>
                    <img src={require(`images/maps/${map.imageName}`)}
                         alt={map.name}
                         className="image"/>
                    <p className="has-text-centered">{map.name}</p>
                </div>
            </div>
        )
    }

    renderMaps() {
        return this.props.remainingMapList.map((map, idx) => {
            return this.renderMap(map, idx)
        })
    }

    render() {
        // console.log('render ModalVote', this.props)
        if (this.props.isOpen) {
            return (
                <div className="modal is-active">
                    <div className="modal-background" onClick={this.props.onHide}></div>
                    <div className="modal-card">
                        <header className="modal-card-head">
                            <p className="modal-card-title">Select a map</p>
                            <button className="delete" onClick={this.props.onHide}></button>
                        </header>
                        <section className="modal-card-body">
                            <div className="columns is-multiline">
                                {this.renderMaps()}
                            </div>
                        </section>
                        <footer className="modal-card-foot">
                            <button className="button"
                                    onClick={this.props.onHide}>
                                Cancel
                            </button>
                        </footer>
                    </div>
                </div>
            )
        }

        return null
    }
}

export default ModalVote
