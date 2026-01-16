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
      // 🚫 Database must not be imported by any package except api
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            '@invicity/constants',
            '@invicity/contracts',
            '@invicity/i18n',
            '@invicity/ui',
            '@invicity/web',
          ],
        },
      ],
    },
  },
];
