import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { map } from 'rxjs/operators';

import { OverviewService } from '../../../core/services/overview.service';
import { chartColorSchema } from '../../../core/data/consts';
import { TimeUnit } from '../../../core/models/base';
import { getTimeSlotsByUnit } from '../../../core/utils/time.util';
import { Income } from '../../../core/models/overview';
import { sortByProperty } from '../../../core/utils/array.util';

@Component({
  selector: 'job-hub-revenue-growth-graph',
  templateUrl: './revenue-growth-graph.component.html',
  styleUrls: ['./revenue-growth-graph.component.scss']
})
export class RevenueGrowthGraphComponent implements OnInit {

  isLoading = false;
  colorSchema = chartColorSchema;
  xAxisTickFormattingFn = this.xAxisTickFormatting.bind(this);
  unit: TimeUnit = TimeUnit.Day;
  revenue: { name: string, series: {name: string, value: number}[] }[] = [];

  constructor(
    private overviewService: OverviewService,
    private datePipe: DatePipe
  ) { }

  ngOnInit(): void {
    this.loadOverviewStats();
  }

  private async loadOverviewStats() {
    try {
      this.isLoading = true;
      this.revenue = await this.overviewService.getRevenueByDate().pipe(
        map((incomes: Income[]) => {
          incomes = sortByProperty(incomes, 'date');
          const slots = getTimeSlotsByUnit(new Date(incomes[0].date), new Date(incomes[incomes.length - 1].date), this.unit);
          let series = slots.map(slot => {
            const found = incomes.find(income => new Date(income.date).getTime() === new Date(slot).getTime());
            return found ? { value: found.stripe + found.ach + found.cash, name: slot } : { value: 0, name: slot };
          });
          series = series.reduce((a, b) => ([...a, { name: b.name, value: b.value + (a.length ? a[a.length - 1].value : 0) }]), []);
          return [{ name: 'Revenue', series }];
        })
      ).toPromise();
    } catch (e) {

    } finally {
      this.isLoading = false;
    }
  }

  xAxisTickFormatting(value) {
    switch (this.unit) {
      case TimeUnit.Month:
        return this.datePipe.transform(value, 'MMM yyyy');
      case TimeUnit.Day:
        return this.datePipe.transform(value, 'MMM dd');
      case TimeUnit.Hour:
        // return this.datePipe.transform(value, 'dd hh:mm a');
        return '';
    }
  }

}
