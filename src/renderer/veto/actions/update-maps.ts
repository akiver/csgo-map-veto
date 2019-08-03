import { Map } from 'renderer/types/map'

const MAPS_UPDATE = 'veto.updateMaps'

const updateMaps = (maps: Map[]) => {
  return {
    type: MAPS_UPDATE as typeof MAPS_UPDATE,
    payload: maps,
  }
}

type UpdateMapsAction = ReturnType<typeof updateMaps>

export { MAPS_UPDATE, updateMaps, UpdateMapsAction }
