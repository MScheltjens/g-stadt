import { libraryConfig } from './library.js';

/**
 * ESLint config for the contracts package
 * - can import constants, but not database or i18n
 *
 * @type {import("eslint").Linter.Config[]}
 */
export const contractsConfig = [
  ...libraryConfig,
  {
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: ['@kwh/db', '@kwh/i18n'],
        },
      ],
    },
  },
];
