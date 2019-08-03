import './commands'
import '@testing-library/cypress/add-commands'

Cypress.on('window:before:load', window => {
  // Cypress doesn't support fetch API, as a workaround declare window.fetch as null
  // so the polyfill will use XHR requests.
  // https://github.com/cypress-io/cypress/issues/95
  window.fetch = null
})
