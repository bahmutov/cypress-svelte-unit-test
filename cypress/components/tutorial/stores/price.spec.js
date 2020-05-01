/// <reference types="cypress" />
import { get } from "svelte/store";
import { fetch, price } from "./price.js";

// tests matching https://github.com/dirv/svelte-testing-demo/blob/master/spec/stores/price.js
const fetchOkResponse = data =>
  ({ ok: true, json: () => Promise.resolve(data) })

describe('fetch', () => {
  beforeEach(() => {
    // Cypress automatically cleans up spies and stubs after each test
    cy.stub(window, 'fetch').resolves(fetchOkResponse({ price: 99.99 }))
  })

  it("makes a GET request to /price", () => {
    fetch()
    .then(() => {
      expect(window.fetch).to.have.been.calledWith('/price', {method: 'GET'})
    })
  });

  // we can simplify the above test using async / await syntax sugar
  it("makes a GET request to /price async", async () => {
    await fetch()
    expect(window.fetch).to.have.been.calledWith('/price', {method: 'GET'})
  });

  it("sets the price when API returned", async () => {
    await fetch();
    expect(get(price)).to.equal(99.99);
  });

  it("sets the price when API returned - retry logic", () => {
    // notice this test has NO async/await, does NOT return a promise
    // instead while 'fetch' is out there, Cypress retries the
    // .should(cb) assertion until it passes (meaning fetch has returned and
    // Svelte store returns the expected price)
    // or the command times out
    // see https://on.cypress.io/retry-ability
    fetch();
    cy.wrap(null).should(() => {
      expect(get(price)).to.equal(99.99);
    })
  });
})
