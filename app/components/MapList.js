import React from 'react'

class MapList extends React.Component {

    static propTypes = {
        title: React.PropTypes.string,
        maps: React.PropTypes.array
    }

    shouldComponentUpdate(nextProps) {
        return this.props.maps.length !== nextProps.maps.length
    }

    renderMap(idx, map) {
        return (
            <div key={idx}>
                <img src={require(`../images/maps/${map.imageName}`)}
                     alt={map.name}
                     className="image image-map">
                </img>
                <p className="has-text-centered">{map.name}</p>
            </div>
        )
    }

    render() {
        //console.log('render MapList', this.props)
        return (
            <div>
                <p className="has-text-centered">
                    <strong>{this.props.title}</strong>
                </p>
                {this.props.maps.map((map, idx) => {
                    return this.renderMap(idx, map)
                })}
            </div>
        )
    }
}

export default MapList
