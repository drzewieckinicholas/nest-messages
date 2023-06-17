import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';

@Controller('messages')
export class MessagesController {
  /**
   * Retrieves all messages.
   * @returns An array of messages.
   */
  @Get()
  getMessages() {
    return;
  }

  /**
   * Retrieves a message by ID.
   * @param id The ID of the message to retrieve.
   * @returns The message with the specified ID.
   */
  @Get('/:id')
  getMessage(@Param('id') id: string) {
    return id;
  }

  /**
   * Creates a new message.
   * @param body The message to create.
   * @returns The created message.
   */
  @Post('/')
  createMessage(@Body() body: CreateMessageDto) {
    return body;
  }
}
