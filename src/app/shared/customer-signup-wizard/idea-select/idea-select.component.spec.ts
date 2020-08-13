import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeaSelectComponent } from './idea-select.component';

describe('IdeaSelectComponent', () => {
  let component: IdeaSelectComponent;
  let fixture: ComponentFixture<IdeaSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdeaSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeaSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
