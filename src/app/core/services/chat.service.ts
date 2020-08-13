import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { Chat, Message, SendMessagePayload } from '../models/chat';
import { SuccessResponse } from '../models/success-response';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  currentChatId: string;
  chats: Chat[] = [];
  chats$: BehaviorSubject<Chat[]> = new BehaviorSubject<Chat[]>(this.chats);
  totalUnreadChanged$: Subject<any> = new Subject<any>();

  constructor(
    private http: HttpClient
  ) { }

  initChat(projectId: string): Observable<Chat> {
    const url = `${environment.api}/chat/init/${projectId}`;
    return this.http.post<Chat>(url, null);
  }

  getChats(): Observable<Chat[]> {
    const url = `${environment.api}/chat/all`;
    return this.http.get<Chat[]>(url);
  }

  getChatById(id: string): Observable<Chat> {
    const url = `${environment.api}/chat/${id}`;
    return this.http.get<Chat>(url);
  }

  getMessages(id: string): Observable<Message[]> {
    const url = `${environment.api}/chat/${id}/messages`;
    return this.http.get<Message[]>(url);
  }

  sendMessage(id: string, payload: SendMessagePayload): Observable<Message> {
    const url = `${environment.api}/chat/${id}/message`;
    return this.http.post<Message>(url, payload);
  }

  readAllMessages(id: string): Observable<SuccessResponse> {
    const until = new Date().getTime();
    const url = `${environment.api}/chat/${id}/read/${until}`;
    return this.http.post<SuccessResponse>(url, null);
  }

  readMessageById(id: string): Observable<SuccessResponse> {
    const url = `${environment.api}/chat/message/${id}/read`;
    return this.http.post<SuccessResponse>(url, null);
  }

  totalUnreadCount(): Observable<number> {
    const url = `${environment.api}/chat/unread`;
    return this.http.get(url).pipe(map((res: any) => res.total));
  }

  setChats(chats?: Chat[]) {
    this.chats = chats || this.chats;
    this.chats$.next(this.chats);
  }
}
