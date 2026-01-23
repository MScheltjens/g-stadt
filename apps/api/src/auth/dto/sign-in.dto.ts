import { SignInInputSchema } from '@kwh/contracts';
import { createZodDto } from 'nestjs-zod';

export class SignInDto extends createZodDto(SignInInputSchema) {}
