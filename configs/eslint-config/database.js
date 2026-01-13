import { libraryConfig } from './library.js';

/**
 * ESLint config for the database package
 * - Prisma + migrations + seeds
 * - must not depend on contracts
 *
 * @type {import("eslint").Linter.Config[]}
 */
export const databaseConfig = [
  ...libraryConfig,
  {
    rules: {
      // 🚫 Database must not depend on contracts
      'no-restricted-imports': [
        'error',
        {
          patterns: ['@repo/contracts'],
        },
      ],
    },
  },
];
