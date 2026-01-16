import { LoginInputSchema } from '@invicity/contracts';
import { createZodDto } from 'nestjs-zod';

export class LoginDto extends createZodDto(LoginInputSchema) {}
