/// <reference types="cypress" />
import App from './App.svelte'
import { mount } from 'cypress-svelte-unit-test'

// example from https://daveceddia.com/svelte-with-sass-in-vscode/
// Note: to have node-sass work correctly, must set
// "nodeVersion": "system" in the "cypress.json"

/* eslint-env mocha */
describe('Component with scss style', () => {
  it('has colors applied', () => {
    mount(App, {
      props: {
        name: 'Svelte',
      },
    })

    // check if SASS styles were applied
    cy.contains('Hello Svelte!')
      .should('be.visible')
      .and('have.css', 'color', 'rgb(255, 0, 0)')

    cy.contains('div', 'SASS is working!').should(
      'have.css',
      'background-color',
      'rgb(0, 128, 0)',
    )
  })
})
