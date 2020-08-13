import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InlaysAndBordersComponent } from './inlays-and-borders.component';

describe('InlaysAndBordersComponent', () => {
  let component: InlaysAndBordersComponent;
  let fixture: ComponentFixture<InlaysAndBordersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InlaysAndBordersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InlaysAndBordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
