import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../core/services/auth.service';
import { ROUTES } from '../../core/data/routes';
import { ScrollPosition } from '../../core/data/scroll-pos';

@Component({
  selector: 'job-hub-client-layout',
  templateUrl: './client-layout.component.html',
  styleUrls: ['./client-layout.component.scss']
})
export class ClientLayoutComponent implements OnInit {

  user$ = this.authService.user$;
  ROUTES = ROUTES;
  ScrollPosition = ScrollPosition;
  menus = [
    {label: 'My Projects', route: ROUTES.app.myProjects},
    {label: 'Idea Board', route: ROUTES.app.ideaBoard},
  ];

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  closeNotificationDropdown() {

  }

}
