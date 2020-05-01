/* eslint-env mocha */
describe('integration spec', () => {
  it('works', () => {
    cy.wrap(42).should('equal', 42)
  })
})
