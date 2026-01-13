import { createZodDto } from 'nestjs-zod';
import { ResetPasswordSchema } from '@repo/types';

export class ResetPasswordDto extends createZodDto(ResetPasswordSchema) {}
