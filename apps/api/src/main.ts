import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ZodValidationPipe } from 'nestjs-zod';

import { AppModule } from './app.module.js';
import { getEnv } from './lib/env.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  if (process.env.NODE_ENV === 'production') {
    app.enableCors({
      origin: ['https://invicity-web.vercel.app/'], // production frontend only
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization'],
      credentials: true,
      maxAge: 86400,
    });
  } else {
    app.enableCors('*');
  }

  app.useGlobalPipes(new ZodValidationPipe());

  const swaggerConfig = new DocumentBuilder()
    .setTitle('API Docs')
    .setDescription('The API description')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api/docs', app, document);

  const env = getEnv();

  await app.listen(env.PORT || 3000, '0.0.0.0');
}

void bootstrap();
