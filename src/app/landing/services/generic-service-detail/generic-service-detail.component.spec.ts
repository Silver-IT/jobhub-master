import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericServiceDetailComponent } from './generic-service-detail.component';

describe('GenericServiceDetailComponent', () => {
  let component: GenericServiceDetailComponent;
  let fixture: ComponentFixture<GenericServiceDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericServiceDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericServiceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
