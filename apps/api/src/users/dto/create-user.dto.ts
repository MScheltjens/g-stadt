import { CreateUserSchema } from '@invicity/contracts';
import { createZodDto } from 'nestjs-zod';

export class CreateUserDto extends createZodDto(CreateUserSchema) {}
