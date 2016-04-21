import { connect } from 'react-redux';
import ModalVote from '../components/ModalVote';
import { show, hide } from '../actions/modal';
import { selectMap } from '../actions/votes';

const getRemainingMapList = (maps) => {
    return maps.filter(m => m.isSelected && !m.isPicked && !m.isBanned && !m.isRandom);
};

const mapDispatchToProps = (dispatch) => {
    return {
        onShow() {
            dispatch(show());
        },
        onHide() {
            dispatch(hide());
        },
        onMapSelected(vote, map) {
            dispatch(selectMap(vote, map));
        }
    };
};

const mapStateToProps = (state) => {
    const { modal } = state;
    return {
        remainingMapList: getRemainingMapList(state.settings.maps),
        isOpen: modal.isOpen,
        vote: modal.vote
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalVote);
