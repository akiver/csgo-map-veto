import { VetoResponse } from 'renderer/types/api'
import { getTeamNameByTeamNumber } from 'renderer/utils/get-team-name-from-team-number'
import { getVoteTypeText } from 'renderer/utils/get-vote-type-text'

Cypress.Commands.add('containsVetosEntries', (vetos: VetoResponse[]) => {
  vetos.forEach(veto => {
    cy.queryByTestId(`veto-${veto.id}`)
      .should('be.visible')
      .within(() => {
        cy.queryByText(`BO${veto.best_of}`)
          .should('be.visible')
          .findByTestId(`veto-${veto.id}-detail`)
          .within(() => {
            cy.queryByText(veto.team_one_name)
              .should('be.visible')
              .queryByText(veto.team_two_name)
              .should('be.visible')
              .queryByText(/delete/i)
              .should('have.text', 'Delete')
              .should('not.be.disabled')
          })
      })

    veto.votes.forEach(vote => {
      const teamName = getTeamNameByTeamNumber(vote.team_number, veto.team_one_name, veto.team_two_name)
      const voteTypeText = getVoteTypeText(vote.type)
      cy.findByTestId(`vote-${vote.id}`).within(() => {
        cy.queryByAltText(vote.map_name)
          .should('be.visible')
          .queryByText(teamName)
          .should('be.visible')
          .queryByText(voteTypeText)
          .should('be.visible')
          .queryByText(vote.map_name)
          .should('be.visible')
      })
    })
  })
})
