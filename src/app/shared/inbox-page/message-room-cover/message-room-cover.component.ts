import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../../core/services/chat.service';

@Component({
  selector: 'job-hub-message-room-cover',
  templateUrl: './message-room-cover.component.html',
  styleUrls: ['./message-room-cover.component.scss']
})
export class MessageRoomCoverComponent implements OnInit {

  chats$ = this.chatService.chats$;

  constructor(
    private chatService: ChatService,
  ) { }

  ngOnInit(): void {
  }

}
