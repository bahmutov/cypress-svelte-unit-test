# cypress-svelte-unit-test

> Unit testing Svelte components in Cypress E2E test runner

[![NPM][npm-icon] ][npm-url]

[![Build status][ci-image] ][ci-url]
[![semantic-release][semantic-image] ][semantic-url]
[![js-standard-style][standard-image]][standard-url]
[![renovate-app badge][renovate-badge]][renovate-app]

## Install

Requires [Node](https://nodejs.org/en/) version 6 or above.

```sh
npm install --save cypress-svelte-unit-test
npm install --save-dev @cypress/webpack-preprocessor
```

## Svelte v3

This component adaptor is meant for [Svelte v3](https://svelte.dev/blog/svelte-3-rethinking-reactivity). If you need Svelte v2 support, check out branch [svelte-v2](https://github.com/bahmutov/cypress-svelte-unit-test/tree/svelte-v2)

## Examples

Svelte components copied from [https://svelte.dev/examples](https://svelte.dev/examples)

All components are in [cypress/components](cypress/components) folder, all test files in [cypress/integration](cypress/integration)

Component | spec
--- | ---
[HelloWorld.svelte](cypress/components/HelloWorld.svelte) | [hello-world-spec.js](cypress/integration/hello-world-spec.js)
[AppWithNested.svelte](cypress/components/AppWithNested.svelte) | [nested-spec.js](cypress/integration/nested-spec.js)
[ReactiveAssignments.svelte](cypress/components/ReactiveAssignments.svelte) | [reactive-assignments-spec.js](cypress/integration/reactive-assignments-spec.js)
[ReactiveDeclarations.svelte](cypress/components/ReactiveDeclarations.svelte) | [reactive-declarations-spec.js](cypress/integration/reactive-declarations-spec.js)
[ReactiveStatements.svelte](cypress/components/ReactiveStatements.svelte) | [reactive-statements-spec.js](cypress/integration/reactive-statements-spec.js)

## Details

* uses Webpack + [svelte-loader](https://github.com/sveltejs/svelte-loader)
* see [cypress/plugins/index.js](https://github.com/bahmutov/cypress-svelte-unit-test/blob/master/cypress/plugins/index.js) for the necessary plugin setup of `@cypress/webpack-preprocessor`

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

[npm-icon]: https://nodei.co/npm/cypress-svelte-unit-test.svg?downloads=true
[npm-url]: https://npmjs.org/package/cypress-svelte-unit-test
[ci-image]: https://travis-ci.org/bahmutov/cypress-svelte-unit-test.svg?branch=master
[ci-url]: https://travis-ci.org/bahmutov/cypress-svelte-unit-test
[semantic-image]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-url]: https://github.com/semantic-release/semantic-release
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg
[standard-url]: http://standardjs.com/
[renovate-badge]: https://img.shields.io/badge/renovate-app-blue.svg
[renovate-app]: https://renovateapp.com/
