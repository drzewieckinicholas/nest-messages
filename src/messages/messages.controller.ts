import { Controller, Get, Post, Body, Param } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  getMessages() {
    return;
  }

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    return id;
  }

  @Post('/')
  createMessage(@Body() body: any) {
    return body;
  }
}
