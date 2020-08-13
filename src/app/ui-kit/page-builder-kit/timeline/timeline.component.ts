import { Component, Input, OnInit } from '@angular/core';
import { Timeline } from '../../../core/models/timeline';

@Component({
  selector: 'job-hub-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  @Input() timeline: Timeline[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
