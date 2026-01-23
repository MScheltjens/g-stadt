import { RefreshTokenInputSchema } from '@kwh/contracts';
import { createZodDto } from 'nestjs-zod';

export class RefreshTokenDto extends createZodDto(RefreshTokenInputSchema) {}
