import { Test, TestingModule } from '@nestjs/testing';

import { ServicesService } from './services.service.js';
import { PrismaModule } from '@api/db/prisma.module.js';

describe('ServicesService', () => {
  let service: ServicesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      providers: [ServicesService],
    }).compile();

    service = module.get<ServicesService>(ServicesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
