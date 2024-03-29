import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerContractsComponent } from './customer-contracts.component';

describe('CustomerContractsComponent', () => {
  let component: CustomerContractsComponent;
  let fixture: ComponentFixture<CustomerContractsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerContractsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerContractsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
