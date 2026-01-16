import { ResetPasswordInputSchema } from '@invicity/contracts';
import { createZodDto } from 'nestjs-zod';

export class ResetPasswordDto extends createZodDto(ResetPasswordInputSchema) {}
