import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Element as StripeElement, Elements, StripeService } from 'ngx-stripe';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { Milestone } from '../../../../core/models/milestone';
import { AuthService } from '../../../../core/services/auth.service';
import { PaymentService } from '../../../../core/services/payment.service';
import { stripeElementStyles } from '../../../../core/data/consts';
import { ToastrService } from '../../../../core/services/toastr.service';

@Component({
  selector: 'job-hub-credit-card-payment-dialog',
  templateUrl: './credit-card-payment-dialog.component.html',
  styleUrls: ['./credit-card-payment-dialog.component.scss']
})
export class CreditCardPaymentDialogComponent implements OnInit {

  isSaving = false;
  saveCardInfo = true;
  amount = 0;

  elements: Elements;
  cardNumber: StripeElement;
  cardExpiry: StripeElement;
  cardCvc: StripeElement;

  form: FormGroup = this.fb.group({
    cardName: [this.data.creditCard.cardName || '', Validators.required],
  });

  milestone: Milestone;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<CreditCardPaymentDialogComponent>,
    private authService: AuthService,
    private paymentService: PaymentService,
    private stripeService: StripeService,
    private toastr: ToastrService
  ) {
    this.milestone = data.milestone;
    this.amount = this.milestone.amount;
    this.amount = this.milestone.paymentAddOns.reduce((sum, addOn) => sum + addOn.amount, this.amount);
  }

  ngOnInit(): void {
    this.stripeService.elements()
      .subscribe(elements => {
        if (!this.elements) {
          this.elements = elements;
          this.cardNumber = elements.create('cardNumber', {style: stripeElementStyles});
          this.cardNumber.mount('#cardNumber');
          this.cardExpiry = elements.create('cardExpiry', {style: stripeElementStyles});
          this.cardExpiry.mount('#cardExpiry');
          this.cardCvc = elements.create('cardCvc', {style: stripeElementStyles});
          this.cardCvc.mount('#cardCvc');
          const user = this.authService.user;
          if (user.creditCard) {
            // TODO: fill in card information with profile data
          }
        }
      });
  }

  async makePayment() {
    try {
      this.isSaving = true;
      const saveCard = {} as any;

      if (this.saveCardInfo) {
        saveCard.setup_future_usage = 'off_session';
      }
      const result = await this.paymentService.payWithCard(this.milestone.id).toPromise();
      const stripe = this.stripeService.getInstance() as any;
      const stripeResult = await stripe.confirmCardPayment(result.clientSecret, {
        payment_method: {
          card: this.cardNumber,
          billing_details: {
            name: this.form.value.cardName
          },
        },
        ...saveCard
      });

      if (stripeResult.error) {
        this.toastr.error(stripeResult.error, 'You have insufficient funds.');
        console.log(stripeResult.error);
      } else {
        if (stripeResult.paymentIntent.status === 'succeeded') {
          const milestones = await this.paymentService.verifyPayment(this.milestone.id).toPromise();
          this.toastr.success('Payment successful.');
          this.dialogRef.close(milestones);
        } else {
          // TODO: add another handlers
        }
      }
    } catch (e) {
      this.toastr.error(e.error, 'Error in payment.');
      this.dialogRef.close();
    } finally {
      this.isSaving = false;
    }
  }
}
