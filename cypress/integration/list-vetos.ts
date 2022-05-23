import { vetosFixture } from '../fixtures/vetos';
import { Then, When } from '@badeball/cypress-cucumber-preprocessor';

When('Bob navigate to the vetos listing', () => {
  cy.findByTestId('link-vetos').click();
});

When('The vetos request return a status {int}', (status: number) => {
  cy.intercept('GET', `/api/vetos`, { body: vetosFixture, statusCode: status });
});

Then('Bob sees the vetos', () => {
  cy.containsVetosEntries(vetosFixture);
});

Then('Bob sees an error message', () => {
  cy.findByText('Make sure the database is running and the endpoint is correct in the settings!').should('be.visible');
  cy.findByText('An error occurred while fetching vetos').should('be.visible');
});
