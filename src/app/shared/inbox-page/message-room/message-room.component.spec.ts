import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageRoomComponent } from './message-room.component';

describe('MessageRoomComponent', () => {
  let component: MessageRoomComponent;
  let fixture: ComponentFixture<MessageRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
