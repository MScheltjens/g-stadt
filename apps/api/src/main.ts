import { config } from 'dotenv';
import { join } from 'path';

// Load .env from root BEFORE any other imports
// Use process.cwd() which points to workspace root, not __dirname which changes when compiled
config({ path: join(process.cwd(), '.env') });

console.log('DATABASE_URL loaded:', process.env.DATABASE_URL ? 'YES' : 'NO');
console.log('DATABASE_URL value:', process.env.DATABASE_URL);

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(3001);
  console.log(`🚀 API running on http://localhost:3001`);
}
bootstrap();
