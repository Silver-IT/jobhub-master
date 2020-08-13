import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentTermsDialogComponent } from './payment-terms-dialog.component';

describe('PaymentTermsDialogComponent', () => {
  let component: PaymentTermsDialogComponent;
  let fixture: ComponentFixture<PaymentTermsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentTermsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentTermsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
