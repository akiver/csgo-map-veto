import { ThunkDispatch } from 'redux-thunk';
import { StoreState } from 'renderer/store';
import { getRemainingMaps } from 'renderer/veto/selectors/get-remaining-maps';
import { makeVote, MakeVoteAction } from 'renderer/veto/actions/make-vote';

const makeRandomVote = () => {
  return (dispatch: ThunkDispatch<StoreState, void, MakeVoteAction>, getState: () => StoreState) => {
    const remainingMaps = getRemainingMaps(getState());
    const randomIndex = Math.floor(Math.random() * (remainingMaps.length - 0));
    const mapName = remainingMaps[randomIndex].name;

    dispatch(makeVote(mapName));
  };
};

export { makeRandomVote };
