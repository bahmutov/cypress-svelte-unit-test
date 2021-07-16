const { join } = require('path')
const preprocess = require('svelte-preprocess')

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
        test: /\.(svelte|css)$/,
        use: [
          {
            loader: 'svelte-loader',
            options: {
              preprocess: [
                preprocess({
                  scss: {
                    renderSync: true,
                  },
                }),
              ],
            },
          },
        ],
      },
    ],
  },
  devtool: 'cheap-module-eval-source-map',
}
