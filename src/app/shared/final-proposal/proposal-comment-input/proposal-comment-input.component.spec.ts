import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposalCommentInputComponent } from './proposal-comment-input.component';

describe('ProposalCommentInputComponent', () => {
  let component: ProposalCommentInputComponent;
  let fixture: ComponentFixture<ProposalCommentInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProposalCommentInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProposalCommentInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
