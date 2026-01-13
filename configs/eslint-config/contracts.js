import { libraryConfig } from './library.js';

/**
 * ESLint config for the contracts package
 * - framework-agnostic
 * - no database access
 *
 * @type {import("eslint").Linter.Config[]}
 */
export const contractsConfig = [
  ...libraryConfig,
  {
    rules: {
      // 🚫 Contracts must NEVER depend on the database
      'no-restricted-imports': [
        'error',
        {
          patterns: ['@repo/database', '@prisma/client'],
        },
      ],
    },
  },
];
