import { Then, When } from '@badeball/cypress-cucumber-preprocessor';

When('Bob select the BestOf {string}', (bestOf: string) => {
  cy.findByLabelText('BO').click({
    force: true,
  });
  cy.findAllByText(bestOf).last().click();
});

Then('The selected BO must be {string}', (bestOf: string) => {
  cy.findByText(bestOf).should('be.visible');
});
