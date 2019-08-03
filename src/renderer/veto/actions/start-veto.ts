import { Dispatch } from 'redux'
import { StoreState } from 'renderer/Store'
import { getSelectedMaps } from 'renderer/veto/selectors/get-selected-maps'
import { getSelectedMode } from 'renderer/veto/selectors/get-selected-mode'
import { updateVotes, UpdateVotesAction } from 'renderer/veto/actions/update-votes'
import { updateMaps, UpdateMapsAction } from 'renderer/veto/actions/update-maps'
import { updateVetoStatus, UpdateVetoStatusAction } from 'renderer/veto/actions/update-veto-status'
import { getTeamOneName } from 'renderer/veto/selectors/get-team-one-name'
import { getTeamTwoName } from 'renderer/veto/selectors/get-team-two-name'
import { showError, ShowErrorAction } from 'renderer/veto/actions/show-error'
import { hideError, HideErrorAction } from 'renderer/veto/actions/hide-error'
import { VetoStatuses } from 'renderer/types/veto-status'

const startVeto = () => {
  return (dispatch: Dispatch<StartVetoAction>, getState: () => StoreState) => {
    const state = getState()
    const selectedMaps = getSelectedMaps(state)
    const selectedMode = getSelectedMode(state)
    const teamOneName = getTeamOneName(state)
    const teamTwoName = getTeamTwoName(state)

    if (selectedMaps.length < selectedMode.votes.length) {
      dispatch(showError('Wrong maps number selected.'))
      return
    }
    if (teamOneName.length === 0 || teamTwoName.length === 0) {
      dispatch(showError('You have to specify teams name.'))
      return
    }

    dispatch(hideError())
    dispatch(updateVotes(selectedMode.votes))
    dispatch(updateMaps(selectedMaps))
    dispatch(updateVetoStatus(VetoStatuses.IN_PROGRESS))
  }
}

type StartVetoAction =
  | UpdateVotesAction
  | UpdateMapsAction
  | UpdateVetoStatusAction
  | ShowErrorAction
  | HideErrorAction

export { startVeto, StartVetoAction }
