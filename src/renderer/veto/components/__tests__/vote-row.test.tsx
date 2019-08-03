import React from 'react'
import { cleanup } from '@testing-library/react'
import { renderWithRedux, AppWithRedux } from 'test/render-with-redux'
import { MapStatuses } from 'renderer/types/map-status'
import { TeamNumbers } from 'renderer/types/team-number'
import { VoteTypes } from 'renderer/types/vote-type'
import { VoteStatuses } from 'renderer/types/vote-status'
import { Vote } from 'renderer/types/vote'
import { VoteRow } from '../vote-row'

describe('VoteRow', () => {
  afterEach(cleanup)

  const createComponent = (vote: Vote) => {
    return renderWithRedux(<VoteRow vote={vote} />, {
      initialState: {
        maps: [
          {
            name: 'de_map',
            status: MapStatuses.REMAINING,
          },
        ],
        votes: [
          {
            id: 1,
            teamNumber: TeamNumbers.SERVER,
            status: VoteStatuses.CURRENT,
            type: VoteTypes.RANDOM,
          },
        ],
      },
    })
  }

  describe('when the vote is pending', () => {
    it('should render', () => {
      const { getByText, getByTitle } = createComponent({
        id: 1,
        teamNumber: TeamNumbers.TEAM1,
        type: VoteTypes.PICK,
        status: VoteStatuses.WAITING,
      })

      expect(getByText(/team 1/i)).toBeTruthy()
      expect(getByText(/pick/i)).toBeTruthy()
      expect(getByTitle('unknown')).toBeTruthy()
    })
  })

  describe('when the vote is done', () => {
    it('should render', () => {
      const { getByAltText, getByText } = createComponent({
        id: 1,
        teamNumber: TeamNumbers.TEAM2,
        type: VoteTypes.BAN,
        status: VoteStatuses.DONE,
        mapName: 'toto',
      })

      expect(getByText(/team 2/i)).toBeTruthy()
      expect(getByText(/banned toto/i)).toBeTruthy()
      expect(getByAltText('toto')).toBeTruthy()
    })
  })

  describe('when the vote is the current vote', () => {
    it('should render', () => {
      const { getByRole, getByText } = createComponent({
        id: 1,
        teamNumber: TeamNumbers.TEAM1,
        type: VoteTypes.BAN,
        status: VoteStatuses.CURRENT,
      })

      expect(getByText(/team 1/i)).toBeTruthy()
      expect(getByText(/ban/i)).toBeTruthy()
      expect(getByRole('button')).toBeTruthy()
    })
  })

  describe('when the current vote is random', () => {
    it('should make a a random vote', () => {
      const { getByText, getByRole, store, rerender } = createComponent({
        id: 1,
        teamNumber: TeamNumbers.SERVER,
        type: VoteTypes.RANDOM,
        status: VoteStatuses.CURRENT,
      })

      expect(getByText(/server/i)).toBeTruthy()
      expect(getByText(/random/i)).toBeTruthy()
      expect(getByRole('button')).toBeTruthy()

      rerender(
        <AppWithRedux store={store}>
          <VoteRow
            vote={{
              id: 1,
              teamNumber: TeamNumbers.SERVER,
              type: VoteTypes.RANDOM,
              status: VoteStatuses.DONE,
              mapName: 'de_map',
            }}
          />
        </AppWithRedux>
      )

      expect(getByText(/de_map/i)).toBeTruthy()
    })
  })
})
