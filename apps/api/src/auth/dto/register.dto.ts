import { createZodDto } from 'nestjs-zod';
import { RegisterSchema } from '@repo/types';

export class RegisterDto extends createZodDto(RegisterSchema) {}
