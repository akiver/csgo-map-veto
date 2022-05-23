import React from 'react';
import { cleanup } from '@testing-library/react';
import { renderWithRedux, AppWithRedux } from 'test/render-with-redux';
import { TeamNumber } from 'renderer/types/team-number';
import { VoteType } from 'renderer/types/vote-type';
import { VoteStatus } from 'renderer/types/vote-status';
import { Vote } from 'renderer/types/vote';
import { VoteRow } from '../vote-row';

describe('VoteRow', () => {
  afterEach(cleanup);

  const createComponent = (vote: Vote) => {
    return renderWithRedux(<VoteRow vote={vote} />, {
      initialState: {
        veto: {
          teamOneName: 'Team 1',
          teamTwoName: 'Team 2',
          mapNames: ['de_map'],
          votes: [],
        },
      },
    });
  };

  describe('when the vote is pending', () => {
    it('should render', () => {
      const { getByText, getByTitle } = createComponent({
        id: 1,
        teamNumber: TeamNumber.Team1,
        type: VoteType.Pick,
        status: VoteStatus.Waiting,
      });

      expect(getByText(/team 1/i)).toBeTruthy();
      expect(getByText(/pick/i)).toBeTruthy();
      expect(getByTitle('unknown')).toBeTruthy();
    });
  });

  describe('when the vote is done', () => {
    it('should render', () => {
      const { getByAltText, getByText } = createComponent({
        id: 1,
        teamNumber: TeamNumber.Team2,
        type: VoteType.Ban,
        status: VoteStatus.Done,
        mapName: 'toto',
      });

      expect(getByText(/team 2/i)).toBeTruthy();
      expect(getByText(/banned toto/i)).toBeTruthy();
      expect(getByAltText('toto')).toBeTruthy();
    });
  });

  describe('when the vote is the current vote', () => {
    it('should render', () => {
      const { getByRole, getByText } = createComponent({
        id: 1,
        teamNumber: TeamNumber.Team1,
        type: VoteType.Ban,
        status: VoteStatus.Current,
      });

      expect(getByText(/team 1/i)).toBeTruthy();
      expect(getByText(/ban/i)).toBeTruthy();
      expect(getByRole('button')).toBeTruthy();
    });
  });

  describe('when the current vote is random', () => {
    it('should make a a random vote', () => {
      const { getByText, getByRole, store, rerender } = createComponent({
        id: 1,
        teamNumber: TeamNumber.Server,
        type: VoteType.Random,
        status: VoteStatus.Current,
      });

      expect(getByText(/server/i)).toBeTruthy();
      expect(getByText(/random/i)).toBeTruthy();
      expect(getByRole('button')).toBeTruthy();

      rerender(
        <AppWithRedux store={store}>
          <VoteRow
            vote={{
              id: 1,
              teamNumber: TeamNumber.Server,
              type: VoteType.Random,
              status: VoteStatus.Done,
              mapName: 'de_map',
            }}
          />
        </AppWithRedux>
      );

      expect(getByText(/de_map/i)).toBeTruthy();
    });
  });
});
