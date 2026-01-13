import { createZodDto } from 'nestjs-zod';
import { UserResponseSchema } from '@repo/types';
import { z } from 'zod';

const UserResponseApiSchema = UserResponseSchema.extend({
  createdAt: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?Z?$/, {
      message: 'Invalid ISO date string',
    }),
});

export class UserResponseDto extends createZodDto(UserResponseApiSchema) {}
