import { createZodDto } from 'nestjs-zod';
import { RegisterInputSchema } from '@repo/contracts';

export class RegisterDto extends createZodDto(RegisterInputSchema) {}
