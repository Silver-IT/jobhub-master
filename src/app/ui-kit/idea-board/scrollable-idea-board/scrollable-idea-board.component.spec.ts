import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollableIdeaBoardComponent } from './scrollable-idea-board.component';

describe('ScrollableIdeaBoardComponent', () => {
  let component: ScrollableIdeaBoardComponent;
  let fixture: ComponentFixture<ScrollableIdeaBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollableIdeaBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollableIdeaBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
