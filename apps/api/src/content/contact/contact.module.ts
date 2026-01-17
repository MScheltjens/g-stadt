import { Module } from '@nestjs/common';

import { CategoriesModule } from '@/content/categories/categories.module.js';

import { ContactController } from './contact.controller.js';
import { ContactService } from './contact.service.js';

@Module({
  imports: [CategoriesModule],
  controllers: [ContactController],
  providers: [ContactService],
})
export class ContactModule {}
