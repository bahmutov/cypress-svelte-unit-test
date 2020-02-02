/// <reference types="cypress" />
import TodoItem from './TodoItem.svelte'
import mount from 'cypress-svelte-unit-test'

/* eslint-env mocha */
describe('TodoItem with dispatch', () => {
  it('shows dancing man', () => {
    const removeItem = cy.stub().as('remove')
    const updateStatus = cy.stub().as('update')
    mount(TodoItem, {
      props: {
        id: 'todo-id',
        text: 'write a test',
        complete: false,
        // 'on:remove': removeItem,
        // 'on:toggle': updateStatus
      }
    })
    cy.get('[data-cy="make-incomplete"]').click()
  })
})
