import React from 'react'
import { cleanup, fireEvent } from '@testing-library/react'
import { renderWithRedux } from 'test/render-with-redux'
import { BEST_OF_3 } from 'renderer/constants/best-of/bo3'
import { TeamNumbers } from 'renderer/types/team-number'
import { VoteTypes } from 'renderer/types/vote-type'
import { VetoStatuses } from 'renderer/types/veto-status'
import { StoreState } from 'renderer/Store'
import { VetoPostRequest } from 'renderer/types/api'
import { ButtonSaveVeto } from '../button-save-veto'

describe('ButtonSave', () => {
  afterEach(cleanup)

  const renderComponent = (initialState: RecursivePartial<StoreState> = {}) => {
    return renderWithRedux(<ButtonSaveVeto />, {
      initialState: {
        settings: {
          apiAddress: 'https://hi.com',
        },
        options: {
          ...initialState.options,
          teamOneName: 'Team one',
          teamTwoName: 'Team two',
          selecteBestOf: BEST_OF_3,
        },
        votes: [
          {
            teamNumber: TeamNumbers.TEAM1,
            type: VoteTypes.BAN,
            mapName: 'de_test',
          },
        ],
      },
    })
  }

  it('should render a save button', () => {
    const { getByText } = renderComponent()

    expect(getByText(/save/i)).toBeTruthy()
  })

  describe('when the veto is not completed', () => {
    it('should be disabled', () => {
      const { getByText } = renderComponent({
        options: {
          vetoStatus: VetoStatuses.IN_PROGRESS,
        },
      })

      expect(getByText(/save/i)).toBeDisabled()
    })
  })

  describe('when the veto is completed', () => {
    it('should be enabled', () => {
      const { getByText } = renderComponent({
        options: {
          vetoStatus: VetoStatuses.COMPLETED,
        },
      })

      expect(getByText(/save/i)).toBeEnabled()
    })

    describe('on click', () => {
      it('should make an http post request', async () => {
        global.fetch = jest.fn().mockImplementation(() => {
          return {
            status: 201,
          }
        })

        const { getByText } = renderComponent({
          options: {
            vetoStatus: VetoStatuses.COMPLETED,
          },
        })

        fireEvent.click(getByText(/save/i))

        const mockPostRequest: VetoPostRequest = {
          team_one_name: 'Team one',
          team_two_name: 'Team two',
          best_of: 3,
          votes: [
            {
              team_number: TeamNumbers.TEAM1,
              type: VoteTypes.BAN,
              map_name: 'de_test',
            },
          ],
        }

        expect(global.fetch).toHaveBeenCalledWith('https://hi.com/api/vetos', {
          method: 'POST',
          body: JSON.stringify(mockPostRequest),
        })
      })
    })
  })
})
