Given('The map {string} is currently unselected', (mapName: string) => {
  cy.findByAltText(mapName).should('have.css', 'opacity', '0.5')
})

Given('The map {string} is currently selected', (mapName: string) => {
  cy.findByAltText(mapName).should('have.css', 'opacity', '1')
})

When('Bob click on the map {string}', (mapName: string) => {
  cy.findByAltText(mapName).click()
})

Then('The map {string} is now selected', (mapName: string) => {
  cy.findByAltText(mapName).should('have.css', 'opacity', '1')
})

Then('The map {string} is now unselected', (mapName: string) => {
  cy.findByAltText(mapName).should('have.css', 'opacity', '0.5')
})

Given('BestOf is {int}', (bestOf: number) => {
  cy.findByText('BO 3')
    .click()
    .findAllByText(`BO ${bestOf}`)
    .last()
    .click()
})

Given('The mode is {string}', (mode: string) => {
  cy.findByText('Ban / Ban / Ban / Random')
    .click()
    .findAllByText(mode)
    .last()
    .click()
})
