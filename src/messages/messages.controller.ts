import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  messagesService: MessagesService;

  constructor() {
    this.messagesService = new MessagesService();
  }

  /**
   * Retrieves a message by id.
   * @param id The id of the message to retrieve.
   * @returns The message with the specified id.
   * @throws NotFoundException if the message with the specified id is not found.
   */
  @Get('/:id')
  async getMessage(@Param('id') id: string) {
    const message = await this.messagesService.findOne(id);

    if (!message) {
      throw new NotFoundException(`Message with id ${id} not found`);
    }
  }

  /**
   * Retrieves all messages.
   * @returns An array of messages.
   */
  @Get()
  getMessages() {
    return this.messagesService.findAll();
  }

  /**
   * Creates a new message.
   * @param body The message to create.
   * @returns The created message.
   */
  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    return this.messagesService.create(body.content);
  }
}
