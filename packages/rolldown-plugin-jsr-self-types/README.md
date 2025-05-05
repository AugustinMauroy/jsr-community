# `@jsr-community/rolldown-plugin-jsr-self-types`

A plugin for JSR to add self types to the Rolldown plugin.

[![JSR](https://jsr.io/badges/@jsr-community/rolldown-plugin-jsr-self-types)](https://jsr.io/@jsr-community/rolldown-plugin-jsr-self-types)

The plugin is designed to be used with [Rolldown](https://rolldown.rs), a JavaScript bundler that focuses on performance and simplicity. It's add the `@ts-self-types` to the top of yours generated files.

> [!WARNING]
> **This plugin is in early development.** It may not work as expected and may change in the future. Please use it at your own risk.
> **Rolldown doesn't generate types natively.** So you need to generate them with `tsc`. But there are a plan for that in the future [read this issue](https://github.com/rolldown/rolldown/issues/4393)
> Or you can use [`rolldown-plugin-dts`](https://github.com/sxzz/rolldown-plugin-dts) to generate types for you.

> [!NOTE]
> This plugin also work with [`tsdown`](https://tsdown.dev) "The Elegant Library Bundler"

## Usage

In `rolldown.config.ts`:

```ts
import { defineConfig } from 'rolldown'
import { jsrSelfTypesPlugin } from '@jsr-community/rolldown-plugin-jsr-self-types'

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
```

## References

- [JSR `@ts-self-types`](https://jsr.io/docs/about-slow-types#javascript-entrypoints)
- [rolldown](https://rolldown.rs)