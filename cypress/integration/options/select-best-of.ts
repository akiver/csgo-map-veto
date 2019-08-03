When('Bob select the BestOf {string}', (bestOf: string) => {
  cy.getByLabelText('BO')
    .click({
      force: true,
    })
    .queryAllByText(bestOf)
    .last()
    .click()
})

Then('The selected BO must be {string}', (bestOf: string) => {
  cy.queryByText(bestOf).should('be.visible')
})
