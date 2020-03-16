import React from 'react';
import { renderWithRedux } from 'test/render-with-redux';
import { MapStatuses } from 'renderer/types/map-status';
import { VoteStatuses } from 'renderer/types/vote-status';
import { TeamNumbers } from 'renderer/types/team-number';
import { VoteTypes } from 'renderer/types/vote-type';
import { PickedMaps } from '../picked-maps';

describe('PickedMaps', () => {
  const { getByAltText, getByText, findByAltText } = renderWithRedux(<PickedMaps />, {
    initialState: {
      maps: [
        {
          name: 'de_picked',
          status: MapStatuses.PICKED,
        },
        {
          name: 'de_picked_other',
          status: MapStatuses.PICKED,
        },
        {
          name: 'de_banned',
          status: MapStatuses.BANNED,
        },
        {
          name: 'de_remaining',
          status: MapStatuses.REMAINING,
        },
      ],
      votes: [
        {
          id: 1,
          status: VoteStatuses.CURRENT,
          teamNumber: TeamNumbers.TEAM1,
          type: VoteTypes.PICK,
        },
      ],
    },
  });

  it('should render only picked maps', () => {
    expect(getByAltText('de_picked')).toBeTruthy();
    expect(getByText('de_picked')).toBeTruthy();
    expect(getByAltText('de_picked_other')).toBeTruthy();
    expect(getByText('de_picked_other')).toBeTruthy();
    expect(findByAltText('de_banned')).not.toBeInTheDocument();
    expect(findByAltText('de_remaining')).not.toBeInTheDocument();
  });
});
