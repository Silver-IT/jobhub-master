import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { PaymentService } from '../../../../core/services/payment.service';
import { ProjectDetailStateService } from '../../../../shared/project-detail-state/project-detail-state.service';
import { ToastrService } from '../../../../core/services/toastr.service';
import { Milestone, MilestoneType, EditMilestoneType } from '../../../../core/models/milestone';

@Component({
  selector: 'job-hub-edit-milestone-dialog',
  templateUrl: './edit-milestone-dialog.component.html',
  styleUrls: ['./edit-milestone-dialog.component.scss']
})
export class EditMilestoneDialogComponent implements OnInit {

  @ViewChild('editType') editType;

  isSaving = false;

  EditMilestoneType = EditMilestoneType;
  MilestoneType = MilestoneType;

  form: FormGroup = this.fb.group({
    amount: [this.milestone.amount, Validators.compose([Validators.required, Validators.min(1)])],
    comment: ['', Validators.required]
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) public milestone: Milestone,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditMilestoneDialogComponent>,
    private projectDetailStateService: ProjectDetailStateService,
    private paymentService: PaymentService,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    if (this.milestone.order === MilestoneType.Deposit) {
      this.form.get('comment').clearValidators();
    }
  }

  changeEditType() {
    const amountControl = this.form.controls.amount;
    const commentControl = this.form.controls.comment;
    if (this.editType.value === EditMilestoneType.CashPayment) {
      amountControl.setValue(this.milestone.amount);
      commentControl.setValue(this.milestone.comment);
    } else {
      amountControl.setValue('');
      commentControl.setValue('');
    }
  }

  async editMilestone() {
    const project = this.projectDetailStateService.project;
    const formValue = this.form.value;
    try {
      this.isSaving = true;
      let payload;
      if (this.milestone.order === MilestoneType.Deposit) {
        payload = await this.paymentService.requestEditDeposit(this.milestone.id, formValue.amount).toPromise();
      } else if (this.editType.value === EditMilestoneType.AddOn) {
        payload = await this.paymentService.requestAddAddOn(this.milestone.id, formValue.amount, formValue.comment).toPromise();
      } else if (this.editType.value === EditMilestoneType.CashPayment) {
        payload = await this.paymentService.requestEditCashPayment(project.id, formValue.amount, formValue.comment).toPromise();
      } else if (this.editType.value === EditMilestoneType.Refund) {
        payload = await this.paymentService.requestAddRefund(project.id, formValue.amount, formValue.comment).toPromise();
      } else if (this.editType.value === EditMilestoneType.Hold) {
        payload = await this.paymentService.requestMakeHold(project.id, formValue.amount, formValue.comment).toPromise();
      }
      this.dialogRef.close([this.editType?.value, payload]);
    } catch (e) {
      this.toastr.error(e, 'Failed to edit the milestone.');
    } finally {
      this.isSaving = false;
    }
  }
}
