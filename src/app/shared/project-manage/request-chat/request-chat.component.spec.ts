import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestChatComponent } from './request-chat.component';

describe('RequestChatComponent', () => {
  let component: RequestChatComponent;
  let fixture: ComponentFixture<RequestChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
