import { libraryConfig } from '@invicity/eslint-config/library';

export const constantsConfig = [
  ...libraryConfig,
  {
    rules: {
      // 🚫 Constants must not depend on runtime or infra
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            '@invicity/db',
            '@invicity/contracts',
            '@invicity/i18n',
            '@invicity/ui',
            '@invicity/web',
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
