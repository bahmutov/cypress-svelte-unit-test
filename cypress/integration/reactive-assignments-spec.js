/// <reference types="cypress" />
import Counter from '../components/ReactiveAssignments.svelte'
import mount from '../../src'

/* eslint-env mocha */
describe('Reactive assignments', () => {
  it('increments counter', () => {
    mount(Counter)

    cy.contains('button', 'Clicked 0 times')
      .click()
      .click()
      .click()

    cy.contains('button', 'Clicked 3 times')
  })
})
