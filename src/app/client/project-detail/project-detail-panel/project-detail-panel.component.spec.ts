import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDetailPanelComponent } from './project-detail-panel.component';

describe('ProjectDetailPanelComponent', () => {
  let component: ProjectDetailPanelComponent;
  let fixture: ComponentFixture<ProjectDetailPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectDetailPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectDetailPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
