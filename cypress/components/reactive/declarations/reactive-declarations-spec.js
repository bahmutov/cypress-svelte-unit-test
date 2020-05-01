/// <reference types="cypress" />
import Counter from './ReactiveDeclarations.svelte'
import { mount } from 'cypress-svelte-unit-test'

/* eslint-env mocha */
describe('Reactive declarations', () => {
  it('increments counter', () => {
    cy.viewport(200, 200)
    mount(Counter)

    cy.contains('button', 'Count: 1').click().click().click()

    cy.get('[data-cy=doubled]').should('have.text', '4 * 2 = 8')
    cy.get('[data-cy=quadrupled]').should('have.text', '8 * 2 = 16')
  })
})
