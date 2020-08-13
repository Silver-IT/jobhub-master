import { Component, OnInit } from '@angular/core';

import { PaymentMethod } from '../../../../core/models/payment';
import { MatDialogRef } from '@angular/material/dialog';



@Component({
  selector: 'job-hub-select-payment-method-dialog',
  templateUrl: './select-payment-method-dialog.component.html',
  styleUrls: ['./select-payment-method-dialog.component.scss']
})
export class SelectPaymentMethodDialogComponent implements OnInit {

  PaymentMethod = PaymentMethod;

  constructor(
    private dialogRef: MatDialogRef<SelectPaymentMethodDialogComponent>,
  ) { }

  ngOnInit(): void {
  }

  gotoPayment(paymentMethod: PaymentMethod) {
    this.dialogRef.close(paymentMethod);
  }
}
