import { createZodDto } from 'nestjs-zod';
import { ChangePasswordInputSchema } from '@repo/contracts';

export class ChangePasswordDto extends createZodDto(
  ChangePasswordInputSchema,
) {}
