import React from 'react';
import { cleanup } from '@testing-library/react';
import { renderWithRedux } from 'test/render-with-redux';
import { VetoViewSwitcher } from '../veto-view-switcher';
import { AppWithTheme } from 'test/render-with-theme';
import { MAPS } from 'renderer/constants/maps';
import { VoteType } from 'renderer/types/vote-type';
import { TeamNumber } from 'renderer/types/team-number';
import { VoteStatus } from 'renderer/types/vote-status';
import { VetoStatus } from 'renderer/types/veto-status';
import { BEST_OF_3, BO3_MODE_BPBR } from 'renderer/constants/best-of/bo3';

describe('VetoViewSwitcher', () => {
  afterEach(cleanup);

  it('should display the veto options', () => {
    const { getByLabelText, getByText, getByAltText } = renderWithRedux(
      <AppWithTheme>
        <VetoViewSwitcher />
      </AppWithTheme>
    );

    expect(getByLabelText('Team 1')).toBeTruthy();
    expect(getByLabelText('Team 2')).toBeTruthy();
    expect(getByLabelText('BO')).toBeTruthy();
    expect(getByText(BEST_OF_3.label)).toBeTruthy();
    expect(getByLabelText('Mode')).toBeTruthy();
    expect(getByText(BO3_MODE_BPBR.label)).toBeTruthy();
    expect(getByText('Start')).toBeTruthy();
    expect(getByText('Database')).toBeTruthy();
    expect(getByText('Settings')).toBeTruthy();
    MAPS.forEach((mapName) => {
      expect(getByAltText(mapName)).toBeTruthy();
      expect(getByText(mapName)).toBeTruthy();
    });
  });

  it('should display the veto ui', async () => {
    const { getByTitle, getByText, findByText, findAllByText, findAllByTitle } = renderWithRedux(
      <AppWithTheme>
        <VetoViewSwitcher />
      </AppWithTheme>,
      {
        initialState: {
          veto: {
            mapNames: MAPS,
            status: VetoStatus.InProgress,
            teamOneName: 'Team 1',
            teamTwoName: 'Team 2',
            bestOf: BEST_OF_3,
            votes: [
              {
                id: 1,
                type: VoteType.Ban,
                teamNumber: TeamNumber.Team1,
                status: VoteStatus.Current,
              },
              {
                id: 2,
                type: VoteType.Ban,
                teamNumber: TeamNumber.Team2,
                status: VoteStatus.Waiting,
              },
              {
                id: 3,
                type: VoteType.Pick,
                teamNumber: TeamNumber.Team1,
                status: VoteStatus.Waiting,
              },
              {
                id: 4,
                type: VoteType.Pick,
                teamNumber: TeamNumber.Team2,
                status: VoteStatus.Waiting,
              },
              {
                id: 5,
                type: VoteType.Random,
                teamNumber: TeamNumber.Server,
                status: VoteStatus.Waiting,
              },
            ],
          },
        },
      }
    );

    // debug();

    expect(getByText('Remaining maps')).toBeTruthy();
    expect(getByText('Votes')).toBeTruthy();
    expect(getByText('Picked maps')).toBeTruthy();
    expect(getByText('Select map')).toBeTruthy();
    const cancelButton = await findByText('Cancel');
    expect(cancelButton).toBeInTheDocument();
    expect(cancelButton).toBeEnabled();
    const saveButton = await findByText('Save');
    expect(saveButton).toBeInTheDocument();
    expect(saveButton).toBeDisabled();
    const teamOneTexts = await findAllByText('Team 1');
    expect(teamOneTexts).toHaveLength(2);
    const teamTwoTexts = await findAllByText('Team 2');
    expect(teamTwoTexts).toHaveLength(2);
    const serverTexts = await findAllByText(/server/i);
    expect(serverTexts).toHaveLength(1);
    const pickTexts = await findAllByText('pick');
    expect(pickTexts).toHaveLength(2);
    const banTexts = await findAllByText('ban');
    expect(banTexts).toHaveLength(2);
    const randomTexts = await findAllByText('random');
    expect(randomTexts).toHaveLength(1);
    const unknownImages = await findAllByTitle('unknown');
    expect(unknownImages).toHaveLength(5);

    MAPS.forEach((mapName) => {
      expect(getByText(mapName)).toBeTruthy();
      expect(getByTitle(mapName)).toBeTruthy();
    });
  });
});
