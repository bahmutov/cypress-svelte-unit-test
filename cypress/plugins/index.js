module.exports = (on, config) => {
  // https://github.com/bahmutov/cy-rollup
  on('file:preprocessor', require('@bahmutov/cy-rollup'))

  // https://github.com/cypress-io/code-coverage
  require('@cypress/code-coverage/task')(on, config)
  // IMPORTANT to return the config object
  // with the any changed environment variables
  return config
}
