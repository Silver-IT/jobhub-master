import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenueGrowthGraphComponent } from './revenue-growth-graph.component';

describe('RevenueGrowthGraphComponent', () => {
  let component: RevenueGrowthGraphComponent;
  let fixture: ComponentFixture<RevenueGrowthGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevenueGrowthGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevenueGrowthGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
