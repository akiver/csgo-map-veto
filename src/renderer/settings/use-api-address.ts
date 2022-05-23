import { useSettings } from './use-settings';

export function useApiAddress() {
  const { apiAddress } = useSettings();

  return apiAddress;
}
