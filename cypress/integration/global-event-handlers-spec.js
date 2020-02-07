/// <reference types="cypress" />
import GlobalEventHandlers from '../components/GlobalEventHandlers.svelte'
import mount from 'cypress-svelte-unit-test'

/* eslint-env mocha */
describe('Global event handlers', () => {
  it('fire', () => {
    mount(GlobalEventHandlers)
    cy.viewport(600, 600)
    cy.get('body').click()
    cy.get('div').contains('Doc click: 1')
    cy.get('div').contains('Win click: 1')
  })
})
