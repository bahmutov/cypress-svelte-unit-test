/// <reference types="cypress" />
import DynamicAttributes from './DynamicAttributes.svelte'
import {mount} from 'cypress-svelte-unit-test'

/* eslint-env mocha */
describe('Dynamic attributes', () => {
  it('shows dancing man', () => {
    cy.viewport('iphone-6')
    mount(DynamicAttributes)
    cy.get('img[alt="Rick Astley dancing"]').should('be.visible')

    // we need to figure out images better
    // all relative paths to the element have to be served
    // relative like "/__root/<path>"
  })
})
