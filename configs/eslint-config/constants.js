import { libraryConfig } from '@repo/eslint-config/library';

export const constantsConfig = [
  ...libraryConfig,
  {
    rules: {
      // 🚫 Constants must not depend on runtime or infra
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            '@repo/database',
            '@repo/contracts',
            '@repo/i18n',
            '@repo/ui',
            '@repo/web',
            '@prisma/client',
            '@nestjs/*',
            'react',
            'next/*',
          ],
        },
      ],
    },
  },
];
