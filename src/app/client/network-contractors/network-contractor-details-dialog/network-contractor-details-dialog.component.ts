import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { NetworkContractor } from '../../../core/models/network-contractor';

@Component({
  selector: 'job-hub-network-contractor-details-dialog',
  templateUrl: './network-contractor-details-dialog.component.html',
  styleUrls: ['./network-contractor-details-dialog.component.scss']
})
export class NetworkContractorDetailsDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public contractor: NetworkContractor,
  ) {
  }

  ngOnInit(): void {
  }
}
