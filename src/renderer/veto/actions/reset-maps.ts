const MAPS_RESET = 'veto.resetMaps'

const resetMaps = () => {
  return {
    type: MAPS_RESET as typeof MAPS_RESET,
  }
}

type ResetMapsAction = ReturnType<typeof resetMaps>

export { MAPS_RESET, resetMaps, ResetMapsAction }
