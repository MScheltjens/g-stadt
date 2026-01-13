import { createZodDto } from 'nestjs-zod';
import { ForgotPasswordSchema } from '@repo/types';

export class ForgotPasswordDto extends createZodDto(ForgotPasswordSchema) {}
