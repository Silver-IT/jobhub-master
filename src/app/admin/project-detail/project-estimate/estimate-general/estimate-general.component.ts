import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { ProjectDetailStateService } from '../../../../shared/project-detail-state/project-detail-state.service';
import { CommonService } from '../../../../core/services/common.service';
import { projectGeneralForm } from '../../../../core/data/form-labels';
import { ScrollPosition } from '../../../../core/data/scroll-pos';

@Component({
  selector: 'job-hub-estimate-general',
  templateUrl: './estimate-general.component.html',
  styleUrls: ['./estimate-general.component.scss']
})
export class EstimateGeneralComponent implements OnInit {

  @Output() next: EventEmitter<any> = new EventEmitter<any>();

  estimate = this.projectDetailStateService.estimate;
  project = this.projectDetailStateService.project;
  form: FormGroup;

  constructor(
    private projectDetailStateService: ProjectDetailStateService,
    private commonService: CommonService
  ) {
  }

  ngOnInit(): void {
  }

  submit() {
    if (this.form.invalid) {
      this.commonService.findInvalidField(this.form, projectGeneralForm, projectGeneralForm.prefix, ScrollPosition.AdminPanelContainer);
      return;
    }
    this.projectDetailStateService.setProject({...this.projectDetailStateService.project, estimate: {...this.estimate, ...this.form.value}});
    this.next.emit();
  }

  formChange($event) {
    this.form = $event;
    this.projectDetailStateService.setEstimate({...this.projectDetailStateService.estimate, ...this.form.value});
  }

}
