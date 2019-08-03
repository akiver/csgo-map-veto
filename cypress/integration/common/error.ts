Then('Bob sees a {string} error', (error: string) => {
  cy.queryByText(new RegExp(error, 'i')).should('be.visible')
})
