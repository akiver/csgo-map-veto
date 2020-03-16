import { BestOf } from 'renderer/types/best-of';

const OPTIONS_UPDATE_SELECTED_BEST_OF = 'veto.options.updateSelectedBestOf';

const updateSelectedBestOf = (bestOf: BestOf) => {
  return {
    type: OPTIONS_UPDATE_SELECTED_BEST_OF as typeof OPTIONS_UPDATE_SELECTED_BEST_OF,
    bestOf,
  };
};

type UpdateSelectedBestOfAction = ReturnType<typeof updateSelectedBestOf>;

export { OPTIONS_UPDATE_SELECTED_BEST_OF, updateSelectedBestOf, UpdateSelectedBestOfAction };
