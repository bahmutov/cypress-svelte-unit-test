module.exports = (on) => {
  // https://github.com/bahmutov/cy-rollup
  on('file:preprocessor', require('@bahmutov/cy-rollup'))
}
