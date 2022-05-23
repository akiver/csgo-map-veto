import { vi } from 'vitest';
import React from 'react';
import { renderWithRedux, AppWithRedux } from 'test/render-with-redux';
import { RemainingMapsModal } from '../remaining-maps-modal';
import { fireEvent } from '@testing-library/react';
import { VoteStatus } from 'renderer/types/vote-status';

describe('RemainingMapsModal', () => {
  const handleClose = vi.fn();

  afterEach(() => {
    handleClose.mockClear();
  });

  const renderComponent = () => {
    return renderWithRedux(<RemainingMapsModal onClose={handleClose} />, {
      initialState: {
        veto: {
          mapNames: ['de_picked', 'de_banned', 'de_remaining', 'de_remaining_other'],
          votes: [
            {
              status: VoteStatus.Done,
              mapName: 'de_picked',
            },
            {
              status: VoteStatus.Done,
              mapName: 'de_banned',
            },
            {
              status: VoteStatus.Current,
              mapName: 'de_remaining',
            },
            {
              status: VoteStatus.Waiting,
              mapName: 'de_remaining_other',
            },
          ],
        },
      },
    });
  };

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
