import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioProjectOnProposalComponent } from './portfolio-project-on-proposal.component';

describe('PortfolioProjectOnContractComponent', () => {
  let component: PortfolioProjectOnProposalComponent;
  let fixture: ComponentFixture<PortfolioProjectOnProposalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioProjectOnProposalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioProjectOnProposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
