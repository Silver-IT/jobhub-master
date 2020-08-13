import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimatePreviewComponent } from './estimate-preview.component';

describe('EstimatePreviewComponent', () => {
  let component: EstimatePreviewComponent;
  let fixture: ComponentFixture<EstimatePreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstimatePreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstimatePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
