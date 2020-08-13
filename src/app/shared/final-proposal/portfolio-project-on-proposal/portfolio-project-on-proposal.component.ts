import { Component, Input, OnInit } from '@angular/core';

import { Portfolio } from '../../../core/models/portfolio';

@Component({
  selector: 'job-hub-portfolio-project-on-proposal',
  templateUrl: './portfolio-project-on-proposal.component.html',
  styleUrls: ['./portfolio-project-on-proposal.component.scss']
})
export class PortfolioProjectOnProposalComponent implements OnInit {

  @Input() project: Portfolio;

  constructor() { }

  ngOnInit(): void {
  }

}
