import { ServicesQuerySchema } from '@kwh/contracts';
import { createZodDto } from 'nestjs-zod';

export class ServicesQueryDto extends createZodDto(ServicesQuerySchema) {}
