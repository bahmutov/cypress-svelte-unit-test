// try rolling Svelte component manually
const rollup = require('rollup')
// const svelte = require('rollup-plugin-svelte')
// const resolve = require('@rollup/plugin-node-resolve')
const loadConfigFile = require('rollup/dist/loadConfigFile')
const path = require('path')

// const options = {
//   // input: 'cypress/integration/spec.js',
//   // input: 'cypress/components/hello/HelloWorld.svelte',
//   input: 'cypress/components/hello/hello-world-spec.js',
//   output: {
//     file: 'public/bundle.js',
//     format: 'iife',
//   },
//   plugins: [resolve(), svelte()],
// }
const configFile = path.join(process.cwd(), 'rollup.config.js')
loadConfigFile(configFile).then(({ options }) => {
  const singleOptions = options[0]
  singleOptions.input = 'cypress/components/hello/hello-world-spec.js'

  const output = {
    file: 'public/bundle.js',
    format: 'iife',
  }

  return rollup.rollup(singleOptions).then((bundle) => {
    console.log('got bundle')
    return bundle.write(output)
  })
})
