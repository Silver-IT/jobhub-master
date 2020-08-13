import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InboxMenuComponent } from './inbox-menu.component';

describe('InboxMenuComponent', () => {
  let component: InboxMenuComponent;
  let fixture: ComponentFixture<InboxMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InboxMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InboxMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
