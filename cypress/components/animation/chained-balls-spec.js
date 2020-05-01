/// <reference types="cypress" />
import App from './ChainedBalls.svelte'
import mount from 'cypress-svelte-unit-test'

/* eslint-env mocha */
describe('SVG animation', () => {
  it('shows chained balls', () => {
    cy.viewport(960, 500)
    const style = `
      body {
        margin: 0;
      }
      line {
        stroke: gray;
        stroke-width: 2px;
      }
    `
    mount(
      App,
      {
        props: {
          width: 960,
          height: 500
        }
      },
      {
        style
      }
    )
    cy.get('circle').should('have.length', 50)
  })
})
