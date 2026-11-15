import { defineConfig } from "oxlint";
import config from "./index.js";

export default defineConfig({
  extends: [config],
  options: {
    typeAware: true,
  },
  ignorePatterns: ["commitlint.config.cjs"],
});
