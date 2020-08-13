import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'job-hub-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {

  dates = [
    new Date('April 2020').toISOString(),
    new Date('March 2020').toISOString(),
    new Date('February 2020').toISOString(),
    new Date('January 2020').toISOString(),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
