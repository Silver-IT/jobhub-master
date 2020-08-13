import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';

import { Milestone, MilestoneShowMode, MilestoneStatus, MilestoneType } from '../../../core/models/milestone';
import { SelectPaymentMethodDialogComponent } from './select-payment-method-dialog/select-payment-method-dialog.component';
import { PaymentMethod } from '../../../core/models/payment';
import { ROUTES } from '../../../core/data/routes';
import { CreditCardPaymentDialogComponent } from './credit-card-payment-dialog/credit-card-payment-dialog.component';
import { AuthService } from '../../../core/services/auth.service';
import { ProjectDetailStateService } from '../../../shared/project-detail-state/project-detail-state.service';
import { environment } from '../../../../environments/environment';
import { AlertService } from '../../../ui-kit/alert/alert.service';
import { PaymentService } from '../../../core/services/payment.service';
import { ToastrService } from '../../../core/services/toastr.service';
import { ProjectCompletedDialogComponent } from './project-completed-dialog/project-completed-dialog.component';
import { CustomerService } from '../../../core/services/customer.service';
import { PageName } from '../../../core/models/page-name';

declare const window;

@Component({
  selector: 'job-hub-payment',
  templateUrl: './project-payment.component.html',
  styleUrls: ['./project-payment.component.scss']
})
export class ProjectPaymentComponent implements OnInit, OnDestroy {

  milestones: Milestone[] = this.route.snapshot.data.milestones;
  project = this.projectDetailStateService.project;
  isSaving = false;
  ROUTES = ROUTES;
  currentMilestone: Milestone;
  plaidLinkHandler: any;

  MilestoneType = MilestoneType;
  MilestoneShowMode = MilestoneShowMode;

  private sessionId: string;
  private unsubscribeAll$ = new Subject<null>();

  constructor(
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private router: Router,
    private authService: AuthService,
    private projectDetailStateService: ProjectDetailStateService,
    private alert: AlertService,
    private toastr: ToastrService,
    private paymentService: PaymentService,
    private customerService: CustomerService
  ) {
  }

  async ngOnInit() {
    if (this.milestones && this.milestones[0]) {
      const firstMilestone: Milestone = this.milestones[0];
      if (!firstMilestone.paidDate && !firstMilestone.payWithCash) {
        this.makePayment(firstMilestone);
      }
    }
    this.plaidLinkHandler = window.Plaid.create({
      env: environment.production ? 'production' : 'sandbox',
      clientName: 'Stripe/Plaid',
      key: environment.plaid.publicKey,
      client_id: environment.plaid.clientId,
      product: ['auth'],
      selectAccount: true,
      onSuccess: async (publicToken, metadata) => {
        try {
          this.isSaving = true;
          const updated = await this.paymentService.payWithAch(this.currentMilestone.id, publicToken, metadata.account_id).toPromise();
          this.currentMilestone.paidDate = updated.paidDate;
          this.currentMilestone.amount = updated.amount;
          this.currentMilestone.status = MilestoneStatus.Released;
          if (this.currentMilestone.order === MilestoneType.Hold) {
            const finalMilestone = this.milestones.find(m => m.order === MilestoneType.Final);
            const iMilestone = this.milestones.findIndex(m => m.order === MilestoneType.Final);
            this.milestones = [...this.milestones.slice(0, iMilestone), { ...finalMilestone, hold: this.currentMilestone }, ...this.milestones.slice(iMilestone + 1)];
          }
          this.whenProjectCompleted();
        } catch (e) {
          this.toastr.error(e, 'ACH payment failed.');
        } finally {
          this.isSaving = false;
        }
      },
      onExit: (error) => {
        if (error === null) {
          this.makePayment(this.currentMilestone);
        }
      }
    });
    this.sessionId = await this.customerService.pageVisit(PageName.PaymentPage, this.project.id);
  }

  ngOnDestroy(): void {
    this.customerService.pageVisit(PageName.PaymentPage, this.project.id, this.sessionId);
    this.unsubscribeAll$.next(null);
    this.unsubscribeAll$.complete();
  }

  makePayment(milestone: Milestone) {
    const dialogRef = this.dialog.open(SelectPaymentMethodDialogComponent, {
      width: '760px',
      closeOnNavigation: true,
    });
    dialogRef.afterClosed().subscribe(paymentMethod => {
      switch (paymentMethod) {
        case PaymentMethod.Bank:
          this.showBankPaymentDialog(milestone);
          break;
        case PaymentMethod.CreditCard: {
          this.handleCreditCardPayment(milestone);
          break;
        }
        case PaymentMethod.Cash:
          this.processWithCashPayment(milestone);
          break;
      }
    });
  }

  showBankPaymentDialog(milestone?: Milestone) {
    this.plaidLinkHandler.open();
    this.currentMilestone = milestone;
  }

  handleCreditCardPayment(milestone: Milestone) {
    this.showCreditCardPaymentDialog(milestone);
  }

  showCreditCardPaymentDialog(milestone?: Milestone) {
    const dialogRef = this.dialog.open(CreditCardPaymentDialogComponent, {
      width: '440px',
      data: {
        milestone,
        creditCard: this.authService.user.creditCard || {cardName: '', cardNumber: '', yy: '', mm: '', cvv: ''},
        project: this.project
      },
      closeOnNavigation: true,
    });
    dialogRef.afterClosed().pipe().subscribe(milestones => {
      if (milestones) {
        this.milestones = milestones;
        this.whenProjectCompleted();
      } else {
        this.makePayment(milestone);
      }
    });
  }

  async processWithCashPayment(milestone: Milestone) {
    try {
      this.isSaving = true;
      const updated = await this.paymentService.requestCashPayment(milestone.id).toPromise();
      milestone.payWithCash = updated.payWithCash;
      this.alert.alert('Payment', 'The project consultant will get in contact with you to collect payment.');
    } catch (e) {
      this.toastr.error(e, 'Unable to request cash payment.');
    } finally {
      this.isSaving = false;
    }
  }

  review() {
    window.open(environment.googleReviewUrl, '_blank');
  }

  private whenProjectCompleted() {
    if (!this.milestones.find(x => x.status !== MilestoneStatus.Released)) {
      this.dialog.open(ProjectCompletedDialogComponent, {
        width: '440px'
      }).afterClosed().subscribe(value => {
        if (value) {
          this.review();
        }
      });
    }
  }
}
