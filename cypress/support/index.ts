/// <reference types="cypress" />

import { VetoResponse } from '../../src/renderer/types/api';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Chainable<Subject> {
      /**
       * Assert vetos entries are visible on the vetos list.
       * @example
       * cy.containsVetosEntries([])
       */
      containsVetosEntries(vetos: VetoResponse[]): Chainable<Element>;
    }
  }
}

import './commands';
import '@testing-library/cypress/add-commands';
