import React from 'react';
import { renderWithRedux } from 'test/render-with-redux';
import { VoteStatus } from 'renderer/types/vote-status';
import { VoteType } from 'renderer/types/vote-type';
import { RemainingMaps } from '../remaining-maps';

describe('RemainingMaps', () => {
  const { getByAltText, getByText, queryByAltText } = renderWithRedux(<RemainingMaps />, {
    initialState: {
      veto: {
        mapNames: ['de_banned', 'de_picked', 'de_remaining', 'de_remaining_other'],
        votes: [
          {
            type: VoteType.Ban,
            mapName: 'de_banned',
            status: VoteStatus.Done,
          },
          {
            type: VoteType.Pick,
            mapName: 'de_picked',
            status: VoteStatus.Done,
          },
          {
            type: VoteType.Pick,
            mapName: 'de_remaining',
            status: VoteStatus.Waiting,
          },
          {
            type: VoteType.Pick,
            mapName: 'de_remaining_other',
            status: VoteStatus.Current,
          },
        ],
      },
    },
  });

  it('should render only remaining maps', () => {
    expect(getByAltText('de_remaining')).toBeTruthy();
    expect(getByText('de_remaining')).toBeTruthy();
    expect(getByAltText('de_remaining_other')).toBeTruthy();
    expect(getByText('de_remaining_other')).toBeTruthy();
    expect(queryByAltText('de_banned')).not.toBeInTheDocument();
    expect(queryByAltText('de_picked')).not.toBeInTheDocument();
  });
});
