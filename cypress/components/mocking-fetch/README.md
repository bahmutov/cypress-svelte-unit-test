# mocking fetch example

In [Users.svelte](Users.svelte) the application is requesting a list of resources using `fetch`. See test [Users.spec.js](Users.spec.js) where we directly stub `window.fetch` using [cy.stub](https://on.cypress.io/stub)
