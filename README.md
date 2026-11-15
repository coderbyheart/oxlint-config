# Oxlint Config [![npm version](https://img.shields.io/npm/v/@coderbyheart/oxlint-config.svg)](https://www.npmjs.com/package/@coderbyheart/oxlint-config)

[![GitHub Actions](https://github.com/coderbyheart/oxlint-config/workflows/Semantic%20Release/badge.svg)](https://github.com/coderbyheart/oxlint-config/actions)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Renovate](https://img.shields.io/badge/renovate-enabled-brightgreen.svg)](https://renovatebot.com)
[![@commitlint/config-conventional](https://img.shields.io/badge/%40commitlint-config--conventional-brightgreen)](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional)
[![code style: oxfmt](https://img.shields.io/badge/code_style-oxfmt-32f3e9.svg)](https://oxc.rs/docs/guide/usage/formatter.html)
[![Oxlint](https://img.shields.io/badge/Ox-lint-blue.svg)](https://oxc.rs/docs/guide/usage/linter.html)

Oxlint configuration for all my projects.

## Installation

    npm i --save-dev --save-exact @coderbyheart/oxlint-config

## Usage

Add a file `oxlint.config.ts` to your project, and adapt:

```ts
import config from "@coderbyheart/oxlint-config";
import { defineConfig } from "oxlint";

export default defineConfig({
  extends: [config],
  // The `typescript/*` rules in this config need type information. Oxlint only
  // accepts this option in the root config, so it has to be set here.
  options: {
    typeAware: true,
  },
});
```

### Node.js type stripping

It is also recommended to enable the
[`erasableSyntaxOnly`](https://www.typescriptlang.org/tsconfig/#erasableSyntaxOnly)
compiler option in your `tsconfig.json`:

```json
{
  "compilerOptions": {
    "erasableSyntaxOnly": true
  }
}
```

## Node & NPM

This project requires Node.js `>=26.13.1 <27` and npm `>=12.2.2 <13` (enforced
via `check-node-version` on `npm install` and `npm ci`).

The check is skipped during `npm publish` and `npm pack`, because
`semantic-release` bundles its own npm (`@semantic-release/npm` depends on
`npm@^11.6.2`) and runs the publish with that version rather than the one
installed in CI.
