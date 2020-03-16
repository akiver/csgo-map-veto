import React from 'react';
import { renderWithRedux, AppWithRedux } from 'test/render-with-redux';
import { RemainingMapsModal } from '../remaining-maps-modal';
import { MapStatuses } from 'renderer/types/map-status';
import { fireEvent } from '@testing-library/react';
import { VoteStatuses } from 'renderer/types/vote-status';
import { TeamNumbers } from 'renderer/types/team-number';
import { VoteTypes } from 'renderer/types/vote-type';

describe('RemainingMapsModal', () => {
  const handleClose = jest.fn();

  afterEach(() => {
    handleClose.mockClear();
  });

  const renderComponent = () =>
    renderWithRedux(<RemainingMapsModal onClose={handleClose} />, {
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
    const { getByAltText, getByText, queryByAltText } = renderComponent();

    expect(getByAltText('de_remaining')).toBeTruthy();
    expect(getByText('de_remaining')).toBeTruthy();
    expect(getByAltText('de_remaining_other')).toBeTruthy();
    expect(getByText('de_remaining_other')).toBeTruthy();
    expect(queryByAltText('de_banned')).not.toBeInTheDocument();
    expect(queryByAltText('de_picked')).not.toBeInTheDocument();
  });

  it('should render a close button', () => {
    const { getByText, getByRole } = renderComponent();

    expect(getByRole('button')).toBeTruthy();
    expect(getByText(/close/i)).toBeTruthy();
  });

  it('should vote for the map on image click', () => {
    const { getByAltText, queryByAltText, rerender, store } = renderComponent();

    const image = getByAltText('de_remaining');
    fireEvent.click(image);

    rerender(
      <AppWithRedux store={store}>
        <RemainingMapsModal onClose={handleClose} />
      </AppWithRedux>
    );

    expect(queryByAltText('de_remaining')).not.toBeInTheDocument();
    expect(queryByAltText('de_remaining_other')).toBeInTheDocument();
    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
