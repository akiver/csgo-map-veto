/// <reference types="cypress" />

import { VetoResponse } from 'renderer/types/api';

declare global {
  const Given: (title: string, callback: (...args: any) => any) => void;
  const When: (title: string, callback: (...args: any) => any) => void;
  const Then: (title: string, callback: (...args: any) => any) => void;

  namespace Cypress {
    interface Chainable<Subject> {
      /**
       * Assert vetos entries are visible on the vetos list.
       * @example
       * cy.containsVetosEntries([])
       */
      containsVetosEntries(vetos: VetoResponse[]): Chainable<any>;
    }
  }

  type EnumLiteralsOf<T extends Record<string, unknown>> = T[keyof T];
}

export {};
