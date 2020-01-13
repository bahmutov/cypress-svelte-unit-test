/// <reference types="cypress" />
import StaticComponent from './StaticComponent.svelte'
import mount from '../../../src'

it('has the button', () => {
  mount(StaticComponent)
  cy.get('button').should('be.visible').and('have.text', "Click me, human!")
})

it.only("renders the passed 'who' prop in the button caption", () => {
  mount(StaticComponent, {
    props: { who: "Daniel" }
  });
  cy.get('button').should('have.text', "Click me, Daniel!");
})
