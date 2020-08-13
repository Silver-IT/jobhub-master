import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenueByTypeGraphComponent } from './revenue-by-type-graph.component';

describe('RevenueByTypeGraphComponent', () => {
  let component: RevenueByTypeGraphComponent;
  let fixture: ComponentFixture<RevenueByTypeGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevenueByTypeGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevenueByTypeGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
