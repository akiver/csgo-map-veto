import { When } from '@badeball/cypress-cucumber-preprocessor';

When('Bob click on the start veto button', () => {
  cy.findByText(/start/i).click();
});
