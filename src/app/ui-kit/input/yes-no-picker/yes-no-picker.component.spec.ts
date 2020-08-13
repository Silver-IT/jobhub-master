import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YesNoPickerComponent } from './yes-no-picker.component';

describe('YesNoPickerComponent', () => {
  let component: YesNoPickerComponent;
  let fixture: ComponentFixture<YesNoPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YesNoPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YesNoPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
