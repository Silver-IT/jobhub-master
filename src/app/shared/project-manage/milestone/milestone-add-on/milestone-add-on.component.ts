import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { MilestoneAddOnType } from '../../../../core/models/milestone';

@Component({
  selector: 'job-hub-milestone-add-on',
  templateUrl: './milestone-add-on.component.html',
  styleUrls: ['./milestone-add-on.component.scss']
})
export class MilestoneAddOnComponent implements OnInit {

  @Input() comment: string;
  @Input() amount: number;
  @Input() readonly: boolean;
  @Input() type: MilestoneAddOnType;

  @Output() remove = new EventEmitter<any>();

  MilestoneAddOnType = MilestoneAddOnType;

  constructor() { }

  ngOnInit(): void {
  }

}
