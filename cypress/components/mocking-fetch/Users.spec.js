/// <reference types="cypress" />
import Users from './Users.svelte'
import { mount } from 'cypress-svelte-unit-test'

describe('Mocking fetch', () => {
  let mockUsers

  before(() => {
    // load the mock user list once from cypress/fixtures/users.json
    cy.fixture('users').then((list) => {
      expect(list).to.have.length(2)
      mockUsers = list
    })
  })

  it('shows 3 users without mocking', () => {
    mount(Users)
    cy.get('.user').should('have.length', 3)
  })

  it('can mock window.fetch method', () => {
    cy.stub(window, 'fetch').resolves({
      json: cy.stub().resolves(mockUsers),
    })
    mount(Users)
    cy.get('.user').should('have.length', mockUsers.length)
    cy.get('.user')
      .first()
      .should('have.text', `${mockUsers[0].id} - ${mockUsers[0].name}`)
  })
})
