import { Component, Input, OnInit } from '@angular/core';

import { Message } from '../../../core/models/chat';
import { AuthService } from '../../../core/services/auth.service';
import { User } from '../../../core/models/auth';

@Component({
  selector: 'job-hub-chat-bubble',
  templateUrl: './chat-bubble.component.html',
  styleUrls: ['./chat-bubble.component.scss']
})
export class ChatBubbleComponent implements OnInit {

  @Input() user: User;
  @Input() message: Message;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

}
