import React from 'react';
import { renderWithRedux } from 'test/render-with-redux';
import { MapStatuses } from 'renderer/types/map-status';
import { VoteStatuses } from 'renderer/types/vote-status';
import { TeamNumbers } from 'renderer/types/team-number';
import { VoteTypes } from 'renderer/types/vote-type';
import { RemainingMaps } from '../remaining-maps';

describe('RemainingMaps', () => {
  const { getByAltText, getByText, findByAltText } = renderWithRedux(<RemainingMaps />, {
    initialState: {
      maps: [
        {
          name: 'de_remaining',
          status: MapStatuses.REMAINING,
        },
        {
          name: 'de_remaining_other',
          status: MapStatuses.REMAINING,
        },
        {
          name: 'de_banned',
          status: MapStatuses.BANNED,
        },
        {
          name: 'de_picked',
          status: MapStatuses.PICKED,
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

  it('should render only remaining maps', () => {
    expect(getByAltText('de_remaining')).toBeTruthy();
    expect(getByText('de_remaining')).toBeTruthy();
    expect(getByAltText('de_remaining_other')).toBeTruthy();
    expect(getByText('de_remaining_other')).toBeTruthy();
    expect(findByAltText('de_banned')).not.toBeInTheDocument();
    expect(findByAltText('de_picked')).not.toBeInTheDocument();
  });
});
