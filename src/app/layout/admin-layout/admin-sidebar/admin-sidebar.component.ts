import { Component, OnInit } from '@angular/core';

import { ROUTES } from '../../../core/data/routes';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'job-hub-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.scss']
})
export class AdminSidebarComponent implements OnInit {

  ROUTES = ROUTES;
  isCollapsed = true;
  user$ = this.authService.user$;

  menus = [
    {icon: 'dashboard', label: 'Dashboard', route: ROUTES.admin.dashboard},
    {icon: 'calendar', label: 'Schedule', route: ROUTES.admin.schedule},
    {icon: 'projects', label: 'Projects', route: ROUTES.admin.projects},
    {icon: 'leads', label: 'Leads', route: ROUTES.admin.leads},
    {icon: 'customers', label: 'Customers', route: ROUTES.admin.customers},
    {icon: 'ideaboard', label: 'Idea Board', route: ROUTES.admin.ideaBoard},
    {icon: 'network', label: 'Network', route: ROUTES.admin.network.root},
    {icon: 'hiring', label: 'Hiring', route: ROUTES.admin.hiring},
    {icon: 'marketing', label: 'Marketing', route: ROUTES.admin.marketing},
  ];

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  toggle() {
    this.isCollapsed = !this.isCollapsed;
  }

  logout() {
    this.authService.logout();
  }

}
