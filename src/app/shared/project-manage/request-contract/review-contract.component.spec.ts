import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewContractComponent } from './review-contract.component';

describe('RequestContractComponent', () => {
  let component: ReviewContractComponent;
  let fixture: ComponentFixture<ReviewContractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewContractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
