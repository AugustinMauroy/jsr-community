import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { build } from "rolldown";
import { jsrSelfTypesPlugin } from "../src/mod.ts";

describe("jsrSelfTypesPlugin", () => {
  it("should add self types to the output", async () => {
    const result = await build({
      input: "tests/fixture.ts",
      write: false,
      output: {
        dir: './dist',
        format: 'esm',
        sourcemap: true,
      },
      plugins: [jsrSelfTypesPlugin({ enable: true })],
    });

    assert.strictEqual(result.output[0].code.split("\n")[1], "/* @ts-self-types=\"./fixture.d.ts\" */");
  });

  it ("should not add self types to the output when disabled", async () => {
    const result = await build({
      input: "tests/fixture.ts",
      write: false,
      output: {
        dir: './dist',
        format: 'esm',
        sourcemap: true,
      },
      plugins: [jsrSelfTypesPlugin({ enable: false })],
    });

    assert.strictEqual(result.output[0].code.split("\n")[0], "//#region tests/fixture.ts");
  });
});