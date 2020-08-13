import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'job-hub-pavers-vs-concret-item-card',
  templateUrl: './pavers-vs-concret-item-card.component.html',
  styleUrls: ['./pavers-vs-concret-item-card.component.scss']
})
export class PaversVsConcretItemCardComponent implements OnInit {

  @Input() cardImgUrl: string;
  @Input() cardTitle: string;
  @Input() cardDescription: string;

  constructor() { }

  ngOnInit(): void {
  }

}
