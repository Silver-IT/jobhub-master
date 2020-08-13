import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { AgmCoreModule } from '@agm/core';

import { MapService } from './map.service';
import { environment } from '../../../environments/environment';

import { MapComponent } from './map.component';
import { MapDialogComponent } from './map-dialog/map-dialog.component';
import { FullMapComponent } from './full-map/full-map.component';

@NgModule({
  declarations: [
    MapComponent,
    MapDialogComponent,
    FullMapComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    AgmCoreModule.forRoot({
      apiKey: environment.googleApiKey
    })
  ],
  providers: [
    MapService
  ],
  exports: [
    MapComponent,
    FullMapComponent
  ]
})
export class MapModule {
  static forRoot(): ModuleWithProviders<MapModule> {
    return {
      ngModule: MapModule,
      providers: [ MapService ]
    };
  }
}
