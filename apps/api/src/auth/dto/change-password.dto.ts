import { ChangePasswordInputSchema } from '@kwh/contracts';
import { createZodDto } from 'nestjs-zod';

export class ChangePasswordDto extends createZodDto(
  ChangePasswordInputSchema,
) {}
