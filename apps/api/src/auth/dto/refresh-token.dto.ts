import { createZodDto } from 'nestjs-zod';
import { RefreshTokenSchema } from '@repo/types';
import { z } from 'zod';

const RefreshTokenApiSchema = RefreshTokenSchema.extend({
  expiresAt: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?Z?$/, {
      message: 'Invalid ISO date string',
    }),
});

export class RefreshTokenDto extends createZodDto(RefreshTokenApiSchema) {}
