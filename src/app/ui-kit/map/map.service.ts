import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MapsAPILoader } from '@agm/core';

import { MapDialogComponent } from './map-dialog/map-dialog.component';

@Injectable()
export class MapService {

  constructor(
    private dialog: MatDialog,
    private apiLoader: MapsAPILoader
  ) { }

  openMapDialog(latitude: number, longitude: number, address: string) {
    this.dialog.open(MapDialogComponent, {
      width: '960px',
      data: { latitude, longitude, address }
    });
  }

  getCurrentLocation(): Promise<{address: string, latitude: number, longitude: number}> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition((position: Position) => {
        if (position) {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          this.apiLoader.load().then(() => {
            const geocoder = new google.maps.Geocoder();
            const latlng = { lat, lng };

            geocoder.geocode({ location: latlng }, (results) => {
              if (results[0]) {
                resolve({address: results[0].formatted_address, latitude: lat, longitude: lng});
              } else {
                console.log('Current Location not found');
                resolve({address: '', latitude: null, longitude: null});
              }
            });
          });
        } else {
          resolve({address: '', latitude: null, longitude: null});
        }
      });
    });
  }
}
