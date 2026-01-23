import { libraryConfig } from '@kwh/eslint-config/library';

export const constantsConfig = [
  ...libraryConfig,
  {
    rules: {
      // 🚫 Constants must not depend on runtime or infra
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            '@kwh/db',
            '@kwh/contracts',
            '@kwh/i18n',
            '@kwh/ui',
            '@kwh/web',
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
