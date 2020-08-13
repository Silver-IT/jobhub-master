import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProjectDetail } from '../../../core/models/project';
import { ROUTES } from '../../../core/data/routes';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'job-hub-pending-project',
  templateUrl: './pending-project.component.html',
  styleUrls: ['./pending-project.component.scss']
})
export class PendingProjectComponent implements OnInit {

  @Input() project: ProjectDetail;

  ROUTES = ROUTES;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  navigateToProject() {
    this.router.navigate([ROUTES.admin.root, ROUTES.admin.projects, this.project.id, ROUTES.admin.project.brief]);
  }
}
