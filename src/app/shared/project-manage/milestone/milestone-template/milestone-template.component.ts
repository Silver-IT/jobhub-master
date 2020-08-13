import { Component, Input } from '@angular/core';

import { Milestone } from '../../../../core/models/milestone';

@Component({
  selector: 'job-hub-milestone-template',
  templateUrl: './milestone-template.component.html',
  styleUrls: ['./milestone-template.component.scss']
})
export class MilestoneTemplateComponent {

  @Input() milestone: Milestone;

}
