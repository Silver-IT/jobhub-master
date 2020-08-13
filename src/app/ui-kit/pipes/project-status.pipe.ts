import { Pipe, PipeTransform } from '@angular/core';

import { Project, ProjectDetail, ProjectStatus } from '../../core/models/project';
import { MilestoneStatus } from '../../core/models/milestone';
import { FinalProposalStatus } from '../../core/models/final-proposal';
import { EstimateStatus } from '../../core/models/estimate';

@Pipe({
  name: 'projectStatus'
})
export class ProjectStatusPipe implements PipeTransform {

  transform(project: ProjectDetail | Project): ProjectStatus {
    if (project.milestones) {
      const firstMilestone = project.milestones.find(x => x.order === 0);
      const lastMilestone = project.milestones.find(x => x.order === 2);
      if (lastMilestone && lastMilestone.status === MilestoneStatus.Released) {
        return ProjectStatus.ProjectCompleted;
      }
      if (firstMilestone && firstMilestone.status !== MilestoneStatus.Pending) {
        return ProjectStatus.ProjectScheduled;
      }
    }

    if (project.finalProposal) {
      switch (project.finalProposal.status) {
        case FinalProposalStatus.Declined:
          return ProjectStatus.FinalProposalDeclined;
        case FinalProposalStatus.Accepted:
          return ProjectStatus.FinalProposalAccepted;
        case FinalProposalStatus.Pending:
          return ProjectStatus.ReviewFinalProposal;
      }
    }

    if (project.estimate) {
      switch (project.estimate.status) {
        case EstimateStatus.Declined:
          return ProjectStatus.EstimateDeclined;
        case EstimateStatus.SiteVisitScheduled:
          return project.siteVisitPassed ? ProjectStatus.CompletedSiteVisit : ProjectStatus.SiteVisitScheduled;
        case EstimateStatus.Pending:
          return ProjectStatus.ReviewEstimate;
      }
    }

    return ProjectStatus.ConsultationScheduled;
  }

}
