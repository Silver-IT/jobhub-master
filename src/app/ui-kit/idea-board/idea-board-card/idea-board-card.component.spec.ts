import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeaBoardCardComponent } from './idea-board-card.component';

describe('IdeaBoardCardComponent', () => {
  let component: IdeaBoardCardComponent;
  let fixture: ComponentFixture<IdeaBoardCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdeaBoardCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeaBoardCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
