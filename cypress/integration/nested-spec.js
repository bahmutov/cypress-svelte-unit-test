/// <reference types="cypress" />
import AppWithNested from '../components/AppWithNested.svelte'
import mount from '../../src'

/* eslint-env mocha */
describe('Nested components', () => {
  it('shows nested text', () => {
    cy.viewport(300, 200)
    mount(AppWithNested)

    // scoped style is applied
    const purple = 'rgb(128, 0, 128)'
    cy.contains('These styles...')
      .should('have.css', 'color', purple)
      .should('have.css', 'font-family', '"Comic Sans MS"')

    // scoped style is not applied to the nested component
    cy.contains("...don't affect this element")
      .should('not.have.css', 'color', purple)
      .should('not.have.css', 'font-family', '"Comic Sans MS"')
  })
})
