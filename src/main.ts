/**
 * This file is the entry point of the NestJS application. It creates a Nest application instance and listens on port 3000.
 * It also sets up a global validation pipe to validate incoming requests.
 */
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { MessagesModule } from './messages/messages.module';

async function bootstrap() {
  const app = await NestFactory.create(MessagesModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
