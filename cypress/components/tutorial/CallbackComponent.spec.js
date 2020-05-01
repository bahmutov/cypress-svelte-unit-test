/// <reference types="cypress" />
import CallbackComponent from "./CallbackComponent.svelte"
import mount from 'cypress-svelte-unit-test'
import {price} from './stores/price'

describe('CallbackComponent', () => {
  it("displays the initial price", () => {
    price.set(99.99);
    mount(CallbackComponent);
    cy.contains("The price is: $99.99");
  });

  // notice we are not declaring this test as async
  // Cypress automatically waits for the condition to pass
  // when you use commands like "cy.contains"
  it("updates when the price changes", () => {
    mount(CallbackComponent);
    price.set(123.45);
    cy.contains("The price is: $123.45");
  });

  it("fetches prices on mount", () => {
    // let's stub the window.fetch
    cy.stub(window, 'fetch').withArgs('/price').resolves({
      ok: true,
      json: cy.stub().as('fetchPrice').resolves({ price: 101.99 })
    })
    mount(CallbackComponent);
    cy.contains('The price is: $101.99')
    cy.get('@fetchPrice').should('have.been.calledOnce')
  });
})
