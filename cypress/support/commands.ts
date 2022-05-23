import { VetoResponse } from 'renderer/types/api';
import { getTeamNameByTeamNumber } from 'renderer/utils/get-team-name-from-team-number';
import { getVoteTypeText } from 'renderer/utils/get-vote-type-text';

Cypress.Commands.add('containsVetosEntries', (vetos: VetoResponse[]) => {
  vetos.forEach((veto) => {
    cy.findByTestId(`veto-${veto.id}`)
      .should('be.visible')
      .within(() => {
        cy.findByTestId(`veto-${veto.id}-detail`).within(() => {
          cy.findByText(`BO${veto.best_of}`).should('be.visible');
          cy.findByText(veto.team_one_name).should('be.visible');
          cy.findByText(veto.team_two_name).should('be.visible');
          cy.findByText(/delete/i)
            .should('have.text', 'Delete')
            .should('not.be.disabled');
        });
      });

    veto.votes.forEach((vote) => {
      const teamName = getTeamNameByTeamNumber(vote.team_number, veto.team_one_name, veto.team_two_name);
      const voteTypeText = getVoteTypeText(vote.type);
      cy.findByTestId(`vote-${vote.id}`).within(() => {
        cy.findByAltText(vote.map_name).should('be.visible');
        cy.findByText(teamName).should('be.visible');
        cy.findByText(voteTypeText).should('be.visible');
        cy.findByText(vote.map_name).should('be.visible');
      });
    });
  });
});
