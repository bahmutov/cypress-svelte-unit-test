import Button from '../components/Button.html'
import mount from '../../src'

/* eslint-env mocha */
describe('Button with no slot', () => {
  beforeEach(() => {
    mount(Button)
  })

  it('is empty by default', () => {
    cy.get('button')
      .should('have.contain', '')
  })
})

describe('Button with default slot', () => {
  const textValue = 'Here is a test'

  beforeEach(() => {
    mount(Button, null, {
      default: document.createTextNode(textValue)
    })
  })

  it(`contains the text value of slot`, () => {
    cy.get('button')
      .should('have.contain', textValue)
  })
});
