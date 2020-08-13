import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../../../core/models/project';
import { ROUTES } from '../../../core/data/routes';

@Component({
  selector: 'job-hub-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss']
})
export class ProjectItemComponent implements OnInit {

  @Input() project: Project;

  ROUTES = ROUTES;

  constructor() { }

  ngOnInit(): void {
  }

}
