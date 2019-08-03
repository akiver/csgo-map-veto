Given('The map {string} is currently unselected', (mapName: string) => {
  cy.getByAltText(mapName).should('have.css', 'opacity', '0.5')
})

Given('The map {string} is currently selected', (mapName: string) => {
  cy.getByAltText(mapName).should('have.css', 'opacity', '1')
})

When('Bob click on the map {string}', (mapName: string) => {
  cy.getByAltText(mapName).click()
})

Then('The map {string} is now selected', (mapName: string) => {
  cy.getByAltText(mapName).should('have.css', 'opacity', '1')
})

Then('The map {string} is now unselected', (mapName: string) => {
  cy.getByAltText(mapName).should('have.css', 'opacity', '0.5')
})

Given('BestOf is {int}', (bestOf: number) => {
  cy.getByText('BO 3')
    .click()
    .getAllByText(`BO ${bestOf}`)
    .last()
    .click()
})

Given('The mode is {string}', (mode: string) => {
  cy.getByText('Ban / Ban / Ban / Random')
    .click()
    .getAllByText(mode)
    .last()
    .click()
})
