import { UpdateUserSchema } from '@invicity/contracts';
import { createZodDto } from 'nestjs-zod';

export class UpdateUserDto extends createZodDto(UpdateUserSchema) {}
