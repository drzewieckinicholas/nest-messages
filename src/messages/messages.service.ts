import { Injectable } from '@nestjs/common';
import { MessagesRepository } from './messages.repository';

@Injectable()
export class MessagesService {
  constructor(private readonly messagesRepository: MessagesRepository) {}

  /**
   * Finds a message by its ID.
   * @param id The ID of the message to find.
   * @returns The message with the specified ID.
   */
  findOne(id: string) {
    return this.messagesRepository.findOne(id);
  }

  /**
   * Finds all messages.
   * @returns An array of all messages.
   */
  findAll() {
    return this.messagesRepository.findAll();
  }

  /**
   * Creates a new message with the specified content.
   * @param content The content of the new message.
   * @returns The newly created message.
   */
  create(content: string) {
    return this.messagesRepository.create(content);
  }
}
