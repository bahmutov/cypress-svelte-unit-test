/// <reference types="cypress" />
import AppWithNested from './AppWithNested.svelte'
import Nested from './Nested.svelte'
import { mount } from 'cypress-svelte-unit-test'

/* eslint-env mocha */
describe('Nested components', () => {
  const purple = 'rgb(128, 0, 128)'
  beforeEach(() => {
    cy.viewport(300, 200)
  })

  it('shows nested text', () => {
    mount(AppWithNested)

    // scoped style is applied

    cy.contains('These styles...')
      .should('have.css', 'color', purple)
      .should('have.css', 'font-family', '"Comic Sans MS"')

    // scoped style is not applied to the nested component
    cy.contains("...don't affect this element")
      .should('not.have.css', 'color', purple)
      .should('not.have.css', 'font-family', '"Comic Sans MS"')
  })

  it('mounts inner component', () => {
    mount(Nested)
    cy.contains("...don't affect this element")
      .should('not.have.css', 'color', purple)
      .should('not.have.css', 'font-family', '"Comic Sans MS"')
  })
})
