import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvUploaderComponent } from './cv-uploader.component';

describe('CvUploaderComponent', () => {
  let component: CvUploaderComponent;
  let fixture: ComponentFixture<CvUploaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvUploaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
