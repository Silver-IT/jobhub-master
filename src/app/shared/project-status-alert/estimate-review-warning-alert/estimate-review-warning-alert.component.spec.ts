import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimateReviewWarningAlertComponent } from './estimate-review-warning-alert.component';

describe('EstimateReviewWarningAlertComponent', () => {
  let component: EstimateReviewWarningAlertComponent;
  let fixture: ComponentFixture<EstimateReviewWarningAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstimateReviewWarningAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstimateReviewWarningAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
