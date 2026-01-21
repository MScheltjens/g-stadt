import { Controller, Logger } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { Public } from '@/common/decorators/public.decorator.js';

import { ContactService } from './contact.service.js';

@ApiTags('contact')
@Public()
@Controller('contact')
export class ContactController {
  private readonly logger = new Logger(ContactController.name);
  constructor(private readonly contactService: ContactService) {}
}
