import Counter from '../components/Counter.html'
import mount from '../../src'

/* eslint-env mocha */
describe('count', () => {
  beforeEach(() => {
    mount(Counter)
  })

  it('shows 0', () => {
    cy.contains('Count: 0')
  })

  it('increments count on click', () => {
    cy.get('button').click().click().click()
    cy.contains('Count: 3')
  })
})
