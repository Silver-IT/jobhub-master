import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeaAnonCardComponent } from './idea-anon-card.component';

describe('IdeaAnonCardComponent', () => {
  let component: IdeaAnonCardComponent;
  let fixture: ComponentFixture<IdeaAnonCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdeaAnonCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeaAnonCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
