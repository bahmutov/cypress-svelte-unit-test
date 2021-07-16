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
      stylesheet: '/cypress/components/styles/app.css',
    })
    cy.get('body').should('have.css', 'background-color', 'rgb(0, 255, 255)')
  })

  it('adds CSS file and resolves a svelte component', () => {
    // Regression test for https://github.com/bahmutov/cypress-svelte-unit-test/issues/250.
    // Basically, `mount` was not returning the promise that returns the svelte component instance if using `cssFile` option.
    // So the test couldn't access the instance to call svelte's `$set` method, for instance.
    mount(Component, null, {
      cssFile: 'cypress/components/styles/app.css',
    }).then((componentInstance) => {
      expect(componentInstance.$set != null).to.eq(
        true,
        'The resolved object should be a svelte component instance.',
      )
    })
    cy.get('body').should('have.css', 'background-color', 'rgb(0, 255, 255)')
  })
})
