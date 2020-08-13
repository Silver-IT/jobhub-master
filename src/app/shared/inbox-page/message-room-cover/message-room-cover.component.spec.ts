import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageRoomCoverComponent } from './message-room-cover.component';

describe('MessageRoomCoverComponent', () => {
  let component: MessageRoomCoverComponent;
  let fixture: ComponentFixture<MessageRoomCoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageRoomCoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageRoomCoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
