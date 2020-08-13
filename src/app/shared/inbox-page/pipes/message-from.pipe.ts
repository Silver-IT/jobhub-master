import { Pipe, PipeTransform } from '@angular/core';

import { Chat, Message, MessageFrom } from '../../../core/models/chat';

@Pipe({
  name: 'messageFrom'
})
export class MessageFromPipe implements PipeTransform {

  transform(chat: Chat, message: Message): unknown {
    if (message.from === MessageFrom.FromCustomer) {
      return chat.customer;
    } else {
      return chat.contractor;
    }
  }

}
