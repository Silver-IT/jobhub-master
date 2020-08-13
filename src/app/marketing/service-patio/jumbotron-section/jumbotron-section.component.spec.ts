import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JumbotronSectionComponent } from './jumbotron-section.component';

describe('JumbotronSectionComponent', () => {
  let component: JumbotronSectionComponent;
  let fixture: ComponentFixture<JumbotronSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JumbotronSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JumbotronSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
