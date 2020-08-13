import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalNotificationComponent } from './global-notification.component';

describe('GlobalNotificationComponent', () => {
  let component: GlobalNotificationComponent;
  let fixture: ComponentFixture<GlobalNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
