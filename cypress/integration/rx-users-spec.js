/// <reference types="cypress" />
import RxUsers from '../components/RxUsers.svelte'
import mount from 'cypress-svelte-unit-test'

/* eslint-env mocha */
describe('RxJS users', () => {
  it('fetches users', () => {
    cy.server()
    cy.route('/users?per_page=5').as('users')
    mount(RxUsers)
    // 5 users are displayed
    cy.get('[data-cy=user]').should('have.length', 5)
    // from the XHR response
    cy.wait('@users')
      .its('response.body')
      .should('have.length', 5)
  })
})
