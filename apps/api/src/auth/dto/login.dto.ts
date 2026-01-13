import { createZodDto } from 'nestjs-zod';
import { LoginInputSchema } from '@repo/contracts';

export class LoginDto extends createZodDto(LoginInputSchema) {}
