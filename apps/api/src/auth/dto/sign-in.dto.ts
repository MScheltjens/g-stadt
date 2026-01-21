import { SignInInputSchema } from '@invicity/contracts';
import { createZodDto } from 'nestjs-zod';

export class SignInDto extends createZodDto(SignInInputSchema) {}
