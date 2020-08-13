import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageIdeaBoardComponent } from './home-page-idea-board.component';

describe('HomePageIdeaBoardComponent', () => {
  let component: HomePageIdeaBoardComponent;
  let fixture: ComponentFixture<HomePageIdeaBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePageIdeaBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageIdeaBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
