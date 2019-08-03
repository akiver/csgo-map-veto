When('Bob changes the team {int} name for {string}', (teamNumber: number, teamName: string) => {
  cy.getByTestId(`input-team-${teamNumber}`)
    .clear()
    .type(teamName)
})

Then('{string} is used during the veto', (teamName: string) => {
  cy.getByTestId('button-start-veto')
    .click()
    .getAllByText(teamName)
    .then(names => {
      expect(names).to.not.empty
    })
})

When('Bob clears the input text of the team {int}', (teamNumber: number) => {
  cy.getByTestId(`input-team-${teamNumber}`).clear()
})
