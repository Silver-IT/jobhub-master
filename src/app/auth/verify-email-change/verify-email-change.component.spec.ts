import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyEmailChangeComponent } from './verify-email-change.component';

describe('VerifyEmailChangeComponent', () => {
  let component: VerifyEmailChangeComponent;
  let fixture: ComponentFixture<VerifyEmailChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyEmailChangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyEmailChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
