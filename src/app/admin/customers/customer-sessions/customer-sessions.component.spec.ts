import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSessionsComponent } from './customer-sessions.component';

describe('CustomerSessionsComponent', () => {
  let component: CustomerSessionsComponent;
  let fixture: ComponentFixture<CustomerSessionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerSessionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerSessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
