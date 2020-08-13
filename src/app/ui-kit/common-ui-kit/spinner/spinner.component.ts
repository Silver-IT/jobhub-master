import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'job-hub-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  @Input() diameter = 40;

  constructor() { }

  ngOnInit(): void {
  }

}
