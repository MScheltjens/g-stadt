import { nestConfig } from '@invicity/jest-config';

export default {
  ...nestConfig,
  rootDir: '.',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};
