import { BEST_OF_ARRAY } from 'renderer/constants/best-of/best-of-array'
import { BestOf } from 'renderer/types/best-of'

Given('The current BestOf is {string}', (bestOf: string) => {
  cy.getByLabelText('BO')
    .click({ force: true })
    .queryAllByText(bestOf)
    .last()
    .click()
})

When('Bob click on the input to select the BestOf mode', () => {
  cy.getByLabelText('Mode').click({ force: true })
})

Then('Bob should see all modes available for the BestOf {string}', (bestOfLabel: string) => {
  const BEST_OF = BEST_OF_ARRAY.find(bo => bo.label === bestOfLabel) as BestOf
  BEST_OF.modes.forEach(mode => {
    cy.queryAllByText(mode.label)
      .last()
      .should('be.visible')
  })
})

When('Bob click on the mode {string}', (modeLabel: string) => {
  cy.getByText(modeLabel).click()
})

Then('The {string} mode must be selected', (modeLabel: string) => {
  cy.getByText(modeLabel).should('be.visible')
})