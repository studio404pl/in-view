import babel from 'rollup-plugin-babel';

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/in-view.module.js',
      format: 'es'
    },
    {
      file: 'dist/in-view.umd.js',
      format: 'umd',
      name: 'inView'
    }
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**'
    })
  ]
}
