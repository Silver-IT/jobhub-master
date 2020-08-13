import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsSettingComponent } from './projects-setting.component';

describe('ProjectsSettingComponent', () => {
  let component: ProjectsSettingComponent;
  let fixture: ComponentFixture<ProjectsSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
