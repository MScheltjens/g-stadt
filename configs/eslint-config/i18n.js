import { libraryConfig } from './library.js';

/**
 * ESLint config for the contracts package
 * - framework-agnostic
 * - no database access
 *
 * @type {import("eslint").Linter.Config[]}
 */
export const i18nConfig = [
  ...libraryConfig,
  {
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: ['@kwh/db', '@kwh/contracts', '@prisma/client'],
        },
      ],
    },
  },
  // Allow default exports for Next.js middleware and plugin files
  {
    files: ['src/middleware.ts', 'src/plugin.ts'],
    rules: {
      'import/no-default-export': 'off',
    },
  },
];
