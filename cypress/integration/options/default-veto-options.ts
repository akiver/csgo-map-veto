import { MAPS } from 'renderer/constants/maps'

Then('The displayed options must be correct', () => {
  cy.findByLabelText('Team 1')
    .should('have.value', 'Team 1')
    .findByLabelText('Team 2')
    .should('have.value', 'Team 2')
    .queryByText('BO 3')
    .should('be.visible')
    .queryByText('Ban / Pick / Ban / Random')
    .should('be.visible')
    .then(() => {
      MAPS.forEach((mapName, index) => {
        cy.findByAltText(mapName).should('have.css', 'opacity', index >= 7 ? '0.5' : '1')
      })
    })
})
