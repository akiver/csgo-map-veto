Given('Bob is using the app with {string} theme', (theme: string) => {
  localStorage.setItem('csgomapveto.theme', theme)
})

When('Bob click on the button to switch between themes', () => {
  cy.findByTestId('button-toggle-theme').click()
})

Then('The app is using the {string} theme', (theme: string) => {
  const expectedBackground = theme === 'dark' ? 'rgb(34, 34, 34)' : 'rgb(255, 255, 255)'

  cy.get('html').should('have.css', 'background-color', expectedBackground)
})
