/// <reference types="cypress" />
import Hello from './Hello.svelte'
import { mount } from 'cypress-svelte-unit-test'

describe('Component with markup only', () => {
  it('shows hello', () => {
    mount(Hello)
    cy.contains('Hello World')
  })
})
