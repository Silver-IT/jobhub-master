import { Component, Input, OnInit } from '@angular/core';
import { NetworkContractor } from '../../../core/models/network-contractor';

@Component({
  selector: 'job-hub-network-contractor-item',
  templateUrl: './network-contractor-item.component.html',
  styleUrls: ['./network-contractor-item.component.scss']
})
export class NetworkContractorItemComponent implements OnInit {

  @Input() user: NetworkContractor;

  constructor() { }

  ngOnInit(): void {
  }

}
