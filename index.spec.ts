import assert from "node:assert/strict"
import { existsSync } from "node:fs"
import { isAbsolute } from "node:path"
import { describe, it } from "node:test"
import config from "./index.js"

void describe("config", () => {
  void it("should resolve the JS plugins from this package", () => {
    assert.deepEqual(
      config.jsPlugins?.map((plugin) => (typeof plugin === "string" ? plugin : plugin.name)),
      ["@stylistic", "prefer-arrow"],
    )
    for (const plugin of config.jsPlugins ?? []) {
      assert.ok(typeof plugin !== "string")
      assert.ok(isAbsolute(plugin.specifier), `${plugin.specifier} should be absolute`)
      assert.ok(existsSync(plugin.specifier), `${plugin.specifier} should exist`)
    }
  })
})
