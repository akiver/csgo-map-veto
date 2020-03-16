import { VetoStatus } from 'renderer/types/veto-status';

const UPDATE_VETO_STATUS = 'veto.updateStatus';

const updateVetoStatus = (status: VetoStatus) => {
  return {
    type: UPDATE_VETO_STATUS as typeof UPDATE_VETO_STATUS,
    status,
  };
};

type UpdateVetoStatusAction = ReturnType<typeof updateVetoStatus>;

export { UPDATE_VETO_STATUS, updateVetoStatus, UpdateVetoStatusAction };
