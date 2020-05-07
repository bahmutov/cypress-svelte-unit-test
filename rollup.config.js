import svelte from 'rollup-plugin-svelte'
import resolve from '@rollup/plugin-node-resolve'
import filesize from 'rollup-plugin-filesize'
import alias from '@rollup/plugin-alias'
import commonjs from '@rollup/plugin-commonjs'
import autoPreprocess from 'svelte-preprocess'
import istanbul from 'rollup-plugin-istanbul'

const resolvedCypressSvelteUnitTest = require.resolve('.')

const isProduction = process.env.NODE_ENV === 'production'
const isDevelopment = !isProduction

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
    svelte({
      preprocess: autoPreprocess(),
    }),

    // during normal testing we want to collect code coverage
    // include all source files, but exclude spec files
    isDevelopment &&
      istanbul({
        include: ['cypress/components/**'],
        exclude: ['**/*spec.js'],
      }),
    filesize(),
  ],
}
