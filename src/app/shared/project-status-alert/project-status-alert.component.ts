import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'job-hub-project-status-alert',
  templateUrl: './project-status-alert.component.html',
  styleUrls: ['./project-status-alert.component.scss']
})
export class ProjectStatusAlertComponent implements OnInit {

  @Input() type: string;
  @Input() text: string;
  @Input() title = 'Notification';

  constructor() { }

  ngOnInit(): void {
  }

}
