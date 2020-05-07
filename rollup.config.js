import svelte from 'rollup-plugin-svelte'
import resolve from '@rollup/plugin-node-resolve'
import filesize from 'rollup-plugin-filesize'
import alias from '@rollup/plugin-alias'
import commonjs from '@rollup/plugin-commonjs'

const resolvedCypressSvelteUnitTest = require.resolve('.')
// console.log('resolved cypress svelte unit test', resolvedCypressSvelteUnitTest)

export default {
  input: 'src/main.js',
  output: {
    file: 'public/bundle.js',
    format: 'iife',
    sourcemap: true,
  },
  plugins: [
    alias({
      entries: {
        'cypress-svelte-unit-test': resolvedCypressSvelteUnitTest,
      },
    }),
    resolve(),
    commonjs(),
    svelte(),
    filesize(),
  ],
}
