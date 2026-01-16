import { config as loadEnv } from 'dotenv';
import { join } from 'path';

import { env } from './lib/env.js';

// Load .env from workspace root
loadEnv({ path: join(process.cwd(), '.env') });

import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ZodValidationPipe } from 'nestjs-zod';

import { AppModule } from './app.module.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  app.useGlobalPipes(new ZodValidationPipe());

  const swaggerConfig = new DocumentBuilder()
    .setTitle('API Docs')
    .setDescription('The API description')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api/docs', app, document);

  await app.listen(env.PORT);

  console.log(`🚀 API running on http://localhost:${env.PORT}`);
  console.log(`📚 Swagger docs at http://localhost:${env.PORT}/api/docs`);
}

void bootstrap();
