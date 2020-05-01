/// <reference types="cypress" />
import Component from './Component.svelte'
import { mount } from 'cypress-svelte-unit-test'

/* eslint-env mocha */
describe('Styles', () => {
  it('adds style', () => {
    mount(Component, null, {
      style: `
        body {
          background: pink
        }
      `,
    })
    cy.get('body').should('have.css', 'background-color', 'rgb(255, 192, 203)')
  })

  it('adds CSS file', () => {
    mount(Component, null, {
      cssFile: 'cypress/components/styles/app.css',
    })
    cy.get('body').should('have.css', 'background-color', 'rgb(0, 255, 255)')
  })

  it('adds stylesheet', () => {
    mount(Component, null, {
      stylesheet: '/__root/cypress/components/styles/app.css',
    })
    cy.get('body').should('have.css', 'background-color', 'rgb(0, 255, 255)')
  })
})
