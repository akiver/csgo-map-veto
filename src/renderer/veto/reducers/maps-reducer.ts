import { Reducer } from 'redux';
import { UpdateMapStatusAction, MAPS_UPDATE_STATUS } from 'renderer/veto/actions/update-map-status';
import { UpdateMapsAction, MAPS_UPDATE } from 'renderer/veto/actions/update-maps';
import { MAPS_RESET, ResetMapsAction } from 'renderer/veto/actions/reset-maps';
import { Map } from 'renderer/types/map';
import { MapStatuses, MapStatus } from 'renderer/types/map-status';

type MapsState = Map[];
type MapsActions = UpdateMapsAction | UpdateMapStatusAction | ResetMapsAction;

const initialState: MapsState = [];

const mapsReducer: Reducer<MapsState, MapsActions> = (state = initialState, action) => {
  switch (action.type) {
    case MAPS_UPDATE:
      return action.payload.map(map => {
        return {
          ...map,
          status: MapStatuses.REMAINING,
        };
      });
    case MAPS_RESET:
      return initialState;
    case MAPS_UPDATE_STATUS:
      return state.map(map => {
        if (action.payload.map === map.name) {
          return {
            ...map,
            status: action.payload.status as MapStatus,
          };
        }
        return map;
      });
    default:
      return state;
  }
};

export { mapsReducer };
