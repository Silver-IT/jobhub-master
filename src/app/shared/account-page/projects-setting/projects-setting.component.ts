import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ROUTES } from '../../../core/data/routes';

@Component({
  selector: 'job-hub-projects-setting',
  templateUrl: './projects-setting.component.html',
  styleUrls: ['./projects-setting.component.scss']
})
export class ProjectsSettingComponent implements OnInit {

  ROUTES = ROUTES;

  constructor(
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  navigateToProjectDetail(id: string) {
    this.router.navigate([ROUTES.app.root, ROUTES.app.project, id]);
  }

}
