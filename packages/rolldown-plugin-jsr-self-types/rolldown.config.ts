import { defineConfig } from 'rolldown'
import { jsrSelfTypesPlugin } from './src/mod.ts'

export default defineConfig({
  input: './src/**/**.ts',
  output: {
    dir: './dist',
    format: 'esm',
    sourcemap: true,
  },
  plugins: [
    jsrSelfTypesPlugin({ enable: true }),
  ],
})