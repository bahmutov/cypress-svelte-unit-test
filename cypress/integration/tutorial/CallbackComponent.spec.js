/// <reference types="cypress" />
import CallbackComponent from "./CallbackComponent.svelte"
import mount from '../../../src'
import {price} from './stores/price'

describe(CallbackComponent.name, () => {
  it("displays the initial price", () => {
    price.set(99.99);
    mount(CallbackComponent);
    cy.contains("The price is: $99.99");
  });

  it("updates when the price changes", async () => {
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
