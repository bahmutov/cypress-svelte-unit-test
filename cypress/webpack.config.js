const { join } = require('path')
module.exports = {
  resolve: {
    // see below for an explanation
    mainFields: ['svelte', 'browser', 'module', 'main'],
    alias: {
      // so our specs in this example can use full module name
      // import mount from 'cypress-svelte-unit-test'
      'cypress-svelte-unit-test': join(__dirname, '..', 'dist'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(html|svelte)$/,
        exclude: /node_modules/,
        use: 'svelte-loader',
      },
    ],
  },
  devtool: 'cheap-module-eval-source-map',
}
