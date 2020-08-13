import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AvatarModule } from '../../ui-kit/avatar/avatar.module';
import { InputModule } from '../../ui-kit/input/input.module';
import { PipesModule } from '../../ui-kit/pipes/pipes.module';
import { IsMinePipe } from '../../ui-kit/pipes/is-mine.pipe';

import { InboxPageRoutingModule } from './inbox-page-routing.module';
import { InboxPageComponent } from './inbox-page.component';
import { MessageRoomComponent } from './message-room/message-room.component';
import { MessageRoomCoverComponent } from './message-room-cover/message-room-cover.component';
import { ChatInputComponent } from './chat-input/chat-input.component';
import { ChatBubbleComponent } from './chat-bubble/chat-bubble.component';

import { OpponentPipe } from './pipes/opponent.pipe';
import { MessageFromPipe } from './pipes/message-from.pipe';
import { FilterRoomsPipe } from './pipes/filter-rooms.pipe';
import { CheckMultilinePipe } from './pipes/check-multiline.pipe';

@NgModule({
  declarations: [
    InboxPageComponent,
    MessageRoomComponent,
    MessageRoomCoverComponent,
    ChatInputComponent,
    ChatBubbleComponent,
    OpponentPipe,
    MessageFromPipe,
    FilterRoomsPipe,
    CheckMultilinePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InboxPageRoutingModule,
    AvatarModule,
    InputModule,
    PipesModule,
  ],
  providers: [
    IsMinePipe,
  ]
})
export class InboxPageModule { }
