import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectOrderMaterialComponent } from './project-order-material.component';

describe('ProjectOrderMaterialComponent', () => {
  let component: ProjectOrderMaterialComponent;
  let fixture: ComponentFixture<ProjectOrderMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectOrderMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectOrderMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
