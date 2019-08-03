const OPTIONS_TOGGLE_MAP_SELECTION = 'veto.options.toggleMapSelection'

const toggleMapSelection = (mapName: string) => {
  return {
    type: OPTIONS_TOGGLE_MAP_SELECTION as typeof OPTIONS_TOGGLE_MAP_SELECTION,
    mapName,
  }
}

type ToggleMapSelectionAction = ReturnType<typeof toggleMapSelection>

export { OPTIONS_TOGGLE_MAP_SELECTION, toggleMapSelection, ToggleMapSelectionAction }
