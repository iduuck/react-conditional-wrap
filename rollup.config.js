
import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'

const isMin = process.env.MODE === 'minified'

export default {
  input: 'src/index.js',
  output: {
    file: `dist/bundle${isMin ? '.min' : ''}.js`,
    format: 'cjs',
  },
  external: ['react'],
  plugins: [
    isMin && uglify(),
    babel({
      exclude: 'node_modules/**',
      plugins: ['external-helpers'],
    }),
  ],
}
