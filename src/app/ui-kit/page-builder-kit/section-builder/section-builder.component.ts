import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'job-hub-section-builder',
  templateUrl: './section-builder.component.html',
  styleUrls: ['./section-builder.component.scss']
})
export class SectionBuilderComponent implements OnInit {

  @Input() header: string;
  @Input() title: string;
  @Input() description: string;
  @Input() isWhite = true;
  @Input() hasBottomPadding = true;
  @Input() customClass = '';
  @Input() align = 'center';
  @Input() container = true;

  constructor() { }

  ngOnInit(): void {
  }

}
