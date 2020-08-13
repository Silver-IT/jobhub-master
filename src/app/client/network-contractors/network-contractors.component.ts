import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { NetworkContractorService } from '../../core/services/network-contractor.service';
import { NetworkContractorDetailsDialogComponent } from './network-contractor-details-dialog/network-contractor-details-dialog.component';

@Component({
  selector: 'job-hub-network-contractors',
  templateUrl: './network-contractors.component.html',
  styleUrls: ['./network-contractors.component.scss']
})
export class NetworkContractorsComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private networkContractorService: NetworkContractorService,
  ) {
  }

  ngOnInit(): void {
  }

  async showContractorDetails(id: string) {
    const contractor = await this.networkContractorService.getContractorById(id).toPromise();
    this.dialog.open(NetworkContractorDetailsDialogComponent, {
      width: '570px',
      closeOnNavigation: true,
      data: contractor
    });
  }
}
