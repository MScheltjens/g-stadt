import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import { fileURLToPath } from 'url';
import typescriptEslint from 'typescript-eslint';
import eslintPrettier from 'eslint-config-prettier/flat';
import { config as baseConfig } from './base.js';

/**
 * NestJS backend ESLint config (modern flat format)
 */
export const nestJsConfig = defineConfig([
  // Shared base rules
  ...baseConfig,

  // TypeScript recommended rules
  ...typescriptEslint.configs.recommended,

  // Prettier disables conflicting formatting rules
  eslintPrettier,

  // Node + Jest environment globals
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
      parserOptions: {
        ecmaVersion: 2021,
        projectService: true, // keeps project-level TS rules
        tsconfigRootDir: fileURLToPath(new URL('.', import.meta.url)),
      },
      sourceType: 'module',
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-floating-promises': 'warn',
      '@typescript-eslint/no-unsafe-argument': 'off',
    },
  },

  // Ignore build/output folders globally
  globalIgnores(['dist/**', 'build/**', 'node_modules/**', 'coverage/**']),
]);
