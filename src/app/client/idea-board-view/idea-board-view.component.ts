import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';

import { AvailableProjectAccessoryType, ProjectAccessoryType, projectOptions } from '../../core/models/project';
import { AuthService } from '../../core/services/auth.service';
import { enumToOptions } from '../../core/utils/enum.util';
import { ROUTES } from '../../core/data/routes';

@Component({
  selector: 'job-hub-idea-board-view',
  templateUrl: './idea-board-view.component.html',
  styleUrls: ['./idea-board-view.component.scss']
})
export class IdeaBoardViewComponent implements OnInit {

  user = this.authService.user;
  projectOptions = projectOptions;
  availableProjectAccessoryTypes = [{label: 'All', value: null}, ...enumToOptions<ProjectAccessoryType>(AvailableProjectAccessoryType)];
  filterForm: FormGroup = this.fb.group({
    projectType: null,
    materialType: ''
  });

  ROUTES = ROUTES;
  viewAll$: Subject<boolean> = new Subject<boolean>();
  viewAll = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  viewAllToggle() {
    this.filterForm.controls.projectType.setValue(null);
    this.viewAll = !this.viewAll;
    this.viewAll$.next(this.viewAll);
  }

}
