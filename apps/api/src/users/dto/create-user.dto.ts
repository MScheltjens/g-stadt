import { CreateUserSchema } from '@kwh/contracts';
import { createZodDto } from 'nestjs-zod';

export class CreateUserDto extends createZodDto(CreateUserSchema) {}
