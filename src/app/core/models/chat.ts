import { User } from './auth';
import { ProjectAccessoryType } from './project';

export enum MessageFrom {
  FromContractor = 'FROM_CONTRACTOR',
  FromCustomer = 'FROM_CUSTOMER',
}

export interface Chat {
  id: string;
  project: {
    id: string;
    name: string;
    projectType: ProjectAccessoryType;
  };
  customer: User;
  contractor: User;
  unread?: number;
}

export interface Message {
  id: string;
  chatId: string;
  text: string;
  from: MessageFrom;
  attachments?: string[];
  readAt: string;
  createdAt: string;
}

export interface SendMessagePayload {
  message: string;
  attachments?: string[];
}
