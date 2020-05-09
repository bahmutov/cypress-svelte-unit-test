/// <reference types="cypress" />
import HelloWorld from '../hello/HelloWorld.svelte'
import { mount } from 'cypress-svelte-unit-test'

describe('Mount', () => {
  it('inside HTML', () => {
    // component should replace DIV with id "here"
    mount(
      HelloWorld,
      {},
      {
        html: `
        <div class="test-page">
          this is a test
          <div id="here"></div>
          this is after component
        </div>
      `,
      },
    )
    cy.contains('.test-page', 'this is a test').should('be.visible')
    cy.contains('#here', 'Hello world!').should('be.visible')
    // and the text after the component should be visible
    cy.contains('this is after component').should('be.visible')
  })

  it('can be styled', () => {
    // component should replace DIV with id "here"
    mount(HelloWorld, null, {
      html: `
        <div class="test-page">
          this is a test
          <div id="here"></div>
          this is after component
        </div>
      `,
      style: `
        body {
          background: pink
        }
        .test-page {
          background: cyan
        }
        #here {
          background: yellow
        }
      `,
    })
    cy.contains('.test-page', 'this is a test')
      .should('be.visible')
      .and('have.css', 'background-color', 'rgb(0, 255, 255)')
    cy.contains('#here', 'Hello world!')
      .should('be.visible')
      .and('have.css', 'background-color', 'rgb(255, 255, 0)')
    cy.contains('this is after component').should('be.visible')
  })

  // JSX does not work
  // it.only('surrounds component with markup', () => {
  //   mount(
  //     <div class="test-page">
  //       <HelloWorld />
  //     </div>,
  //   )
  // })
})
