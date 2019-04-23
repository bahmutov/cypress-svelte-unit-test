/// <reference types="cypress" />
import HelloWorld from '../components/HelloWorld.svelte'
import mount from '../../src'

/* eslint-env mocha */
describe('Hello world', () => {
  beforeEach(() => {
    mount(HelloWorld)
  })

  it('shows hello', () => {
    cy.contains('h1', 'Hello world!')
  })
})
