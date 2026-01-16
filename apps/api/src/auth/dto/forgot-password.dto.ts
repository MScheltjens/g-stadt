import { ForgotPasswordInputSchema } from '@invicity/contracts';
import { createZodDto } from 'nestjs-zod';

export class ForgotPasswordDto extends createZodDto(
  ForgotPasswordInputSchema,
) {}
