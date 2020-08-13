import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { ROUTES } from '../../../core/data/routes';
import { ChatService } from '../../../core/services/chat.service';
import { SocketService } from '../../../core/services/socket.service';
import { Message } from '../../../core/models/chat';
import { IsMinePipe } from '../../../ui-kit/pipes/is-mine.pipe';

@Component({
  selector: 'job-hub-inbox-menu',
  templateUrl: './inbox-menu.component.html',
  styleUrls: ['./inbox-menu.component.scss'],
  providers: [IsMinePipe]
})
export class InboxMenuComponent implements OnInit, OnDestroy {

  total = 0;
  ROUTES = ROUTES;

  private unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(
    private chatService: ChatService,
    private socketService: SocketService,
    private isMinePipe: IsMinePipe
  ) { }

  ngOnInit(): void {
    this.subscribeMessages();
    this.chatService.totalUnreadChanged$.asObservable().pipe(
      takeUntil(this.unsubscribeAll)
    ).subscribe(() => {
      this.loadUnreadMessages();
    });
    this.loadUnreadMessages();
  }

  ngOnDestroy(): void {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }

  private async subscribeMessages() {
    this.socketService.subscribeMessages().pipe(
      takeUntil(this.unsubscribeAll)
    ).subscribe(
      (message: Message) => {
        if (!this.isMinePipe.transform(message)) {
          if (message.chatId !== this.chatService.currentChatId) {
            this.total += 1;
          }
        }
      }
    );
  }

  private async loadUnreadMessages() {
    try {
      this.total = await this.chatService.totalUnreadCount().toPromise();
    } catch (e) {
      console.log(e);
    }
  }
}
