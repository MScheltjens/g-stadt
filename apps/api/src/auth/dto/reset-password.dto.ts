import { ResetPasswordInputSchema } from '@repo/contracts';
import { createZodDto } from 'nestjs-zod';

export class ResetPasswordDto extends createZodDto(ResetPasswordInputSchema) {}
