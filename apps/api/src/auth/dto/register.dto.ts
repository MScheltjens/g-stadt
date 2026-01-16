import { RegisterInputSchema } from '@invicity/contracts';
import { createZodDto } from 'nestjs-zod';

export class RegisterDto extends createZodDto(RegisterInputSchema) {}
