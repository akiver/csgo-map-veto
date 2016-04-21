import React from 'react';

class MapList extends React.Component {

    static propTypes = {
        selectedMapList: React.PropTypes.array
    };

    renderMap(idx, map) {
        let className = 'img-responsive img-thumbnail img-list';
        if (map.isBanned) {
            className += ' img-banned';
        } else if (map.isPicked) {
            className += ' img-picked';
        } else if (map.isRandom) {
            className += ' img-random';
        }
        return (
            <img key={idx}
                 src={map.imagePath}
                 alt={map.name}
                 className={className}/>
        );
    }

    render() {
        //console.log('render MapList', this.props);
        return (
            <div className='row'>
                <div className="col-xs-12">
                    {this.props.selectedMapList.map((map, idx) => {
                        return this.renderMap(idx, map);
                    })}
                </div>
            </div>
        );
    }
}

export default MapList;
