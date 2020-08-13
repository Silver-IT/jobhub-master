import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeaBoardComponent } from './idea-board.component';

describe('IdeaBoardComponent', () => {
  let component: IdeaBoardComponent;
  let fixture: ComponentFixture<IdeaBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdeaBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeaBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
