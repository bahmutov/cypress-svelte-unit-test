/// <reference types="cypress" />
import Pin from './Pin.svelte'
import { mount } from 'cypress-svelte-unit-test'

/* eslint-env mocha */
describe('Pin keypad', () => {
  it('enters pin', () => {
    cy.viewport(600, 600)
    mount(Pin)
    cy.spy(console, 'log').as('log')

    cy.get('[data-cy=1]').click()
    cy.get('[data-cy=2]').click()
    cy.get('[data-cy=5]').click()
    cy.get('[data-cy=8]').click()
    cy.get('[data-cy=submit]').click()

    cy.get('@log').should('be.calledWith', 'submitted 1258')
  })
})
