import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { AgreementDialogAction } from './agreement-dialog';
import { AgreementDialogComponent } from './agreement-dialog/agreement-dialog.component';
import { PaymentTermsDialogComponent } from './payment-terms-dialog/payment-terms-dialog.component';

@Injectable()
export class AgreementService {

  constructor(
    private dialog: MatDialog
  ) { }

  openAgreeDialog() {
    return this.openAgreementDialog().pipe(
      switchMap((agreementRes: AgreementDialogAction) => {
        if (agreementRes === AgreementDialogAction.OpenTerms) {
          return this.openPaymentTermsDialog().pipe(
            switchMap((paymentRes: AgreementDialogAction) => {
              if (paymentRes === AgreementDialogAction.Agreed) {
                return of(paymentRes);
              } else {
                return this.openAgreeDialog();
              }
            })
          );
        } else if (agreementRes === AgreementDialogAction.Agreed) {
          return of(agreementRes);
        } else {
          return of(agreementRes);
        }
      })
    );
  }

  private openAgreementDialog(): Observable<any> {
    return this.dialog.open(AgreementDialogComponent, {
      width: '570px',
      closeOnNavigation: true,
      disableClose: true
    }).afterClosed();
  }

  private openPaymentTermsDialog(): Observable<any> {
    return this.dialog.open(PaymentTermsDialogComponent, {
      width: '770px',
      closeOnNavigation: true,
      disableClose: true
    }).afterClosed();
  }
}
