import { Component, OnInit } from '@angular/core';
import { getDayOfYear, startOfToday } from 'date-fns';

import { ROUTES } from '../../core/data/routes';
import { ScheduleService } from '../../core/services/schedule.service';
import { OverviewService } from '../../core/services/overview.service';
import { Schedule } from '../../core/models/schedule';
import { OverallStats } from '../../core/models/overview';
import { Paginator } from '../../core/models/paginator';
import { Project } from '../../core/models/project';
import { groupBy } from '../../core/utils/common.util';

@Component({
  selector: 'job-hub-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  ROUTES = ROUTES;

  overallStats: OverallStats = { applicants: 0, estimates: 0, projects: 0, ytd: 0, customers: 0 };
  schedules: Schedule[] = [];
  groupedSchedules: any = {};
  days: string[] = [];
  pendingProjects: Paginator<Project> = {data: [], count: 0};
  isOverallStatsLoading = false;
  isScheduleLoading = false;
  isPendingProjectsLoading = false;

  constructor(
    private scheduleService: ScheduleService,
    private overviewService: OverviewService,
  ) { }

  ngOnInit(): void {
    this.loadOverallStats();
    this.loadSchedules();
    this.loadPendingProjects();
  }

  private async loadSchedules() {
    try {
      this.isScheduleLoading = true;
      const from = startOfToday().toISOString();
      this.schedules = await this.scheduleService.query(from, null).toPromise();
      this.groupedSchedules = groupBy('date', this.schedules.map(x => ({...x, date: getDayOfYear(new Date(x.from))})));
      this.days = Object.keys(this.groupedSchedules);
    } catch (e) {
      console.log(e);
    } finally {
      this.isScheduleLoading = false;
    }
  }

  private async loadOverallStats() {
    try {
      this.isOverallStatsLoading = true;
      this.overallStats = await this.overviewService.getOverallStats().toPromise();
    } catch (e) {
      console.log(e);
    } finally {
      this.isOverallStatsLoading = false;
    }
  }

  async loadPendingProjects() {
    try {
      this.isPendingProjectsLoading = true;
      const res = await this.overviewService.getPendingProjects(this.pendingProjects.data.length, 5).toPromise();
      this.pendingProjects = {
        data: [...this.pendingProjects.data, ...res.data],
        count: res.count
      };
    } catch (e) {
      console.log(e);
    } finally {
      this.isPendingProjectsLoading = false;
    }
  }

}
