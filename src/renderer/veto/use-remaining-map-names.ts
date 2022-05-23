import { VoteStatus } from 'renderer/types/vote-status';
import { useVeto } from './use-veto';

export function useRemainingMapNames() {
  const { mapNames, votes } = useVeto();
  const mapNamesChosen = votes
    .filter((vote) => {
      return vote.status === VoteStatus.Done && vote.mapName !== undefined;
    })
    .map((vote) => vote.mapName as string);

  return mapNames.filter((mapName) => {
    return !mapNamesChosen.includes(mapName);
  });
}
