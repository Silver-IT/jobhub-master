import { Component, Input, OnInit } from '@angular/core';

import { User } from '../../../core/models/auth';
import { ROUTES } from '../../../core/data/routes';
import { Project } from '../../../core/models/project';

@Component({
  selector: 'job-hub-request-chat',
  templateUrl: './request-chat.component.html',
  styleUrls: ['./request-chat.component.scss']
})
export class RequestChatComponent implements OnInit {

  @Input() user: User;
  @Input() project: Project;
  @Input() allowViewProfile = false;
  @Input() readonly = false;
  @Input() userRole: string;

  ROUTES = ROUTES;

  constructor(
  ) { }

  ngOnInit(): void {
  }

}
