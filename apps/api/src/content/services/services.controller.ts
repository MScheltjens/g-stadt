import { Controller, Get, Query } from '@nestjs/common';

import { Public } from '@/common/decorators/public.decorator';

import { ServiceListQueryDto } from './dto/service-list-query.dto';
import { ServicesService } from './services.service';

@Controller('services')
export class ServicesController {
  constructor(private readonly servicesService: ServicesService) {}

  @Public()
  @Get()
  async list(@Query() query: ServiceListQueryDto) {
    return this.servicesService.list(query.locale);
  }
}
