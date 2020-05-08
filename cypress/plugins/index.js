module.exports = (on, config) => {
  // https://github.com/bahmutov/cy-rollup
  const filePreprocessor = require('@bahmutov/cy-rollup')
  on('file:preprocessor', filePreprocessor())

  // https://github.com/cypress-io/code-coverage
  require('@cypress/code-coverage/task')(on, config)
  // IMPORTANT to return the config object
  // with the any changed environment variables
  return config
}
