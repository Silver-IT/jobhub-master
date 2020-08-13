import { Component, OnInit } from '@angular/core';

import { OverviewService } from '../../../core/services/overview.service';
import { chartColorSchema } from '../../../core/data/consts';
import { ChartItem } from '../../../core/models/base';

@Component({
  selector: 'job-hub-revenue-by-type-graph',
  templateUrl: './revenue-by-type-graph.component.html',
  styleUrls: ['./revenue-by-type-graph.component.scss']
})
export class RevenueByTypeGraphComponent implements OnInit {

  statistic: ChartItem[] = [
    { name: 'Stripe', value: 0 },
    { name: 'ACH', value: 0 },
    { name: 'Cash', value: 0 },
  ];
  colors = chartColorSchema;
  isLoading = false;

  constructor(
    private overviewService: OverviewService
  ) { }

  ngOnInit(): void {
    this.loadRevenueByType();
  }

  private async loadRevenueByType() {
    try {
      this.isLoading = true;
      const res = await this.overviewService.getRevenueByType().toPromise();
      this.statistic = [
        { name: 'Stripe', value: res.stripe },
        { name: 'ACH', value: res.ach },
        { name: 'Cash', value: res.cash },
      ];
    } catch (e) {
      console.log(e);
    } finally {
      this.isLoading = false;
    }
  }

}
