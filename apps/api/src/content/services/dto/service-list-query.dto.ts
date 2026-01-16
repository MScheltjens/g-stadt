import { ServiceListQuerySchema } from '@repo/contracts';
import { createZodDto } from 'nestjs-zod';

export class ServiceListQueryDto extends createZodDto(ServiceListQuerySchema) {}
