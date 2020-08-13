import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractorTableComponent } from './contractor-table.component';

describe('ContractorTableComponent', () => {
  let component: ContractorTableComponent;
  let fixture: ComponentFixture<ContractorTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractorTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractorTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
