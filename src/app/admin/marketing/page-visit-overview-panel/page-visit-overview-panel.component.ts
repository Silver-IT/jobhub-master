import { Component, OnInit } from '@angular/core';

import { MarketingService } from '../../../core/services/marketing.service';
import { PageVisitOverview } from '../../../core/models/marketing';
import { OptionLabelPipe } from '../../../ui-kit/pipes/option-label.pipe';
import { chartColorSchema } from '../../../core/data/consts';

enum ViewOption {
  List = 'LIST',
  Graph = 'Graph',
}

@Component({
  selector: 'job-hub-page-visit-overview-panel',
  templateUrl: './page-visit-overview-panel.component.html',
  styleUrls: ['./page-visit-overview-panel.component.scss']
})
export class PageVisitOverviewPanelComponent implements OnInit {

  isLoading = false;
  pageVisits: PageVisitOverview[] = [];
  colors = chartColorSchema;
  statistic: {value: number, name: string}[] = [];

  view: ViewOption = ViewOption.List;
  ViewOption = ViewOption;
  viewOptions = [{value: ViewOption.List, label: 'List'}, {value: ViewOption.Graph, label: 'Graph'}];

  constructor(
    private marketingService: MarketingService,
    private optionLabelPipe: OptionLabelPipe
  ) { }

  ngOnInit(): void {
    this.loadOverview();
  }

  async loadOverview() {
    try {
      this.isLoading = true;
      this.pageVisits = await this.marketingService.getPageVisitOverview().toPromise();
      this.statistic = this.pageVisits.map(x => ({
        value: Number(x.count),
        name: x.sub ? this.optionLabelPipe.transform(x.page) + ' - ' + this.optionLabelPipe.transform(x.sub) : this.optionLabelPipe.transform(x.page)
      }));
    } catch (e) {
      console.log(e);
    } finally {
      this.isLoading = false;
    }
  }

}
