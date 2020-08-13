import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitationButtonComponent } from './invitation-button.component';

describe('InvitationButtonComponent', () => {
  let component: InvitationButtonComponent;
  let fixture: ComponentFixture<InvitationButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvitationButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitationButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
