const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const { terser } = require('rollup-plugin-terser');
const pkg = require('./package.json');

export default {
  input: 'src/index.js',
  output: {
    format: 'cjs',
    name: 'index',
    file: 'dist/RTCMultiConnection.js',
  },
  external: [...Object.keys(pkg.dependencies || {})],
  plugins: [
    resolve({ preferBuiltins: true }),
    commonjs(),
    terser(),
  ],
};