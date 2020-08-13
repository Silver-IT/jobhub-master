import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'job-hub-information-tooltip',
  templateUrl: './information-tooltip.component.html',
  styleUrls: ['./information-tooltip.component.scss']
})
export class InformationTooltipComponent implements OnInit {

  @Input() placement = 'top';
  @Input() content = '';

  constructor() { }

  ngOnInit(): void {
  }

}
