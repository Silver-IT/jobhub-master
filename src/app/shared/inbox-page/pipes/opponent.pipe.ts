import { Pipe, PipeTransform } from '@angular/core';

import { Chat } from '../../../core/models/chat';
import { AuthService } from '../../../core/services/auth.service';
import { User, UserRole } from '../../../core/models/auth';

@Pipe({
  name: 'opponent'
})
export class OpponentPipe implements PipeTransform {

  constructor(
    private authService: AuthService
  ) {
  }

  transform(chat: Chat): User {
    if (this.authService.user.role === UserRole.Customer) {
      return chat.contractor;
    } else {
      return chat.customer;
    }
  }

}
