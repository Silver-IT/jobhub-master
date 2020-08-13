import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectDetailStateService } from '../../../shared/project-detail-state/project-detail-state.service';
import { ContractComponent } from '../../../shared/contract/contract.component';
import { ProjectDetail } from '../../../core/models/project';
import { ToastrService } from '../../../core/services/toastr.service';
import { FinalProposal } from '../../../core/models/final-proposal';

@Component({
  selector: 'job-hub-project-contract',
  templateUrl: './project-contract.component.html',
  styleUrls: ['./project-contract.component.scss']
})
export class ProjectContractComponent implements OnInit {

  @ViewChild(ContractComponent) contractCompRef: ContractComponent;

  isEditing = true;
  isSaving = false;
  project: ProjectDetail;
  finalProposal: FinalProposal;

  constructor(
    private route: ActivatedRoute,
    private projectDetailStateService: ProjectDetailStateService,
    private toastr: ToastrService,
  ) {
  }

  ngOnInit(): void {
    this.project = this.projectDetailStateService.project;
    this.finalProposal = this.projectDetailStateService.finalProposal;
  }

  print() {
    // TODO: add print functionality
    this.toastr.info('Your request submitted successfully!');
  }

}
