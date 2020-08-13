import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Lead } from '../../core/models/lead';

@Component({
  selector: 'job-hub-lead-detail',
  templateUrl: './lead-detail.component.html',
  styleUrls: ['./lead-detail.component.scss']
})
export class LeadDetailComponent implements OnInit {

  lead: Lead;

  constructor(
    private route: ActivatedRoute
  ) {
    this.lead = this.route.snapshot.data.lead;
  }

  ngOnInit(): void {
  }

}
