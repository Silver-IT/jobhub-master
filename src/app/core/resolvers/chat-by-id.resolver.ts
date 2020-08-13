import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Chat } from '../models/chat';
import { ChatService } from '../services/chat.service';
import { ToastrService } from '../services/toastr.service';

@Injectable({
  providedIn: 'root'
})
export class ChatByIdResolver implements Resolve<Chat> {

  constructor(
    private chatService: ChatService,
    private toastr: ToastrService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Chat> | Promise<Chat> | Chat {
    return this.chatService.getChatById(route.params.id).pipe(
      catchError(e => {
        this.toastr.error(e, 'Sorry, chat room is not valid. Please try different one.');
        return throwError(e);
      })
    );
  }
}
