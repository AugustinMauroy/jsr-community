import type { Plugin } from "rolldown";

type JsrSelfTypesPlugin = {
	enable?: boolean;
};

export const jsrSelfTypesPlugin = ({
	enable = true,
}): Plugin<JsrSelfTypesPlugin> => ({
	name: "JSR @ts-self-types",
	banner: enable
		? (chunk) => {
				const filenameWithoutExt = chunk.fileName.replace(/\.[^/.]+$/, "");
				return `/* @ts-self-types="./${filenameWithoutExt}.d.ts" */\n`;
			}
		: undefined,
});

export default jsrSelfTypesPlugin;
