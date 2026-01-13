import { Controller, Get, Query } from '@nestjs/common';
import { Public } from '@/common/decorators/public.decorator';
import { ServicesService } from './services.service';
import { ServiceListQueryDto } from './dto/service-list-query.dto';

@Controller('services')
export class ServicesController {
  constructor(private readonly servicesService: ServicesService) {}

  @Public()
  @Get()
  async list(@Query() query: ServiceListQueryDto) {
    return this.servicesService.list(query.locale);
  }
}
