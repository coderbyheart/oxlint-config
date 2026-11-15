import { fileURLToPath } from "node:url"
import oxlintrc from "./config.json" with { type: "json" }

const { $schema: _schema, jsPlugins, ...config } = oxlintrc

export default {
  ...config,
  // Oxlint resolves JS plugins relative to the project's config file, but the
  // plugins are dependencies of this package. Resolve them from here, so they
  // are found even if the package manager does not hoist them.
  jsPlugins: jsPlugins.map(({ name, specifier }) => ({
    name,
    specifier: fileURLToPath(import.meta.resolve(specifier)),
  })),
}
