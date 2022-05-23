import { VoteType } from 'renderer/types/vote-type';
import { useVeto } from './use-veto';

export function usePickedMapNames() {
  const { votes } = useVeto();

  return votes
    .filter((vote) => {
      return vote.type === VoteType.Pick && vote.mapName !== undefined;
    })
    .map((vote) => {
      return vote.mapName as string;
    });
}
