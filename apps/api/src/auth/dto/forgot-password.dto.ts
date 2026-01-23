import { ForgotPasswordInputSchema } from '@kwh/contracts';
import { createZodDto } from 'nestjs-zod';

export class ForgotPasswordDto extends createZodDto(
  ForgotPasswordInputSchema,
) {}
