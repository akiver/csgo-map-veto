import { MapStatus } from 'renderer/types/map-status'

const MAPS_UPDATE_STATUS = 'veto.updateMapStatus'

const updateMapStatus = (map: string, status: MapStatus) => {
  return {
    type: MAPS_UPDATE_STATUS as typeof MAPS_UPDATE_STATUS,
    payload: {
      map,
      status,
    },
  }
}

type UpdateMapStatusAction = ReturnType<typeof updateMapStatus>

export { MAPS_UPDATE_STATUS, updateMapStatus, UpdateMapStatusAction }
