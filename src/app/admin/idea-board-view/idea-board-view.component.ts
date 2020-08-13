import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { AvailableProjectAccessoryType, ProjectAccessoryType } from '../../core/models/project';
import { IdeaService } from '../../ui-kit/idea-board/idea.service';
import { enumToOptions } from '../../core/utils/enum.util';

@Component({
  selector: 'job-hub-idea-board-view',
  templateUrl: './idea-board-view.component.html',
  styleUrls: ['./idea-board-view.component.scss']
})
export class IdeaBoardViewComponent implements OnInit {

  availableProjectAccessoryTypes = [{label: 'All', value: null}, ...enumToOptions<ProjectAccessoryType>(AvailableProjectAccessoryType)];
  filterForm: FormGroup = this.fb.group({
    projectType: null,
    materialType: ''
  });

  constructor(
    private fb: FormBuilder,
    private ideaService: IdeaService
  ) { }

  ngOnInit(): void {
  }

  upload() {
    this.ideaService.upload();
  }

}
