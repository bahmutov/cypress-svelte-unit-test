import Users from '../components/Users.html'
import mount from '../../src'

/* eslint-env mocha */
describe('users', () => {
  beforeEach(() => {
    mount(Users)
  })

  it('loads list of posts', () => {
    cy.get('li').should('have.length', 3)
  })

  it('can inspect real data in XHR', () => {
    cy.server()
    cy.route('/users?_limit=3').as('users')
    cy.wait('@users').its('response.body').should('have.length', 3)
  })

  it('can display mock XHR response', () => {
    cy.server()
    const users = [{ id: 1, name: 'foo' }]
    cy.route('GET', '/users?_limit=3', users).as('users')
    cy.get('li').should('have.length', 1).first().contains('foo')
  })

  it('can inspect mocked XHR', () => {
    cy.server()
    const users = [{ id: 1, name: 'foo' }]
    cy.route('GET', '/users?_limit=3', users).as('users')
    cy.wait('@users').its('response.body').should('deep.equal', users)
  })

  it('can delay and wait on XHR', () => {
    cy.server()
    const users = [{ id: 1, name: 'foo' }]
    cy
      .route({
        method: 'GET',
        url: '/users?_limit=3',
        response: users,
        delay: 1000
      })
      .as('users')
    cy.get('li').should('have.length', 0)
    cy.wait('@users')
    cy.get('li').should('have.length', 1)
  })
})
