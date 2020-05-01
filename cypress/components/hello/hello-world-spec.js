/// <reference types="cypress" />
import HelloWorld from './HelloWorld.svelte'
import {mount} from 'cypress-svelte-unit-test'

/* eslint-env mocha */
describe('Hello world', () => {
  it('shows hello', () => {
    mount(HelloWorld)
    cy.contains('h1', 'Hello world!')
  })
})
