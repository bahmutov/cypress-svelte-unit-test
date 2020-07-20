/// <reference types="cypress" />
import Users from './Users.svelte'
import { mount } from 'cypress-svelte-unit-test'

describe('Mocking network', () => {
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

  it('stubs network request', () => {
    cy.server()
    cy.route('/users?_limit=3', 'fixture:users').as('users')
    mount(Users)

    cy.wait('@users')

    cy.get('.user').should('have.length', mockUsers.length)
    cy.get('.user')
      .first()
      .should('have.text', `${mockUsers[0].id} - ${mockUsers[0].name}`)
  })

  it('shows loading element', () => {
    cy.server()
    cy.route({
      url: '/users?_limit=3',
      response: 'fixture:users',
      delay: 1000,
    })
    mount(Users)
    cy.get('.loading').should('be.visible')
    // and once the list is loaded, the loading indicator goes away
    cy.get('.loading').should('not.exist')
    cy.get('.user').should('not.be.empty')
  })
})
