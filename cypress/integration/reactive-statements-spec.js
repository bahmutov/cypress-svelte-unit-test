/// <reference types="cypress" />
import Counter from '../components/ReactiveStatements.svelte'
import mount from '../../src'

/* eslint-env mocha */
describe('Reactive statements', () => {
  it('increments counter', () => {
    mount(Counter)
    cy.spy(console, 'log').as('log')
    cy.contains('button', 'Clicked 0 times')
      .click()
      .click()
      .click()
      .click()
      .click()
      .click()
      .click()
      .click()
      .click()
      .click()
    cy.get('@log').should('be.calledWith', 'count is dangerously high!')
  })
})
