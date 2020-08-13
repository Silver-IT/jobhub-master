import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerRegisterDialogComponent } from './customer-register-dialog.component';

describe('CustomerRegisterDialogComponent', () => {
  let component: CustomerRegisterDialogComponent;
  let fixture: ComponentFixture<CustomerRegisterDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerRegisterDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerRegisterDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
