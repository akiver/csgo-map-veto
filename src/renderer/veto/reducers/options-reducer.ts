import { Reducer } from 'redux';
import { UpdateTeamOneNameAction, OPTIONS_UPDATE_TEAM_ONE_NAME } from 'renderer/veto/actions/update-team-one-name';
import { UpdateTeamTwoNameAction, OPTIONS_UPDATE_TEAM_TWO_NAME } from 'renderer/veto/actions/update-team-two-name';
import { UpdateSelectedBestOfAction, OPTIONS_UPDATE_SELECTED_BEST_OF } from 'renderer/veto/actions/update-selected-bo';
import { UpdateSelectedModeAction, OPTIONS_UPDATE_SELECTED_MODE } from 'renderer/veto/actions/update-select-mode';
import { UpdateVetoStatusAction, UPDATE_VETO_STATUS } from 'renderer/veto/actions/update-veto-status';
import { MAPS } from 'renderer/constants/maps';
import { BestOf } from 'renderer/types/best-of';
import { BestOfMode } from 'renderer/types/best-of-mode';
import { Map } from 'renderer/types/map';
import { VetoStatus, VetoStatuses } from 'renderer/types/veto-status';
import { OPTIONS_TOGGLE_MAP_SELECTION, ToggleMapSelectionAction } from 'renderer/veto/actions/toggle-map-selection';
import { MapStatuses } from 'renderer/types/map-status';
import { ShowErrorAction, ERROR_SHOW } from 'renderer/veto/actions/show-error';
import { HideErrorAction, ERROR_HIDE } from 'renderer/veto/actions/hide-error';
import { BEST_OF_3, BO3_MODE_BPBR } from 'renderer/constants/best-of/bo3';

type OptionsState = {
  teamOneName: string;
  teamTwoName: string;
  selecteBestOf: BestOf;
  selectedMode: BestOfMode;
  selectedMaps: Map[];
  vetoStatus: VetoStatus;
  error?: string;
};

const initialState: OptionsState = {
  teamOneName: 'Team 1',
  teamTwoName: 'Team 2',
  selecteBestOf: BEST_OF_3,
  selectedMode: BO3_MODE_BPBR,
  selectedMaps: MAPS.slice(0, 7).map(mapName => {
    return {
      name: mapName,
      status: MapStatuses.REMAINING,
    };
  }),
  vetoStatus: VetoStatuses.SETUP,
};

type OptionsActions =
  | UpdateTeamOneNameAction
  | UpdateTeamTwoNameAction
  | UpdateSelectedBestOfAction
  | UpdateVetoStatusAction
  | UpdateSelectedModeAction
  | ToggleMapSelectionAction
  | ShowErrorAction
  | HideErrorAction;

const optionsReducer: Reducer<OptionsState, OptionsActions> = (state = initialState, action) => {
  switch (action.type) {
    case OPTIONS_UPDATE_TEAM_ONE_NAME:
      return {
        ...state,
        teamOneName: action.name,
      };
    case OPTIONS_UPDATE_TEAM_TWO_NAME:
      return {
        ...state,
        teamTwoName: action.name,
      };
    case OPTIONS_UPDATE_SELECTED_BEST_OF:
      return {
        ...state,
        selecteBestOf: action.bestOf,
        selectedMode: action.bestOf.modes[0],
      };
    case OPTIONS_UPDATE_SELECTED_MODE:
      return {
        ...state,
        selectedMode: action.mode,
      };
    case OPTIONS_TOGGLE_MAP_SELECTION: {
      const map = state.selectedMaps.find(map => map.name === action.mapName);
      if (map) {
        return {
          ...state,
          selectedMaps: state.selectedMaps.filter(map => map.name !== action.mapName),
        };
      }

      return {
        ...state,
        selectedMaps: [
          ...state.selectedMaps,
          {
            name: action.mapName,
            status: MapStatuses.REMAINING,
          },
        ],
      };
    }
    case UPDATE_VETO_STATUS:
      return {
        ...state,
        vetoStatus: action.status,
      };
    case ERROR_SHOW:
      return {
        ...state,
        error: action.payload,
      };
    case ERROR_HIDE:
      return {
        ...state,
        error: undefined,
      };
    default:
      return state;
  }
};

export { optionsReducer };
