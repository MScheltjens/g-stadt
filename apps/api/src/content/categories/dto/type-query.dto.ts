import { CategoryQuerySchema } from '@kwh/contracts';
import { createZodDto } from 'nestjs-zod';

export class CategoryQueryDto extends createZodDto(CategoryQuerySchema) {}
