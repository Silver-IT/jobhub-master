import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeaUploadDialogComponent } from './idea-upload-dialog.component';

describe('IdeaUploadDialogComponent', () => {
  let component: IdeaUploadDialogComponent;
  let fixture: ComponentFixture<IdeaUploadDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdeaUploadDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeaUploadDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
