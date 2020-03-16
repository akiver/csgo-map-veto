import { Dispatch } from 'redux';
import { updateVetoStatus, UpdateVetoStatusAction } from 'renderer/veto/actions/update-veto-status';
import { resetMaps, ResetMapsAction } from 'renderer/veto/actions/reset-maps';
import { VetoStatuses } from 'renderer/types/veto-status';

const resetVeto = () => {
  return (dispatch: Dispatch<ResetVetoAction>) => {
    dispatch(resetMaps());

    dispatch(updateVetoStatus(VetoStatuses.SETUP));
  };
};

type ResetVetoAction = UpdateVetoStatusAction | ResetMapsAction;

export { resetVeto, ResetVetoAction };
