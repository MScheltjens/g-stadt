import { nestJsConfig } from '@repo/eslint-config/nest-js';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  ...nestJsConfig,
  globalIgnores(['.prettierrc.mjs', 'eslint.config.mjs'])
]);