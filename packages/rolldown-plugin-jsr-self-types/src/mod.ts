import type { Plugin, RenderedChunk } from "rolldown";

/**
 * Options for the JSR @ts-self-types plugin.
 */
type JsrSelfTypesPlugin = {
	/**
	 * Enable or disable the plugin. Defaults to `true`.
	 * If disabled, the plugin will not add any banners.
	 */
	enable?: boolean;
};

/**
 * Creates a Rolldown plugin that adds `/* @ts-self-types *\/` directives
 * to output chunks, linking them to their corresponding `.d.ts` files.
 *
 * This is useful for packages published to JSR that generate type declarations
 * alongside their JavaScript output.
 *
 * @param options - Configuration options for the plugin.
 * @returns A Rolldown plugin instance.
 *
 * @example
 * ```ts
 * import { defineConfig } from 'rolldown';
 * import { jsrSelfTypesPlugin } from '@jsr-community/rolldown-plugin-jsr-self-types';
 *
 * export default defineConfig({
 *   input: './src/mod.ts',
 *   output: {
 *     dir: './dist',
 *     format: 'esm',
 *     sourcemap: true,
 *   },
 *   plugins: [
 *     jsrSelfTypesPlugin({ enable: true }),
 *   ],
 * });
 * ```
 */
export const jsrSelfTypesPlugin = ({
	enable = true,
}): Plugin<JsrSelfTypesPlugin> => ({
	name: "JSR @ts-self-types",
	banner: enable
		? (chunk: RenderedChunk): string => {
				const filenameWithoutExt = chunk.fileName.replace(/\.[^/.]+$/, "");
				return `/* @ts-self-types="./${filenameWithoutExt}.d.ts" */\n`;
			}
		: undefined,
});

export default jsrSelfTypesPlugin;
