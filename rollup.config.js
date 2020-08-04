import vue from 'rollup-plugin-vue';
import css from 'rollup-plugin-css-only';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import buble from '@rollup/plugin-buble';
import { terser } from 'rollup-plugin-terser';

export default {
  input: './src/Popper.vue',
  output: [
    {
      file: './dist/vue-popper.es.js',
      format: 'es',
      sourcemap: true,
      sourcemapExcludeSources: false
    },
    {
      file: './dist/vue-popper.umd.min.js',
      format: 'umd',
      name: 'VuePopper',
      sourcemap: true,
      sourcemapExcludeSources: false,
      globals: {
        vue: 'Vue'
      }
    }
  ],
  external: [
    'vue'
  ],
  plugins: [
    resolve(),
    commonjs(),
    css({
      output: 'dist/vue-popper.css'
    }),
    vue({
      css: false
    }),
    buble(),
    terser({
      sourcemap: true,
      include: [/^.+\.min\.js$/]
    })
  ]
};
