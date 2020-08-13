import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalProposalReviewWarningAlertComponent } from './final-proposal-review-warning-alert.component';

describe('FinalProposalReviewWarningAlertComponent', () => {
  let component: FinalProposalReviewWarningAlertComponent;
  let fixture: ComponentFixture<FinalProposalReviewWarningAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalProposalReviewWarningAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalProposalReviewWarningAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
