import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticIdeaBoardComponent } from './static-idea-board.component';

describe('StaticIdeaBoardComponent', () => {
  let component: StaticIdeaBoardComponent;
  let fixture: ComponentFixture<StaticIdeaBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaticIdeaBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticIdeaBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
