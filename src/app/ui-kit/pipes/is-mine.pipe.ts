import { Pipe, PipeTransform } from '@angular/core';

import { AuthService } from '../../core/services/auth.service';
import { Message, MessageFrom } from '../../core/models/chat';
import { UserRole } from '../../core/models/auth';

@Pipe({
  name: 'isMine'
})
export class IsMinePipe implements PipeTransform {

  constructor(
    private authService: AuthService
  ) {
  }

  transform(message: Message): boolean {
    const role = this.authService.user.role;
    if (message.from === MessageFrom.FromCustomer) {
      return role === UserRole.Customer;
    } else {
      return role !== UserRole.Customer;
    }
  }

}
