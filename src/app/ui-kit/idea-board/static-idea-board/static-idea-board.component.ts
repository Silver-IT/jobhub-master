import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'job-hub-static-idea-board',
  templateUrl: './static-idea-board.component.html',
  styleUrls: ['./static-idea-board.component.scss']
})
export class StaticIdeaBoardComponent implements OnInit {

  @Input() ideas;
  @Input() hasBeforeAfter;

  constructor() { }

  ngOnInit(): void {
  }

}
