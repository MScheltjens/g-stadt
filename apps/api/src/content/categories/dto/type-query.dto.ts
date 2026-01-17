import { CategoryQuerySchema } from '@invicity/contracts';
import { createZodDto } from 'nestjs-zod';

export class CategoryQueryDto extends createZodDto(CategoryQuerySchema) {}
