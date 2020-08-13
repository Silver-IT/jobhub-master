import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { map } from 'rxjs/operators';

import { MarketingService } from '../../../core/services/marketing.service';
import { TimeUnit } from '../../../core/models/base';
import { chartColorSchema } from '../../../core/data/consts';
import { getTimeSlotsByUnit } from '../../../core/utils/time.util';
import { SessionCount } from '../../../core/models/marketing';
import { sortByProperty } from '../../../core/utils/array.util';

@Component({
  selector: 'job-hub-overall-traffic-panel',
  templateUrl: './overall-traffic-panel.component.html',
  styleUrls: ['./overall-traffic-panel.component.scss']
})
export class OverallTrafficPanelComponent implements OnInit {

  sessions;
  isLoading = false;
  colorSchema = chartColorSchema;
  xAxisTickFormattingFn = this.xAxisTickFormatting.bind(this);
  unit: TimeUnit = TimeUnit.Day;
  unitOptions = [
    {value: TimeUnit.Hour, label: 'Hour'},
    {value: TimeUnit.Day, label: 'Day'},
    {value: TimeUnit.Month, label: 'Month'},
  ];

  constructor(
    private marketingService: MarketingService,
    private datePipe: DatePipe
  ) {
  }

  ngOnInit(): void {
    this.loadOverview();
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

  async loadOverview() {
    try {
      this.isLoading = true;
      this.sessions = await this.marketingService.getSessionCount(this.unit).pipe(
        map((sessions: SessionCount[]) => {
          sessions = sortByProperty(sessions, 'date');
          const slots = getTimeSlotsByUnit(new Date(sessions[0].date), new Date(sessions[sessions.length - 1].date), this.unit);
          return [
            {
              name: 'Sessions',
              series: slots.map(slot => {
                const found = sessions.find(session => session.date === slot);
                return found ? { value: found.count, name: found.date } : {value: 0, name: slot};
              })
            }
          ];
        })
      ).toPromise();
    } catch (e) {
      console.log(e);
    } finally {
      this.isLoading = false;
    }
  }

}
