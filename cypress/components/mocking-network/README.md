# mocking network example

In [Users.svelte](Users.svelte) the application is requesting a list of resources using `fetch`. We polyfill the `window.fetch` to fall back to `XMLHttpRequest` that Cypress can observe and stub using [experimentalFetchPolyfill](https://www.cypress.io/blog/2020/06/29/experimental-fetch-polyfill/)

![Loading test](images/loading-test.png)
