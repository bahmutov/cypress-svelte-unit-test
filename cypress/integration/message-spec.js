import { Store } from 'svelte/store.js';
import Button from '../components/Message.html'
import mount from '../../src'

/* eslint-env mocha */
describe('Message with global store', () => {
  const username = 'Bobby McGee';

  beforeEach(() => {
    mount(
      Button,
      null,
      null,
      new Store({ username })
    ).then(() => {
      console.log(Cypress.component)
    })
  })

  it(`show welcome message with stored username`, () => {
    cy.get('h1')
      .contains(`Welcome ${username}`)
  })
});
