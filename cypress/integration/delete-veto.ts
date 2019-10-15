import { vetosFixture } from '../fixtures/vetos'

Given('Bob is on the vetos listing page', () => {
  cy.server()
  cy.route('GET', '/api/vetos', vetosFixture)
  cy.visit('/vetos')
})

When('Bob click on the button to delete the veto with id {int}', (vetoId: number) => {
  cy.findByTestId(`button-delete-veto-${vetoId}`).click()
})

Then('The request return a status {int} for the veto {int}', (status: number, vetoId: number) => {
  cy.route({
    method: 'DELETE',
    url: `/api/vetos/${vetoId}`,
    response: {
      status,
    },
    status,
    delay: 500,
  }).as('deleteVeto')
})

Then('The delete button for the veto with id {int} is disabled', (vetoId: number) => {
  cy.findByTestId(`button-delete-veto-${vetoId}`)
    .should('be.disabled')
    .and('be.visible')
})

Then('The veto with id {int} disappears from the UI', (vetoId: string) => {
  cy.wait('@deleteVeto')

  cy.queryByTestId(`veto-${vetoId}`).should('not.be.visible')
})

Then('The delete button for the veto with id {int} is enabled', (vetoId: number) => {
  cy.wait('@deleteVeto')

  cy.queryByTestId(`button-delete-veto-${vetoId}`)
    .should('be.enabled')
    .and('be.visible')
})
