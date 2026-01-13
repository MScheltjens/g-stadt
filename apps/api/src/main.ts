import { config } from 'dotenv';
import { join } from 'path';

// Load .env from root BEFORE any other imports
// Use process.cwd() which points to workspace root, not __dirname which changes when compiled
config({ path: join(process.cwd(), '.env') });

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ZodValidationPipe } from 'nestjs-zod';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  // zod global pipe can be set up here if needed
  app.useGlobalPipes(new ZodValidationPipe());

  // Swagger setup
  const config = new DocumentBuilder()
    .setTitle('API Docs')
    .setDescription('The API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  await app.listen(3001);
  console.log(`🚀 API running on http://localhost:3001`);
  console.log(`📚 Swagger docs at http://localhost:3001/api/docs`);
}
void bootstrap();
