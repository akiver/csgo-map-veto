import { BestOfMode } from 'renderer/types/best-of-mode'

const OPTIONS_UPDATE_SELECTED_MODE = 'veto.options.updateMode'

const updateSelectedMode = (mode: BestOfMode) => {
  return {
    type: OPTIONS_UPDATE_SELECTED_MODE as typeof OPTIONS_UPDATE_SELECTED_MODE,
    mode,
  }
}

type UpdateSelectedModeAction = ReturnType<typeof updateSelectedMode>

export { OPTIONS_UPDATE_SELECTED_MODE, updateSelectedMode, UpdateSelectedModeAction }
