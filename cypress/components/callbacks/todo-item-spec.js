/// <reference types="cypress" />
import TodoItem from './TodoItem.svelte'
import { mount } from 'cypress-svelte-unit-test'

/* eslint-env mocha */
describe('TodoItem with dispatch', () => {
  it('receives messages from the component', () => {
    mount(TodoItem, {
      props: {
        id: 'todo-id',
        text: 'write a test',
        complete: false,
      },
      callbacks: {
        remove: cy.stub().as('remove'),
        toggle: cy.stub().as('toggle'),
        'inner-message': cy.stub().as('inner-message'),
      },
    })
    cy.get('[data-cy=toggle]').click()
    // check the message got back to our stub
    cy.get('@toggle')
      .should('be.called')
      .its('firstCall.args.0.detail')
      .should('deep.equal', {
        id: 'todo-id',
        newStatus: true,
      })

    cy.get('[data-cy=remove]').click()
    cy.get('@remove')
      .should('be.called')
      .its('firstCall.args.0.detail')
      .should('deep.equal', {
        id: 'todo-id',
      })

    // check if messages from inner component are forwarded
    cy.contains('Click to say hello').click()
    cy.get('@inner-message')
      .should('be.called')
      .its('firstCall.args.0.detail')
      .should('deep.equal', {
        text: 'Hello!',
      })
  })
})
