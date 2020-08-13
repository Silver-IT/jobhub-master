import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeaBoardPageComponent } from './idea-board-page.component';

describe('IdeaBoardComponent', () => {
  let component: IdeaBoardPageComponent;
  let fixture: ComponentFixture<IdeaBoardPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdeaBoardPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeaBoardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
