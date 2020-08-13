import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ChatService } from '../services/chat.service';
import { Chat } from '../models/chat';
import { ToastrService } from '../services/toastr.service';

@Injectable({
  providedIn: 'root'
})
export class ChatsResolver implements Resolve<Chat[]> {

  constructor(
    private chatService: ChatService,
    private toastr: ToastrService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Chat[]> | Promise<Chat[]> | Chat[] {
    return this.chatService.getChats().pipe(
      catchError(e => {
        this.toastr.error(e, 'Sorry, failed to load messages on this chat. Please try again.');
        return throwError(e);
      })
    );
  }
}
