import { createZodDto } from 'nestjs-zod';
import { ForgotPasswordInputSchema } from '@repo/contracts';

export class ForgotPasswordDto extends createZodDto(
  ForgotPasswordInputSchema,
) {}
