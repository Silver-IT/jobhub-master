import { Component, OnInit } from '@angular/core';

import { AgreementDialogAction } from '../agreement-dialog';

@Component({
  selector: 'job-hub-payment-terms-dialog',
  templateUrl: './payment-terms-dialog.component.html',
  styleUrls: ['./payment-terms-dialog.component.scss']
})
export class PaymentTermsDialogComponent implements OnInit {

  AgreementDialogAction = AgreementDialogAction;

  constructor() { }

  ngOnInit(): void {
  }

}
