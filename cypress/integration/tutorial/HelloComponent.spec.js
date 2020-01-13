/// <reference types="cypress" />
import HelloComponent from './HelloComponent.svelte'
import mount from '../../../src'

it('shows', () => {
  mount(HelloComponent)
  cy.contains('Hello, world!').should('be.visible')
})
