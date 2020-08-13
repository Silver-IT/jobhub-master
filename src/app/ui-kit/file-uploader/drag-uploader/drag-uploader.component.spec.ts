import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragUploaderComponent } from './drag-uploader.component';

describe('DragUploaderComponent', () => {
  let component: DragUploaderComponent;
  let fixture: ComponentFixture<DragUploaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragUploaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
