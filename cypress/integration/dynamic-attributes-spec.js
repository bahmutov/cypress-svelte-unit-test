/// <reference types="cypress" />
import DynamicAttributes from '../components/DynamicAttributes.svelte'
import mount from '../../src'

/* eslint-env mocha */
describe('Dynamic attributes', () => {
  it('shows dancing man', () => {
    mount(DynamicAttributes)
    cy.get('img[alt="Rick Astley dancing"]').should('be.visible')
    // TODO solve serving images
    // GET http://localhost:51092/__/images/rick.gif 404 (Not Found)
  })
})
