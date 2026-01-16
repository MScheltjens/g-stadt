import { nextJsConfig } from '@invicity/eslint-config/next-js';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
    ...nextJsConfig,
    globalIgnores(['.prettierrc.mjs', 'eslint.config.mjs'])
]);