import { Test, TestingModule } from '@nestjs/testing';

import { PrismaModule } from '@/db/prisma.module.js';

import { ServicesController } from './services.controller.js';
import { ServicesService } from './services.service.js';

describe('ServicesController', () => {
  let controller: ServicesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      controllers: [ServicesController],
      providers: [ServicesService],
    }).compile();

    controller = module.get<ServicesController>(ServicesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
