import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposalGeneralComponent } from './proposal-general.component';

describe('ProposalGeneralComponent', () => {
  let component: ProposalGeneralComponent;
  let fixture: ComponentFixture<ProposalGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProposalGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProposalGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
