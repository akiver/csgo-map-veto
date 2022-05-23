import React from 'react';
import { renderWithRedux } from 'test/render-with-redux';
import { VoteType } from 'renderer/types/vote-type';
import { PickedMaps } from '../picked-maps';

describe('PickedMaps', () => {
  const { getByAltText, getByText, queryByAltText } = renderWithRedux(<PickedMaps />, {
    initialState: {
      veto: {
        votes: [
          {
            type: VoteType.Pick,
            mapName: 'de_picked',
          },
          {
            type: VoteType.Pick,
            mapName: 'de_picked_other',
          },
          {
            type: VoteType.Ban,
            mapName: 'de_banned',
          },
          {
            type: VoteType.Ban,
            mapName: 'de_remaining',
          },
        ],
      },
    },
  });

  it('should render only picked maps', () => {
    expect(getByAltText('de_picked')).toBeTruthy();
    expect(getByText('de_picked')).toBeTruthy();
    expect(getByAltText('de_picked_other')).toBeTruthy();
    expect(getByText('de_picked_other')).toBeTruthy();
    expect(queryByAltText('de_banned')).not.toBeInTheDocument();
    expect(queryByAltText('de_remaining')).not.toBeInTheDocument();
  });
});
