import { IsString } from 'class-validator';

/**
 * Data transfer object for creating a new message.
 */
export class CreateMessageDto {
  /**
   * The content of the message.
   */
  @IsString()
  content: string;
}
