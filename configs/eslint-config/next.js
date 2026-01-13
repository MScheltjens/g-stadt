import { defineConfig, globalIgnores } from 'eslint/config';
import js from '@eslint/js';
import typescriptEslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
import pluginNext from '@next/eslint-plugin-next';
import eslintPrettier from 'eslint-config-prettier/flat';
import { config as baseConfig } from './base.js';

/**
 * Next.js 16 ESLint config with TypeScript, React, Hooks, Prettier, and core web vitals
 */
export const nextJsConfig = defineConfig([
  // Base shared rules
  ...baseConfig,

  // JS recommended rules
  js.configs.recommended,

  // TypeScript recommended rules
  ...typescriptEslint.configs.recommended,

  // React recommended rules
  {
    ...pluginReact.configs.flat.recommended,
    languageOptions: {
      ...pluginReact.configs.flat.recommended.languageOptions,
      globals: {
        ...globals.serviceworker,
      },
    },
  },

  // Next.js recommended + core web vitals rules
  {
    plugins: {
      '@next/next': pluginNext,
    },
    rules: {
      ...pluginNext.configs.recommended.rules,
      ...pluginNext.configs['core-web-vitals'].rules,
    },
  },

  // React hooks rules
  {
    plugins: {
      'react-hooks': pluginReactHooks,
    },
    settings: { react: { version: 'detect' } },
    rules: {
      ...pluginReactHooks.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
    },
  },

  // 🚫 Architecture boundary: web must not import DB
  {
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: ['@repo/database', '@prisma/client'],
        },
      ],
    },
  },

  // Prettier to disable conflicting formatting rules
  eslintPrettier,

  // Global ignores
  globalIgnores([
    '.next/**',
    'build/**',
    'out/**',
    'dist/**',
    'node_modules/**',
    'pnpm-lock.yaml',
  ]),
]);
