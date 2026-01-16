import { ForgotPasswordInputSchema } from '@repo/contracts';
import { createZodDto } from 'nestjs-zod';

export class ForgotPasswordDto extends createZodDto(
  ForgotPasswordInputSchema,
) {}
