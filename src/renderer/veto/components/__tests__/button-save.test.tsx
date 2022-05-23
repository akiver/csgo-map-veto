import React from 'react';
import { vi } from 'vitest';
import { cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRedux } from 'test/render-with-redux';
import { BEST_OF_3 } from 'renderer/constants/best-of/bo3';
import { TeamNumber } from 'renderer/types/team-number';
import { VoteType } from 'renderer/types/vote-type';
import { VetoStatus } from 'renderer/types/veto-status';
import { RootState } from 'renderer/store';
import { VetoPostRequest } from 'renderer/types/api';
import { ButtonSaveVeto } from '../button-save-veto';

describe('ButtonSave', () => {
  afterEach(cleanup);

  const renderComponent = (initialState: DeepPartial<RootState> = {}) => {
    return renderWithRedux(<ButtonSaveVeto />, {
      initialState: {
        settings: {
          apiAddress: 'https://hi.com',
        },
        veto: {
          ...initialState.veto,
          teamOneName: 'Team one',
          teamTwoName: 'Team two',
          bestOf: BEST_OF_3,
          votes: [
            {
              teamNumber: TeamNumber.Team1,
              type: VoteType.Ban,
              mapName: 'de_test',
            },
          ],
        },
      },
    });
  };

  it('should render a save button', () => {
    const { getByText } = renderComponent();

    expect(getByText(/save/i)).toBeTruthy();
  });

  describe('when the veto is not completed', () => {
    it('should be disabled', () => {
      const { getByText } = renderComponent({
        veto: {
          status: VetoStatus.InProgress,
        },
      });

      expect(getByText(/save/i)).toBeDisabled();
    });
  });

  describe('when the veto is completed', () => {
    it('should be enabled', () => {
      const { getByText } = renderComponent({
        veto: {
          status: VetoStatus.Completed,
        },
      });

      expect(getByText(/save/i)).toBeEnabled();
    });

    describe('on click', () => {
      it('should make an http post request', async () => {
        global.fetch = vi.fn().mockImplementation(() => {
          return {
            status: 201,
          };
        });

        const user = userEvent.setup();
        const { getByText } = renderComponent({
          veto: {
            status: VetoStatus.Completed,
          },
        });

        await user.click(getByText(/save/i));

        const mockPostRequest: VetoPostRequest = {
          team_one_name: 'Team one',
          team_two_name: 'Team two',
          best_of: 3,
          votes: [
            {
              team_number: TeamNumber.Team1,
              type: VoteType.Ban,
              map_name: 'de_test',
            },
          ],
        };

        expect(global.fetch).toHaveBeenCalledWith('https://hi.com/api/vetos', {
          method: 'POST',
          body: JSON.stringify(mockPostRequest),
        });
      });
    });
  });
});
