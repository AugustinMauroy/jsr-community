import { basename, extname } from "node:path";
import { factory } from "typescript"
import type { SourceFile } from "typescript";

function init() {
	function create() {
		return {
			after() {
				return (sourceFile: SourceFile) => {
					const filenameWithoutExt = basename(
						sourceFile.fileName,
						extname(sourceFile.fileName),
					);

					const banner = `/* @ts-self-types="./${filenameWithoutExt}.d.ts" */\n`;

					// Prepend the banner to the source file
					const bannerStatement = factory.createExpressionStatement(
						factory.createStringLiteral(banner),
					);

					// Create a new source file with the banner
					const updated = factory.updateSourceFile(sourceFile, [
						bannerStatement,
						...sourceFile.statements,
					]);

					return updated;
				};
			},
		};
	}
	return { create };
}

export = init;
