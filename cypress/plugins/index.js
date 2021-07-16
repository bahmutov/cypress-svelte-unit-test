const { startDevServer } = require('@cypress/webpack-dev-server')
const webpackConfig = require('../../webpack.config.js')

module.exports = (on, config) => {
  on('dev-server:start', async (options) => {
    return startDevServer({ options, webpackConfig })
  })
  return config
}
