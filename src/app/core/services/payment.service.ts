import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { StripePaymentIntent } from '../models/payment';
import { environment } from '../../../environments/environment';
import { Refund } from '../models/project';
import { Milestone } from '../models/milestone';
import { SuccessResponse } from '../models/success-response';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(
    private http: HttpClient,
  ) {
  }

  payWithCard(milestoneId: string): Observable<StripePaymentIntent> {
    const url = `${environment.api}/payment/pay-with-card`;
    return this.http.post<StripePaymentIntent>(url, { milestoneId });
  }

  payWithAch(milestoneId: string, plaidPublicToken: string, plaidAccountId: string): Observable<Milestone> {
    const url = `${environment.api}/payment/pay-with-ach`;
    return this.http.post<Milestone>(url, { milestoneId, plaidPublicToken, plaidAccountId });
  }

  confirmCashPay(milestoneId: string): Observable<Milestone> {
    const url = `${environment.api}/payment/${milestoneId}/confirm-cash-pay`;
    return this.http.post<Milestone>(url, null);
  }

  verifyPayment(milestoneId: string): Observable<Milestone[]> {
    const url = `${environment.api}/payment/verify`;
    return this.http.post<Milestone[]>(url, { milestoneId });
  }

  requestPayment(milestoneId: string): Observable<Milestone> {
    const url = `${environment.api}/payment/${milestoneId}/request-release`;
    return this.http.post<Milestone>(url, null);
  }

  requestReview(projectId: string): Observable<SuccessResponse> {
    const url = `${environment.api}/project/${projectId}/request-review`;
    return this.http.get<SuccessResponse>(url, {});
  }

  requestCashPayment(milestoneId: string): Observable<Milestone> {
    const url = `${environment.api}/payment/${milestoneId}/request-cash-pay`;
    return this.http.post<Milestone>(url, null);
  }

  requestEditCashPayment(projectId: string, amount: number, comment: string): Observable<Milestone> {
    const url = `${environment.api}/payment/${projectId}/edit-cash-payment`;
    return this.http.post<Milestone>(url, { amount, comment });
  }

  requestAddAddOn(milestoneId: string, amount: number, comment: string): Observable<Milestone[]> {
    const url = `${environment.api}/payment/${milestoneId}/add-on`;
    return this.http.post<Milestone[]>(url, { amount, comment });
  }

  requestEditDeposit(milestoneId: string, amount: number): Observable<Milestone> {
    const url = `${environment.api}/payment/${milestoneId}/edit-amount`;
    return this.http.post<Milestone>(url, { amount });
  }

  requestAddRefund(projectId: string, amount: number, comment: string): Observable<Refund> {
    const url = `${environment.api}/payment/${projectId}/add-refund`;
    return this.http.post<Refund>(url, { amount, comment });
  }

  requestMakeHold(projectId: string, amount: number, comment: string): Observable<Milestone[]> {
    const url = `${environment.api}/payment/${projectId}/make-hold`;
    return this.http.post<Milestone[]>(url, { amount, comment });
  }

  requestRemoveAddOn(addOnId: string): Observable<Milestone[]> {
    const url = `${environment.api}/payment/add-on/${addOnId}`;
    return this.http.delete<Milestone[]>(url);
  }

  requestRemoveHold(milestoneId: string): Observable<Milestone[]> {
    const url = `${environment.api}/payment/hold/${milestoneId}`;
    return this.http.delete<Milestone[]>(url);
  }

  requestRemoveRefund(refundId: string): Observable<Milestone[]> {
    const url = `${environment.api}/payment/refund/${refundId}`;
    return this.http.delete<Milestone[]>(url);
  }
}
