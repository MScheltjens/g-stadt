import { ChangePasswordInputSchema } from '@invicity/contracts';
import { createZodDto } from 'nestjs-zod';

export class ChangePasswordDto extends createZodDto(
  ChangePasswordInputSchema,
) {}
