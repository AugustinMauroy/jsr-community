import { globSync } from "node:fs";
import { defineConfig } from "rolldown";
import { dts } from "rolldown-plugin-dts";
import { jsrSelfTypesPlugin } from "./src/mod.ts";

const inputFiles = globSync("./src/**/**.ts");

export default defineConfig({
	input: inputFiles,
	output: {
		dir: "./dist",
		format: "esm",
		sourcemap: true,
	},
	plugins: [
		dts({
			sourcemap: false,
		}),
		jsrSelfTypesPlugin({ enable: true }),
	],
});
