Given('Bob is on the home page', () => {
  cy.visit('/');
});

Given('Bob goes to the settings', () => {
  cy.visit('/');
  cy.findByTestId('button-settings').click();
});
