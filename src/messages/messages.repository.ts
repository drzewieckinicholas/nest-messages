import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { readFile, writeFile } from 'fs/promises';

@Injectable()
export class MessagesRepository {
  /**
   * Finds a message by its ID.
   * @param id The ID of the message to find.
   * @returns The message with the specified ID, or undefined if not found.
   */
  async findOne(id: string) {
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);

    return messages[id];
  }

  /**
   * Returns all messages.
   * @returns An object containing all messages.
   */
  async findAll() {
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);

    return messages;
  }

  /**
   * Creates a new message with the specified content.
   * @param content The content of the message to create.
   * @returns The newly created message.
   */
  async create(content: string) {
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);
    const id = uuid();

    messages[id] = { id, content };

    await writeFile('messages.json', JSON.stringify(messages));

    return messages[id];
  }
}
