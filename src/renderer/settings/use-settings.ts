import { useSelector } from 'renderer/use-selector';

export function useSettings() {
  return useSelector((state) => state.settings);
}
