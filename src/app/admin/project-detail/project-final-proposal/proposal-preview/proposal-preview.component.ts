import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

import { ProjectDetailStateService } from '../../../../shared/project-detail-state/project-detail-state.service';
import { AdminLayoutService } from '../../../../layout/admin-layout/admin-layout.service';
import { ToastrService } from '../../../../core/services/toastr.service';
import { ProjectService } from '../../../../core/services/project.service';
import { PdfService } from '../../../../core/services/pdf.service';
import { ProjectStatus } from '../../../../core/models/project';
import { FinalProposalStatus } from '../../../../core/models/final-proposal';
import { InvitationStatus } from '../../../../core/models/auth';
import { PdfDocDefinition } from '../../../../core/models/pdf';

@Component({
  selector: 'job-hub-proposal-preview',
  templateUrl: './proposal-preview.component.html',
  styleUrls: ['./proposal-preview.component.scss']
})
export class ProposalPreviewComponent implements OnInit {

  @Output() edit: EventEmitter<any> = new EventEmitter<any>();

  finalProposal = this.projectDetailStateService.finalProposal;
  project = this.projectDetailStateService.project;
  FinalProposalStatus = FinalProposalStatus;
  InvitationStatus = InvitationStatus;
  form: FormGroup;
  isSaving = false;

  constructor(
    private projectDetailStateService: ProjectDetailStateService,
    private adminLayoutService: AdminLayoutService,
    private projectService: ProjectService,
    private toastr: ToastrService,
    private pdfService: PdfService,
  ) {
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
  }

  ngOnInit(): void {
    if (!this.finalProposal.id) {
      this.adminLayoutService.scrollTop(0);
    }
  }

  async downloadProposal() {
    try {
      this.isSaving = true;
      this.finalProposal.layouts.forEach(layout => {
        layout.attachments = layout.attachments ? layout.attachments : [];
      });
      this.finalProposal.attachments = this.finalProposal.attachments ? this.finalProposal.attachments : [];
      this.finalProposal.project = this.projectDetailStateService.project;
      const docDefinition: PdfDocDefinition = await this.pdfService.addProjectProposalDefinition(this.finalProposal);
      pdfMake.createPdf(docDefinition).download('Proposal.pdf');
    } catch (e) {
      this.toastr.error(e, 'Sorry, failed to download proposal. Please try again.');
    } finally {
      this.isSaving = false;
    }
  }

  async sendProposal() {
    try {
      this.isSaving = true;
      const projectId = this.project.id;
      this.finalProposal.layouts.forEach(layout => {
        layout.attachments = layout.attachments ? layout.attachments.map((url: any) => ({ url })) : [];
      });
      this.finalProposal.attachments = this.finalProposal.attachments ? this.finalProposal.attachments.map((url: any) => ({ url })) : [];
      if (this.finalProposal.status === FinalProposalStatus.Declined) {
        this.finalProposal.status = FinalProposalStatus.Pending;
      }
      const res = await this.projectService.submitFinalProposalByProjectId(projectId, this.finalProposal).toPromise();
      this.toastr.success(this.finalProposal.id ? 'Your proposal is updated successfully.' : 'Your proposal is successfully sent to client.');
      this.finalProposal = res;
      this.projectDetailStateService.setProject({
        ...this.projectDetailStateService.project,
        status: ProjectStatus.FinalProposalPending,
        finalProposal: res
      });
      this.projectDetailStateService.setFinalProposal(res);
    } catch (e) {
      this.toastr.error(e, 'Failed to send proposal.');
    } finally {
      this.isSaving = false;
    }
  }
}
