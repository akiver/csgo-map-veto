import { StoreState } from 'renderer/Store'
import { getMaps } from 'renderer/veto/selectors/get-maps'

const getPickedMaps = (state: StoreState) => {
  const maps = getMaps(state)
  return maps.filter(map => map.status === 'picked')
}

export { getPickedMaps }
