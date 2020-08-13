import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { format } from 'date-fns';

import { Chat, Message, SendMessagePayload } from '../../../core/models/chat';
import { ChatService } from '../../../core/services/chat.service';
import { SocketService } from '../../../core/services/socket.service';
import { IsMinePipe } from '../../../ui-kit/pipes/is-mine.pipe';
import { AuthService } from '../../../core/services/auth.service';
import { groupByArray } from '../../../core/utils/array.util';

@Component({
  selector: 'job-hub-message-room',
  templateUrl: './message-room.component.html',
  styleUrls: ['./message-room.component.scss']
})
export class MessageRoomComponent implements OnInit, OnDestroy {

  @ViewChild('messageArea') messageArea: ElementRef;

  chatId: string;
  chat$: Observable<Chat> = this.route.data.pipe(map(data => data.chat));
  isLoading = false;
  messages = [];
  messagesGroupedByDate = [];

  private unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(
    private route: ActivatedRoute,
    private chatService: ChatService,
    private authService: AuthService,
    private socketService: SocketService,
    private isMinePipe: IsMinePipe
  ) { }

  ngOnInit(): void {
    this.subscribeMessages();
    this.route.params.pipe(
      map(params => params.id)
    ).pipe(
      takeUntil(this.unsubscribeAll)
    ).subscribe(id => {
      this.chatId = id;
      this.chatService.currentChatId = this.chatId;
      this.messages = [];
      this.loadMessages(id);
    });
  }

  ngOnDestroy(): void {
    this.chatService.currentChatId = null;
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }

  async send(message: string) {
    try {
      const payload: SendMessagePayload = { message };
      await this.chatService.sendMessage(this.chatId, payload).toPromise();
      this.scrollToBottom();
    } catch (e) {
      console.log(e);
    } finally {

    }
  }

  async loadMessages(id: string) {
    try {
      this.isLoading = true;
      const res = await this.chatService.getMessages(id).toPromise();
      this.messages = this.messages.concat(res.reverse());
      this.groupMessagesByDate();
      this.scrollToBottom();
      setTimeout(() => {
        // wait for 1 second and mark all messages as read
        this.readAllMessages();
      }, 1000);
    } catch (e) {
      console.log(e);
    } finally {
      this.isLoading = false;
    }
  }

  private scrollToBottom() {
    setTimeout(() => {
      this.messageArea.nativeElement.scrollTop = this.messageArea.nativeElement.scrollHeight;
    }, 10);
  }

  private subscribeMessages() {
    this.socketService.subscribeMessages().pipe(
      takeUntil(this.unsubscribeAll)
    ).subscribe((message: Message) => {
      if (message.chatId === this.chatId) {
        this.messages = this.messages.concat(message);
        this.groupMessagesByDate();
        this.scrollToBottom();
        if (!this.isMinePipe.transform(message)) {
          // mark arrived message as read
          this.readMessage(message.id);
        }
      }
    });
  }

  private async readMessage(id: string) {
    try {
      await this.chatService.readMessageById(id).toPromise();
    } catch (e) {
      console.log('Silent error while reading message', e);
    }
  }

  private async readAllMessages() {
    try {
      await this.chatService.readAllMessages(this.chatId).toPromise();
      const found = this.chatService.chats.find(x => x.id === this.chatId);
      found.unread = 0;
      this.chatService.setChats();
      this.chatService.totalUnreadChanged$.next(true);
    } catch (e) {
      console.log('Silent error while reading messages.', e);
    }
  }

  private groupMessagesByDate() {
    this.messages.forEach(x => {
      x.date = format(new Date(x.createdAt), 'yyyy-MM-dd 00:00');
    });
    const sorted = groupByArray(this.messages, 'date');
    this.messagesGroupedByDate = Object.keys(sorted).map(date => ({date, messages: sorted[date]}));
  }

}
