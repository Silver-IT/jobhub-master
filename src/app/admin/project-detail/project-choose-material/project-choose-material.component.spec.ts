import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectChooseMaterialComponent } from './project-choose-material.component';

describe('ProjectChooseMaterialComponent', () => {
  let component: ProjectChooseMaterialComponent;
  let fixture: ComponentFixture<ProjectChooseMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectChooseMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectChooseMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
