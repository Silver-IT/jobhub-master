import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { filter } from 'rxjs/operators';

import { ROUTES } from '../../../core/data/routes';
import { ProjectDetailStateService } from '../../../shared/project-detail-state/project-detail-state.service';
import { ToastrService } from '../../../core/services/toastr.service';
import { PaymentService } from '../../../core/services/payment.service';
import { AlertService } from '../../../ui-kit/alert/alert.service';
import { EditMilestoneDialogComponent } from './edit-milestone-dialog/edit-milestone-dialog.component';
import {
  EditMilestoneType,
  Milestone,
  MilestoneShowMode,
  MilestoneStatus,
  MilestoneType
} from '../../../core/models/milestone';

@Component({
  selector: 'job-hub-project-management',
  templateUrl: './project-management.component.html',
  styleUrls: ['./project-management.component.scss']
})
export class ProjectManagementComponent implements OnInit, OnDestroy {

  isLoading = false;
  milestones = this.route.snapshot.data.milestones;
  project = this.projectDetailStateService.project;
  ROUTES = ROUTES;

  MilestoneType = MilestoneType;
  MilestoneShowMode = MilestoneShowMode;

  private unsubscribeAll$ = new Subject();

  constructor(
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private projectDetailStateService: ProjectDetailStateService,
    private toastr: ToastrService,
    private paymentService: PaymentService,
    private alert: AlertService,
  ) {
  }

  ngOnInit(): void {
  }

  async requestPayment(milestone) {
    try {
      this.isLoading = true;
      await this.paymentService.requestPayment(milestone.id).toPromise();
      milestone.status = MilestoneStatus.ReleaseRequested;
    } catch (e) {
      this.toastr.error(e, 'Failed to request release the milestone. Please try again.');
    } finally {
      this.isLoading = false;
    }
  }

  async requestReview() {
    try {
      this.isLoading = true;
      await this.paymentService.requestReview(this.project.id).toPromise();
      this.toastr.info('Notification is sent to the customer.');
    } catch (e) {
      this.toastr.error(e, 'Failed to request a review. Please try again.');
    } finally {
      this.isLoading = false;
    }
  }

  async confirmCashPayment(milestone: Milestone) {
    this.alert.yesNo('Payment', 'Are you sure to confirm the cash payment?')
      .pipe(filter(value => value))
      .subscribe(async () => {
        if (milestone.paidDate) {
          this.toastr.warning('The milestone is already paid.');
          return;
        }
        try {
          this.isLoading = true;
          const res = await this.paymentService.confirmCashPay(milestone.id).toPromise();
          this.replaceMilestone(res);
          this.milestones = [...this.milestones];
        } catch (e) {
          this.toastr.error(e, 'Failed to confirm the cash payment.');
        } finally {
          this.isLoading = false;
        }
      });
  }

  async removeHold(milestoneId: string) {
    this.alert.yesNo('Remove', 'Are you sure to remove the hold?')
      .pipe(filter(value => value))
      .subscribe(async () => {
        try {
          this.isLoading = true;
          this.milestones = await this.paymentService.requestRemoveHold(milestoneId).toPromise();
        } catch (e) {
          this.toastr.error(e, 'Failed to remove the hold.');
        } finally {
          this.isLoading = false;
        }
      });
  }

  async removeAddOn(addOnId: string) {
    this.alert.yesNo('Remove', 'Are you sure to remove the add on?')
      .pipe(filter(value => value))
      .subscribe(async () => {
        try {
          this.isLoading = true;
          this.milestones = await this.paymentService.requestRemoveAddOn(addOnId).toPromise();
        } catch (e) {
          this.toastr.error(e, 'Failed to remove the add on.');
        } finally {
          this.isLoading = false;
        }
      });
  }

  async removeRefund(refundId: string) {
    this.alert.yesNo('Remove', 'Are you sure to remove the refund?')
      .pipe(filter(value => value))
      .subscribe(async () => {
        try {
          this.isLoading = true;
          this.project.refund = null;
          this.milestones = await this.paymentService.requestRemoveRefund(refundId).toPromise();
        } catch (e) {
          this.toastr.error(e, 'Failed to remove the add on.');
        } finally {
          this.isLoading = false;
        }
      });
  }

  async editMilestone(milestone: Milestone) {
    const dialogRef = this.dialog.open(EditMilestoneDialogComponent, {
      width: '460px',
      closeOnNavigation: true,
      data: milestone
    });
    dialogRef.afterClosed().pipe(filter(data => data))
      .subscribe(data => {
        const [editType, payload] = data as any;
        if (!editType || editType === EditMilestoneType.AddOn || editType === EditMilestoneType.Hold) {
          this.milestones = payload;
        } else if (editType === EditMilestoneType.CashPayment) {
          this.replaceMilestone(payload);
          this.milestones = [...this.milestones];
        } else if (editType === EditMilestoneType.Refund) {
          const finalMilestone = this.milestones.find(m => m.order === MilestoneType.Final);
          finalMilestone.amount -= payload.amount;
          this.milestones = [...this.milestones];
          this.project.refund = payload;
        }
      });
  }

  ngOnDestroy(): void {
    this.unsubscribeAll$.next(null);
    this.unsubscribeAll$.complete();
  }

  private replaceMilestone(milestone: Milestone) {
    const i = this.milestones.findIndex(m => m.id === milestone.id);
    if (i !== -1) {
      this.milestones.splice(i, 1, milestone);
    } else if (milestone.order === MilestoneType.Hold) {
      const finalMilestone = this.milestones.find(m => m.order === MilestoneType.Final);
      finalMilestone.hold = milestone;
    }
  }
}
