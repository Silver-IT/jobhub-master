import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

import { Project, ProjectDetail } from '../../core/models/project';
import { MilestoneStatus, MilestoneType } from '../../core/models/milestone';
import { FinalProposalStatus } from '../../core/models/final-proposal';
import { EstimateStatus } from '../../core/models/estimate';

@Pipe({
  name: 'projectStatusDescription'
})
export class ProjectStatusTextPipe implements PipeTransform {

  constructor(private datePipe: DatePipe) {
  }

  transform(project: ProjectDetail | Project): string {
    if (project.milestones && project.milestones.length) {
      if (project.milestones.length === 1) {
        // case: project brief -> continue to payment
        if (project.milestones[0].paidDate) {
          return 'Completed';
        }
        return 'Final Milestone Payment Pending';
      }
      project.milestones = project.milestones.sort((m1, m2) => m1.order > m2.order ? 1 : -1);
      const finalMilestone = project.milestones.find(m => m.order === MilestoneType.Final);
      if (finalMilestone.paidDate) {
        const holdMilestone = project.milestones.find(m => m.order === MilestoneType.Hold);
        if (holdMilestone) {
          if (holdMilestone.paidDate) {
            return 'Completed';
          }
          return 'Hold on Final Milestone';
        } else {
          return 'Completed';
        }
      }
      for (let i = 2; i >= 0; i--) {
        const milestone = project.milestones[i];
        if (milestone.status === MilestoneStatus.Released) { return `Milestone ${i + 1} Paid`; }
        if (i === 0) { return `Milestone 1 Payment Pending`; }
        if (project.milestones[i - 1].status === MilestoneStatus.Released &&
          (milestone.status === MilestoneStatus.ReleaseRequested || milestone.status === MilestoneStatus.Pending)
        ) { return `Milestone ${i + 1} Payment Pending`; }
      }
    }

    if (project.finalProposal) {
      if (project.finalProposal.status === FinalProposalStatus.Declined) { return 'Final Proposal Declined'; }
      return 'Final Proposal Sent';
    }

    if (project.estimate) {
      if (project.estimate.status === EstimateStatus.Declined) { return 'Estimate Declined'; }
      if (project.estimate.status === EstimateStatus.Pending) { return 'Reviewing Estimate'; }
      const siteVisitSchedule = project.estimate.siteVisitSchedules[0];
      if (!siteVisitSchedule) { return 'Reviewing Estimate'; }
      const siteVisitDate = new Date(siteVisitSchedule.from);
      if (siteVisitDate >= new Date()) { return `Site Visit Scheduled - ${this.datePipe.transform(siteVisitDate, 'MMM d, y')}`; }
      return 'Final Proposal Pending';
    }
    return 'Estimate Pending';
  }

}
