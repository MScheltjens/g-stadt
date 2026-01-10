import { nestConfig } from '@repo/jest-config';

export default {
  ...nestConfig,
  rootDir: '.',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};
