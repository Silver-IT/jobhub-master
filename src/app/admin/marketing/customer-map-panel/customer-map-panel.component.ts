import { Component, OnInit } from '@angular/core';

import { MarketingService } from '../../../core/services/marketing.service';
import { Project } from '../../../core/models/project';
import { MapMarker } from '../../../core/models/base';

@Component({
  selector: 'job-hub-customer-map-panel',
  templateUrl: './customer-map-panel.component.html',
  styleUrls: ['./customer-map-panel.component.scss']
})
export class CustomerMapPanelComponent implements OnInit {

  isLoading = false;
  markers: MapMarker<Project>[] = [];

  constructor(
    private marketingService: MarketingService
  ) { }

  ngOnInit(): void {
    this.loadProjects();
  }

  private async loadProjects() {
    try {
      this.isLoading = true;
      const res = await this.marketingService.getProjects().toPromise();
      this.markers = res.map(x => ({ latitude: x.latitude, longitude: x.longitude, address: x.address, meta: x as Project }));
    } catch (e) {
      console.log(e);
    } finally {
      this.isLoading = false;
    }
  }

}
