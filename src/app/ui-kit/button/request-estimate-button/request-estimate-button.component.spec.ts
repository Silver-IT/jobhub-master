import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestEstimateButtonComponent } from './request-estimate-button.component';

describe('RequestEstimateButtonComponent', () => {
  let component: RequestEstimateButtonComponent;
  let fixture: ComponentFixture<RequestEstimateButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestEstimateButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestEstimateButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
