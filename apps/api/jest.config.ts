import { nestConfig } from '@repo/jest-config';

export default {
  ...nestConfig,
  moduleNameMapper: {
    '^@repo/database$': '<rootDir>/../../../packages/database/dist/index.js',
    '^@repo/types$': '<rootDir>/../../../packages/types/dist/index.js',
  },
};
