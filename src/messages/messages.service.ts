import { MessagesRepository } from './messages.repository';

/**
 * Service responsible for handling messages.
 */
export class MessagesService {
  messagesRepository: MessagesRepository;

  constructor() {
    this.messagesRepository = new MessagesRepository();
  }

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
   * Creates a new message.
   * @param content The content of the message to create.
   * @returns The newly created message.
   */
  create(content: string) {
    return this.messagesRepository.create(content);
  }
}
