import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerMapPanelComponent } from './customer-map-panel.component';

describe('CustomerMapPanelComponent', () => {
  let component: CustomerMapPanelComponent;
  let fixture: ComponentFixture<CustomerMapPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerMapPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerMapPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
