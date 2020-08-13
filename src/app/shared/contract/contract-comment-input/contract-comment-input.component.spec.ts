import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractCommentInputComponent } from './contract-comment-input.component';

describe('ContractCommentInputComponent', () => {
  let component: ContractCommentInputComponent;
  let fixture: ComponentFixture<ContractCommentInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractCommentInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractCommentInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
