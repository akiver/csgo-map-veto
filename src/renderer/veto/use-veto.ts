import { useSelector } from 'renderer/use-selector';

export function useVeto() {
  return useSelector((state) => state.veto);
}
