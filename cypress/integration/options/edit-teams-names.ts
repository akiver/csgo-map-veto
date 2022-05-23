import { Then, When } from '@badeball/cypress-cucumber-preprocessor';

When('Bob changes the team {int} name for {string}', (teamNumber: number, teamName: string) => {
  cy.findByTestId(`input-team-${teamNumber}`).clear().type(teamName);
});

Then('{string} is used during the veto', (teamName: string) => {
  cy.findByTestId('button-start-veto').click();
  cy.findAllByText(teamName).then((names) => {
    expect(names).to.not.empty;
  });
});

When('Bob clears the input text of the team {int}', (teamNumber: number) => {
  cy.findByTestId(`input-team-${teamNumber}`).clear();
});
