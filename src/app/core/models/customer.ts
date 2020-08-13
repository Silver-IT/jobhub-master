import { Project } from './project';
import { User } from './auth';
import { Entity } from './base';
import { PageName } from './page-name';

export interface InviteCustomerPayload {
  projects: Project[];
  user: User;
}

export interface CustomerPageVisitHistory extends Entity {
  page: PageName;
  project: Project;
}
