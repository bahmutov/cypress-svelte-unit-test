/// <reference types="cypress" />
import HelloComponent from './HelloComponent.svelte'
import mount from 'cypress-svelte-unit-test'

it('shows', () => {
  mount(HelloComponent)
  cy.contains('Hello, world!').should('be.visible')
})
