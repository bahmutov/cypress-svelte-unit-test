These are tests matching test examples from tutorial https://dev.to/d_ir/introduction-4cep with original source code in https://github.com/dirv/svelte-testing-demo

## Setup

Look through the tutorial for its setup. In our case it was

```shell
$ npm install -D cypress cypress-svelte-unit-test
```

In this repo I am using Webpack, see [webpack.config.js](webpack.config.js) and point Cypress at it in [cypress/plugins/index.js](cypress/plugins/index.js)

## Compare

- [cypress/integration/tutorial/HelloComponent.spec.js](cypress/integration/tutorial/HelloComponent.spec.js) to [tutorial test](https://dev.to/d_ir/setting-up-a-svelte-test-environment-2f3e)
- [cypress/integration/tutorial/StaticComponent.spec.js](cypress/integration/tutorial/StaticComponent.spec.js) to [static component tutorial test](https://dev.to/d_ir/mounting-components-and-asserting-on-the-dom-9kc)
- [cypress/integration/tutorial/CallbackComponent.spec.js](cypress/integration/tutorial/CallbackComponent.spec.js) to [callback tutorial test](https://dev.to/d_ir/testing-the-onmount-callback-464g)
- [cypress/integration/tutorial/stores/price.spec.js](cypress/integration/tutorial/stores/price.spec.js) vs [fetch mock tutorial](https://dev.to/d_ir/testing-svelte-stores-and-mocking-dependencies-m30)
