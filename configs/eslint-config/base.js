import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import onlyWarn from 'eslint-plugin-only-warn';
import simpleImportSortPlugin from 'eslint-plugin-simple-import-sort';
import unusedImports from 'eslint-plugin-unused-imports';
import turboPlugin from 'eslint-plugin-turbo';
import importPlugin from 'eslint-plugin-import';
import tseslint from 'typescript-eslint';

/**
 * A shared ESLint configuration for the repository.
 *
 * @type {import("eslint").Linter.Config[]}
 * */
export const config = [
  js.configs.recommended,
  eslintConfigPrettier,
  ...tseslint.configs.recommended,
  {
    plugins: {
      turbo: turboPlugin,
    },
    rules: {
      'turbo/no-undeclared-env-vars': 'warn',
    },
  },
  {
    plugins: {
      onlyWarn,
    },
  },
  {
    ignores: [
      'dist/**',
      'coverage/**',
      'coverage',
      'build/**',
      'node_modules/**',
      '*.config.{js,ts,mjs}',
      '*.d.ts',
      '*.js',
      '*.mjs',
      '*.cjs',
      '**/dist/**',
      '**/coverage/**',
      '**/build/**',
      '**/node_modules/**',
      '**/*.d.ts',
      '**/*.js',
      '**/*.mjs',
      '**/*.cjs',
      'configs/jest-config/dist/**',
      '.prettierrc.mjs',
    ],
  },
  {
    plugins: {
      // ...existing plugins...
      'simple-import-sort': simpleImportSortPlugin,
      'unused-imports': unusedImports,
      import: importPlugin,
    },
    rules: {
      // ...existing rules...
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
      'import/no-default-export': 'error',
      'no-restricted-imports': [
        'error',
        {
          patterns: ['../*', '../../*', '../../../*'],
        },
      ],
    },
  },
];
