# cypress-svelte-unit-test [![CircleCI](https://circleci.com/gh/bahmutov/cypress-svelte-unit-test/tree/master.svg?style=svg)](https://circleci.com/gh/bahmutov/cypress-svelte-unit-test/tree/master) [![renovate-app badge][renovate-badge]][renovate-app]

> Component testing for Svelte apps using the open source [Cypress.io](https://www.cypress.io/) E2E test runner **v4.5.0+**

![Keypad pin spec](images/pin.gif)

## Install

Requires [Node](https://nodejs.org/en/) version 8 or above and Cypress v4.5.0+

```sh
npm install --save-dev cypress-svelte-unit-test @cypress/webpack-preprocessor
```

1. Configure Cypress to use the plugin in [cypress/plugins/index.js](cypress/plugins/index.js):

```js
const webpackPreprocessor = require('@cypress/webpack-preprocessor')
module.exports = on => {
  const options = {
    // send in the options from your webpack.config.js, so it works the same
    // as your app's code
    webpackOptions: require('../webpack.config.js')
  }

  on('file:preprocessor', webpackPreprocessor(options))
}
```

2. ⚠️ Turn the experimental component support on in your `cypress.json`. You can also specify where component spec files are located. For example, to have them located in `src` folder use:

```json
{
  "experimentalComponentTesting": true,
  "componentFolder": "src"
}
```

See [cypress.json](cypress.json) in this project.

## Known issues

- uses Webpack [#53](https://github.com/bahmutov/cypress-svelte-unit-test/issues/53), which is different how most Svelte apps are rolled 😉
- need to load images differently to transform relative paths

## Svelte v3

This component adaptor is meant for [Svelte v3](https://svelte.dev/blog/svelte-3-rethinking-reactivity). If you need Svelte v2 support, check out branch [svelte-v2](https://github.com/bahmutov/cypress-svelte-unit-test/tree/svelte-v2)

## Use

Import your Svelte component and mount using the provided function. Pass [component options](https://svelte.dev/docs#Creating_a_component) and global document options (like a global CSS)

```js
/// <reference types="cypress" />
import App from '../components/ChainedBalls.svelte'
import {mount} from 'cypress-svelte-unit-test'

describe('SVG animation', () => {
  it('shows chained balls', () => {
    cy.viewport(960, 500)
    const style = `
      line {
        stroke: gray;
        stroke-width: 2px;
      }
    `
    mount(App, {
      props: {
        width: 960,
        height: 500
      }
    }, { style })
    cy.get('circle').should('have.length', 50)
  })
})
```

You can use local styles, local CSS file path (relative to the the Cypress project root) or external stylesheets. See [styles example](cypress/components/styles).

## Examples

Svelte components copied from [https://svelte.dev/examples](https://svelte.dev/examples)

All components and tests are in [cypress/components](cypress/components) folder

Test | Description
--- | ---
[animation](cypress/components/animation) | Chained balls SVG animation
[global-handlers](cypress/components/global-handlers) | Attaches event listeners to `document` and `window`
[hello](cypress/components/hello) | Hello, component testing!
[image](cypress/components/image) | Loading Rick-Roll image
[named-exports](cypress/components/named-exports) | Nice Audio player test
[nested](cypress/components/nested) | Checking nested components and local styles
[pin](cypress/components/pin) | Keypad pin test
[reactive](cypress/components/reactive) | Svelte reactive props, declarations and statements
[rx](cypress/components/rx) | Fetching GitHub users as a reactive stream
[styles](cypress/components/styles) | Shows inline, CSS and external stylesheet styles in spec
[tutorial](cypress/components/tutorial) | A few components and tests from Svelte tutorial

## Related tools

Same feature for unit testing components from other framesworks using Cypress

* [cypress-vue-unit-test](https://github.com/bahmutov/cypress-vue-unit-test)
* [cypress-react-unit-test](https://github.com/bahmutov/cypress-react-unit-test)
* [cypress-cycle-unit-test](https://github.com/bahmutov/cypress-cycle-unit-test)
* [cypress-svelte-unit-test](https://github.com/bahmutov/cypress-svelte-unit-test)
* [cypress-angular-unit-test](https://github.com/bahmutov/cypress-angular-unit-test)
* [cypress-hyperapp-unit-test](https://github.com/bahmutov/cypress-hyperapp-unit-test)
* [cypress-angularjs-unit-test](https://github.com/bahmutov/cypress-angularjs-unit-test)

### Small print

Author: Gleb Bahmutov &lt;gleb.bahmutov@gmail.com&gt; &copy; 2018

* [@bahmutov](https://twitter.com/bahmutov)
* [glebbahmutov.com](https://glebbahmutov.com)
* [blog](https://glebbahmutov.com/blog)

License: MIT - do anything with the code, but don't blame me if it does not work.

Support: if you find any problems with this module, email / tweet /
[open issue](https://github.com/bahmutov/cypress-svelte-unit-test/issues) on Github

## MIT License

Copyright (c) 2018 Gleb Bahmutov &lt;gleb.bahmutov@gmail.com&gt;

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

[ci-image]: https://travis-ci.org/bahmutov/cypress-svelte-unit-test.svg?branch=master
[ci-url]: https://travis-ci.org/bahmutov/cypress-svelte-unit-test
[renovate-badge]: https://img.shields.io/badge/renovate-app-blue.svg
[renovate-app]: https://renovateapp.com/
