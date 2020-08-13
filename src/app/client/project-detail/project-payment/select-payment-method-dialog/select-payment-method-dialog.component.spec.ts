import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectPaymentMethodDialogComponent } from './select-payment-method-dialog.component';

describe('SelectPaymentMethodDialogComponent', () => {
  let component: SelectPaymentMethodDialogComponent;
  let fixture: ComponentFixture<SelectPaymentMethodDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectPaymentMethodDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectPaymentMethodDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
