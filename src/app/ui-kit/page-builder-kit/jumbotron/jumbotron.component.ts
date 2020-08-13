import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'job-hub-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.scss']
})
export class JumbotronComponent implements OnInit {

  @Input() title: string;
  @Input() image: string;
  @Input() height = 380;

  constructor() { }

  ngOnInit(): void {
  }

}
