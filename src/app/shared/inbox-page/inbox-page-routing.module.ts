import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatsResolver } from '../../core/resolvers/chats.resolver';
import { ChatByIdResolver } from '../../core/resolvers/chat-by-id.resolver';

import { InboxPageComponent } from './inbox-page.component';
import { MessageRoomComponent } from './message-room/message-room.component';
import { MessageRoomCoverComponent } from './message-room-cover/message-room-cover.component';

const routes: Routes = [
  {
    path: '', component: InboxPageComponent,
    resolve: { chats: ChatsResolver },
    children: [
      {
        path: '', redirectTo: 'cover', pathMatch: 'full'
      },
      {
        path: 'cover', component: MessageRoomCoverComponent
      },
      {
        path: ':id',
        component: MessageRoomComponent,
        resolve: { chat: ChatByIdResolver }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InboxPageRoutingModule { }
