import { UpdateUserSchema } from '@kwh/contracts';
import { createZodDto } from 'nestjs-zod';

export class UpdateUserDto extends createZodDto(UpdateUserSchema) {}
