// tells Cypress to use your Webpack settings to bundle Svelte code
const webpackPreprocessor = require('@cypress/webpack-preprocessor')
const options = {
  // send in the options from your webpack.config.js, so it works the same
  // as your app's code
  webpackOptions: require('../webpack.config.js'),
}

module.exports = (on) => {
  on('file:preprocessor', webpackPreprocessor(options))
}
