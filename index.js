import oxlintrc from "./config.json" with { type: "json" };

const { $schema: _schema, ...config } = oxlintrc;

export default config;
