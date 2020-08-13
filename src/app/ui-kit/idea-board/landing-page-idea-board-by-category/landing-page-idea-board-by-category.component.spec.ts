import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageIdeaBoardByCategoryComponent } from './landing-page-idea-board-by-category.component';

describe('LandingPageIdeaBoardByCategoryComponent', () => {
  let component: LandingPageIdeaBoardByCategoryComponent;
  let fixture: ComponentFixture<LandingPageIdeaBoardByCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingPageIdeaBoardByCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageIdeaBoardByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
