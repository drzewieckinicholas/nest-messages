import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';

/**
 * The MessagesModule is responsible for defining the messages controller
 * and any related dependencies or providers.
 */
@Module({
  controllers: [MessagesController],
})
export class MessagesModule {}
