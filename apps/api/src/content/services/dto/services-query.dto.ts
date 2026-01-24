import { createZodDto } from 'nestjs-zod';
import { ServicesQuerySchema } from '@kwh/contracts';

export class ServicesQueryDto extends createZodDto(ServicesQuerySchema) {}
