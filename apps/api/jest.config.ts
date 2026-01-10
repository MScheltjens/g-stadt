import { config } from '@repo/jest-config';

export default {
  ...config,
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};
