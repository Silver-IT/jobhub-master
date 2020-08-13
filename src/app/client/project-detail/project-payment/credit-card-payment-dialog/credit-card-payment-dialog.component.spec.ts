import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditCardPaymentDialogComponent } from './credit-card-payment-dialog.component';

describe('CreditCardPaymentDialogComponent', () => {
  let component: CreditCardPaymentDialogComponent;
  let fixture: ComponentFixture<CreditCardPaymentDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditCardPaymentDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditCardPaymentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
