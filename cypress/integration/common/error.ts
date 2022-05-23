import { Then } from '@badeball/cypress-cucumber-preprocessor';

Then('Bob sees a {string} error', (error: string) => {
  cy.findByText(new RegExp(error, 'i')).should('be.visible');
});
