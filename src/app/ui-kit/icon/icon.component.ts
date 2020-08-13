import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'job-hub-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {

  @Input() icon = '';
  @Input() width;
  @Input() color = 'dove-gray';

  constructor() { }

  ngOnInit(): void {
  }

  onMouseEnter() {
  }

  onMouseLeave() {
  }

}
