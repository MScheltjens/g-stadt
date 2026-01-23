import { RegisterInputSchema } from '@kwh/contracts';
import { createZodDto } from 'nestjs-zod';

export class RegisterDto extends createZodDto(RegisterInputSchema) {}
