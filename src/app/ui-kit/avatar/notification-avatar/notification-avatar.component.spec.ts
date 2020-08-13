import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationAvatarComponent } from './notification-avatar.component';

describe('NotificationAvatarComponent', () => {
  let component: NotificationAvatarComponent;
  let fixture: ComponentFixture<NotificationAvatarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationAvatarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
