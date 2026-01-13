import { createZodDto } from 'nestjs-zod';
import { ResetPasswordInputSchema } from '@repo/contracts';

export class ResetPasswordDto extends createZodDto(ResetPasswordInputSchema) {}
