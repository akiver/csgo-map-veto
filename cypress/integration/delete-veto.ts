import { vetosFixture } from '../fixtures/vetos';

Given('Bob is on the vetos listing page', () => {
  cy.intercept('GET', '/api/vetos', vetosFixture);
  cy.visit('/vetos');
});

When('Bob click on the button to delete the veto with id {int}', (vetoId: number) => {
  cy.findByTestId(`button-delete-veto-${vetoId}`).click();
});

Then('The request return a status {int} for the veto {int}', (status: number, vetoId: number) => {
  cy.intercept('DELETE', `/api/vetos/${vetoId}`, { statusCode: status, delay: 500 }).as('deleteVeto');
});

Then('The delete button for the veto with id {int} is disabled', (vetoId: number) => {
  cy.findByTestId(`button-delete-veto-${vetoId}`).should('be.disabled').and('be.visible');
});

Then('The veto with id {int} disappears from the UI', (vetoId: string) => {
  cy.wait('@deleteVeto');

  cy.findByTestId(`veto-${vetoId}`).should('not.exist');
});

Then('The delete button for the veto with id {int} is enabled', (vetoId: number) => {
  cy.wait('@deleteVeto');

  cy.findByTestId(`button-delete-veto-${vetoId}`).should('be.enabled').and('be.visible');
});
