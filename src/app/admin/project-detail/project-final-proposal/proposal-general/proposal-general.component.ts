import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FinalProposalStatus } from '../../../../core/models/final-proposal';
import { ProjectDetailStateService } from '../../../../shared/project-detail-state/project-detail-state.service';
import { CommonService } from '../../../../core/services/common.service';
import { projectGeneralForm } from '../../../../core/data/form-labels';
import { ScrollPosition } from '../../../../core/data/scroll-pos';
import { AdminLayoutService } from '../../../../layout/admin-layout/admin-layout.service';

@Component({
  selector: 'job-hub-proposal-general',
  templateUrl: './proposal-general.component.html',
  styleUrls: ['./proposal-general.component.scss']
})
export class ProposalGeneralComponent implements OnInit {

  @Output() next: EventEmitter<any> = new EventEmitter<any>();

  finalProposal = this.projectDetailStateService.finalProposal;
  project = this.projectDetailStateService.project;
  form: FormGroup;

  FinalProposalStatus = FinalProposalStatus;

  constructor(
    private projectDetailStateService: ProjectDetailStateService,
    private adminLayoutService: AdminLayoutService,
    private commonService: CommonService
  ) {
  }

  ngOnInit(): void {
    this.adminLayoutService.scrollTop(0);
  }

  preview() {
    if (this.form.invalid) {
      this.commonService.findInvalidField(this.form, projectGeneralForm, projectGeneralForm.prefix, ScrollPosition.AdminPanelContainer);
      return;
    }
    this.projectDetailStateService.setProject({
      ...this.projectDetailStateService.project,
      finalProposal: { ...this.finalProposal, ...this.form.value }
    });
    this.next.emit();
  }

  formChange($event) {
    this.form = $event;
    this.projectDetailStateService.setFinalProposal({ ...this.projectDetailStateService.finalProposal, ...this.form.value });
  }
}
