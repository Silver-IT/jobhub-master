import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeaBoardViewComponent } from './idea-board-view.component';

describe('IdeaBoardViewComponent', () => {
  let component: IdeaBoardViewComponent;
  let fixture: ComponentFixture<IdeaBoardViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdeaBoardViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeaBoardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
