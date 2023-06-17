import { MessagesRepository } from './messages.repository';

export class MessagesService {
  constructor(public messagesRepository: MessagesRepository) {
    this.messagesRepository = messagesRepository;
  }

  findOne(id: string) {
    return this.messagesRepository.findOne(id);
  }

  findAll() {
    return this.messagesRepository.findAll();
  }

  create(content: string) {
    return this.messagesRepository.create(content);
  }
}
