import js from '@eslint/js';
import pluginNext from '@next/eslint-plugin-next';
import { defineConfig, globalIgnores } from 'eslint/config';
import eslintPrettier from 'eslint-config-prettier/flat';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
import typescriptEslint from 'typescript-eslint';

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
          patterns: ['@invicity/db', '@prisma/client'],
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

  // Allow default exports for Next.js pages/layouts/config
  {
    files: [
      'app/**/*.tsx',
      'app/**/*.ts',
      'pages/**/*.tsx',
      'pages/**/*.ts',
      'pages/**/*.js',
      'pages/**/*.jsx',
      'next.config.{js,ts,mjs}',
      'i18n/request.ts',
    ],
    rules: {
      'import/no-default-export': 'off',
    },
  },
]);
